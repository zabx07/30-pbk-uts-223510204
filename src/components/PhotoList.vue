<template>
  <div>
    <ul class="photo-list">
      <li
        v-for="photo in photos"
        :key="photo.id"
        class="photo-item"
        @click="showPhoto(photo.url)"
      >
        <h3>{{ photo.title }}</h3>
        <img :src="photo.thumbnailUrl" :alt="photo.title" />
      </li>
    </ul>

    <div v-if="isModalVisible" class="modal" @click="hidePhoto">
      <div class="modal-content">
        <span class="close" @click="hidePhoto">&times;</span>
        <img :src="selectedPhotoUrl" alt="Full Size Photo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["photos"],
  data() {
    return {
      isModalVisible: false,
      selectedPhotoUrl: "",
    };
  },
  methods: {
    showPhoto(url) {
      this.selectedPhotoUrl = url;
      this.isModalVisible = true;
    },
    hidePhoto() {
      this.isModalVisible = false;
      this.selectedPhotoUrl = "";
    },
  },
};
</script>

<style>
.photo-list {
  list-style-type: none;
  padding: 0;
}

.photo-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.photo-item h3 {
  margin: 0 0 10px;
  font-size: 1.5em;
  color: #333;
}

.photo-item img {
  max-width: 100%;
  border-radius: 5px;
}

/* Modal Styles */
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 700px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation: animateTop 0.4s;
}

@keyframes animateTop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal img {
  width: 100%;
  border-radius: 5px;
}
</style>
