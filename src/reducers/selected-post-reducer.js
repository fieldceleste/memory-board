import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const {username, country, city, date, message, id} = action;
  switch (action.type){
    case c.SELECT_POST:
      if(state === null) {
        return {
          username: username,
          country: country,
          id: id,
          city: city,
          date: date,
          message: message
          }
      } else {
        state = null;
        return state
        }
    default:
      return state;
  }
};