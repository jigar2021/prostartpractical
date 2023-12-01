import { defineStore } from 'pinia';

export const useStore = defineStore('app', {
  state: () => ({
    searchQuery: '',
    results: [],
  }),
  actions: {
    setSearch(query) {
      this.searchQuery = query;
    },
    setResults(results) {
      this.results = results;
    },
  },
});