<template>
  <div class="show">
    <h2><b>Titles</b></h2>
    <template v-if="title.length">
      <ul>
        <li v-for="(result, index) in title" :key="index">
          {{ result.title }}
        </li>
      </ul>
    </template>
    <template v-else>
      <p>No Data Found...</p>
    </template>
  </div>
</template>

<script>
import { useStore } from "../store";

import _ from "lodash";
export default {
  setup() {
    const store = useStore();

    const title = _.take(store.results, 10);

    return { title };
  },
};
</script>

<style scoped>
.show {
  margin-top: 30px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}
</style>
