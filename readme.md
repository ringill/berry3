# vscode-plugin
- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
- https://marketplace.visualstudio.com/items?itemName=whosydd.stylelint-config


# cmd

```sh
npm install yarn -g
 ```

 ```sh
 mkdir berry
 ```

 ```sh
 cd berry
 ```

 ```sh
 yarn init -y
 ```
 
 ```sh
 yarn create react-app palm-uvr --template typescript
 ```

 ```sh
del ./palm-uvr/.yarn.lock
```
 
```sh
 mkdir palm-core
 ```

 ```sh
 cd palm-core
 ```

 ```sh
 yarn init -y
 ```

```sh
 cd ..
 ```

berry/package.json
 ```json
 "workspaces": [
   "palm-core",
   "palm-uvr"
 ]
 ```

```sh
yarn set version berry
```

```sh
yarn set version latest
```

```sh
yarn plugin import workspace-tools
```

berry/.yarnrc.yml
```yml
nodeLinker: "pnp"
pnpMode: "strict"
```

```sh
yarn
```

```sh
yarn add typescript@4.1.2
```

```sh
yarn add eslint@7.32.0
```

```sh
yarn add prettier eslint-plugin-prettier eslint-config-prettier
```

StylelintConfig for VS Code

Generate .stylelint.rc

```sh
yarn add stylelint stylelint-config-standard stylelint-config-recess-order stylelint-config-prettier
```

```sh
yarn add postcss-html postcss-syntax

berry/.vscode/settings.json
```json  
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
```

```sh
yarn dlx @yarnpkg/sdks vscode
```

berry/.eslintignore
```
/.vscode
/.git
node_modules
```

berry/.eslintrc.json
```json
{
  "env": {
      "browser": true
  },
  "parserOptions": { "ecmaVersion": 6 },
  "rules": {
      // Override our default settings just for this directory
      "eqeqeq": "warn",
      "strict": "off",
      "no-magic-numbers": "error"
  }
}
```

berry/.vscode/settings.json
```json
"editor.formatOnSave": false,
"[javascript]": {
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[typescript]": {
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[typescriptreact]": {
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"eslint.format.enable": true
```