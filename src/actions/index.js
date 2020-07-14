import * as c from "./ActionTypes";

export const deletePost = (id) => ({
  type: c.DELETE_POST,
  id
});
export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const selectPost =(postSelected) => {
  if (postSelected!= null) {
  const {username, country, city, date, message, id} = postSelected;
  return{
   type: c.SELECT_POST,
   username: username,
   country: country,
   id: id,
   city: city,
   date: date,
   message: message
  }
} else {
  return {
    type: c.SELECT_POST
  }
}
}
