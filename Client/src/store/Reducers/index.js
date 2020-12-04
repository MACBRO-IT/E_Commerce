 
import {combineReducers} from 'redux';
import  Layout from './Layout';
import  Catalog from './Products/Catalog'; 
import  Coupon from './Coupon';
import  Categories from './Products/Catagories'; 
import Pages from './Pages';
import Settings from './Settings';
import Users from './Users';
import Sliders from './Sliders';

const allReducers = combineReducers({
    ui_red  : Layout,
    Catalog : Catalog ,
    Categories : Categories, 
    Coupon : Coupon, 
    Pages : Pages,
    Settings : Settings,
    Users : Users,
    Sliders : Sliders,
});

export default allReducers
