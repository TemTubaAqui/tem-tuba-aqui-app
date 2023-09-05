import {api} from "./api";

class BeachService {
  getBeachById(id: string) {
    return api.get(`/beaches/${id}`);
  }
}

export default new BeachService();