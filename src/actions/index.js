export const getCities = () => ({
  type: 'GET_CITIES',
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