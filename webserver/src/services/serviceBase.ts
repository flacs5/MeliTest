import axios from "axios";

export default class ServiceBase {
  async get<T>(url: string) {
    const result = await axios.get<T>(url);
    return result.data;
  }
}
