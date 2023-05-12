import fire from './bonfire.png'
import clouds from './clouds.png'
import drizzle from './drizzle.png'
import fog from './fog.png'
import haze from './haze.png'
import mist from './mist.png'
import sand from './sand.png'
import snow from './snow.png'
import storm from './storm.png'
import sun from './sun.png'
import tornado from './tornado.png'

export const WeatherIconsObj = {
  fire,
  clouds,
  drizzle,
  fog,
  haze,
  mist,
  sand,
  snow,
  storm,
  sun,
  tornado,
}
export const iconMap = {
  Clear: WeatherIconsObj.sun,
  Clouds: WeatherIconsObj.clouds,
  Drizzle: WeatherIconsObj.drizzle,
  Dust: WeatherIconsObj.sand,
  Fog: WeatherIconsObj.mist,
  Mist: WeatherIconsObj.mist,
  Haze: WeatherIconsObj.haze,
  Rain: WeatherIconsObj.drizzle,
  Smoke: WeatherIconsObj.fire,
  Snow: WeatherIconsObj.snow,
  Squall: WeatherIconsObj.tornado,
  Thunderstorm: WeatherIconsObj.storm,
  Tornado: WeatherIconsObj.tornado,
}
