import axios from "axios";
import{SAVE_USER_ACCOUNT,SAVE_USER_ROLE} from "../Actions/Types";



// User_Account
export const saveUserAccount = (storeData, history) => dispatch => {  
    var URL = "http://localhost:4000/" 
    axios
      .post(URL+"UsersAccount/", storeData)
      .then(res => { 
        dispatch({
          type: SAVE_USER_ACCOUNT,
          payload: res.data
        }); 
      })
      .catch(err =>
        dispatch({
          type: SAVE_USER_ACCOUNT,
          payload: {}
        })
      );
};
//User_Roles
export const saveUserRole = (storeData, history) => dispatch => {  
    var URL = "http://localhost:4000/" 
    axios
      .post(URL+"Roles/", storeData)
      .then(res => { 
        dispatch({
          type: SAVE_USER_ROLE,
          payload: res.data
        }); 
      })
      .catch(err =>
        dispatch({
          type: SAVE_USER_ROLE,
          payload: {}
        })
      );
};