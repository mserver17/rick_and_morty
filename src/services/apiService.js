// apiService.js
import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/';

export const fetchCharacters = async (page = 1, name = '', status = '') => {
  try {
    const response = await axios.get('character', {
      params: {
        page,
        name,
        status
      },
      baseURL: BASE_URL
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

export const fetchCharactersById = async (id) => {
  try {
    const response = await axios.get(`character/${id}`, {
      baseURL: BASE_URL
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching character details:', error);
    throw error;
  }
};
