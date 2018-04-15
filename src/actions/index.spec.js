import * as actions from './index';

describe('Actions', () => {
  it('should create an action to get cities', () => {
    const expectedAction = {
      type: 'GET_CITIES'
    }
    expect(actions.getCities()).toEqual(expectedAction);
  });

  it('should create an action to get a city score ', () => {
    const expectedAction = {
      type: 'GET_CITY_SCORE',
      data: {}
    }
    expect(actions.getCityScore({})).toEqual(expectedAction);
  });

  it('should create an action to receive a city score', () => {
    const expectedAction = {
      type: 'RECEIVE_CITY_SCORE',
      score: 10
    }
    expect(actions.receiveCityScore(10)).toEqual(expectedAction);
  });

  it('should create an action to receive city score errors', () => {
    const expectedAction = {
      type: 'RECEIVE_CITY_SCORE_ERROR',
      err: {}
    }
    expect(actions.receiveCityScoreError({})).toEqual(expectedAction);
  });

  it('should create an action to receive cities', () => {
    const expectedAction = {
      type: 'RECEIVE_CITIES',
      cities: []
    }
    expect(actions.receiveCities([])).toEqual(expectedAction);
  });

  it('should create an action to receive errors', () => {
    const expectedAction = {
      type: 'RECEIVE_CITIES_ERROR',
      err: {}
    }
    expect(actions.receiveCitiesError({})).toEqual(expectedAction);
  });

  it('should create an action to search cities', () => {
    const expectedAction = {
      type: 'SEARCH_CITIES',
      filter: []
    }
    expect(actions.searchCities([])).toEqual(expectedAction);
  });

  it('should create an action to get states', () => {
    const expectedAction = {
      type: 'GET_STATES'
    }
    expect(actions.getCitiesStates()).toEqual(expectedAction);
  });

});