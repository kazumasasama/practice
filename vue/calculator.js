/* global Vue */

var App = {
  data: function() {
    return {
      message: "Hello Vue!",
      num1: 0,
      num2: 0,
      num3: 0,
      fruits: ["apple"],
      newFruit: "",
    };
  },
  methods: {
    addFruit() {
      this.fruits.push(this.newFruit);
    },
  }
};

Vue.createApp(App).mount('#app');