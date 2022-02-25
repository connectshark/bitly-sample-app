import { defineStore } from 'pinia'

export const useLinkStore = defineStore('link', {
  state: () => ({
    token: import.meta.env.VITE_TOKEN,
    guid: ''
  }),
  getters: {
  },
  actions: {
  }
})
