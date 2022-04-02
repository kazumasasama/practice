/* global Vue, axios */

var App = {
  data() {
    return {
      message: "Hello Vue!",
      todos: [],
    };
  },
  created() {
    this.loadTodos();
  },
  methods: {
    loadTodos() { 
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
          console.log(response.data);
          this.todos = response.data;
        });
    }
  }
};

Vue.createApp(App).mount('#app');