import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const callWeather = createAsyncThunk(
  'weather/get',
  async (city: string) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b777e2db59da1a5ef20a5bfbd15cd260`
    let forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b777e2db59da1a5ef20a5bfbd15cd260`
    const response = await axios
      .get(forcastUrl)
      .catch((err) => console.log(err))

    const data = response?.data || null // extract only the serializable data
    return data
  },
)
