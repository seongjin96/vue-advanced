<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex';
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  }
  // computed: {
  //   ...mapGetters(
  //     // {
  //     //   askItems: 'fetchedAsk'
  //     // }
  //     [
  //       'fetchedAsk'
  //     ]
  //   )
  //
  //   // #2
  //   // ...mapState({
  //   //   fetchedAsk: state => state.ask
  //   // })
  //
  //   // #1
  //   // ask() {
  //   //   return this.$store.state;
  //   // }
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // }
}
</script>

<style>

</style>