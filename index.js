//Third Party Module
const express =require('express');
const app = express();
const mongoose =require('mongoose');
const morgan =require('morgan');
const cors =require('cors');

const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
 
app.use(cors());
//Middleware 
app.use(morgan("dev"));
app.use(express.json()); 

//Router

//Product
var Product = require('./Route/Products/Catalog/Basic/General');
var ProductPrice = require('./Route/Products/Catalog/Basic/Price');
var ProductInventory = require('./Route/Products/Catalog/Basic/Inventory');
var ProductImage = require('./Route/Products/Catalog/Basic/Images');
var ProductSEO = require('./Route/Products/Catalog/Basic/SEO');
var ProductAttributes = require('./Route/Products/Catalog/Advanced/Attributes');
var ProductOptions = require('./Route/Products/Catalog/Advanced/Options');
var ProductAdditional = require('./Route/Products/Catalog/Advanced/Additional');
//Categories
var Categories = require('./Route/Products/Categories/General');
var CategoriesImage = require('./Route/Products/Categories/Images');
//Brand
var Brand = require('./Route/Products/Brands/General');
var BrandImage = require('./Route/Products/Brands/Images');
var BrandSEO = require('./Route/Products/Brands/SEO');
//Attributes
var Attributes = require('./Route/Products/Attributes/General');
var AttributesValues = require('./Route/Products/Attributes/Values');
//AttributeSet
var AttributeSet = require('./Route/Products/AttributeSet/General');
//Options
var Options = require('./Route/Products/Options/General');
var OptionsValues = require('./Route/Products/Options/Values');
//Tag
var Tag = require('./Route/Products/Tag/General');
//FlashSales
var FlashSalesProducts = require('./Route/Sales/FlashSales/Products');
var FlashSalesSettings = require('./Route/Sales/FlashSales/Settings');
//Coupons
var Coupons = require('./Route/Sales/Coupons/General');
var CouponsUsageLimits = require('./Route/Sales/Coupons/UsageLimits');
var CouponsUsageRestrictions = require('./Route/Sales/Coupons/UsageRestrictions');
//Pages
var Pages = require('./Route/Sales/Pages/General');
var PagesSEO = require('./Route/Sales/Pages/SEO');
//Menus
var Menu = require('./Route/Sales/Menus/Menu');
//Users
var UsersAccount = require('./Route/Users/Users/Accounts');
//Roles
var Roles = require('./Route/Users/Roles/General');
//Taxes
var Taxes = require('./Route/Localization/General');
var TaxesRates = require('./Route/Localization/Rates');
//Sliders
var Slides = require('./Route/Appearance/Slider/General');
var SlidesOptions = require('./Route/Appearance/Slider/Options');
var SlidersSettings = require('./Route/Appearance/Slider/Settings');
//StoreFront_GeneralSettings
var StoreFront = require('./Route/Appearance/StoreFront/GeneralSetting/General');
var StoreFrontFeatures = require('./Route/Appearance/StoreFront/GeneralSetting/Features');
var StoreFrontFooter = require('./Route/Appearance/StoreFront/GeneralSetting/Footer');
var StoreFrontLogo = require('./Route/Appearance/StoreFront/GeneralSetting/Logo');
var StoreFrontMenu = require('./Route/Appearance/StoreFront/GeneralSetting/Menu');
var StoreFrontNewsletter = require('./Route/Appearance/StoreFront/GeneralSetting/NewsLetter');
var StoreFrontProduct = require('./Route/Appearance/StoreFront/GeneralSetting/ProductPage');
var StoreFrontSocialLinks = require('./Route/Appearance/StoreFront/GeneralSetting/SocialLinks');
//StoreFront_HomePageSection
var FeaturedCategories = require('./Route/Appearance/StoreFront/HomePageSection/FeaturedCategories');
var FlashSaleVerticalProducts = require('./Route/Appearance/StoreFront/HomePageSection/FlashSale & VerticalProducts');
var OneColumnBanner = require('./Route/Appearance/StoreFront/HomePageSection/OneColumnBanner');
var ProductGrid = require('./Route/Appearance/StoreFront/HomePageSection/ProductGrid');
var ProductTabsOne = require('./Route/Appearance/StoreFront/HomePageSection/ProductTabsOne');
var ProductTabsTwo = require('./Route/Appearance/StoreFront/HomePageSection/ProductTabsTwo');
var SliderBanner =  require('./Route/Appearance/StoreFront/HomePageSection/SliderBanners');
var ThreeColumnBanners = require('./Route/Appearance/StoreFront/HomePageSection/ThreeColumnBanners');
var ThreeColumnFullWidthBanners = require('./Route/Appearance/StoreFront/HomePageSection/ThreeColumnFullWidthBanners');
var TopBrands = require('./Route/Appearance/StoreFront/HomePageSection/TopBrands');
var Twocolumnbanners = require('./Route/Appearance/StoreFront/HomePageSection/Twocolumnbanners');
//Tools_import
var Import = require('./Route/Tools/Import');
//Settings_general
var Setting = require('./Route/Settings/General/General');
var SettingCurrency = require('./Route/Settings/General/Currency');
var SettingCustomCSSJS = require('./Route/Settings/General/SettingCustomCSSJS');
var SettingMail = require('./Route/Settings/General/Mail');
var SettingMaintenance = require('./Route/Settings/General/Maintenance');
var SettingNewsletter = require('./Route/Settings/General/Newsletter');
var SettingStore = require('./Route/Settings/General/Store');
//Settings_Payment
var BankTransfer = require('./Route/Settings/Payment/BankTransfer');
var CashOnDelivery = require('./Route/Settings/Payment/CashOnDelivery');
var CheckMoneyOrder = require('./Route/Settings/Payment/CheckMoneyOrder');
var Instamojo = require('./Route/Settings/Payment/Instamojo');
var PayPal = require('./Route/Settings/Payment/PayPal');
var Razorpay = require('./Route/Settings/Payment/RazorPay');
var Stripe = require('./Route/Settings/Payment/Stripe');
//Settings_Shipping
var SettingFlatRate = require('./Route/Settings/Shipping/FlatRate');
var SettingFreeShipping = require('./Route/Settings/Shipping/FreeShipping');
var SettingLocalPickup = require('./Route/Settings/Shipping/LocalPickup');
//Settings_SocialLogins
var SettingFacebook = require('./Route/Settings/SocialLogins/Facebook');
var SettingGoogle = require('./Route/Settings/SocialLogins/Google');

