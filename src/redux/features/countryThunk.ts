import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

const countryAPI = createAsyncThunk('country/get', async (country: string) => {
  let options = {
    method: 'GET',
    url: `https://rest-country-api.p.rapidapi.com/${country}`,
    headers: {
      'X-RapidAPI-Key': '04da948ae7msh91c4da35bbc6b7cp1722dbjsn19280222f9aa',
      'X-RapidAPI-Host': 'rest-country-api.p.rapidapi.com',
    },
  }

  const res = await axios.request(options)
  return res
})

export { countryAPI }
