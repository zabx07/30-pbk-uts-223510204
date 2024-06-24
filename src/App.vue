<template>
  <div>
    <div class="button-container">
      <router-link to="/todos">
        <button>Todos</button>
      </router-link>
      <router-link to="/posts">
        <button>Posts</button>
      </router-link>
      <router-link to="/albums">
        <button>Albums</button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.button-container {
  text-align: center;
  margin: 20px;
}

button {
  margin: 5px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
