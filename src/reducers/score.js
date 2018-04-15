const state = (state = 0, action) => {
  switch (action.type) {
    case 'RECEIVE_CITY_SCORE':
      return action.score;
    case 'RECEIVE_CITY_SCORE_ERROR':
      return 0;
    default:
      return state;
  }
};

export default state;