//Product
app.use("/Product",Product); 
app.use("/ProductPrice",ProductPrice);
app.use("/ProductInventory",ProductInventory);
app.use("/ProductImage",ProductImage);
app.use("/ProductSEO",ProductSEO);
app.use("/ProductAttributes",ProductAttributes);
app.use("/ProductOptions",ProductOptions);
app.use("/ProductAdditional",ProductAdditional);
//Categories
app.use("/Categories",Categories);
app.use("/CategoriesImage",CategoriesImage);
//Brand
app.use("/Brand",Brand);
app.use("/BrandImage",BrandImage);
app.use("/BrandSEO",BrandSEO);
 //Attributes
 app.use("/Attributes",Attributes);
 app.use("/AttributesValues", AttributesValues);
 //AttributeSet
 app.use("/AttributeSet",AttributeSet);
 //Options
 app.use("/Options",Options);
 app.use("/OptionsValues",OptionsValues)
 //Tag
 app.use("/Tag",Tag);
 //FlashSales
 app.use("/FlashSalesProducts",FlashSalesProducts);
 app.use("/FlashSalesSettings",FlashSalesSettings);
 //Coupons
 app.use("/Coupons",Coupons);
 app.use("/CouponsUsageLimits",CouponsUsageLimits);
 app.use("/CouponsUsageRestrictions",CouponsUsageRestrictions);
//Pages
app.use("/Pages",Pages);
app.use("/PagesSEO",PagesSEO);
//Menus
app.use("/Menu",Menu);
//Users
app.use("/UsersAccount",UsersAccount);
//Roles
app.use("/Roles",Roles);
//Taxes
app.use("/Taxes",Taxes);
app.use("/TaxesRates",TaxesRates);
//Sliders
app.use("/Slides",Slides);
app.use("/SlidesOptions",SlidesOptions);
app.use("/SlidersSettings",SlidersSettings);
//StoreFront_GeneralSettings
app.use("/StoreFront",StoreFront);
app.use("/StoreFrontFeatures",StoreFrontFeatures);
app.use("/StoreFrontFooter",StoreFrontFooter);
app.use("/StoreFrontLogo",StoreFrontLogo);
app.use("/StoreFrontMenu",StoreFrontMenu);
app.use("/StoreFrontNewsletter",StoreFrontNewsletter);
app.use("/StoreFrontProduct",StoreFrontProduct);
app.use("/StoreFrontSocialLinks", StoreFrontSocialLinks);
//StoreFront_HomePageSection
app.use("/FeaturedCategories", FeaturedCategories);
app.use("/FlashSaleVerticalProducts",FlashSaleVerticalProducts);
app.use("/OneColumnBanner",OneColumnBanner);
app.use("/ProductGrid",ProductGrid);
app.use("/ProductTabsOne",ProductTabsOne);
app.use("/ProductTabsTwo", ProductTabsTwo);
app.use("/SliderBanner",SliderBanner);
app.use("/ThreeColumnBanners",ThreeColumnBanners);
app.use("/ThreeColumnFullWidthBanners",ThreeColumnFullWidthBanners);
app.use("/TopBrands",TopBrands);
app.use("/Twocolumnbanners", Twocolumnbanners);
//Tools_import
app.use("/Import",Import);
//Settings_General
app.use("/SettingCurrency",SettingCurrency);
app.use("/SettingCustomCSSJS", SettingCustomCSSJS);
app.use("/Setting", Setting);
app.use("/SettingMail",SettingMail);
app.use("/SettingMaintenance",SettingMaintenance);
app.use("/SettingNewsletter",SettingNewsletter);
app.use("/SettingStore",SettingStore);
//Settings_Payment
app.use("/BankTransfer",BankTransfer);
app.use("/CashOnDelivery",CashOnDelivery);
app.use("/CheckMoneyOrder",CheckMoneyOrder);
app.use("/Instamojo",Instamojo);
app.use("/PayPal",PayPal);
app.use("/Razorpay",Razorpay);
app.use("/Stripe", Stripe);
//Settings_Shipping
app.use("/SettingFlatRate",SettingFlatRate);
app.use("/SettingFreeShipping",SettingFreeShipping);
app.use("/SettingLocalPickup",SettingLocalPickup);
//Setting_SocialLogins
app.use("/SettingFacebook",SettingFacebook);
app.use("/SettingGoogle",SettingGoogle);

//Listen Port
app.listen(4000,() => { console.log("Server Started at port no 4000");})

//DB Connection 
mongoose.connect('mongodb://localhost/E-Commerce',{useNewUrlParser: true, useUnifiedTopology: true},err => {
  if(!err)
      {
          console.log("DB Connected");
      }
      else{
        { console.log('Error in DB connection : ' + err) }
      }
});
 
 




  