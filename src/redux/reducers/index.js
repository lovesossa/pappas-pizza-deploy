import { combineReducers } from 'redux';

import filters from './filters';
import pizzas from './pizzas';
import snacks from './snacks';
import deserts from './deserts';
import drinks from './drinks';
import popularone from './popularone';
import populartwo from './populartwo';
import offers from './offers';
import addsause from './addsause';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  pizzas,
  offers,
  addsause,
  snacks,
  deserts,
  drinks,
  popularone,
  populartwo,
  cart,
});

export default rootReducer;
