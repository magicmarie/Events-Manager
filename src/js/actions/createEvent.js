import CREATE_EVENT_SUCCESS from "./types";
import CREATE_EVENT_ERROR from "./types";

export const createEvent = ({title, description, body, tags}) => {
  return (dispatch)
    .post("/Events", {data})
    .then(() => {
      dispatch({
        type: CREATE_EVENT_SUCCESS,
        message: "Event created succesfully"
      });
    })
    .catch(error => {
      dispatch({
        type: CREATE_EVENT_ERROR, error
      });
    });
  };
