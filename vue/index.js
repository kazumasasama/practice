/* global Vue */

var App = {
  data() {
    return {
      message: "Hello from JavaScript!",
      name: "",
    };
  },
  methods: {
    changeMessage() {
      this.message = "Bye from JavaScript!";
    },
  }
};

Vue.createApp(App).mount('#app');