import api from "./api";

class BeachService {
  async getBeachById(id: string) {
    try {
      const response = await api.get(`/beaches/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new BeachService();