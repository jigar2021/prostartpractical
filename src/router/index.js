import { createRouter, createWebHistory } from 'vue-router';
import Search from '../components/Search.vue'
import List from '../components/List.vue'


const routes = [
  { 
    path: '/', 
    component: Search,
    name: 'search' 
  },
  { 
    path: '/list', 
    component: List,
    name: 'list'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
