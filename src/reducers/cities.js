const initialState = {
  cities: [],
  filter: [],
};

const cities = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_CITIES':
      return {
        cities: [...action.cities],
        filter: [],
      };
    case 'RECEIVE_CITIES_ERROR':
      return {
        cities: [...state.cities],
        filter: [],
      };
    case 'SEARCH_CITIES':
      return {
        cities: [...state.cities],
        filter: state.cities.filter((city) => (
          city.Nome.toLowerCase().includes(action.filter.city) &&
          city.Estado.toLowerCase().includes(action.filter.state)
        )),
      }
    default:
      return state;
  }
};

export default cities;
