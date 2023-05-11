// import { createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// // Define the async action using createAsyncThunk
// export const fetchWeatherData = createAsyncThunk(
//   'weather/fetchWeatherData',
//   async (city) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b777e2db59da1a5ef20a5bfbd15cd260`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }
// );

// // Define a slice for your weather data
// const weatherSlice = createSlice({
//   name: 'weather',
//   initialState: {
//     loading: false,
//     error: null,
//     data: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchWeatherData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.data = null;
//       })
//       .addCase(fetchWeatherData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         state.data = action.payload;
//       })
//       .addCase(fetchWeatherData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error;
//         state.data = null;
//       });
//   },
// });

// // Export the slice's reducer
// export const weatherReducer = weatherSlice.reducer;

// // Example of how to use the fetchWeatherData action
// const CityWeather = ({ city }) => {
//   const dispatch = useDispatch();
//   const { loading, error, data } = useSelector((state) => state.weather);

//   useEffect(() => {
//     dispatch(fetchWeatherData(city));
//   }, [dispatch, city]);

//   if (loading) {
//     return <div>Loading...</div>;
//   } else if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (data) {
//     return <div>City: {data.name}</div>;
//   } else {
//     return null;
//   }
// };

export const test = {
  coord: {
    lon: -0.1257,
    lat: 51.5085,
  },
  weather: [
    {
      id: 500,
      main: 'Rain',
      description: 'light rain',
      icon: '10d',
    },
  ],
  base: 'stations',
  main: {
    temp: 290.15,
    feels_like: 289.58,
    temp_min: 287.09,
    temp_max: 293.1,
    pressure: 1015,
    humidity: 64,
  },
  visibility: 10000,
  wind: {
    speed: 3.09,
    deg: 350,
  },
  rain: {
    '1h': 0.24,
  },
  clouds: {
    all: 40,
  },
  dt: 1683811780,
  sys: {
    type: 2,
    id: 268730,
    country: 'GB',
    sunrise: 1683778530,
    sunset: 1683833901,
  },
  timezone: 3600,
  id: 2643743,
  name: 'London',
  cod: 200,
}
