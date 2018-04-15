import axios from 'axios';
import * as actions from '../actions';
import { API } from '../constants';

const cities = store => next => action => {
  next(action);
    switch (action.type) {
        case 'GET_CITIES':
            axios({
                url: `${API}/BuscaTodasCidades`,
                method: 'get',
            }).then(
                (res) => {
                    next(actions.receiveCities(res.data));
                },
                (err) => {
                    next(actions.receiveCitiesError(err));
                }
            );
            break;
        default:
            break;
    }
};

export default cities;
