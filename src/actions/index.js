export const getCities = () => ({
  type: 'GET_CITIES',
});

export const getCityScore = (data) => ({
  type: 'GET_CITY_SCORE',
  data,
});

export const receiveCityScore = score => ({
  type: 'RECEIVE_CITY_SCORE',
  score,
});

export const receiveCityScoreError = err => ({
  type: 'RECEIVE_CITY_SCORE_ERROR',
  err,
});

export const receiveCities = cities => ({
  type: 'RECEIVE_CITIES',
  cities,
});

export const receiveCitiesError = err => ({
  type: 'RECEIVE_CITIES_ERROR',
  err,
});

export const searchCities = filter => ({
  type: 'SEARCH_CITIES',
  filter,
});

export const getCitiesStates = () => ({
  type: 'GET_STATES',
});
