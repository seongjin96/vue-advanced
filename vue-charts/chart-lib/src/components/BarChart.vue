<template>
  <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
</template>

<script>
  // import { Chart, registerables } from "chart.js";
  // Chart.register(...registerables)

  export default {
    props: ['propsdata'],
    mounted() {
      // const ctx = document.getElementById("barChart");
      new this.$_Chart(this.$refs.barChart, {
        type: "bar",
        labels: "# of Votes",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: this.propsdata
        },
        options: {
          onClick: function () {
            this.$emit('refresh:chart');
          }
        }
      })
    }
  }
</script>

<style scoped>

</style>