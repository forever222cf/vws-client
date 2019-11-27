import localforage from 'localforage'
import env from '@/utils/env'

let storeConfig = {
  driver: [
    localforage.INDEXEDDB,
    localforage.LOCALSTORAGE
  ],
  name: 'vws-storage'
}

localforage.config(storeConfig)

export default localforage
