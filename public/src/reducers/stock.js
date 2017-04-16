import * as Actions from '../actions/index';

const stock = (state = {
  dates: [],
  values: [],
}, action) => {
  switch (action.type) {
    case Actions.GET_STOCK_INFO:
      return Object.assign({}, state, {
        identifier: action.identifier,
        item: action.item,
        dates: action.dates,
        values: action.values
      });
    default:
      return state;
  }
}

export default stock;