<!-- CharacterCard.vue -->
<template>
    <div class="character-card">
      <img :src="character.image" alt="Character Image" />
      <h3>{{ character.name }}</h3>
      <p>Status: {{ character.status }}</p>
      <p>Species: {{ character.species }}</p>
      
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
  </style>
  