<template>
  <div>
    <h1>Albums</h1>
    <AlbumSelect :albums="albums" @albumSelected="fetchPhotos" />
    <div v-if="photos.length">
      <h2>Photos in {{ selectedAlbumTitle }}</h2>
      <PhotoList :photos="photos" />
    </div>
    <div v-else-if="selectedAlbumId">
      <p>No photos available for this album.</p>
    </div>
    <div v-else>
      <p>Please select an album to view photos.</p>
    </div>
  </div>
</template>

<script>
import AlbumSelect from "./AlbumSelect.vue";
import PhotoList from "./PhotoList.vue";

export default {
  name: "Album",
  data() {
    return {
      albums: [],
      photos: [],
      selectedAlbumId: null,
    };
  },
  computed: {
    selectedAlbumTitle() {
      const album = this.albums.find(
        (album) => album.id === this.selectedAlbumId
      );
      return album ? album.title : "";
    },
  },
  methods: {
    async fetchPhotos(selectedAlbumId) {
      this.selectedAlbumId = selectedAlbumId;
      if (this.selectedAlbumId) {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums/${this.selectedAlbumId}/photos`
        );
        this.photos = await response.json();
      } else {
        this.photos = [];
      }
    },
    async fetchAlbums() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      this.albums = await response.json();
    },
  },
  created() {
    this.fetchAlbums();
  },
  components: {
    AlbumSelect,
    PhotoList,
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
  color: #444;
  text-align: center;
  margin-top: 20px;
}

/* Album Select Styles */
.album-select-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

#album-select {
  padding: 10px;
  font-size: 1em;
  margin-left: 10px;
}

/* Photos List Styles */
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

/* No Photos Message */
div p {
  text-align: center;
  font-size: 1.2em;
  color: #666;
}
</style>
