/* eslint-disable class-methods-use-this */
import HttpClient from './httpClient';

class WeatherController {
  async fetchLocations(params: any) {
    const { text, limit } = params;
    const result = await HttpClient.get(`location/search/?query=${text}`);
    const response = limit ? result?.data?.slice(0, limit) : result.data;
    return response;
  }

  async fetchLocationDay(params: any) {
    const { woeid, date } = params;
    const result = await HttpClient.get(`location/${woeid}/${date}`);
    return result.data;
  }
}

export default new WeatherController();
