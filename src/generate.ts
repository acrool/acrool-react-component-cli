import fs from 'fs';
import path from 'path';

import {logger} from './logger.js';
import {generateComponentFiles} from './template/generateComponentFiles.js';
import {
    IConfigModule,
    IGenerate,
} from './types';


export async function main(args: IGenerate) {

    try {
        // 讀取配置文件
        const configPath = path.join(process.cwd(), '.acrool-react-component.cjs');
        if (!fs.existsSync(configPath)) {
            throw new Error('.acrool-react-component.cjs configuration file not found');
        }

        const configModule = await import(`file://${configPath}`);
        const config: IConfigModule = configModule.default;

        const {atom, molecule, organize} = config;

        let savePath = '';

        switch (args.type){
        case 'atom':
            if (!atom) {
                throw new Error('The configuration file is missing the required `atom` field');
            }

            savePath = path.join(process.cwd(), atom, `${args.name}.tsx`);
            break;
        case 'molecule':
            if (!molecule) {
                throw new Error('The configuration file is missing the required `molecule` field');
            }
            savePath = path.join(process.cwd(), molecule, `${args.name}.tsx`);
            break;
        case 'organize':
            if (!organize) {
                throw new Error('The configuration file is missing the necessary `organize` field');
            }

            savePath = path.join(process.cwd(), organize, `${args.name}.tsx`);
            break;
        }

        // 生成组件文件
        generateComponentFiles(args.name, savePath);
        logger.success(`The component has been successfully generated to ${path.join(path.dirname(savePath), args.name)}`);

    } catch (e) {
        if(e instanceof Error){
            logger.error(e.message);
        }
    }
}
