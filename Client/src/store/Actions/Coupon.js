import axios from "axios";
import{SAVE_COUPON_GENERAL,SAVE_COUPON_RESTRICTIONS,SAVE_COUPON_LIMITS} from "../Actions/Types";



// Coupon General 
 
export const saveCouponGeneral = (storeData, history) => dispatch => {  
    var URL = "http://localhost:4000/" 
    axios
      .post(URL+"Coupons/", storeData)
      .then(res => { 
        dispatch({
          type: SAVE_COUPON_GENERAL,
          payload: res.data
        }); 
      })
      .catch(err =>
        dispatch({
          type: SAVE_COUPON_GENERAL,
          payload: {}
        })
      );
  };  
  
 //Coupon_UserRetrictions

 export const saveCouponRestrictions = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"CouponsUsageRestrictions/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_COUPON_RESTRICTIONS,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_COUPON_RESTRICTIONS,
        payload: {}
      })
    );
};  

//Coupons_UsageLimits
export const saveCouponLimits = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"CouponsUsageLimits/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_COUPON_LIMITS,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_COUPON_LIMITS,
        payload: {}
      })
    );
};  