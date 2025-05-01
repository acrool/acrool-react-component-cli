#!/usr/bin/env node

import {Command} from 'commander';

import {main as generate} from '../generate.js';

const program = new Command();

program
    .version('1.0.0')
    .command('generate')
    .option('-t, --type <type>', 'Component type', 'atom')
    .option('-n, --name <name>', 'Component name')
    .action(generate);

// program
//     .command('lossySquash')
//     .option('-t, --saveFile <path>', 'Target file path')
//     .action(runLossySquash);

program.parse(process.argv);

const command = program.args[0];
if (!['generate'].includes(command)) {
    console.error('Invalid command');
    process.exit(1);
}
