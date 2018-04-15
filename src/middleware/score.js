import axios from 'axios';
import * as actions from '../actions';
import { API } from '../constants';

const score = store => next => action => {
  next(action);
    switch (action.type) {
            case 'GET_CITY_SCORE':
                axios({
                    url: `${API}/BuscaPontos`,
                    method: 'post',
                    headers:{
                      'Content-Type': 'multipart/form-data',
                    },
                    data: {
                      Nome: action.data.city,
                      Estado: action.data.state
                    }
                }).then(
                    (res) => {
                        next(actions.receiveCityScore(res.data));
                    },
                    (err) => {
                        next(actions.receiveCityScoreError(err));
                    }
                );
                break;
        default:
            break;
    }
};

export default score;
