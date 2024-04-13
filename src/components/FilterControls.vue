<!-- FilterControls.vue -->
<template>
  <div class="FilterControls">
    <label for="name">Name:</label>
      <input type="text" id="name" v-model="filters.name">
      <label for="status">Status:</label>
      <select id="status" v-model="filters.status">
        <option value="">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="Unknown">Unknown</option>
      </select>
      <button @click="applyFilters">Apply</button>
  </div>
</template>

<script>
export default {
    data() {
      return {
        filters: {
          name: '',
          status: ''
        }
      };
    },
    methods: {
      applyFilters() {
      this.$emit('apply-filters', this.filters);
    }
    }
  }
</script>

<style scoped>
/* Стили для элементов управления */
</style>
