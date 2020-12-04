import React , { Component } from 'react';
import Dashboard from '../MainContent/Dashboard/Dashboard';

// ecommerce 

import AddAttributes from '../MainContent/Products/AddAttributes';
import Options from '../MainContent/Products/Options';
import Attributes from '../MainContent/Products/Attributes';
import Brands from '../MainContent/Products/Brands';
import AddCatalog from '../MainContent/Products/AddCatalog';
import AddBrands from '../MainContent/Products/AddBrands';
import Catagories from '../MainContent/Products/Catagories';
import Catalog from '../MainContent/Products/Catalog';
import AttributeSet from '../MainContent/Products/AttributeSet';
import AddAttributeSet from '../MainContent/Products/AddAttributeSet';
import AddOptions from '../MainContent/Products/AddOptions';
import Tags from '../MainContent/Products/Tags';
import AddTags from '../MainContent/Products/AddTags';
import Reviews from '../MainContent/Products/Reviews';

import Orders from '../MainContent/Sales/Orders';
import Transaction from '../MainContent/Sales/Transaction';
import Flash_sales from '../MainContent/FlashSales/Flash_sales';
import AddFlashSales from '../MainContent/FlashSales/AddFlashSales';
import Coupons from '../MainContent/Coupons/Coupons';
import AddCoupon from '../MainContent/Coupons/AddCoupon';
import Pages from '../MainContent/Pages/Pages';
import AddPages from '../MainContent/Pages/AddPages';
import Media from '../MainContent/Media/Media';
import Menus from '../MainContent/Menus/Menus';
import AddMenus from '../MainContent/Menus/AddMenus';
import Users from '../MainContent/Users/Users';
import AddUsers from '../MainContent/Users/AddUsers';
import Roles from '../MainContent/Users/Roles';
import AddRoles from '../MainContent/Users/AddRoles';
import CurrencyRates from '../MainContent/Localization/CurrencyRates';
import Taxes from '../MainContent/Localization/Taxes';
import AddTaxes from '../MainContent/Localization/AddTaxes';
import Sliders from '../MainContent/Appearance/Sliders';
import AddSliders from '../MainContent/Appearance/AddSliders';
import StoreFront from '../MainContent/Appearance/StoreFront';
import Settings from '../MainContent/Settings/Settings';





import { Route,Switch } from 'react-router-dom';
class mainbuilder extends Component{
    render(){
        return(
                <Switch> 
{/* Ecommerce */}
               
                   <Route path="/AddAttributes" component={AddAttributes} />
                   <Route path="/Attributes" component={Attributes} />
                   <Route path="/Brands" component={Brands} />
                   <Route path="/AddBrands" component={AddBrands} />
                   <Route path="/AddCatalog" component={AddCatalog} />
                   <Route path="/Catagories" component={Catagories} />
                   <Route path="/Catalog" component={Catalog} />
                   <Route path="/AttributeSet" component={AttributeSet} />
                   <Route path="/AddAttributeSet" component={AddAttributeSet} />
                   <Route path="/Options" component={Options} />
                   <Route path="/AddOptions" component={AddOptions} />
                   <Route path="/AddTags" component={AddTags} />
                   <Route path="/Tags" component={Tags} />
                   <Route path="/Reviews" component={Reviews} />
                   <Route path="/Orders" component={Orders} />
                   <Route path="/Transaction" component={Transaction} />
                   <Route path="/Flash_sales" component={Flash_sales} />
                   <Route path="/AddFlashSales" component={AddFlashSales} />
                   <Route path="/Coupons" component={Coupons} />
                   <Route path="/AddCoupon" component={AddCoupon} />
                   <Route path="/Pages" component={Pages} />
                   <Route path="/AddPages" component={AddPages} />
                   <Route path="/Media" component={Media} />
                   <Route path="/Menus" component={Menus} />
                   <Route path="/AddMenus" component={AddMenus} />
                   <Route path="/Users" component={Users} />
                   <Route path="/AddUsers" component={AddUsers} />
                   <Route path="/Roles" component={Roles} />
                   <Route path="/AddRoles" component={AddRoles} />
                   <Route path="/CurrencyRates" component={CurrencyRates} />
                   <Route path="/Taxes" component={Taxes} />
                   <Route path="/AddTaxes" component={AddTaxes} />
                   <Route path="/Sliders" component={Sliders} />
                   <Route path="/AddSliders" component={AddSliders} />
                   <Route path="/StoreFront" component={StoreFront} />
                   <Route path="/Settings" component={Settings} />
                   
                    <Route path="/Dashboard" component={Dashboard} />
                    <Route path="/" component={Dashboard} />
                    
                </Switch>
        );
    }
}

export default mainbuilder;