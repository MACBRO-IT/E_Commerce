import{SAVE_COUPON_GENERAL,SAVE_COUPON_RESTRICTIONS,SAVE_COUPON_LIMITS} from '../Actions/Types';

const initialState = {
    saveCouponGeneral: [{}],
    saveCouponRestrictions : [{}],
    saveCouponLimits : [{}]
  
    };

    export default function (state = initialState, action) { 
        switch (action.type) {
          case SAVE_COUPON_GENERAL:
            return {
              ...state,
              saveCouponGeneral: action.payload
            };
            case SAVE_COUPON_RESTRICTIONS:
                return {
                  ...state,
                  saveCouponRestrictions: action.payload
                };
                case SAVE_COUPON_LIMITS:
                return {
                  ...state,
                  saveCouponLimits: action.payload
                };
            
          default:
            return state;
        }
      }