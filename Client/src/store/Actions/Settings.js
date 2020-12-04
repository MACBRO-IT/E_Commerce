import axios from "axios";
import{SAVE_CURRENCY,SAVE_SETTINGS,SAVE_MAINTENANCE,SAVE_STORE,SAVE_SETTINGS_MAIL,
  SAVE_SETTINGS_NEWSLETTER,SAVE_SETTINGS_CUSTOM_CSSJS,SAVE_FREE_SHIPPING,SAVE_LOCAL_PICKUP,
  SAVE_FLATE_RATE,SAVE_PAY_PAL,SAVE_STRIPE,SAVE_RAZOR_PAY,SAVE_INSTA_MOJO,SAVE_CASH_ON_DELIVERY,
  SAVE_BANK_TRANSFER,SAVE_MONEY_ORDER} from "../Actions/Types";



// Settings_Currency
 
export const saveCurrency = (storeData, history) => dispatch => {  
    var URL = "http://localhost:4000/" 
    axios
      .post(URL+"SettingCurrency/", storeData)
      .then(res => { 
        dispatch({
          type: SAVE_CURRENCY,
          payload: res.data
        }); 
      })
      .catch(err =>
        dispatch({
          type: SAVE_CURRENCY,
          payload: {}
        })
      );
  };  
 //SAVE_SETTINGSGENERAL
 export const saveSettings = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"Setting/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_SETTINGS,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_SETTINGS,
        payload: {}
      })
    );
};  
//Settings_Maintenance
export const saveMaintenance = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"SettingMaintenance/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_MAINTENANCE,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_MAINTENANCE,
        payload: {}
      })
    );
};  
//Settings_Store
export const saveStore = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"SettingStore/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_STORE,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_STORE,
        payload: {}
      })
    );
};  
//Settings_Mail
export const saveSettingsMail = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"SettingMail/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_SETTINGS_MAIL,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_SETTINGS_MAIL,
        payload: {}
      })
    );
};  
//Settings_NewsLetter
export const saveSettingsNewsletter = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"SettingNewsletter/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_SETTINGS_NEWSLETTER,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_SETTINGS_NEWSLETTER,
        payload: {}
      })
    );
}; 
//Settings_CustomCSSJS
export const saveSettingsCustomcssjs = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"SettingCustomCSSJS/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_SETTINGS_CUSTOM_CSSJS,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_SETTINGS_CUSTOM_CSSJS,
        payload: {}
      })
    );
}; 
//Free_Shipping
export const saveFreeshipping = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"SettingFreeShipping/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_FREE_SHIPPING,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_FREE_SHIPPING,
        payload: {}
      })
    );
}; 
//Local_Pickup
export const saveLocalpickup = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"SettingLocalPickup/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_LOCAL_PICKUP,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_LOCAL_PICKUP,
        payload: {}
      })
    );
}; 
//Flate_Rate
export const saveFlaterate = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"SettingFlatRate/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_FLATE_RATE,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_FLATE_RATE,
        payload: {}
      })
    );
}; 
//Pay_Pal
export const savePaypal = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"PayPal/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_PAY_PAL,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_PAY_PAL,
        payload: {}
      })
    );
}; 
//Stripe
export const saveStripe = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"Stripe/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_STRIPE,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_STRIPE,
        payload: {}
      })
    );
}; 
//Razor_Pay
export const saveRazorpay = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"Razorpay/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_RAZOR_PAY,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_RAZOR_PAY,
        payload: {}
      })
    );
}; 
//Instamojo
export const saveInstamojo = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"Instamojo/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_INSTA_MOJO,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_INSTA_MOJO,
        payload: {}
      })
    );
}; 
//Cash_on_delivery
export const saveCashondelivery = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"CashOnDelivery/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_CASH_ON_DELIVERY,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_CASH_ON_DELIVERY,
        payload: {}
      })
    );
}; 
//Bank_transfer
export const saveBanktransfer = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"BankTransfer/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_BANK_TRANSFER,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_BANK_TRANSFER,
        payload: {}
      })
    );
};
//Check / Money_Order
export const saveMoneyorder = (storeData, history) => dispatch => {  
  var URL = "http://localhost:4000/" 
  axios
    .post(URL+"CheckMoneyOrder/", storeData)
    .then(res => { 
      dispatch({
        type: SAVE_MONEY_ORDER,
        payload: res.data
      }); 
    })
    .catch(err =>
      dispatch({
        type: SAVE_MONEY_ORDER,
        payload: {}
      })
    );
};