# Acrool React Component CLI


<a href="https://github.com/acrool/acrool-react-component-cli" title="Acrool React Component CLI - Quickly create React components using CLI">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-component-cli/main/public/og.png" alt="Acrool React Component CLI Logo"/>
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

run generate

```bash
# type: atom|molecule|organize|form
npx acrool-react-component generate -t {type} -n {componentName}
```


--- 

Here is a faster way
your can add in your package.json

```json
{
  "scripts": {
    "dev": "next dev",
    "comp": "acrool-react-component generate"
  }
}
```
fast run

```bash
yarn comp -n TitleBlock

# ✔ The component has been successfully generated to ./src/components/atoms/TitleName
# ✨  Done in 0.12s.
```



## Develop

build

```bash
yarn build && npx acrool-react-component generate -n TitleBlock
```


## License

MIT © [Acrool](https://github.com/acrool) & [Imagine](https://github.com/imagine10255)
