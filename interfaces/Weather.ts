/* eslint-disable camelcase */
enum WeatherStates {
  sn='sn',
  sl='sl',
  h='h',
  t='t',
  hr='hr',
  lr='lr',
  s='s',
  hc='hc',
  lc='lc',
  c='c'
}

interface Weather {
    id: number,
    weather_state_name:string,
    weather_state_abbr: WeatherStates,
    wind_direction_compass: string,
    created: string,
    applicable_date: Date,
    min_temp: number,
    max_temp: number,
    the_temp: number,
    wind_speed: number,
    wind_direction: number,
    air_pressure: null,
    humidity: number,
    visibility: number,
    predictability: number,
}

export {
  Weather,
  WeatherStates,
};
