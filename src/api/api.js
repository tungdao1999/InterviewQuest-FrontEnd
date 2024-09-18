import axios from 'axios';
import { urls } from '../const/const';

const api = {
  async getApiData(path) {
    try {
      const response = await axios.get(`${urls.server}` + path);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  },

  async postApiData(path, data) {
    try {
      const response = await axios.post(`${urls.server}` + path, data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      return null;
    }
  },

  async putApiData(path, data) {
    try {
      const response = await axios.put(`${urls.server}` + path, data);
      return response.data;
    } catch (error) {
      console.error('Error updating data:', error);
      return null;
    }
  },

  async deleteApiData(id) {
    try {
      await axios.delete(`${urls.server}/${id}`);
      return true;
    } catch (error) {
      console.error('Error deleting data:', error);
      return false;
    }
  },
};

export default api;