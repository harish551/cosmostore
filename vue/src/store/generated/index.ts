// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Harish551CosmostoreHarish551CosmostoreMarket from './harish551/cosmostore/harish551.cosmostore.market'
import Harish551CosmostoreHarish551CosmostoreStore from './harish551/cosmostore/harish551.cosmostore.store'


export default { 
  Harish551CosmostoreHarish551CosmostoreMarket: load(Harish551CosmostoreHarish551CosmostoreMarket, 'harish551.cosmostore.market'),
  Harish551CosmostoreHarish551CosmostoreStore: load(Harish551CosmostoreHarish551CosmostoreStore, 'harish551.cosmostore.store'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
