<!-- CharacterList.vue -->
<template>
    <div class="character-list">
      <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
    </div>
  </template>
  
  <script>
  import { fetchCharacters } from '@/services/apiService';
  import CharacterCard from '@/components/CharacterCard.vue';
  
  export default {
    components: {
      CharacterCard
    },
    data() {
      return {
        characters: []
      };
    },
    async mounted() {
      try {
        const data = await fetchCharacters();
        this.characters = data.results;
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    }
  };
  </script>
  
<style scoped>

.character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; 
}
</style>