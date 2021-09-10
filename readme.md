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
del ./palm-uvr/.yarn.lock
```

```sh
yarn add typescript@4.1.2
```

