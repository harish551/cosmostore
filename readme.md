# cosmostore
**cosmostore** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

## Get started

```
starport chain serve
```
`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

## Instructions 

  ### 1. Add Item to store
  ```
  cosmostored tx store mint-item <name> <description> --from alice
  ```
  `name` - name of the item
  
  `description` - description of item

  ### 2. List Item in Marketplace
  ```
   cosmostored tx market list-item  <item-id>  <price> --from alice
  ```
  `item-id` - id of the item
  
  `price`: - price for item (e.g: 100stake or 100token)
 
  ### 3. Buy Item From Marketplace
  ```
  cosmostored tx market buy-item <market-item-id> <price> --from bob
  ```
  `market-item-id`: id of item in marketplace
  
  `price`: buying price of item (should match with market price)

CLI Queries:

  ```
  cosmostored q store list-item
  cosmostored q market list-market-item
  ```

API endpoints: 
  `show items in store:` http://localhost:1317/harish551/cosmostore/store/item
  
  `marketplace items:` http://localhost:1317/harish551/cosmostore/market/marketItem

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).

### Launch

To launch your blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

### Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.starport.network/harish551/cosmostore@latest! | sudo bash
```
`harish551/cosmostore` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Starport Docs](https://docs.starport.network)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/cosmosnetwork)
