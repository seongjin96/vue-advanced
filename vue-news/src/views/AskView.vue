<!--<template>-->
<!--  <div>-->
<!--    <list-item></list-item>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--// import { mapState, mapGetters } from 'vuex';-->
<!--import ListItem from "../components/ListItem.vue";-->
<!--import bus from "@/utils/bus";-->

<!--export default {-->
<!--  components: {-->
<!--    ListItem,-->
<!--  },-->
<!--  // computed: {-->
<!--  //   ...mapGetters(-->
<!--  //     // {-->
<!--  //     //   askItems: 'fetchedAsk'-->
<!--  //     // }-->
<!--  //     [-->
<!--  //       'fetchedAsk'-->
<!--  //     ]-->
<!--  //   )-->
<!--  //-->
<!--  //   // #2-->
<!--  //   // ...mapState({-->
<!--  //   //   fetchedAsk: state => state.ask-->
<!--  //   // })-->
<!--  //-->
<!--  //   // #1-->
<!--  //   // ask() {-->
<!--  //   //   return this.$store.state;-->
<!--  //   // }-->
<!--  // },-->
<!--  created() {-->
<!--    bus.emit('start:spinner');-->
<!--    setTimeout(() => {-->
<!--      this.$store.dispatch('FETCH_ASK')-->
<!--          .then(() => {-->
<!--            bus.emit('end:spinner');-->
<!--          })-->
<!--          .catch((error) => {-->
<!--            console.log(error);-->
<!--          });-->
<!--    }, 3000);-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->

<!--</style>-->
<template></template>