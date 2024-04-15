<template>
  <div class="character-list">
    <CharacterCard v-for="character in characters" :key="character.id" :character="character" @click="showDetails(character)" />
  </div>
</template>

<script>
import CharacterCard from "@/components/CharacterCard.vue";

export default {
  components: {
    CharacterCard
  },
  props: {
    characters: {
      type: Array,
      required: true
    }
  },
  methods: {
    showDetails(character) {
      this.$emit("show-character-details", character);
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
