import {
  ClearIcon,
  HailIcon,
  HeavyCloudIcon,
  HeavyRainIcon,
  LightCloudIcon,
  LightRainIcon,
  ShowersIcon,
  SleetIcon,
  SnowIcon,
  ThunderIcon,
} from '../assets';
import { WeatherStates } from '../interfaces/Weather';

const weatherIcons = {
  [WeatherStates.sn]: SnowIcon,
  [WeatherStates.sl]: SleetIcon,
  [WeatherStates.h]: HailIcon,
  [WeatherStates.t]: ThunderIcon,
  [WeatherStates.hr]: HeavyRainIcon,
  [WeatherStates.lr]: LightRainIcon,
  [WeatherStates.s]: ShowersIcon,
  [WeatherStates.hc]: HeavyCloudIcon,
  [WeatherStates.lc]: LightCloudIcon,
  [WeatherStates.c]: ClearIcon,
};

const getIcon = (type: WeatherStates) => weatherIcons[type];

export { getIcon };
