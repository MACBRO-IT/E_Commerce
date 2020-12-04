import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link , withRouter} from 'react-router-dom';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux'; 

import { saveCouponGeneral,saveCouponRestrictions,saveCouponLimits} from   "../../../store/Actions/Coupon"


class AddCoupon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [{ label: "", price: "", price_type: "" }],

             //Coupon_General
        Name : "",  
        Code : "",
        DiscountType : "",
        Value : "",
        FreeShipping: "",
        Startdate : "",
        Enddate : "",
        Status : "",

        //Coupon_UsageRestrictions
        MinimumSpend : "",
        MaximumSpend : "",
        Products : "",
        ExcludeProducts : "",
        Categories : "",
        ExcludeCategories : "",

        //Coupon_UsageLimits
        UsageLimitPerCoupon : "",
        UsageLimitPerCustomer : "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }
        

    CouponSubmit = event => {
        event.preventDefault(); 
        let data = 
        { 
            Name : this.state.Name,  
            Code : this.state.Code,
            DiscountType : this.state.DiscountType,
            Value : this.state.Value,
            FreeShipping: this.state.FreeShipping,
            Startdate : this.   state.Startdate,
            Enddate : this.state.Enddate,
            Status : this.state.Status, 
            Coupon_Id : 1
            
        } 
        console.log("datas", data)
         this.props.saveCouponGeneral(data,this.props.history);  
       
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
            Name : "",  
            Code : "",
            DiscountType : "",
            Value : "",
            FreeShipping: "",
            Startdate : "",
            Enddate : "",
            Status : ""
          })  
    }

    CouponRestrictionsSubmit = event => {
        event.preventDefault(); 
        let data = 
        { 
            MinimumSpend : this.state.MinimumSpend,  
            MaximumSpend : this.state.MaximumSpend,
            Products : this.state.Products,
            ExcludeProducts : this.state.ExcludeProducts,
            Categories: this.state.Categories,
            ExcludeCategories : this.state.ExcludeCategories, 
            UsageRestrictions_Id : 1,
            
        } 
        console.log("datas", data)
         this.props.saveCouponRestrictions(data,this.props.history);  
       
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
            MinimumSpend : "",
        MaximumSpend : "",
        Products : "",
        ExcludeProducts : "",
        Categories : "",
        ExcludeCategories : "",
          })  
    }
    CouponLimitsSubmit = event => {
        event.preventDefault(); 
        let data = 
        { 
            UsageLimitPerCoupon : this.state.UsageLimitPerCoupon,  
            UsageLimitPerCustomer : this.state.UsageLimitPerCustomer, 
            UsageLimit_Id : 1,
            
        } 
        console.log("datas", data)
         this.props.saveCouponLimits(data,this.props.history);  
       
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
            UsageLimitPerCoupon : "",
            UsageLimitPerCustomer : "",
        
          })  
    }
   
    addClickOption2() {
        this.setState(prevState => ({
            options: [...prevState.options, { label: "", price: "", price_type: "" }],

        }))
    }


    handleChangeOptions2(i, e) {
        const { name, value } = e.target;
        let options = [...this.state.options];
        options[i] = { ...options[i], [name]: value };
        this.setState({ options });
    }

    removeClick3(i) {
        let options = [...this.state.options];
        options.splice(i, 1);
        this.setState({ options });
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + JSON.stringify(this.state.users));
        event.preventDefault();
    }
    createOptions2() {

        return this.state.options.map((element2, i) => (
            <div key={i} id="results">

                <div class="table-responsive " id="23">

                    <table class="table table-bordered">
                        <thead class="hidden-xs">
                            <tr>
                                <th></th>
                                
                                <th>Price</th>
                                <th>Price Type</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td class="text-center" id="product-attributes">
                                    <span class="drag-icon">
                                        <i class="fa"></i>
                                        <i class="fa"></i>
                                    </span>
                                </td>
                             
                                <td>
                                    <div className="form-group">

                                        <input id="price" name="price" defaultValue={element2.price || ''} onChange={this.handleChangeOptions2.bind(this, i)} type="text" className="form-control" />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">

                                        <input id="priceType" name="priceType"
                                            defaultValue={element2.price_type || ''} onChange={this.handleChangeOptions2.bind(this, i)}
                                            type="text" className="form-control" />
                                    </div>
                                </td>

                                <td class="text-center" id="product-attributes">
                                    <button type="button" value='remove' onClick={this.removeClick3.bind(this, i)} class="btn btn-default delete-row" data-toggle="tooltip" data-title="Delete Attribute" data-original-title="" title="">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>
        ))
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

                                        <h3>Coupon Information</h3>
                                        <hr></hr>
                                        <ul className="nav nav-pills nav-justified" role="tablist">
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link active" data-toggle="tab" href="#home-1" role="tab">
                                                    <span className="d-none d-md-block">General</span><span className="d-block d-md-none"><i className="mdi mdi-home-variant h5"></i></span>
                                                </a>
                                            </li>
                                           
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#restrictions-1" role="tab">
                                                    <span className="d-none d-md-block">User Restrictions</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#limits-1" role="tab">
                                                    <span className="d-none d-md-block">User Limits</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                        </ul>
<hr></hr>
                                        <div className="tab-content">
                                            <div className="tab-pane active p-3" id="home-1" role="tabpanel">

                                            
                                                <form onSubmit={this.CouponSubmit}>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="productname">Name</label>
                                                                <input id="productname" name="Name" value={this.state.Name} onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="productdesc">Code</label>
                                                                <input id="code" name="Code" type="text" value={this.state.Code} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="form-group">
                                                                <label className="control-label">DiscountType</label>
                                                                <select className="form-control select2" name="DiscountType" value={this.state.DiscountType}  onChange={this.adding}>
                                                                    <option value="">Select</option>
                                                                    <option value="AK">Fixed</option>
                                                                    <option value="HI">Percent</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        

                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="productdesc">Value</label>
                                                                <input id="value" name="Value" value={this.state.Value} onChange={this.adding} type="number" className="form-control" />
                                                            </div>
                                                        </div>
                                                      
                                                        <div className="col-4">
                                                            <div className="form-group">
                                                            <label className="control-label">FreeShipping</label><br></br>
                                                                <input type="checkbox" name="FreeShipping" value={this.state.FreeShipping}  onChange={this.adding}></input> &nbsp;
                                                    <span>Allow free shipping</span>

                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="start_date">Startdate</label>
                                                                <input id="start_date" name="Startdate" value={this.state.Startdate} onChange={this.adding} type="date"   className="form-control" />
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="row">
                                                    <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="date">Enddate</label>
                                                                <input id="end_date" name="Enddate" value={this.state.Enddate} onChange={this.adding} type="date"   className="form-control" />
                                                            </div>
                                                        </div>

                                                        <div className="col-4">
                                                            <div className="form-group">
                                                            <label for="date">Status</label> <br></br>
                                                                <input type="checkbox" name="Status"  onChange={this.adding}  value={this.state.Status}></input> &nbsp;
                                                    <span>Enable the Coupon</span>

                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save Changes</button>                                
                                                       </div>

                                                    </div>
                                    </form>
                                    </div>
                                                  
                                                   {/* 2nd */}
                                                   <div className="tab-pane p-3" id="restrictions-1" role="tabpanel">
                                           
                                             
                                                <form>
                                                                       
                                                <form onSubmit={this.CouponRestrictionsSubmit}>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="minimum_spend">MinimumSpend</label>
                                                                <input id="minimum_spend" name="MinimumSpend" onChange={this.adding}  value={this.state.MinimumSpend} type="number" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="maximum_spend">MaximumSpend</label>
                                                                <input id="maximum_spend" name="MaximumSpend" onChange={this.adding}  value={this.state.MaximumSpend} type="number" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="products">Products</label>
                                                                <input id="products" name="Products" onChange={this.adding}  value={this.state.Products} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        

                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="exclude_products">ExcludeProducts</label>
                                                                <input id="exclude_products" name="ExcludeProducts" onChange={this.adding}  value={this.state.ExcludeProducts} type="number" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                        <div className="form-group">
                                                                <label className="control-label">Categories</label>
                                                                <select className="form-control select2" name="Categories" value={this.state.Categories}  onChange={this.adding}>
                                                                    <option value="">Select</option>
                                                                    <option value="df">fixed</option>
                                                                    <option value="dfd">default</option>
                                                                </select>
                                                        </div>
                                                        </div>
                                                        <div class="col-4">
                                                        <div className="form-group">
                                                                <label className="control-label">ExcludeCategories</label>
                                                                <select className="form-control select2" name="ExcludeCategories" value={this.state.ExcludeCategories}  onChange={this.adding}>
                                                                    <option value="">Select</option>
                                                                    <option value="df">fixed</option>
                                                                    <option value="dfd">default</option>
                                                                </select>
                                                        </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-4">
                                                            <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save Changes</button>                                
                                                       </div>

                                                    </div>
                                    </form>
                                                                        </form>
                                                

                                            </div>

                                            {/* 3rd */}
                                            <div className="tab-pane p-3" id="limits-1" role="tabpanel">
                                           
                                             
                                           <form onSubmit={this.CouponLimitsSubmit}>  
                                                 <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="usage_limit_per_customer">UsageLimitPerCoupon</label>
                                                                <input id="usage_limit_per_customer" name="UsageLimitPerCoupon" onChange={this.adding}  value={this.state.UsageLimitPerCoupon} type="number" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="usage_limit_per_coupen">UsageLimitPerCustomer</label>
                                                                <input id="usage_limit_per_coupen" name="UsageLimitPerCustomer" onChange={this.adding}  value={this.state.UsageLimitPerCustomer} type="number" className="form-control" />
                                                            </div>
                                                        </div>
                                                     
                                                        <div className="col-4">
                                                            <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save Changes</button>                                
                                                       </div>

                                                    </div>
                                    </form>
                                                               
                                           

                                       </div>

                                            
                                        </div>
                                    </div></div>        </div>
                        </div>
                    </div>
                </div>


            </AUX>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors  
  });

export default connect(
    mapStateToProps,
    {
        saveCouponGeneral,saveCouponRestrictions,saveCouponLimits
    }
)(withRouter(AddCoupon)) ;  

  