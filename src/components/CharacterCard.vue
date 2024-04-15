<!-- CharacterCard.vue -->
<template>
    <div class="character-card card-title pt-4 custom-bg-color">
      <img class="card-img-top mb-5" :src="character.image" alt="Character Image" />
        <div class="character-info">
          <h3>{{ character.name }}</h3>
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
  color: white; /* Цвет текста */
  font-family:'Courier New', Courier, monospace;
}


  </style>
  