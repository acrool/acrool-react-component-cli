import fs from 'fs';
import path from 'path';

export function generateComponentFiles(componentName: string, savePath: string) {
    // 创建组件文件夹
    const componentDir = path.join(path.dirname(savePath), componentName);
    if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir, {recursive: true});
    }

    // 生成组件文件
    const componentContent = `
import {FCProps} from '@acrool/react-grid';
import styled from 'styled-components';

import {I${componentName}Props} from './types';

interface IProps extends FCProps, I${componentName}Props {
}

/**
 * ${componentName}
 */
const ${componentName} = ({
    className,
    style,
}: IProps) => {
    return <${componentName}Root
        className={className}
        style={style}
    >
        ${componentName}
    </${componentName}Root>;
};

export default ${componentName};

const ${componentName}Root = styled.div\`
\`;
`;

    // 生成类型文件
    const typesContent = `export interface I${componentName}Props {
}
`;

    // 生成索引文件
    const indexContent = `export {default} from './${componentName}';
export type * from './types';
`;

    // 写入文件
    fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentContent);
    fs.writeFileSync(path.join(componentDir, 'types.ts'), typesContent);
    fs.writeFileSync(path.join(componentDir, 'index.ts'), indexContent);
}

