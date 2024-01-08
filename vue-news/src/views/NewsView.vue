<template>
  <div>
    <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by
        <!-- <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link> -->
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js';

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');

    // fetchNewsList()
    //   .then(response => {
    //     console.log(response);

    //     this.users = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
}
</script>

<style>

</style>