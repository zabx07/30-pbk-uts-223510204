<template>
  <div>
    <div class="button-container">
      <button @click="showView('todos')">Todos</button>
      <button @click="showView('posts')">Posts</button>
    </div>
    <div v-if="currentView === 'todos'">
      <Todos />
    </div>
    <div v-if="currentView === 'posts'">
      <Posts />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import Posts from './components/Posts.vue'

export default {
  data() {
    return {
      currentView: null
    }
  },
  methods: {
    showView(view) {
      this.currentView = view
    }
  },
  components: {
    Todos,
    Posts
  }
}
</script>

<style>
.button-container {
  text-align: center;
  margin: 20px;
}

button {
  margin: 5px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
