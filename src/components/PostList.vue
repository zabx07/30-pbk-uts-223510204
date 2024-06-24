<template>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id" class="post-item">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style>
.post-list {
  list-style-type: none;
  padding: 0;
}

.post-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-item h3 {
  margin: 0 0 10px;
  font-size: 1.5em;
  color: #333;
}

.post-item p {
  margin: 0;
  font-size: 1em;
  color: #666;
}
</style>
