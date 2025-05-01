# Acrool React Component CLI


<a href="https://github.com/acrool/acrool-react-component-cli" title="Acrool React Component CLI - Fast custom img for Reactjs">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-component-cli/refs/heads/main/public/og.png" alt="Acrool React Component CLI Logo"/>
</a>

<p align="center">
    Quickly create React components using CLI
</p>

<div align="center">


[![NPM](https://img.shields.io/npm/v/@acrool/react-component-cli.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-component-cli)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-component-cli?style=for-the-badge)](https://github.com/acrool/@acrool/react-component-cli/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-component-cli?style=for-the-badge)](https://github.com/acrool/react-component-cli/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-component-cli.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-component-cli)
[![npm](https://img.shields.io/npm/dt/@acrool/react-component-cli.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-component-cli)

</div>

## Features

- Quickly create React components using CLI
- Supports atomic design structure (atoms, molecules, organisms)
- Configurable component paths

## Install

```bash
yarn add @acrool/react-component-cli
```

## Usage

Create configuration file `.acrool-react-component` in your project root:

```ts
module.exports = {
    atom: 'src/components/atoms',
    molecule: 'src/components/molecule',
    organize: 'src/components/organize',
    form: 'src/components/form',
};
```

run pull

```bash
# type: atom|molecule|organize|form
npx acrool-react-component generate -t {type} -n {componentName}
```


## Build

```bash
yarn build && npx acrool-react-component generate -n TitleBlock
```


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)
