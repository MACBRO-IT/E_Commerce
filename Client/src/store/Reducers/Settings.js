import{SAVE_CURRENCY,SAVE_SETTINGS,SAVE_MAINTENANCE,SAVE_STORE,SAVE_SETTINGS_MAIL,
  SAVE_SETTINGS_NEWSLETTER,SAVE_SETTINGS_CUSTOM_CSSJS,SAVE_FREE_SHIPPING,SAVE_LOCAL_PICKUP,
  SAVE_FLATE_RATE,SAVE_PAY_PAL,SAVE_STRIPE,SAVE_RAZOR_PAY,SAVE_INSTA_MOJO,SAVE_CASH_ON_DELIVERY,
  SAVE_BANK_TRANSFER,SAVE_MONEY_ORDER} from '../Actions/Types';

const initialState = {
    saveCurrency: [{}],
    saveSettings : [{}],
    saveMaintenance : [{}],
    saveStore : [{}],
    saveSettingsMail : [{}],
    saveSettingsNewsletter : [{}],
    saveSettingsCustomcssjs : [{}],
    saveFreeshipping : [{}],
    saveLocalpickup : [{}],
    saveFlaterate : [{}],
    savePaypal : [{}],
    saveStripe : [{}],
    saveRazorpay : [{}],
    saveInstamojo : [{}],
    saveCashondelivery : [{}],
    saveBanktransfer : [{}],
    saveMoneyorder : [{}],
    };

    export default function (state = initialState, action) { 
        switch (action.type) {
          case SAVE_CURRENCY:
            return {
              ...state,
              saveCurrency: action.payload
            };
            case SAVE_SETTINGS:
                return {
                  ...state,
                  saveSettings: action.payload
                };
                case SAVE_MAINTENANCE:
                return {
                  ...state,
                  saveMaintenance: action.payload
                };
                case SAVE_STORE:
                return {
                  ...state,
                  saveStore: action.payload
                };
                case SAVE_SETTINGS_MAIL:
                return {
                  ...state,
                  saveSettingsMail: action.payload
                };
                case SAVE_SETTINGS_NEWSLETTER:
                return {
                  ...state,
                  saveSettingsNewsletter: action.payload
                };
                case SAVE_SETTINGS_CUSTOM_CSSJS:
                return {
                  ...state,
                  saveSettingsCustomcssjs: action.payload
                };
                case SAVE_FREE_SHIPPING:
                return {
                  ...state,
                  saveFreeshipping: action.payload
                };
                case SAVE_LOCAL_PICKUP:
                return {
                  ...state,
                  saveLocalpickup: action.payload
                };
                case SAVE_FLATE_RATE:
                return {
                  ...state,
                  saveFlaterate: action.payload
                };
                case SAVE_PAY_PAL:
                  return {
                    ...state,
                    savePaypal: action.payload
                  };
                  case SAVE_STRIPE:
                  return {
                    ...state,
                    saveStripe: action.payload
                  };
                  case SAVE_RAZOR_PAY:
                  return {
                    ...state,
                    saveRazorpay: action.payload
                  };
                  case SAVE_INSTA_MOJO:
                    return {
                      ...state,
                      saveInstamojo: action.payload
                    };
                    case SAVE_CASH_ON_DELIVERY:
                      return {
                        ...state,
                        saveCashondelivery: action.payload
                      };
                      case SAVE_BANK_TRANSFER:
                      return {
                        ...state,
                        saveBanktransfer: action.payload
                      };
                      case SAVE_MONEY_ORDER:
                        return {
                          ...state,
                          saveMoneyorder: action.payload
                        };
                
          default:
            return state;
        }
      }


