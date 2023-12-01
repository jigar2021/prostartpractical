<template>
    <div class="home">
    <h2><b>Search for Books</b></h2>
    <form @submit.prevent="search" class="search-form">
      <input v-model="searchQuery" placeholder="Enter a book title" class="search-input" type="search" />
      <button type="submit" class="btnsubmit">Submit</button>
    </form>
  </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useStore } from '../store';
  import axios from 'axios';
  import router from '../router'
  
  export default {
    setup() {
      const store = useStore();
      const searchQuery = ref('');
    
      const search = async () => {
        const response = await axios.get('https://openlibrary.org/search.json', {
          params: { q: searchQuery.value },
        });
  
        const results = response.data.docs;

        store.setResults(results);
  
        router.push('/list');
      };
  
      return { searchQuery, search };
    },
  };
  </script>
  
  <style scoped>
  .home {
  text-align: center;
  margin-top: 60px;
}
.search-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-input {
  padding: 10px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 300px;
}
.btnsubmit {
  padding: 10px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  width: 300px;
  transition: background-color 0.3s ease;
}
.btnsubmit:hover {
  background-color: #45a049;
}
</style>