import { defineStore } from 'pinia'
import api from '@/api'

export const useSearchStore = defineStore('search', {
  state: () => {
    return {
      jobs: []
    }
  },

  actions: {
    async findJobs() {
      return api.get('search', {
        params: {
          query: 'Python developer in Texas USA',
          num_pages: 1
        }
      })
    }
  },
})