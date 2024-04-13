<template>
  <div id="app">
    <header>
      <h1>Rick and Morty Character Viewer</h1>
    </header>
    <main>
      <div class="container">
        <FilterControls @apply-filters="applyFilters" />
        <CharacterList :characters="paginatedCharacters" />
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
import PaginationControl from "@/components/PaginationControl.vue"; // Обновленный импорт
import { fetchCharacters } from "@/services/apiService";

export default {
  name: "App",
  components: {
    CharacterList,
    FilterControls,
    PaginationControl // Обновленное использование переименованного компонента
  },
  data() {
    return {
      characters: [], // Список персонажей
      filteredCharacters: [], // Отфильтрованный список персонажей
      totalPages: 10, // Примерное значение
      currentPage: 1 ,
      pageSize: 5 // Определение размера страницы
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
    },
    
  },

  methods: {
    async fetchCharacters() {
      try {
        const data = await fetchCharacters();
        this.characters = data.results;
        this.filteredCharacters = data.results; // Начальная инициализация отфильтрованного списка
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
    }
  },
  mounted() {
   this.characters = [
      { id: 1, name: "Rick", status: "Alive" },
      { id: 2, name: "Morty", status: "Alive" },
    ];
    this.pageSize = 6;
    this.filteredCharacters = this.characters;
    this.fetchCharacters();
    this.totalPages = Math.ceil(this.filteredCharacters.length / this.pageSize);
  }
};
</script>



<style>
#app {
  font-family: Arial, sans-serif;
  margin: 20px;

}

body {
  background-color: #2d4375; /* Здесь можно указать любой цвет фона */
  margin: 0;
  padding: 0;
  color: #ffffff;
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
