<template>
  <div class="FilterControls input-group mb-5 mt-5">
    <label class="input-group-text" for="name">Name: </label>
      <input style="width: 200px;" class="form-control" type="text" id="name" v-model="filters.name">
      <label class="input-group-text ms-3" for="status">Status:</label>
      <select class="form-select" id="status" v-model="filters.status">
        <option value="">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="Unknown">Unknown</option>
      </select>
      <button class="btn btn-success" @click="applyFilters">Apply</button>
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
</style>
