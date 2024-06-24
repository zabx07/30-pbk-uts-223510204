<template>
  <div>
    <h1>Posts</h1>
    <UserSelect :users="users" @userSelected="fetchPosts" />
    <div v-if="posts.length">
      <h2>Posts by {{ selectedUserName }}</h2>
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <p>No posts available for this user.</p>
    </div>
  </div>
</template>

<script>
import UserSelect from "./UserSelect.vue";
import PostList from "./PostList.vue";

export default {
  name: "Posts",
  data() {
    return {
      users: [],
      posts: [],
      selectedUserId: null,
    };
  },
  computed: {
    selectedUserName() {
      const user = this.users.find((user) => user.id === this.selectedUserId);
      return user ? user.name : "";
    },
  },
  methods: {
    async fetchPosts(selectedUserId) {
      this.selectedUserId = selectedUserId;
      if (this.selectedUserId) {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUserId}`
        );
        this.posts = await response.json();
      } else {
        this.posts = [];
      }
    },
    async fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.users = await response.json();
    },
  },
  created() {
    this.fetchUsers();
  },
  components: {
    UserSelect,
    PostList,
  },
};
</script>

<style>
/* General Styles */
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  margin: 0;
  padding: 0;
}

/* Header Styles */
h1 {
  font-size: 2em;
  color: #0d56f4;
  text-align: center;
  margin-top: 20px;
}

/* User Select Styles */
.user-select-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

#user-select {
  padding: 10px;
  font-size: 1em;
  margin-left: 10px;
}

/* Posts List Styles */
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

/* No Posts Message */
div p {
  text-align: center;
  font-size: 1.2em;
  color: #666;
}
</style>
