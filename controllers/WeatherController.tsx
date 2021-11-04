import HttpClient from './httpClient';

class WeatherController {
  async fetchLocations(params: object) {
    const { text } = params;
    const result = await HttpClient.get(`location/search/?query=${text}`);
    return result.data;
  }

  async fetchLocationDay(params: object) {
    const { woeid, date } = params;
    const result = await HttpClient.get(`location/${woeid}/${date}`);
    return result.data;
  }
}

export default new WeatherController();
