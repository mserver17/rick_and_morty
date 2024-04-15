<template>
  <div id="app">
    <header>
      <h1>Rick and Morty Character Viewer</h1>
    </header>
    <main>
      <div class="container">
        <FilterControls @apply-filters="applyFilters" />
        <CharacterList :characters="paginatedCharacters" @show-character-details="showCharacterDetails" />
        <PaginationControl
          :totalPages="computedTotalPages"
          :currentPage="currentPage"
          @changePage="changePage"
        />
      </div>
    </main>
  </div>
</template>

<script>
import CharacterList from "@/components/CharacterList.vue";
import FilterControls from "@/components/FilterControls.vue";
import PaginationControl from "@/components/PaginationControl.vue";
import { fetchCharacters, fetchCharactersById } from '@/services/apiService';



export default {
  name: "App",
  components: {
    CharacterList,
    FilterControls,
    PaginationControl,
  },
  data() {
    return {
      characters: [],
      filteredCharacters: [],
      totalPages: 1,
      currentPage: 1,
      pageSize: 6,
    };
  },
  computed: {
    computedTotalPages() {
      return Math.ceil(this.filteredCharacters.length / this.pageSize);
    },
    paginatedCharacters() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.filteredCharacters.slice(startIndex, endIndex);
    }
  },
  methods: {
    async fetchCharacters() {
      try {
        const data = await fetchCharacters(this.currentPage);
        this.characters = data.results;
        this.filteredCharacters = data.results;
        this.totalPages = data.info.pages;
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    },
    applyFilters(filters) {
      this.filteredCharacters = this.characters.filter(character => {
        const nameMatch = character.name.toLowerCase().includes(filters.name.toLowerCase());
        const statusMatch = filters.status ? character.status === filters.status : true;
        return nameMatch && statusMatch;
      });
      this.currentPage = 1;
    },
    changePage(page) {
      this.currentPage = page;
    },
    async showCharacterDetails(character) {
      try {
        const response = await fetchCharactersById(character.id);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    },
    resetFilters() {
    this.filteredCharacters = this.characters;
    this.currentPage = 1;
  },
  },
  mounted() {
    this.fetchCharacters();
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 20px;
}

header {
  text-align: center;
}

h1 {
  font-size: 24px;
  color: #ffffff;
  margin: 0;
}

main {
  margin-top: 20px;
}
</style>
