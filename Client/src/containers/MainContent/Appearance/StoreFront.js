import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link, withRouter } from 'react-router-dom';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';

import {
    saveStorefront, saveStorefrontmenu, saveStorefrontfeatures, saveStorefrontsociallinks, saveStorefrontfeaturecategories,
    saveStorefrontproducttabone, saveStorefronttopbrands, saveFlashsale_verticalproducts, saveProductgrid, saveProducttabtwo
} from "../../../store/Actions/Sliders"

class StoreFront extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [{ values: "" }],

            //Storefront_General
            WelcomeText: "", ThemeColor: "", MailThemeColor: "", Slider: "", TermsConditionsPage: "", PrivacyPolicyPage: "", Address: "",
            //Storefront_Menu
            NavbarText: "", PrimaryMenu: "", CategoryMenu: "", FooterMenuOneTitle: "", FooterMenuOne: "",
            FooterMenuTwoTitle: "", FooterMenuTwo: "",
            //Storefront_features
            SectionStatus: "", Title1: "", Subtitle1: "", Icon1: "", Title2: "", Subtitle2: "", Icon2: "", Title3: "",
            Subtitle3: "", Icon3: "", Title4: "", Subtitle4: "", Icon4: "", Title5: "", Subtitle5: "", Icon5: "",
            //Storefront_social_links
            Facebook: "", Twitter: "", Instagram: "", Youtube: "",
            //Storefront_featured_categories
            SectionStatus: "", SectionTitle: "", SectionSubtitle: "", Category1: "", Type1: "", Category2: "",
            Type2: "", Category3: "", Type3: "", Category4: "", Type4: "", Category5: "", Type5: "",
            //Product_Tab_One
            SectionStatus: "", Title1: "", Category1: "", Type1: "", Title2: "", Category2: "", Type2: "", Title3: "", Category3: "",
            Type3: "", Title4: "", Category4: "", Type4: "", Title5: "", Category5: "", Type5: "",
            //Top_brands
            TopBrands: "", SectionStatus: "",
            //Flashsale_verticalproducts
            SectionStatus: "", FlashTitle: "", ActiveCampaign: "", Title1: "", Category1: "", Type1: "", Title2: "", Category2: "", Type2: "", Title3: "", Category3: "",
            Type3: "", Title4: "", Category4: "", Type4: "", Title5: "", Category5: "", Type5: "",
            //Product_grid
            SectionStatus: "", Title1: "", Category1: "", Type1: "", Title2: "", Category2: "", Type2: "", Title3: "", Category3: "",
            Type3: "", Title4: "", Category4: "", Type4: "", Title5: "", Category5: "", Type5: "",
            //Product_Tab_Two
            SectionStatus: "", Title: "", Title1: "", ProductsLimit1: "", Type1: "", Title2: "", ProductsLimit2: "", Type2: "",
            Title3: "", Category3: "", Type3: "", Title4: "", Category4: "", Type4: "", Title5: "", Category5: "", Type5: "",
        };

    }
    StoreFrontSubmit = event => {
        event.preventDefault();
        let data =
        {
            WelcomeText: this.state.WelcomeText,
            ThemeColor: this.state.ThemeColor,
            MailThemeColor: this.state.MailThemeColor,
            Slider: this.state.Slider,
            TermsConditionsPage: this.state.TermsConditionsPage,
            PrivacyPolicyPage: this.state.PrivacyPolicyPage,
            Address: this.state.Address,
            General_Id: 1,
        }
        console.log("datas", data)
        this.props.saveStorefront(data, this.props.history);
        toast.success('Added Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.setState({
            WelcomeText: "",
            ThemeColor: "",
            MailThemeColor: "",
            Slider: "",
            TermsConditionsPage: "",
            PrivacyPolicyPage: "",
            Address: "",
        })
    }
    StoreFrontMenuSubmit = event => {
        event.preventDefault();
        let data =
        {
            NavbarText: this.state.NavbarText,
            PrimaryMenu: this.state.PrimaryMenu,
            CategoryMenu: this.state.CategoryMenu,
            FooterMenuOneTitle: this.state.FooterMenuOneTitle,
            FooterMenuOne: this.state.FooterMenuOne,
            FooterMenuTwoTitle: this.state.FooterMenuTwoTitle,
            FooterMenuTwo: this.state.FooterMenuTwo,
            Menu_Id: 1,
        }
        console.log("datas", data)
        this.props.saveStorefrontmenu(data, this.props.history);
        toast.success('Added Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.setState({
            NavbarText: "",
            PrimaryMenu: "",
            CategoryMenu: "",
            FooterMenuOneTitle: "",
            FooterMenuOne: "",
            FooterMenuTwoTitle: "",
            FooterMenuTwo: "",
        })
    }
    StoreFrontFeatureSubmit = event => {
        event.preventDefault();
        let data =
        {
            SectionStatus: this.state.SectionStatus,
            Title1: this.state.Title1,
            Subtitle1: this.state.Subtitle1,
            Icon1: this.state.Icon1,
            Title2: this.state.Title2,
            Subtitle2: this.state.Subtitle2,
            Icon2: this.state.Icon2,
            Title3: this.state.Title3,
            Subtitle3: this.state.Subtitle3,
            Icon3: this.state.Icon3,
            Title4: this.state.Title4,
            Subtitle4: this.state.Subtitle4,
            Icon4: this.state.Icon4,
            Title5: this.state.Title5,
            Subtitle5: this.state.Subtitle5,
            Icon5: this.state.Icon5,
            Features_Id: 1,
        }
        console.log("datas", data)
        this.props.saveStorefrontfeatures(data, this.props.history);
        toast.success('Added Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.setState({
            Title1: "",
            Subtitle1: "",
            Icon1: "",
            Title2: "",
            Subtitle2: "",
            Icon2: "",
            Title3: "",
            Subtitle3: "",
            Icon3: "",
            Title4: "",
            Subtitle4: "",
            Icon4: "",
            Title5: "",
            Subtitle5: "",
            Icon5: "",

        })
    }
    StoreFrontSocialSubmit = event => {
        event.preventDefault();
        let data =
        {
            Facebook: this.state.Facebook,
            Twitter: this.state.Twitter,
            Instagram: this.state.Instagram,
            Youtube: this.state.Youtube,
            Social_Id: 1,
        }
        console.log("datas", data)
        this.props.saveStorefrontsociallinks(data, this.props.history);
        toast.success('Added Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.setState({
            Facebook: "",
            Twitter: "",
            Instagram: "",
            Youtube: "",
        })
    }
    StoreFrontFCSubmit = event => {
        event.preventDefault();
        let data =
        {
            SectionStatus: this.state.SectionStatus,
            SectionTitle: this.state.SectionTitle,
            SectionSubtitle: this.state.SectionSubtitle,
            Category1: this.state.Category1,
            Type1: this.state.Type1,
            Category2: this.state.Category2,
            Type2: this.state.Type2,
            Category3: this.state.Category3,
            Type3: this.state.Type3,
            Category4: this.state.Category4,
            Type4: this.state.Type4,
            Category5: this.state.Category5,
            Type5: this.state.Type5,
            Featured_Id: 1,
        }
        console.log("datas", data)
        this.props.saveStorefrontfeaturecategories(data, this.props.history);
        toast.success('Added Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.setState({
            SectionStatus: "",
            SectionTitle: "",
            SectionSubtitle: "",
            Category1: "",
            Type1: "",
            Category2: "",
            Type2: "",
            Category3: "",
            Type3: "",
            Category4: "",
            Type4: "",
            Category5: "",
            Type5: "",
        })
    }
    ProductTabOneSubmit = event => {
        event.preventDefault();
        let data =
        {
            SectionStatus: this.state.SectionStatus,
            Title1: this.state.Title1,
            Category1: this.state.Category1,
            Type1: this.state.Type1,
            Title2: this.state.Title2,
            Category2: this.state.Category2,
            Type2: this.state.Type2,
            Title3: this.state.Title3,
            Category3: this.state.Category3,
            Type3: this.state.Type3,
            Title4: this.state.Title4,
            Category4: this.state.Category4,
            Type4: this.state.Type4,
            Title5: this.state.Title5,
            Category5: this.state.Category5,
            Type5: this.state.Type5,
            Tab_Id: 1,
        }
        console.log("datas", data)
        this.props.saveStorefrontproducttabone(data, this.props.history);
        toast.success('Added Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.setState({
            SectionStatus: "",
            Title1: "",
            Category1: "",
            Type1: "",
            Title2: "",
            Category2: "",
            Type2: "",
            Title3: "",
            Category3: "",
            Type3: "",
            Title4: "",
            Category4: "",
            Type4: "",
            Title5: "",
            Category5: "",
            Type5: "",
        })
    }
    TopbrandsSubmit = event => {
        event.preventDefault();
        let data =
        {
            SectionStatus: this.state.SectionStatus,
            TopBrands: this.state.TopBrands,
            TopBrand_Id: 1,
        }
        console.log("datas", data)
        this.props.saveStorefronttopbrands(data, this.props.history);
        toast.success('Added Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.setState({
            SectionStatus: "",
            TopBrands: "",

        })
    }
    VerticalproductsSubmit = event => {
        event.preventDefault();
        let data =
        {
            SectionStatus: this.state.SectionStatus,
            FlashTitle: this.state.FlashTitle,
            ActiveCampaign: this.state.ActiveCampaign,
            Title1: this.state.Title1,
            Category1: this.state.Category1,
            Type1: this.state.Type1,
            Title2: this.state.Title2,
            Category2: this.state.Category2,
            Type2: this.state.Type2,
            Title3: this.state.Title3,
            Category3: this.state.Category3,
            Type3: this.state.Type3,
            Title4: this.state.Title4,
            Category4: this.state.Category4,
            Type4: this.state.Type4,
            Title5: this.state.Title5,
            Category5: this.state.Category5,
            Type5: this.state.Type5,
            Vertical_Id: 1,
        }
        console.log("datas", data)
        this.props.saveFlashsale_verticalproducts(data, this.props.history);
        toast.success('Added Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.setState({
            SectionStatus: "",
            FlashTitle: "",
            ActiveCampaign: "",
            Title1: "",
            Category1: "",
            Type1: "",
            Title2: "",
            Category2: "",
            Type2: "",
            Title3: "",
            Category3: "",
            Type3: "",
            Title4: "",
            Category4: "",
            Type4: "",
            Title5: "",
            Category5: "",
            Type5: "",

        })
    }
    ProductgridSubmit = event => {
        event.preventDefault();
        let data =
        {
            SectionStatus: this.state.SectionStatus,
            Title1: this.state.Title1,
            Category1: this.state.Category1,
            Type1: this.state.Type1,
            Title2: this.state.Title2,
            Category2: this.state.Category2,
            Type2: this.state.Type2,
            Title3: this.state.Title3,
            Category3: this.state.Category3,
            Type3: this.state.Type3,
            Title4: this.state.Title4,
            Category4: this.state.Category4,
            Type4: this.state.Type4,
            Title5: this.state.Title5,
            Category5: this.state.Category5,
            Type5: this.state.Type5,
            Grid_Id: 1,
        }
        console.log("datas", data)
        this.props.saveProductgrid(data, this.props.history);
        toast.success('Added Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.setState({
            SectionStatus: "",
            Title1: "",
            Category1: "",
            Type1: "",
            Title2: "",
            Category2: "",
            Type2: "",
            Title3: "",
            Category3: "",
            Type3: "",
            Title4: "",
            Category4: "",
            Type4: "",
            Title5: "",
            Category5: "",
            Type5: "",

        })
    }
    ProducttabtwoSubmit = event => {
        event.preventDefault();
        let data =
        {
            SectionStatus: this.state.SectionStatus,
            Title: this.state.Title,
            Title1: this.state.Title1,
            ProductsLimit1: this.state.ProductsLimit1,
            Type1: this.state.Type1,
            Title2: this.state.Title2,
            ProductsLimit2: this.state.ProductsLimit2,
            Type2: this.state.Type2,
            Title3: this.state.Title3,
            Category3: this.state.Category3,
            Type3: this.state.Type3,
            Title4: this.state.Title4,
            Category4: this.state.Category4,
            Type4: this.state.Type4,
            Title5: this.state.Title5,
            Category5: this.state.Category5,
            Type5: this.state.Type5,
            TabTwo_Id: 1,
        }
        console.log("datas", data)
        this.props.saveProducttabtwo(data, this.props.history);
        toast.success('Added Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.setState({
            SectionStatus: "",
            Title: "",
            Title1: "",
            ProductsLimit1: "",
            Type1: "",
            Title2: "",
            ProductsLimit2: "",
            Type2: "",
            Title3: "",
            Category3: "",
            Type3: "",
            Title4: "",
            Category4: "",
            Type4: "",



        })
    }
    adding = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <AUX>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div className="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <h3>General Settings</h3>
                                        <hr></hr>
                                        <ul className="nav nav-pills nav-justified" role="tablist">
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link active" data-toggle="tab" href="#general" role="tab">
                                                    <span className="d-none d-md-block">General</span><span className="d-block d-md-none"><i className="mdi mdi-home-variant h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#logo" role="tab">
                                                    <span className="d-none d-md-block">Logo</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#menu" role="tab">
                                                    <span className="d-none d-md-block">Menus</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#footer" role="tab">
                                                    <span className="d-none d-md-block">Footer</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#news_letter" role="tab">
                                                    <span className="d-none d-md-block">Newsletter</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#features" role="tab">
                                                    <span className="d-none d-md-block">Features</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#products" role="tab">
                                                    <span className="d-none d-md-block">Product Page</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#links" role="tab">
                                                    <span className="d-none d-md-block">Social Links</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                        </ul>
                                        <hr></hr>
                                        <div className="tab-content">
                                            <div className="tab-pane active p-1" id="general" role="tabpanel">
                                                {/* Welcome Text*/}
                                                <form onSubmit={this.StoreFrontSubmit}>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="welcome_text">Welcome Text</label>
                                                                <input id="welcome_text" name="WelcomeText" onChange={this.adding} value={this.state.WelcomeText} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Theme Color</label>
                                                                <select className="form-control select2" name="ThemeColor" onChange={this.adding} value={this.state.ThemeColor}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Blue</option>
                                                                    <option value="HIW">Yellow</option>
                                                                    <option value="HID">Red</option>
                                                                    <option value="HIF">Green</option>
                                                                    <option value="HIF">Pink</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Mail Theme Color</label>
                                                                <select className="form-control select2" name="MailThemeColor" onChange={this.adding} value={this.state.MailThemeColor}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Blue</option>
                                                                    <option value="HIS">Yellow</option>
                                                                    <option value="HIF">Red</option>
                                                                    <option value="HIB">Green</option>
                                                                    <option value="HIA">Pink</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Slider</label>
                                                                <select className="form-control select2" name="Slider" onChange={this.adding} value={this.state.Slider}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Main Slider</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Terms and Conditions Page</label>
                                                                <select className="form-control select2" name="TermsConditionsPage" onChange={this.adding} value={this.state.TermsConditionsPage}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Terms and conditions</option>
                                                                    <option value="AKd">Return Policy</option>
                                                                    <option value="AKv">FAQ</option>
                                                                    <option value="AKS">About us</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Privacy Policy Page</label>
                                                                <select className="form-control select2" name="PrivacyPolicyPage" onChange={this.adding} value={this.state.PrivacyPolicyPage}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Terms and conditions</option>
                                                                    <option value="AKf">Return Policy</option>
                                                                    <option value="AKs">FAQ</option>
                                                                    <option value="AKv">About us</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="address">Address</label>
                                                                <input id="address" name="Address" onChange={this.adding} value={this.state.Address} type="text" className="form-control" />
                                                            </div>
                                                        </div>

                                                        <div className="col-6">
                                                            <br></br>
                                                        &nbsp; &nbsp; &nbsp;<button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;Save &nbsp; </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane p-2" id="logo" role="tabpanel">
                                                {/*Logo creation */}
                                                <form >
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div class="single-image-wrapper">
                                                                <h4>Favicon</h4>
                                                                <br></br>
                                                                <input type="file"></input>
                                                            </div>
                                                        </div>

                                                        <div class="col-4">
                                                            <div class="single-image-wrapper">
                                                                <h4>Header Logo</h4>
                                                                <br></br>
                                                                <input type="file"></input>

                                                                <div class="clearfix"></div>

                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div class="single-image-wrapper">
                                                                <h4>Mail Logo</h4>
                                                                <br></br>
                                                                <input type="file"></input>

                                                                <div class="clearfix"></div>

                                                            </div>
                                                        </div>

                                                        <div class="col-4">
                                                            <div class="single-image-wrapper">
                                                                <br></br>
                                                                <button type="submit" className="btn btn-primary waves-effect waves-light">Save </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* menu */}
                                            <div className="tab-pane p-3" id="menu" role="tabpanel">
                                                <form onSubmit={this.StoreFrontMenuSubmit}>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="navbar_text">Navbar Text</label>
                                                                <input id="navbar_text" name="NavbarText" onChange={this.adding} value={this.state.NavbarText} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Primary Menu</label>
                                                                <select className="form-control select2" name="PrimaryMenu" onChange={this.adding} value={this.state.PrimaryMenu}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Primary Menu</option>
                                                                    <option value="HI">Category Menu</option>
                                                                    <option value="HI">Footer Menu 1</option>
                                                                    <option value="HI">Footer Menu 2</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category Menu</label>
                                                                <select className="form-control select2" name="CategoryMenu" onChange={this.adding} value={this.state.CategoryMenu}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Primary Menu</option>
                                                                    <option value="HI">Category Menu</option>
                                                                    <option value="HI">Footer Menu 1</option>
                                                                    <option value="HI">Footer Menu 2</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="footer_1">Footer Menu One Title</label>
                                                                <input id="footer_1" name="FooterMenuOneTitle" onChange={this.adding} value={this.state.FooterMenuOneTitle} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Footer Menu One</label>
                                                                <select className="form-control select2" name="FooterMenuOne" onChange={this.adding} value={this.state.FooterMenuOne}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Primary Menu</option>
                                                                    <option value="HIb">Category Menu</option>
                                                                    <option value="HIz">Footer Menu 1</option>
                                                                    <option value="HIc">Footer Menu 2</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="footer_2">Footer Menu Two Title</label>
                                                                <input id="footer_2" name="FooterMenuTwoTitle" onChange={this.adding} value={this.state.FooterMenuTwoTitle} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Footer Menu Two</label>
                                                                <select className="form-control select2" name="FooterMenuTwo" onChange={this.adding} value={this.state.FooterMenuTwo}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Primary Menu</option>
                                                                    <option value="HId">Category Menu</option>
                                                                    <option value="HIg">Footer Menu 1</option>
                                                                    <option value="HIs">Footer Menu 2</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <br></br>
                                                        &nbsp; &nbsp; &nbsp;<button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* Footer */}
                                            <div className="tab-pane p-4" id="footer" role="tabpanel">
                                                <form >
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="navbar_text">Footer Tags</label>
                                                                <div class="form-group">
                                                                    <Select

                                                                        value=""
                                                                        onChange=""
                                                                        isMulti={true}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="footer_text">Footer Copyright Text</label>
                                                                <input id="footer_text" value="All rights reserved." name="footer_text" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br></br>
                                                    <h4>Accepted Payment Methods Image</h4>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <br></br>
                                                            <input type="file"></input>
                                                        </div>
                                                        <div className="col-4">
                                                            <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* Newsletter */}
                                            <div className="tab-pane p-5" id="news_letter" role="tabpanel">
                                                <form >
                                                    <h4>Background Image</h4>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <br></br>
                                                            <input type="file"></input>
                                                        </div>
                                                        <div className="col-4">
                                                            <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* Features */}
                                            <div className="tab-pane p-6" id="features" role="tabpanel">
                                                <form onSubmit={this.StoreFrontFeatureSubmit}>
                                                    <label for="title">Section Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="checkbox" name="SectionStatus" onChange={this.adding} /> &nbsp;<span>Enable features section</span>
                                                    <br></br>
                                                    <br></br>
                                                    <h4>Feature 1</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 1</label>
                                                                <input id="title" name="Title1" onChange={this.adding} value={this.state.Title1} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="subtitle">Subtitle 1</label>
                                                                <input id="subtitle" name="Subtitle1" onChange={this.adding} value={this.state.Subtitle1} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="icon">Icon 1</label>
                                                                <input id="icon" name="Icon1" onChange={this.adding} value={this.state.Icon1} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Feature 2</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 2</label>
                                                                <input id="title" name="Title2" onChange={this.adding} value={this.state.Title2} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="subtitle">Subtitle 2</label>
                                                                <input id="subtitle" name="Subtitle2" onChange={this.adding} value={this.state.Subtitle2} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="icon">Icon 2</label>
                                                                <input id="icon" name="Icon2" onChange={this.adding} value={this.state.Icon2} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Feature 3</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 3</label>
                                                                <input id="title" name="Title3" onChange={this.adding} value={this.state.Title3} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="subtitle">Subtitle 3</label>
                                                                <input id="subtitle" name="Subtitle3" onChange={this.adding} value={this.state.Subtitle3} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="icon">Icon 3</label>
                                                                <input id="icon" name="Icon3" type="text" onChange={this.adding} value={this.state.Icon3} className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Feature 4</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 4</label>
                                                                <input id="title" name="Title4" type="text" onChange={this.adding} value={this.state.Title4} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="subtitle">Subtitle 4</label>
                                                                <input id="subtitle" name="Subtitle4" onChange={this.adding} value={this.state.Subtitle4} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="icon">Icon 4</label>
                                                                <input id="icon" name="Icon4" type="text" onChange={this.adding} value={this.state.Icon4} className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Feature 5</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 5</label>
                                                                <input id="title" name="Title5" type="text" onChange={this.adding} value={this.state.Title5} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="subtitle">Subtitle 5</label>
                                                                <input id="subtitle" name="Subtitle5" onChange={this.adding} value={this.state.Subtitle5} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="icon">Icon 5</label>
                                                                <input id="icon" name="Icon5" type="text" onChange={this.adding} value={this.state.Icon5} className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="button nav-link" value='add_global' class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">Save</button>
                                                </form>
                                            </div>
                                            {/* Product */}
                                            <div className="tab-pane p-7" id="products" role="tabpanel">
                                                <form >
                                                    <h4>Product Page Banner</h4>
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <br></br>
                                                            <label>Call to Action URL</label> <br></br>
                                                            <input type="file"></input> <br></br>
                                                            <br></br>
                                                            <input type="checkbox" defaultValue="" onChange="" /> &nbsp;<span>Open in new window</span>
                                                        </div>
                                                        <div className="col-4">
                                                            <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* Social links */}
                                            <div className="tab-pane p-7" id="links" role="tabpanel">
                                                <form onSubmit={this.StoreFrontSocialSubmit}>
                                                    <div className="row">
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label for="facebook">Facebook</label>
                                                                <input id="facebook" name="Facebook" onChange={this.adding} value={this.state.Facebook} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label for="twitter">Twitter</label>
                                                                <input id="twitter" name="Twitter" onChange={this.adding} value={this.state.Twitter} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label for="instagram">Instagram</label>
                                                                <input id="instagram" name="Instagram" onChange={this.adding} value={this.state.Instagram} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label for="youtube">Youtube</label>
                                                                <input id="youtube" name="Youtube" onChange={this.adding} value={this.state.Youtube} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 2nd panel */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <h3>Home Page Sections</h3>
                                        <hr></hr>
                                        <ul className="nav nav-pills nav-justified" role="tablist">
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link active" data-toggle="tab" href="#slider" role="tab">
                                                    <span className="d-none d-md-block">Slider Banners</span><span className="d-block d-md-none"><i className="mdi mdi-home-variant h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#full-width_bannar" role="tab">
                                                    <span className="d-none d-md-block">Three Column Full Width Banners</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#categories" role="tab">
                                                    <span className="d-none d-md-block">Featured Categories</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#tab_one" role="tab">
                                                    <span className="d-none d-md-block">Product Tabs One</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#brands" role="tab">
                                                    <span className="d-none d-md-block">Top Brands</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#flash_sale" role="tab">
                                                    <span className="d-none d-md-block">Flash Sale and Vertical Products</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#two_column" role="tab">
                                                    <span className="d-none d-md-block">Two column banners</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#product_grid" role="tab">
                                                    <span className="d-none d-md-block">Product Grid</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#three_column_b" role="tab">
                                                    <span className="d-none d-md-block">Three Column Banners</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#tab_two" role="tab">
                                                    <span className="d-none d-md-block">Product Tabs Two</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#one_column_banner" role="tab">
                                                    <span className="d-none d-md-block">One Column Banner</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                        </ul>
                                        <hr></hr>
                                        <div className="tab-content">
                                            <div className="tab-pane active p-1" id="slider" role="tabpanel">
                                                <form>
                                                    <h4>Slider Banners</h4>
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <h4>Banner 1</h4>
                                                            <br></br>
                                                            <label>Call to Action URL</label> <br></br>
                                                            <input type="file"></input> <br></br>

                                                            <input type="checkbox" defaultValue="" onChange="" /> &nbsp;<span>Open in new window</span>
                                                        </div>
                                                        <div class="col-6">
                                                            <h4>Banner 2</h4>
                                                            <br></br>
                                                            <label>Call to Action URL</label> <br></br>
                                                            <input type="file"></input> <br></br>
                                                            <br></br>
                                                            <input type="checkbox" defaultValue="" onChange="" /> &nbsp;<span>Open in new window</span>

                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane p-2" id="full-width_bannar" role="tabpanel">
                                                <form>
                                                    <div class="row">
                                                        <h4>Three Column Full Width Banners</h4>
                                                        <label for="title">Section Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="checkbox" defaultValue="" onChange="" /> &nbsp;<span>Enable features section</span>
                                                        <br></br>         <br></br>
                                                    </div>
                                                    <br></br> <br></br>
                                                    <h4>Background</h4>
                                                    <input type="file"></input>
                                                    <br></br>
                                                    <br></br>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <h4>Banner 1</h4>
                                                            <br></br>
                                                            <label>Call to Action URL</label> <br></br>
                                                            <input type="file"></input> <br></br>
                                                            <br></br>
                                                            <input type="checkbox" defaultValue="" onChange="" /> &nbsp;<span>Open in new window</span>
                                                        </div>
                                                        <div class="col-4">
                                                            <h4>Banner 2</h4>
                                                            <br></br>
                                                            <label>Call to Action URL</label> <br></br>
                                                            <input type="file"></input> <br></br>
                                                            <br></br>
                                                            <input type="checkbox" defaultValue="" onChange="" /> &nbsp;<span>Open in new window</span>
                                                        </div>
                                                        <div class="col-4">
                                                            <h4>Banner 3</h4>
                                                            <br></br>
                                                            <label>Call to Action URL</label> <br></br>
                                                            <input type="file"></input> <br></br>
                                                            <br></br>
                                                            <input type="checkbox" defaultValue="" onChange="" /> &nbsp;<span>Open in new window</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <br></br>
                                                        &nbsp; &nbsp; &nbsp;<button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* categories */}
                                            <div className="tab-pane p-4" id="categories" role="tabpanel">
                                                <form onSubmit={this.StoreFrontFCSubmit}>
                                                    <h4>Featured Categories</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <label for="title">Section Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" name="SectionStatus" onChange={this.adding} /> &nbsp;<span>Enable features section</span>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="subtitle">Section Title</label>
                                                                <input id="subtitle" name="SectionTitle" onChange={this.adding} value={this.state.SectionTitle} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="icon">Section Subtitle</label>
                                                                <input id="icon" name="SectionSubtitle" onChange={this.adding} value={this.state.SectionSubtitle} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Category 1</h4>
                                                    <div className="row">
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 1</label>
                                                                <select className="form-control select2" name="Category1" onChange={this.adding} value={this.state.Category1}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HIe">Laptops</option>
                                                                    <option value="HIf">Mobile</option>
                                                                    <option value="HIg">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 1</label>
                                                                <select className="form-control select2" name="Type1" onChange={this.adding} value={this.state.Type1}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="sf">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Category 2</h4>
                                                    <div className="row">
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 2</label>
                                                                <select className="form-control select2" name="Category2" onChange={this.adding} value={this.state.Category2}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HIr">Laptops</option>
                                                                    <option value="HIf">Mobile</option>
                                                                    <option value="HIs">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 2</label>
                                                                <select className="form-control select2" name="Type2" onChange={this.adding} value={this.state.Type2}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Category 3</h4>
                                                    <div className="row">
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 3</label>
                                                                <select className="form-control select2" name="Category3" onChange={this.adding} value={this.state.Category3}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HId">Laptops</option>
                                                                    <option value="HIf">Mobile</option>
                                                                    <option value="HIg">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 3</label>
                                                                <select className="form-control select2" name="Type3" onChange={this.adding} value={this.state.Type3}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Category 4</h4>
                                                    <div className="row">
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 4</label>
                                                                <select className="form-control select2" name="Category4" onChange={this.adding} value={this.state.Category4}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HI">Laptops</option>
                                                                    <option value="HI">Mobile</option>
                                                                    <option value="HI">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 4</label>
                                                                <select className="form-control select2" name="Type4" onChange={this.adding} value={this.state.Type4}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Category 5</h4>
                                                    <div className="row">
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 5</label>
                                                                <select className="form-control select2" name="Category5" onChange={this.adding} value={this.state.Category5}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HId">Laptops</option>
                                                                    <option value="HIs">Mobile</option>
                                                                    <option value="HIe">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 5</label>
                                                                <select className="form-control select2" name="Type5" onChange={this.adding} value={this.state.Type5} >
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="button nav-link" value='add_global' class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">Save</button>
                                                </form>
                                            </div>
                                            {/* Products tab one */}
                                            <div className="tab-pane p-5" id="tab_one" role="tabpanel">
                                                <form onSubmit={this.ProductTabOneSubmit}>
                                                    <h4>Product Tabs One</h4>
                                                    <label for="title">Section Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="checkbox" name="SectionStatus" onChange={this.adding} /> &nbsp;<span>Enable product tabs one section</span>
                                                    <h4>Tab 1</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 1</label>
                                                                <input id="title" name="Title1" onChange={this.adding} value={this.state.Title1} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 1</label>
                                                                <select className="form-control select2" name="Type1" onChange={this.adding} value={this.state.Type1}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 1</label>
                                                                <select className="form-control select2" name="Category1" onChange={this.adding} value={this.state.Category1}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HIsd">Laptops</option>
                                                                    <option value="HIds">Mobile</option>
                                                                    <option value="HIrf">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Tab 2</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 2</label>
                                                                <input id="title" name="Title2" onChange={this.adding} value={this.state.Title2} type="text" className="form-control" />
                                                            </div>

                                                        </div>


                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 2</label>
                                                                <select className="form-control select2" name="Type2" onChange={this.adding} value={this.state.Type2}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>



                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 2</label>
                                                                <select className="form-control select2" name="Category2" onChange={this.adding} value={this.state.Category2}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HIs">Laptops</option>
                                                                    <option value="HIw">Mobile</option>
                                                                    <option value="HIh">SmartPhones</option>



                                                                </select>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <h4>Tab 3</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 3</label>
                                                                <input id="title" name="Title3" onChange={this.adding} value={this.state.Title3} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 3</label>
                                                                <select className="form-control select2" name="Type3" onChange={this.adding} value={this.state.Type3}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 3</label>
                                                                <select className="form-control select2" name="Category3" onChange={this.adding} value={this.state.Category3}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HId">Laptops</option>
                                                                    <option value="HIs">Mobile</option>
                                                                    <option value="HIg">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Tab 4</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 4</label>
                                                                <input id="title" name="Title4" onChange={this.adding} value={this.state.Title4} type="text" className="form-control" />
                                                            </div>

                                                        </div>


                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 4</label>
                                                                <select className="form-control select2" name="Type4" onChange={this.adding} value={this.state.Type4}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>



                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 4</label>
                                                                <select className="form-control select2" name="Category4" onChange={this.adding} value={this.state.Category4}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HIsf">Laptops</option>
                                                                    <option value="HISE">Mobile</option>
                                                                    <option value="HIGF">SmartPhones</option>



                                                                </select>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <h4>Tab 5</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 5</label>
                                                                <input id="title" name="Title5" onChange={this.adding} value={this.state.Title5} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 5</label>
                                                                <select className="form-control select2" name="Type5" onChange={this.adding} value={this.state.Type5}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 5</label>
                                                                <select className="form-control select2" name="Category5" onChange={this.adding} value={this.state.Category5}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HIe">Laptops</option>
                                                                    <option value="HIn">Mobile</option>
                                                                    <option value="HIm">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="button nav-link" class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">Save</button>
                                                </form>
                                            </div>
                                            {/* top brands */}
                                            <div className="tab-pane p-5" id="brands" role="tabpanel">
                                                <form onSubmit={this.TopbrandsSubmit}>
                                                    <h4>Top Brands</h4>
                                                    <br></br>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <label for="title">Section Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" name="SectionStatus" onChange={this.adding} /> &nbsp;<span>Enable product tabs one section</span>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="navbar_text">Top Brands</label>
                                                                <div class="form-group">
                                                                    <select className="form-control select2" name="TopBrands" onChange={this.adding} value={this.state.TopBrands} isMulti={true}>
                                                                        <option>Select</option>
                                                                        <option value="AK">Apple</option>
                                                                        <option value="HIe">Laptops</option>
                                                                        <option value="HIn">Mobile</option>
                                                                        <option value="HIm">SmartPhones</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <br></br>
                                                            <button type="button nav-link" class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute"> Save</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* flash sale & vertical products */}
                                            <div className="tab-pane p-6" id="flash_sale" role="tabpanel">
                                                <form onSubmit={this.VerticalproductsSubmit}>
                                                    <h4>Flash Sale and Vertical Products</h4>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <label for="title">Section Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" name="SectionStatus" onChange={this.adding} /> &nbsp;<span>Enable product tabs one section</span>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title1">Flash Title</label>
                                                                <input id="title1" name="FlashTitle" onChange={this.adding} value={this.state.FlashTitle} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Active Campaign</label>
                                                                <select className="form-control select2" name="ActiveCampaign" onChange={this.adding} value={this.state.ActiveCampaign}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Flash Sale</option>
                                                                    <option value="custom_products">Winder Sale</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Vertical Products 1</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 1</label>
                                                                <input id="title" name="Title1" onChange={this.adding} value={this.state.Title1} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 1</label>
                                                                <select className="form-control select2" name="Type1" onChange={this.adding} value={this.state.Type1}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 1</label>
                                                                <select className="form-control select2" name="Category1" onChange={this.adding} value={this.state.Category1}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HIs">Laptops</option>
                                                                    <option value="HIf">Mobile</option>
                                                                    <option value="HIg">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Vertical Products 2</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 2</label>
                                                                <input id="title" name="Title2" onChange={this.adding} value={this.state.Title2} type="text" className="form-control" />
                                                            </div>

                                                        </div>


                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 2</label>
                                                                <select className="form-control select2" name="Type2" onChange={this.adding} value={this.state.Type2}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>



                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 2</label>
                                                                <select className="form-control select2" name="Category2" onChange={this.adding} value={this.state.Category2}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HId">Laptops</option>
                                                                    <option value="HIw">Mobile</option>
                                                                    <option value="HIa">SmartPhones</option>
                                                                </select>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <h4>Vertical Products 3</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 3</label>
                                                                <input id="title" name="Title3" onChange={this.adding} value={this.state.Title3} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 3</label>
                                                                <select className="form-control select2" name="Type3" onChange={this.adding} value={this.state.Type3}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 3</label>
                                                                <select className="form-control select2" name="Category3" onChange={this.adding} value={this.state.Category3}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HI">Laptops</option>
                                                                    <option value="HI">Mobile</option>
                                                                    <option value="HI">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Vertical Products 4</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 4</label>
                                                                <input id="title" name="Title4" onChange={this.adding} value={this.state.Title4} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 4</label>
                                                                <select className="form-control select2" name="Type4" onChange={this.adding} value={this.state.Type4}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 4</label>
                                                                <select className="form-control select2" name="Category4" onChange={this.adding} value={this.state.Category4}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HI">Laptops</option>
                                                                    <option value="HIds">Mobile</option>
                                                                    <option value="HId">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Vertical Products 5</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 5</label>
                                                                <input id="title" name="Title5" onChange={this.adding} value={this.state.Title5} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 5</label>
                                                                <select className="form-control select2" name="Type5" onChange={this.adding} value={this.state.Type5}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 5</label>
                                                                <select className="form-control select2" name="Category5" onChange={this.adding} value={this.state.Category5}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HI">Laptops</option>
                                                                    <option value="HIdr">Mobile</option>
                                                                    <option value="HIsa">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="button nav-link" value='add_global' class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">Save</button>
                                                </form>
                                            </div>
                                            {/* 2 column */}
                                            <div className="tab-pane p-7" id="two_column" role="tabpanel">
                                                <form >
                                                    <h4>Two column banners</h4>
                                                    <label for="title">Section Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="checkbox" defaultValue="" onChange="" checked /> &nbsp;<span>Enable product tabs one section</span>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <h4>Banner 1</h4>
                                                            <br></br>
                                                            <label>Call to Action URL</label> <br></br>
                                                            <input type="file"></input> <br></br><br></br>

                                                            <input type="checkbox" defaultValue="" onChange="" /> &nbsp;<span>Open in new window</span>

                                                        </div>


                                                        <div class="col-4">
                                                            <h4>Banner 2</h4>
                                                            <br></br>
                                                            <label>Call to Action URL</label> <br></br>
                                                            <input type="file"></input> <br></br>
                                                            <br></br>
                                                            <input type="checkbox" defaultValue="" onChange="" /> &nbsp;<span>Open in new window</span>

                                                        </div>

                                                    </div>
                                                    <button type="button nav-link" value='add_global' class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">Save</button>
                                                </form>
                                            </div>
                                            {/* grid */}
                                            <div className="tab-pane p-7" id="product_grid" role="tabpanel">
                                                <form onSubmit={this.ProductgridSubmit}>
                                                    <h4>Product Grid</h4>
                                                    <label for="title">Section Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="checkbox" name="SectionStatus" onChange={this.adding} /> &nbsp;<span>Enable product tabs one section</span>
                                                    <h4>Tab 1</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 1</label>
                                                                <input id="title" name="Title1" onChange={this.adding} value={this.state.Title1} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 1</label>
                                                                <select className="form-control select2" name="Type1" onChange={this.adding} value={this.state.Type1}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 1</label>
                                                                <select className="form-control select2" name="Category1" onChange={this.adding} value={this.state.Category1}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HId">Laptops</option>
                                                                    <option value="HI">Mobile</option>
                                                                    <option value="HIs">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Tab 2</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 2</label>
                                                                <input id="title" name="Title2" onChange={this.adding} value={this.state.Title2} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 2</label>
                                                                <select className="form-control select2" name="Type2" onChange={this.adding} value={this.state.Type2}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 2</label>
                                                                <select className="form-control select2" name="Category2" onChange={this.adding} value={this.state.Category2}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HI">Laptops</option>
                                                                    <option value="HIs">Mobile</option>
                                                                    <option value="HIc">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Tab 3</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 3</label>
                                                                <input id="title" name="Title3" onChange={this.adding} value={this.state.Title3} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 3</label>
                                                                <select className="form-control select2" name="Type3" onChange={this.adding} value={this.state.Type3}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 3</label>
                                                                <select className="form-control select2" name="Category3" onChange={this.adding} value={this.state.Category3}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HI">Laptops</option>
                                                                    <option value="HIf">Mobile</option>
                                                                    <option value="HIs">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Tab 4</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 4</label>
                                                                <input id="title" name="Title4" onChange={this.adding} value={this.state.Title4} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 4</label>
                                                                <select className="form-control select2" name="Type4" onChange={this.adding} value={this.state.Type4}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 4</label>
                                                                <select className="form-control select2" name="Category4" onChange={this.adding} value={this.state.Category4}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HI">Laptops</option>
                                                                    <option value="HI">Mobile</option>
                                                                    <option value="HI">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Tab 5</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 5</label>
                                                                <input id="title" name="Title5" onChange={this.adding} value={this.state.Title5} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 5</label>
                                                                <select className="form-control select2" name="Type5" onChange={this.adding} value={this.state.Type5}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category</label>
                                                                <select className="form-control select2" name="Category5" onChange={this.adding} value={this.state.Category5}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HI">Laptops</option>
                                                                    <option value="HIs">Mobile</option>
                                                                    <option value="HIe">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="button nav-link" value='add_global' class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">Save</button>
                                                </form>
                                            </div>
                                            {/* 3 column  */}
                                            <div className="tab-pane active p-9" id="three_column_b" role="tabpanel">
                                                <form>
                                                    <h4>Three Column Banners</h4>
                                                    <label for="title">Section Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="checkbox" defaultValue="" onChange="" checked /> &nbsp;<span>Enable product tabs one section</span>
                                                    <div class="row">
                                                        <div class="col-4s">
                                                            <h4>Banner 1</h4>
                                                            <br></br>
                                                            <label>Call to Action URL</label> <br></br>
                                                            <input type="file"></input> <br></br>
                                                            <input type="checkbox" defaultValue="" onChange="" /> &nbsp;<span>Open in new window</span>
                                                        </div>
                                                        <div class="col-4">
                                                            <h4>Banner 2</h4>
                                                            <br></br>
                                                            <label>Call to Action URL</label> <br></br>
                                                            <input type="file"></input> <br></br>
                                                            <br></br>
                                                            <input type="checkbox" defaultValue="" onChange="" /> &nbsp;<span>Open in new window</span>
                                                        </div>
                                                        <div class="col-4">
                                                            <h4>Banner 2</h4>
                                                            <br></br>
                                                            <label>Call to Action URL</label> <br></br>
                                                            <input type="file"></input> <br></br>
                                                            <br></br>
                                                            <input type="checkbox" defaultValue="" onChange="" /> &nbsp;<span>Open in new window</span>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* products two tabs */}
                                            <div className="tab-pane p-10" id="tab_two" role="tabpanel">
                                                <form onSubmit={this.ProducttabtwoSubmit}>
                                                    <h4>Product Tabs Two</h4>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <label for="title">Section Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <input type="checkbox" name="SectionStatus" onChange={this.adding} /> &nbsp;<span>Enable product tabs one section</span>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title</label>
                                                                <input id="title" name="Title" onChange={this.adding} value={this.state.Title} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Tab 1</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 1</label>
                                                                <input id="title" name="Title1" onChange={this.adding} value={this.state.Title1} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 1</label>
                                                                <select className="form-control select2" name="Type1" onChange={this.adding} value={this.state.Type1}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Products Limit 1</label>
                                                                <select className="form-control select2" name="ProductsLimit1" onChange={this.adding} value={this.state.ProductsLimit1}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HI">Laptops</option>
                                                                    <option value="HIs">Mobile</option>
                                                                    <option value="HId">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Tab 2</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 2</label>
                                                                <input id="title" name="Title2" onChange={this.adding} value={this.state.Title2} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 2</label>
                                                                <select className="form-control select2" name="Type2" onChange={this.adding} value={this.state.Type2}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Products Limit 2</label>
                                                                <select className="form-control select2" name="ProductsLimit2" onChange={this.adding} value={this.state.ProductsLimit2}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HI">Laptops</option>
                                                                    <option value="HIs">Mobile</option>
                                                                    <option value="HIc">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Tab 3</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 3</label>
                                                                <input id="title" name="Title3" onChange={this.adding} value={this.state.Title3} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 3</label>
                                                                <select className="form-control select2" name="Type3" onChange={this.adding} value={this.state.Type3}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 3</label>
                                                                <select className="form-control select2" name="Category3" onChange={this.adding} value={this.state.Category3}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HI">Laptops</option>
                                                                    <option value="HIs">Mobile</option>
                                                                    <option value="HIw">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h4>Tab 4</h4>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Title 4</label>
                                                                <input id="title" name="Title4" onChange={this.adding} value={this.state.Title4} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Type 4</label>
                                                                <select className="form-control select2" name="Type4" onChange={this.adding} value={this.state.Type4}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Category Products</option>
                                                                    <option value="custom_products">Custom Products</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Category 4</label>
                                                                <select className="form-control select2" name="Category4" onChange={this.adding} value={this.state.Category4}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Apple</option>
                                                                    <option value="HI">Laptops</option>
                                                                    <option value="HIs">Mobile</option>
                                                                    <option value="HIr">SmartPhones</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="button nav-link" value='add_global' class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">Save</button>
                                                </form>
                                            </div>
                                            {/* 1 column ban */}
                                            <div className="tab-pane active p-15" id="one_column_banner" role="tabpanel">
                                                <form>
                                                    <h4>One Column Banner</h4>
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <h4>Banner 1</h4>
                                                            <br></br>
                                                            <label>Call to Action URL</label> <br></br>
                                                            <input type="file"></input> <br></br>
                                                            <input type="checkbox" defaultValue="" onChange="" /> &nbsp;<span>Open in new window</span>
                                                        </div>
                                                    </div>
                                                    <button type="button nav-link" class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">Save</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AUX>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    Sliders: state.Sliders
});

export default connect(
    mapStateToProps,
    {
        saveStorefront, saveStorefrontmenu, saveStorefrontfeatures, saveStorefrontsociallinks, saveStorefrontfeaturecategories,
        saveStorefrontproducttabone, saveStorefronttopbrands, saveFlashsale_verticalproducts, saveProductgrid, saveProducttabtwo
    }
)(withRouter(StoreFront));
