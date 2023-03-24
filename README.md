# The Internet-Crema 🌐

[![Build Status](https://github.com/cremalab/crema-app-web/workflows/CI/badge.svg)](https://github.com/cremalab/crema-app-web/actions)
[![codecov](https://codecov.io/gh/cremalab/crema-app-web/branch/develop/graph/badge.svg)](https://codecov.io/gh/cremalab/crema-app-web)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**🧰 Tools Used**

- [Vite](https://vitejs.dev/) bundler and dev env (replaces Create React App)
- [Cypress](https://www.cypress.io) for end-to-end testing
- [ESLint](https://eslint.org) for code linting
- [Hygen](http://www.hygen.io) for component and util generators
- [Jest](https://jestjs.io) for unit tests
- [Loki](https://loki.js.org) for visual testing
- [Prettier](https://prettier.io) for code formatting (via ESLint plugin)
- [Storybook](https://storybook.js.org) for component playground (and used by Loki)
- [TypeScript](http://www.typescriptlang.org) for Static Typing in JavaScript ([Learn](http://www.typescriptlang.org/docs/handbook/basic-types.html))

## 🏗 Setup

1. [Install Node/NPM](https://nodejs.org/en/)
2. [Install NVM](https://github.com/creationix/nvm#installation-and-update) (Node Version Manager)
3. `nvm install 'lts/*' && nvm use`
4. `npm i` (install project dependencies)
5. [Install the ESLint plugin for ~~your editor~~ VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
6. Enable "Auto-Fix on Save" in `settings.json`:
