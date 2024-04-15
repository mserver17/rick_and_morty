<template>
  <div class="character-card card-title pt-4 custom-bg-color">
    <img class="card-img-top mb-5" :src="character.image" alt="Character Image" />
    <div class="character-info">
      <h3 class="character-name" 
        @mouseover="isHovered = true" 
        @mouseout="isHovered = false" 
        @click="handleClick" 
        :class="{ 'hovered': isHovered }">{{ character.name }}</h3>
      <p>Status: {{ character.status }}</p>
      <p>Species: {{ character.species }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isHovered: false
    };
  },
  methods: {
    handleClick() {
      fetch(this.character.url)
        .then(response => response.json())
        .then(data => {
          const jsonData = JSON.stringify(data);
          const blob = new Blob([jsonData], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          window.open(url, '_blank');
        })
        .catch(error => {
          console.error('Error fetching character data:', error);
        });
    }
  }
};
</script>

<style scoped>
.character-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
img {
  max-width: 100%;
  border-radius: 8px;
}
.custom-bg-color {
  background-color: #02331d;
  color: white; 
  font-family: 'Courier New', Courier, monospace;
}

.card-img-top {
  width: 100%; 
  height: auto; 
}

.character-name {
  max-width: 300px; 
  overflow-wrap: break-word;
}

.hovered {
  color: rgb(255, 230, 0);
  cursor: pointer;
}
</style>
