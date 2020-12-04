import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link, withRouter } from 'react-router-dom';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import {
    saveCurrency, saveSettings, saveMaintenance, saveStore, saveSettingsMail, saveSettingsNewsletter,
    saveSettingsCustomcssjs, saveFreeshipping, saveLocalpickup, saveFlaterate, savePaypal, saveStripe, saveRazorpay,
    saveInstamojo, saveCashondelivery, saveBanktransfer, saveMoneyorder
} from "../../../store/Actions/Settings"

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [{ values: "" }],
            //General_Settings
            SupportedCountries: "",
            DefaultCountry: "",
            SupportedLocales: "",
            DefaultLocale: "",
            DefaultTimezone: "",
            CustomerRole: "",
            ReviewsRatings: "",
            AutoApproveReviews: "",
            WelcomeEmail: "",
            AdminOrderEmail: "",
            OrderStatusEmail: "",
            InvoiceEmail: "",
            CookieBar: "",
            //Maintenance
            MaintenanceMode: "",
            //Currency
            SupportedCurrencies: "",
            DefaultCurrency: "",
            ExchangeRateService: "",
            AutoRefresh: "",
            Frequency: "",
            //Store
            Name: "",
            Tagline: "",
            Phone: "",
            Email: "",
            Address1: "",
            Address2: "",
            City: "",
            Country: "",
            State: "",
            Zip: "",
            //Mail
            FromAddress: "",
            FromName: "",
            Host: "",
            Email: "",
            Port: "",
            Username: "",
            Password: "",
            Encryption: "",
            //Newsletter
            Newsletter: "",
            MailchimpAPIKey: "",
            MailchimpListID: "",
            //Custom_CSSJS
            Header: "",
            Footer: "",
            //Free_Shipping
            Status: "",
            Label: "",
            MinimumAmount: "",
            //Local_pickup
            Status: "",
            Label: "",
            Cost: "",
            //Flate_rate
            Status: "",
            Label: "",
            Cost: "",
            //Paypal
            Status: "",
            Label: "",
            Description: "",
            Sandbox: "",
            ClientID: "",
            Secret: "",
            //Stripe
            Status: "",
            Label: "",
            Description: "",
            PublishKey: "",
            SecretKey: "",
            //Razor_Pay
            Status: "",
            Label: "",
            Description: "",
            KeyId: "",
            KeySecret: "",
            //Instamojo
            Status: "",
            Label: "",
            Description: "",
            Sandbox: "",
            APIKey: "",
            AuthToken: "",
            //Cashondelivery
            Status: "",
            Label: "",
            Description: "",
            //Banktransfer
            Status: "",
            Label: "",
            Description: "",
            Instructions: "",
            //Check_Moneyorder
            Status: "",
            Label: "",
            Description: "",
            Instructions: "",
        };
    }
    //General_Settings
    CurrencySubmit = event => {
        event.preventDefault();
        let data =
        {
            SupportedCurrencies: this.state.SupportedCurrencies,
            DefaultCurrency: this.state.DefaultCurrency,
            ExchangeRateService: this.state.ExchangeRateService,
            AutoRefresh: this.state.AutoRefresh,
            Frequency: this.state.Frequency,
            Currency_Id: 1,

        }
        console.log("datas", data)
        this.props.saveCurrency(data, this.props.history);

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
            SupportedCurrencies: "",
            DefaultCurrency: "",
            ExchangeRateService: "",
            AutoRefresh: "",
            Frequency: "",

        })


    }
    SettingsGeneralSubmit = event => {
        event.preventDefault();
        let data =
        {
            SupportedCountries: this.state.SupportedCountries,
            DefaultCountry: this.state.DefaultCountry,
            SupportedLocales: this.state.SupportedLocales,
            DefaultLocale: this.state.DefaultLocale,
            DefaultTimezone: this.state.DefaultTimezone,
            CustomerRole: this.state.CustomerRole,
            ReviewsRatings: this.state.ReviewsRatings,
            AutoApproveReviews: this.state.AutoApproveReviews,
            WelcomeEmail: this.state.WelcomeEmail,
            AdminOrderEmail: this.state.AdminOrderEmail,
            OrderStatusEmail: this.state.OrderStatusEmail,
            InvoiceEmail: this.state.InvoiceEmail,
            CookieBar: this.state.CookieBar,
            General_Id: 1,

        }
        console.log("datas", data)
        this.props.saveSettings(data, this.props.history);

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
            SupportedCountries: "",
            DefaultCountry: "",
            SupportedLocales: "",
            DefaultLocale: "",
            DefaultTimezone: "",
            CustomerRole: "",
            ReviewsRatings: "",
            AutoApproveReviews: "",
            WelcomeEmail: "",
            AdminOrderEmail: "",
            OrderStatusEmail: "",
            InvoiceEmail: "",
            CookieBar: "",
        })


    }
    MaintenanceSubmit = event => {
        event.preventDefault();
        let data =
        {
            MaintenanceMode: this.state.MaintenanceMode,
            Maintenance_Id: 1,

        }
        console.log("datas", data)
        this.props.saveMaintenance(data, this.props.history);

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
            MaintenanceMode: "",

        })


    }
    StoreSubmit = event => {
        event.preventDefault();
        let data =
        {
            Name: this.state.Name,
            Tagline: this.state.Tagline,
            Phone: this.state.Phone,
            Email: this.state.Email,
            Address1: this.state.Address1,
            Address2: this.state.Address2,
            City: this.state.City,
            Country: this.state.Country,
            State: this.state.State,
            Zip: this.state.Zip,
            Store_Id: 1,

        }
        console.log("datas", data)
        this.props.saveStore(data, this.props.history);

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
            Name: "",
            Tagline: "",
            Phone: "",
            Email: "",
            Address1: "",
            Address2: "",
            City: "",
            Country: "",
            State: "",
            Zip: "",

        })


    }
    SettingsMailSubmit = event => {
        event.preventDefault();
        let data =
        {
            FromAddress: this.state.FromAddress,
            FromName: this.state.FromName,
            Host: this.state.Host,
            Email: this.state.Email,
            Port: this.state.Port,
            Username: this.state.Username,
            Password: this.state.Password,
            Encryption: this.state.Encryption,
            Mail_Id: 1,

        }
        console.log("datas", data)
        this.props.saveSettingsMail(data, this.props.history);

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
            FromAddress: "",
            FromName: "",
            Host: "",
            Email: "",
            Port: "",
            Username: "",
            Password: "",
            Encryption: "",
        })


    }
    SettingsNewsletterSubmit = event => {
        event.preventDefault();
        let data =
        {

            Newsletter: this.state.Newsletter,
            MailchimpAPIKey: this.state.MailchimpAPIKey,
            MailchimpListID: this.state.MailchimpListID,
            Newsletter_Id: 1,

        }
        console.log("datas", data)
        this.props.saveSettingsNewsletter(data, this.props.history);

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
            Newsletter: "",
            MailchimpAPIKey: "",
            MailchimpListID: "",

        })


    }
    SettingsCustomcssjsSubmit = event => {
        event.preventDefault();
        let data =
        {

            Header: this.state.Header,
            Footer: this.state.Footer,
            Custom_Id: 1,

        }
        console.log("datas", data)
        this.props.saveSettingsCustomcssjs(data, this.props.history);

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
            Header: "",
            Footer: "",

        })


    }
    //Shipping
    FreeshippingSubmit = event => {
        event.preventDefault();
        let data =
        {

            Status: this.state.Status,
            Label: this.state.Label,
            MinimumAmount: this.state.MinimumAmount,
            FreeShipping_Id: 1,

        }
        console.log("datas", data)
        this.props.saveFreeshipping(data, this.props.history);

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
            Status: "",
            Label: "",
            MinimumAmount: "",
        })


    }
    LocalpickupSubmit = event => {
        event.preventDefault();
        let data =
        {

            Status: this.state.Status,
            Label: this.state.Label,
            Cost: this.state.Cost,
            Local_Id: 1,

        }
        console.log("datas", data)
        this.props.saveLocalpickup(data, this.props.history);

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
            Status: "",
            Label: "",
            Cost: "",
        })


    }
    FlaterateSubmit = event => {
        event.preventDefault();
        let data =
        {

            Status: this.state.Status,
            Label: this.state.Label,
            Cost: this.state.Cost,
            FlatRate_Id: 1,

        }
        console.log("datas", data)
        this.props.saveFlaterate(data, this.props.history);

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
            Status: "",
            Label: "",
            Cost: "",
        })


    }
    //Payment
    PaypalSubmit = event => {
        event.preventDefault();
        let data =
        {

            Status: this.state.Status,
            Label: this.state.Label,
            Description: this.state.Description,
            Sandbox: this.state.Sandbox,
            ClientID: this.state.ClientID,
            Secret: this.state.Secret,
            PayPal_Id: 1,

        }
        console.log("datas", data)
        this.props.savePaypal(data, this.props.history);

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
            Status: "",
            Label: "",
            Description: "",
            Sandbox: "",
            ClientID: "",
            Secret: "",
        })


    }
    StripeSubmit = event => {
        event.preventDefault();
        let data =
        {
            Status: this.state.Status,
            Label: this.state.Label,
            Description: this.state.Description,
            PublishKey: this.state.PublishKey,
            SecretKey: this.state.SecretKey,
            Stripe_Id: 1,

        }
        console.log("datas", data)
        this.props.saveStripe(data, this.props.history);

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
            Status: "",
            Label: "",
            Description: "",
            PublishKey: "",
            SecretKey: "",
        })


    }
    RazorpaySubmit = event => {
        event.preventDefault();
        let data =
        {
            Status: this.state.Status,
            Label: this.state.Label,
            Description: this.state.Description,
            KeyId: this.state.KeyId,
            KeySecret: this.state.KeySecret,
            Razor_Id: 1,

        }
        console.log("datas", data)
        this.props.saveRazorpay(data, this.props.history);

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
            Status: "",
            Label: "",
            Description: "",
            KeyId: "",
            KeySecret: "",
        })


    }
    InstamojoSubmit = event => {
        event.preventDefault();
        let data =
        {
            Status: this.state.Status,
            Label: this.state.Label,
            Description: this.state.Description,
            Sandbox: this.state.Sandbox,
            APIKey: this.state.APIKey,
            AuthToken: this.state.AuthToken,
            Instamoj_Id: 1,

        }
        console.log("datas", data)
        this.props.saveInstamojo(data, this.props.history);

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
            Status: "",
            Label: "",
            Description: "",
            Sandbox: "",
            APIKey: "",
            AuthToken: "",
        })


    }
    CashonDeliverySubmit = event => {
        event.preventDefault();
        let data =
        {
            Status: this.state.Status,
            Label: this.state.Label,
            Description: this.state.Description,
            Cash_Id: 1,

        }
        console.log("datas", data)
        this.props.saveCashondelivery(data, this.props.history);

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
            Status: "",
            Label: "",
            Description: "",
        })


    }
    BanktransferSubmit = event => {
        event.preventDefault();
        let data =
        {
            Status: this.state.Status,
            Label: this.state.Label,
            Description: this.state.Description,
            Instructions: this.state.Instructions,
            Bank_Id: 1,

        }
        console.log("datas", data)
        this.props.saveBanktransfer(data, this.props.history);

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
            Status: "",
            Label: "",
            Description: "",
            Instructions: "",
        })


    }
    MoneyorderSubmit = event => {
        event.preventDefault();
        let data =
        {
            Status: this.state.Status,
            Label: this.state.Label,
            Description: this.state.Description,
            Instructions: this.state.Instructions,
            Money_Id: 1,

        }
        console.log("datas", data)
        this.props.saveMoneyorder(data, this.props.history);

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
            Status: "",
            Label: "",
            Description: "",
            Instructions: "",
        })


    }
    //Adding_Function
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
                                                <a className="nav-link" data-toggle="tab" href="#maintenance" role="tab">
                                                    <span className="d-none d-md-block">Maintenance</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#store" role="tab">
                                                    <span className="d-none d-md-block">Store</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#currency" role="tab">
                                                    <span className="d-none d-md-block">Currency</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#mail" role="tab">
                                                    <span className="d-none d-md-block">Mail</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#newsletter" role="tab">
                                                    <span className="d-none d-md-block">Newsletter</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#custom" role="tab">
                                                    <span className="d-none d-md-block">Custom CSS/JS</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                        </ul>
                                        <hr></hr>
                                        <div className="tab-content">
                                            <div className="tab-pane active p-1" id="general" role="tabpanel">
                                                <form onSubmit={this.SettingsGeneralSubmit}>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="navbar_text">Supported Countries</label>
                                                                <select className="form-control select2" name="SupportedCountries" value={this.state.SupportedCountries} onChange={this.adding}>
                                                                    <option>Select</option>
                                                                    <option value="AK">United States</option>
                                                                    <option value="HI">Tokyo</option>
                                                                    <option value="HI">Western Sahara</option>
                                                                    <option value="HI">Tonga</option>
                                                                    <option value="HI">Zombia</option>
                                                                </select>
                                                            </div>
                                                        </div>


                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Default Country</label>
                                                                <select className="form-control select2" name="DefaultCountry" value={this.state.DefaultCountry} onChange={this.adding}>
                                                                    <option>Select</option>
                                                                    <option value="AK">United States</option>
                                                                    <option value="HI">Tokyo</option>
                                                                    <option value="HI">Western Sahara</option>
                                                                    <option value="HI">Tonga</option>
                                                                    <option value="HI">Zombia</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="navbar_text">Supported Locales</label>
                                                                <select className="form-control select2" name="SupportedLocales" value={this.state.SupportedLocales} onChange={this.adding}>
                                                                    <option>Select</option>
                                                                    <option value="AK">1  </option>
                                                                    <option value="HI">3</option>
                                                                    <option value="HI">4  </option>
                                                                    <option value="HI">2</option>
                                                                    <option value="HI">5</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Default Locale</label>
                                                                <select className="form-control select2" name="DefaultLocale" value={this.state.DefaultLocale} onChange={this.adding}>
                                                                    <option>Select</option>
                                                                    <option value="AK">English</option>
                                                                    <option value="AEW">French</option>
                                                                    <option value="AKF">Danish</option>
                                                                    <option value="AKA">Hausa</option>

                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Default Timezone</label>
                                                                <select className="form-control select2" name="DefaultTimezone" value={this.state.DefaultTimezone} onChange={this.adding}>
                                                                    <option>Select</option>
                                                                    <option value="AK">UTC</option>
                                                                    <option value="AK">Eroup</option>
                                                                    <option value="AK">Asia/north</option>
                                                                    <option value="AK">Pacific</option>
                                                                </select>
                                                            </div>

                                                        </div>

                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Customer Role</label>
                                                                <select className="form-control select2" name="CustomerRole" value={this.state.CustomerRole} onChange={this.adding}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Customer</option>
                                                                    <option value="AK">Admin</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Reviews & Ratings</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                                <input type="checkbox" name="ReviewsRatings" onChange={this.adding} />
                                                                &nbsp;<span>Allow customers to give reviews & ratings</span>
                                                            </div>

                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Auto Approve Reviews</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                                <input type="checkbox" name="AutoApproveReviews" onChange={this.adding} /> &nbsp;<span>Customer reviews will be approved automatically</span>
                                                            </div>

                                                        </div>

                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Welcome Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                                <input type="checkbox" name="WelcomeEmail" onChange={this.adding} /> &nbsp;<span>Send welcome email after registration</span>
                                                            </div>

                                                        </div>
                                                    </div>


                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Admin Order Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                                <input type="checkbox" name="AdminOrderEmail" onChange={this.adding} /> &nbsp;<span>Send new order notification to the admin</span>
                                                            </div>

                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Order Status Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                                <input type="checkbox" name="OrderStatusEmail" onChange={this.adding} /> &nbsp;<span>Send email after order status is changed</span>
                                                            </div>

                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Invoice Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                                <input type="checkbox" name="InvoiceEmail" onChange={this.adding} /> &nbsp;<span>Send invoice email to the customer after checkout</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Cookie Bar</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                                <input type="checkbox" name="CookieBar" onChange={this.adding} /> &nbsp;<span>Show cookie bar in your website</span>
                                                            </div>

                                                        </div>
                                                        <div className="col-4">
                                                            <br></br>
                                                        &nbsp; &nbsp; &nbsp;<button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;Save &nbsp; </button>

                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                            {/* tab panel 2 */}

                                            <div className="tab-pane p-2" id="maintenance" role="tabpanel">

                                                <form onSubmit={this.MaintenanceSubmit}>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Maintenance Mode</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                                <input type="checkbox" name="MaintenanceMode" onChange={this.adding} /> &nbsp;<span>Put the application into maintenance mode</span>
                                                            </div>

                                                        </div>
                                                        <div className="col-4">
                                                            <br></br>
                                                        &nbsp; &nbsp; &nbsp;<button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>

                                                        </div>
                                                    </div>
                                                </form>
                                            </div>


                                            {/* Store */}

                                            <div className="tab-pane p-3" id="store" role="tabpanel">

                                                <form onSubmit={this.StoreSubmit}>

                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="store_name">Store Name</label>
                                                                <input id="Name" name="Name" value={this.state.Name} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="store_tag">Store Tagline</label>
                                                                <input id="Tagline" name="Tagline" value={this.state.Tagline} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="store_phone">Store Phone</label>
                                                                <input id="Phone" name="Phone" value={this.state.Phone} onChange={this.adding} type="number" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="store_email">Store Email</label>
                                                                <input id="Email" name="Email" value={this.state.Email} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="store_address">Store Address 1</label>
                                                                <input id="Address1" name="Address1" value={this.state.Address1} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="store_address2">Store Address 2</label>
                                                                <input id="store_address2" name="Address2" value={this.state.Address2} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="store_city">Store City</label>
                                                                <input id="store_city" name="City" value={this.state.City} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Store Country</label>
                                                                <select className="form-control select2" name="Country" value={this.state.Country} onChange={this.adding}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Australia</option>
                                                                    <option value="HIf">Bangladesh</option>
                                                                    <option value="HIw">India</option>
                                                                    <option value="HIt">China</option>



                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Store State</label>
                                                                <select className="form-control select2" name="State" value={this.state.State} onChange={this.adding}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Feni</option>
                                                                    <option value="HI">Dhaka</option>
                                                                    <option value="HI">Tangali</option>
                                                                    <option value="HI">Habigani</option>

                                                                </select>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="row">

                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="store_zip">Store Zip</label>
                                                                <input id="store_zip" name="Zip" type="text" value={this.state.Zip} onChange={this.adding} className="form-control" />
                                                            </div>

                                                        </div>

                                                        <div className="col-4">
                                                            <br></br>
                                                        &nbsp; &nbsp; &nbsp;<button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>

                                                        </div>

                                                    </div>
                                                </form>
                                            </div>

                                            {/* Currency */}

                                            <div className="tab-pane p-3" id="currency" role="tabpanel">

                                                <form onSubmit={this.CurrencySubmit}>

                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="navbar_text">Supported Currencies</label>
                                                                <div class="form-group">
                                                                    <select className="form-control select2" name="SupportedCurrencies" value={this.state.SupportedCurrencies} onChange={this.adding}>
                                                                        <option value="">Select</option>
                                                                        <option value="AK">Fixed</option>
                                                                        <option value="HI">Percent</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Default Currency</label>
                                                                <select className="form-control select2" name="DefaultCurrency" value={this.state.DefaultCurrency} onChange={this.adding}>
                                                                    <option>Select</option>
                                                                    <option value="AK">US Doller</option>
                                                                    <option value="HI">Indian rupee</option>
                                                                    <option value="HI">Swiss </option>
                                                                    <option value="HI">japanese Yen</option>
                                                                    <option value="HI">Fijian Dollar</option>


                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="navbar_text">Exchange Rate Service</label>
                                                                <div class="form-group">
                                                                    <select className="form-control select2" name="ExchangeRateService" value={this.state.ExchangeRateService} onChange={this.adding}>
                                                                        <option>Select</option>
                                                                        <option value="AK">1</option>
                                                                        <option value="HI">2</option>
                                                                        <option value="HI">3 </option>
                                                                        <option value="HI">4</option>
                                                                        <option value="HI">5</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="title">Auto Refresh</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                                <input type="checkbox" name="AutoRefresh" onChange={this.adding} />
                                                                &nbsp;<span>Enable auto-refreshing currency rates</span>
                                                            </div>

                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">Frequency</label>
                                                                <select className="form-control select2" name="Frequency" value={this.state.Frequency} onChange={this.adding}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Daily</option>
                                                                    <option value="HI">Weekly</option>
                                                                    <option value="HI">Monthly </option>
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
                                            {/* Mail */}

                                            <div className="tab-pane p-4" id="mail" role="tabpanel">

                                                <form onSubmit={this.SettingsMailSubmit}>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="mail_address">Mail From Address</label>
                                                                <input id="mail_address" name="FromAddress" value={this.state.FromAddress} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="mail_from">Mail From Name</label>
                                                                <input id="mail_from" name="FromName" value={this.state.FromName} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="mail_host">Mail Host</label>
                                                                <input id="mail_host" name="Host" value={this.state.Host} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="store_email">Mail Port</label>
                                                                <input id="store_email" name="Port" value={this.state.Port} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="Username">Mail Username</label>
                                                                <input id="Username" name="Username" value={this.state.Username} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="Password">Mail Password</label>
                                                                <input id="Password" name="Password" value={this.state.Password} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="store_city">Mail Encryption</label>
                                                                <select className="form-control select2" name="Encryption" value={this.state.Encryption} onChange={this.adding}>
                                                                    <option>Select</option>
                                                                    <option value="AK">SSL</option>
                                                                    <option value="HI">TIs</option>


                                                                </select>

                                                            </div>

                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group"><br></br>
                                                            &nbsp; &nbsp; &nbsp;<button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;Save &nbsp; </button>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </form>
                                            </div>


                                            {/* Newsletter */}

                                            <div className="tab-pane p-5" id="newsletter" role="tabpanel">
                                                <form onSubmit={this.SettingsNewsletterSubmit}>

                                                    <div className="row">
                                                        <div class="col-4">
                                                            <label for="title">Newsletter</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" name="Newsletter" onChange={this.adding} /> &nbsp;<span>Allow customers to subscribe to your newsletter.</span>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="mailchimp">Mailchimp API Key</label>
                                                                <input id="mailchimp" name="MailchimpAPIKey" value={this.state.MailchimpAPIKey} onChange={this.adding} type="password" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="mailchimp_list">Mailchimp List ID</label>
                                                                <input id="mailchimp_list" name="MailchimpListID" value={this.state.MailchimpListID} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="row">

                                                        <div className="col-4">
                                                            <br></br>
                                                        &nbsp; &nbsp; &nbsp;<button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>

                                                        </div>

                                                    </div>
                                                </form>
                                            </div>

                                            {/* Custom */}

                                            <div className="tab-pane p-7" id="custom" role="tabpanel">
                                                <form onSubmit={this.SettingsCustomcssjsSubmit}>

                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="header">Header</label>
                                                                <textarea id="header" name="Header" value={this.state.Header} onChange={this.adding} rows="4" type="text" className="form-control" />
                                                            </div>

                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="header">Footer</label>
                                                                <textarea id="header" name="Footer" value={this.state.Footer} onChange={this.adding} rows="4" type="text" className="form-control" />
                                                            </div>

                                                        </div>

                                                        <div className="col-4">
                                                            <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save </button>                                        </div>


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
                                        <h3>Shipping Methods</h3>
                                        <hr></hr>
                                        <ul className="nav nav-pills nav-justified" role="tablist">
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link active" data-toggle="tab" href="#free_shiping" role="tab">
                                                    <span className="d-none d-md-block">Free Shipping</span><span className="d-block d-md-none"><i className="mdi mdi-home-variant h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#local_pickup" role="tab">
                                                    <span className="d-none d-md-block"></span>Local Pickup<span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#flat" role="tab">
                                                    <span className="d-none d-md-block"></span>Flat Rate<span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>


                                        </ul>
                                        <hr></hr>
                                        {/* Free Shipping */}
                                        <div className="tab-content">
                                            <div className="tab-pane active p-1" id="free_shiping" role="tabpanel">
                                                <form onSubmit={this.FreeshippingSubmit}>

                                                    <div class="row">
                                                        <div class="col-4">
                                                            <label for="title">Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" name="Status" onChange={this.adding} /> &nbsp;<span>Enable Free Shipping</span>

                                                        </div>

                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="Label">Label</label>
                                                                <input id="Label" name="Label" value={this.state.Label} onChange={this.adding} type="text" className="form-control" />
                                                            </div>

                                                        </div>

                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="free_shipping">Minimum Amount</label>
                                                                <input id="MinimumAmount" name="MinimumAmount" value={this.state.MinimumAmount} onChange={this.adding} type="number" className="form-control" />
                                                            </div></div><br></br>

                                                        <button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>
                                                    </div></form>


                                            </div>
                                            {/* Local pickup */}

                                            <div className="tab-pane p-2" id="local_pickup" role="tabpanel">

                                                <form onSubmit={this.LocalpickupSubmit}>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <label for="title">Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" name="Status" onChange={this.adding} /> &nbsp;<span>Enable Local Pickup</span>

                                                        </div>
                                                        <div class="col-4">

                                                            <div className="form-group">
                                                                <label for="local_pickup">Label</label>
                                                                <input id="local_pickup" name="Label" value={this.state.Label} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>

                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="local_pickup">Cost</label>
                                                                <input id="local_pickup" name="Cost" value={this.state.Cost} onChange={this.adding} type="number" className="form-control" />
                                                            </div> </div><br></br>

                                                        <button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>
                                                    </div>

                                                </form>
                                            </div>


                                            {/* Flate rate */}

                                            <div className="tab-pane p-3" id="flat" role="tabpanel">

                                                <form onSubmit={this.FlaterateSubmit}>

                                                    <div className="row">
                                                        <div class="col-4">
                                                            <label for="title">Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" name="Status" onChange={this.adding} /> &nbsp;<span>Enable Flat Rate</span>

                                                        </div>

                                                        <div class="col-4">

                                                            <div className="form-group">
                                                                <label for="flat">Label</label>
                                                                <input id="flat" name="Label" value={this.state.Label} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>

                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="flat">Cost</label>
                                                                <input id="flat" name="Cost" value={this.state.Cost} onChange={this.adding} type="number" className="form-control" />
                                                            </div></div> <br></br>

                                                        <button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div></div>        </div>
                        </div>
                        {/* Payment content */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <h3>Payment Methods</h3>
                                        <hr></hr>
                                        <ul className="nav nav-pills nav-justified" role="tablist">
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link active" data-toggle="tab" href="#pay_pal" role="tab">
                                                    <span className="d-none d-md-block">PayPal</span><span className="d-block d-md-none"><i className="mdi mdi-home-variant h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#strip_s" role="tab">
                                                    <span className="d-none d-md-block">Stripe</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#razor_pay" role="tab">
                                                    <span className="d-none d-md-block"></span>Razorpay<span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#instam_ojo" role="tab">
                                                    <span className="d-none d-md-block">Instamojo</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#cash_on" role="tab">
                                                    <span className="d-none d-md-block">Cash On Delivery</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#bank_transfer" role="tab">
                                                    <span className="d-none d-md-block">Bank Transfer</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#check_money" role="tab">
                                                    <span className="d-none d-md-block">Check / Money Order</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>


                                        </ul>
                                        <hr></hr>
                                        <div className="tab-content">
                                            <div className="tab-pane active p-11" id="pay_pal" role="tabpanel">
                                                {/* paypal */}
                                                <form onSubmit={this.PaypalSubmit}>
                                                    <div class="row">
                                                        <div class="col-3">
                                                            <label for="title">Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" name="Status" onChange={this.adding} /> &nbsp;<span>Enable PayPal</span>

                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label >Label</label>
                                                                <input name="Label" value={this.state.Label} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label >Description</label>
                                                                <input name="Description" value={this.state.Description} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <label for="title">Sandbox</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" name="Sandbox" onChange={this.adding} /> &nbsp;<span>Use sandbox for test payments</span>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label >Client ID</label>
                                                                <input name="ClientID" type="text" value={this.state.ClientID} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label >Secret</label>
                                                                <input name="Secret" type="text" value={this.state.Secret} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group"><br></br>
                                                                <button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* stripe */}
                                            <div className="tab-pane p-23" id="strip_s" role="tabpanel">
                                                <form onSubmit={this.StripeSubmit}>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <label for="title">Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" name="Status" onChange={this.adding} /> &nbsp;<span>Enable Stripe</span>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label>Label</label>
                                                                <input name="Label" type="text" value={this.state.Label} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label>Description</label>
                                                                <input name="Description" value={this.state.Description} onChange={this.adding} type="" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label >Publish Key</label>
                                                                <input name="PublishKey" type="text" value={this.state.PublishKey} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label >Secret Key</label>
                                                                <input name="SecretKey" type="text" value={this.state.SecretKey} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group"><br></br>
                                                                <button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* Razorpay */}
                                            <div className="tab-pane p-8" id="razor_pay" role="tabpanel">
                                                <form onSubmit={this.RazorpaySubmit}>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <label for="title">Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" name="Status" onChange={this.adding} /> &nbsp;<span>Enable Razorpay</span>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label >Label</label>
                                                                <input value="RazorPay" name="Label" value={this.state.Label} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label>Description</label>
                                                                <input name="Description" value={this.state.Description} onChange={this.adding} type="" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label >Key Id</label>
                                                                <input name="KeyId" type="text" value={this.state.KeyId} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label >Key Secret</label>
                                                                <input name="KeySecret" type="text" value={this.state.KeySecret} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group"><br></br>
                                                                <button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* Instamojo */}
                                            <div className="tab-pane p-18" id="instam_ojo" role="tabpanel">
                                                <form onSubmit={this.InstamojoSubmit}>
                                                    <div className="row">
                                                        <div class="col-3">
                                                            <label for="title">Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" name="Status" onChange={this.adding} /> &nbsp;<span>Enable Instamojo</span>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label >Label</label>
                                                                <input name="Label" type="text" value={this.state.Label} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label>Description</label>
                                                                <input name="Description" value={this.state.Description} onChange={this.adding} type="text-box" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <label for="title">Sandbox</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" name="Sandbox" onChange={this.adding} /> &nbsp;<span>Use sandbox for test payments</span>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label >API Key</label>
                                                                <input name="APIKey" type="text" value={this.state.APIKey} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label >Auth Token</label>
                                                                <input name="AuthToken" type="text" value={this.state.AuthToken} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group"><br></br>
                                                                <button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* cash on delivery */}
                                            <div className="tab-pane p-25" id="cash_on" role="tabpanel">
                                                <form onSubmit={this.CashonDeliverySubmit}>
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <label for="title">Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" name="Status" onChange={this.adding} /> &nbsp;<span>Enable Cash On Delivery</span>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label>Label</label>
                                                                <input name="Label" value={this.state.Label} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label>Description</label>
                                                                <input name="Description" value={this.state.Description} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <br></br>
                                                        <button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* bank transfer */}
                                            <div className="tab-pane p-28" id="bank_transfer" role="tabpanel">
                                                <form onSubmit={this.BanktransferSubmit}>
                                                    <div className="row">
                                                        <div class="col-3">
                                                            <label for="title">Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" name="Status" onChange={this.adding} /> &nbsp;<span>Enable Bank Transfer</span>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label >Label</label>
                                                                <input name="Label" value={this.state.Label} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label>Description</label>
                                                                <input name="Description" value={this.state.Description} onChange={this.adding} type="" className="form-control" />
                                                            </div></div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label>Instructions</label>
                                                                <input name="Instructions" value={this.state.Instructions} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <br></br>
                                                        <button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;Save &nbsp; </button>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* check/money order */}
                                            <div className="tab-pane p-27" id="check_money" role="tabpanel">
                                                <form onSubmit={this.MoneyorderSubmit}>
                                                    <div className="row">
                                                        <div class="col-3">
                                                            <label for="title">Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>
                                                            <input type="checkbox" onChange={this.adding} name="Status" /> &nbsp;<span>Enable Check/Money Order</span>
                                                        </div>
                                                        <div class="col-3">

                                                            <div className="form-group">
                                                                <label >Label</label>
                                                                <input type="text" name="Label" value={this.state.Label} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label>Description</label>
                                                                <input type="text" name="Description" value={this.state.Description} onChange={this.adding} className="form-control" />
                                                            </div></div>
                                                        <div class="col-3">
                                                            <div className="form-group">
                                                                <label>Instructions</label>
                                                                <input name="Instructions" value={this.state.Instructions} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <br></br>
                                                        <button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>
                                                    </div>
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
    Settings: state.Settings
});

export default connect(
    mapStateToProps,
    {
        saveCurrency, saveSettings, saveMaintenance, saveStore, saveSettingsMail, saveSettingsNewsletter, saveSettingsCustomcssjs,
        saveFreeshipping, saveLocalpickup, saveFlaterate, savePaypal, saveStripe, saveRazorpay, saveInstamojo, saveCashondelivery, saveBanktransfer, saveMoneyorder
    }
)(withRouter(Settings));
