# Rosie ![Node.js CI](https://github.com/indahousi/rosie/workflows/Node.js%20CI/badge.svg)

![logo](https://cdn2.iconfinder.com/data/icons/robot-29/100/maid-robot-1-robot-vintage-retro-old-fashioned-rosie-the-jetsons-cleaner-512.png)

## Context

Rosie is the Jetson family's robotic maid and housekeeper.

Marketplace for service indaHousi.

## Documentation

_Production:_ [https://rosie.onhousi.com/docs/](https://api.dev.local/docs/)

_Staging:_ [http://rosie-staging.onhousi.com/docs/](https://api-sandbox.dev.local/docs/)

_Local:_ [http://localhost:3000/docs/](http://localhost:3000/docs/)

## Install

**[Node Version Manager](https://github.com/nvm-sh/nvm) is recommend to manage Node.js versions**

**It always recommended to use latest LTS version of Node.js.**

every project uses it's own version of Node.js, to use the version that the project requires, type the following command:

```shell script
nvm use 
```

And install project dependencies:

```shell script
pnpm install
```

Copy and rename the file `.env.example` to`.env` and set the env variables according to your infra

## Run

Execute:

```shell script
pnpm run build
pnpm start
```

## Run development

Execute:

```shell script
pnpm run dev
```

## Unit Tests

Execute:

```shell script
pnpm test
```

## Coverage

Execute:

```shell script
pnpm run test:cov
```

## Release

This project uses [Semantic Versioning](http://semver.org/)

To make a release use the following command:

```shell script
pnpm version [ MAJOR | MINOR | PATCH ]
```

Tags:

1. **MAJOR** version when you make incompatible API changes,
2. **MINOR** version when you add functionality in a backwards compatible manner, and
3. **PATCH** version when you make backwards compatible bug fixes.

After running the command, you can simply push the tags to github with the command `git push && git push --tags`
