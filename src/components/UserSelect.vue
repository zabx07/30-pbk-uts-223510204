<template>
    <div class="user-select-container">
      <label for="user-select">Select User:</label>
      <select id="user-select" v-model="selectedUserId" @change="userSelected">
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      users: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        selectedUserId: null
      }
    },
    methods: {
      userSelected() {
        this.$emit('userSelected', this.selectedUserId);
      }
    }
  }
  </script>
  <style>
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
    </style>
  