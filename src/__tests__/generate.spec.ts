import {spawn} from 'child_process';
import fs from 'fs';
import path from 'path';

describe('generate', () => {
    const cli = path.join(__dirname, '../../dist/bin/cli.js');
    const testComponents = {
        atom: 'TestAtom',
        molecule: 'TestMolecule',
        organize: 'TestOrganize',
        form: 'TestForm'
    };

    const timeout = 30 * 1000;

    afterAll(async () => {
        // 测试结束后删除所有生成的文件
        for (const [type, name] of Object.entries(testComponents)) {
            const componentPath = path.join(__dirname, `../../sandbox/components/${type}s/${name}`);
            if (fs.existsSync(componentPath)) {
                fs.rmSync(componentPath, {recursive: true, force: true});
            }
        }
    }, timeout);

    it('should generate atom component', (done) => {
        const cmd = spawn('node', [
            cli,
            'generate',
            '-t',
            'atom',
            '-n',
            testComponents.atom
        ]);

        let output = '';
        cmd.stdout.on('data', (data) => {
            output += data.toString();
        });

        cmd.on('close', async (code) => {
            try {
                expect(code).toBe(0);
                const componentPath = path.join(__dirname, `../../sandbox/components/atoms/${testComponents.atom}`);
                expect(fs.existsSync(componentPath)).toBe(true);
                expect(fs.existsSync(path.join(componentPath, `${testComponents.atom}.tsx`))).toBe(true);
                expect(fs.existsSync(path.join(componentPath, 'types.ts'))).toBe(true);
                expect(fs.existsSync(path.join(componentPath, 'index.ts'))).toBe(true);
                done();
            } catch (error) {
                done(error);
            }
        });
    }, timeout);

    it('should generate molecule component', (done) => {
        const cmd = spawn('node', [
            cli,
            'generate',
            '-t',
            'molecule',
            '-n',
            testComponents.molecule
        ]);

        let output = '';
        cmd.stdout.on('data', (data) => {
            output += data.toString();
        });

        cmd.on('close', async (code) => {
            try {
                expect(code).toBe(0);
                const componentPath = path.join(__dirname, `../../sandbox/components/molecule/${testComponents.molecule}`);
                expect(fs.existsSync(componentPath)).toBe(true);
                expect(fs.existsSync(path.join(componentPath, `${testComponents.molecule}.tsx`))).toBe(true);
                expect(fs.existsSync(path.join(componentPath, 'types.ts'))).toBe(true);
                expect(fs.existsSync(path.join(componentPath, 'index.ts'))).toBe(true);
                done();
            } catch (error) {
                done(error);
            }
        });
    }, timeout);

    it('should generate organize component', (done) => {
        const cmd = spawn('node', [
            cli,
            'generate',
            '-t',
            'organize',
            '-n',
            testComponents.organize
        ]);

        let output = '';
        cmd.stdout.on('data', (data) => {
            output += data.toString();
        });

        cmd.on('close', async (code) => {
            try {
                expect(code).toBe(0);
                const componentPath = path.join(__dirname, `../../sandbox/components/organize/${testComponents.organize}`);
                expect(fs.existsSync(componentPath)).toBe(true);
                expect(fs.existsSync(path.join(componentPath, `${testComponents.organize}.tsx`))).toBe(true);
                expect(fs.existsSync(path.join(componentPath, 'types.ts'))).toBe(true);
                expect(fs.existsSync(path.join(componentPath, 'index.ts'))).toBe(true);
                done();
            } catch (error) {
                done(error);
            }
        });
    }, timeout);
});
