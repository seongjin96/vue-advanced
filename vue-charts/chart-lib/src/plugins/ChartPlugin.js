import { Chart, registerables } from "chart.js";
Chart.register(...registerables)

export default {
  install(app) {
    // Vue2
    // Vue.prototype.$_Chart = Chart;

    // Vue3
    app.config.globalProperties.$_Chart = Chart;

    // // BarChart.vue
    // this.$_Chart
    //
    // //LineChart.vue
    // this.$_Chart
  }
}