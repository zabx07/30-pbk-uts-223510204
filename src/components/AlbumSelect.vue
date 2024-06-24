<template>
  <div class="album-select-container">
    <label for="album-select">Select Album:</label>
    <select id="album-select" @change="onAlbumChange" v-model="selected">
      <option disabled value=""></option>
      <option v-for="album in albums" :key="album.id" :value="album.id">
        {{ album.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["albums"],
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    onAlbumChange() {
      const selectedAlbumId = parseInt(this.selected);
      this.$emit("albumSelected", selectedAlbumId);
    },
  },
};
</script>
