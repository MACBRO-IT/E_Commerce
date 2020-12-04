import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 

import { Sparklines, SparklinesLine } from 'react-sparklines'; 
import Select from 'react-select';
import { saveProductGeneral,getLastRecode,saveProductPrice,saveProductInventory,SaveProductSEO,
    SaveProductAttribute,SaveProductOptions,SaveProductAdditional} from   "../../../store/Actions/Products/Catalog"


class AddCatalog extends Component {

    constructor(props) {
        super(props);
        this.state = {  

            //General 
            Product_id : "1",
            Name : "",
            Description : "",
            Brand : "",
            Category : "",
            TaxClass : "",
            Tags : "",
            Status : "",
          
            //Price
            Price :"",
            SpecialPrice : "",
            SpecialPriceType : "",
            SpecialPriceStart : "",
            SpecialPriceEnd : "" ,

            showResults : "",

            // Inventory            
            SKU :"",
            InventoryManagement : "",
            qty : "",
            StockAvailability : "", 

            //SEO
            MetaURL : "",
            MetaTitle : "", 
            MetaDescription : "", 

            //Attribute
            users: [{ Attributes: "", values: "" }],

            //Options
            users2: [{ Name: "", Type: "" , Required :""}],
            options: [{ label: "", price: "", price_type: "" }],


            //Additional
            ShortDescription : "",
            ProductNewFrom : "", 
            ProductNewTo : "",


        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.GeneralSubmit = this.GeneralSubmit.bind(this);
    }
    adding = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        })
      }
    Inventory = event =>
    {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })  
        if(value=='No')
        {
            this.setState({ showResults: false });
        }
        else
        {
            this.setState({ showResults: true });
        }
    }
    GeneralSubmit = event => {
        event.preventDefault(); 
        let data = 
        { 
            Product_id: this.state.Product_id,
            Name: this.state.Name,
            Description: this.state.Description,
            Brand: this.state.Brand,
            Category: this.state.Category,
            TaxClass: this.state.TaxClass,
            Tags: this.state.Tags,
            Status: this.state.Status 
        } 
         this.props.saveProductGeneral(data,this.props.history);  
       
        // toast.success('🦄 Wow so easy!', {
        //   position: "top-right",
        //   autoClose: false,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   });
    }
    PriceSubmit = event => {
        event.preventDefault(); 
        let data = 
        { 
            Price: this.state.Price,
            SpecialPrice: this.state.SpecialPrice,
            SpecialPriceType: this.state.SpecialPriceType,
            SpecialPriceStart: this.state.SpecialPriceStart,
            SpecialPriceEnd: this.state.SpecialPriceEnd, 
            Product_id: this.state.Product_id,  
        }  
         this.props.saveProductPrice(data,this.props.history);  
    }
    
    InventorySubmit = event => {
        event.preventDefault(); 
        let data = 
        { 
            SKU: this.state.SKU,
            InventoryManagement: this.state.InventoryManagement,
            qty: this.state.qty,
            StockAvailability: this.state.StockAvailability,
            Product_id: this.state.Product_id,  
        }  
         this.props.saveProductInventory(data,this.props.history);  
    }
    SEOSubmit = event => {
        event.preventDefault(); 
        let data = 
        { 
            MetaURL: this.state.MetaURL,
            MetaTitle: this.state.MetaTitle,
            MetaDescription: this.state.MetaDescription,
            Product_id: this.state.Product_id,  
        }  
         this.props.SaveProductSEO(data,this.props.history);  
    }

    AttributeSubmit = event =>{
        event.preventDefault();   
        this.props.SaveProductAttribute(this.state.users,this.props.history);  
    }

    
    OptionsSubmit = event =>{
        event.preventDefault();   
        this.props.SaveProductOptions(this.state.users,this.props.history);  
    }

    AdditionalSubmit =event =>
    {
        event.preventDefault(); 
        let data = 
        { 
            ShortDescription: this.state.ShortDescription,
            ProductNewFrom: this.state.ProductNewFrom,
            ProductNewTo: this.state.ProductNewTo 
        }  
        this.props.SaveProductAdditional(data,this.props.history);  

    }
    componentDidMount(props) {
        this.props.getLastRecode();  
        console.log("hello",this.props.getLastRecode) 
     } 

    addClickOption2() {
        this.setState(prevState => ({
            options: [...prevState.options, { label: "", price: "", price_type: "" }],

        }))
    }


    addClickOptions() {
        this.setState(prevState => ({

            users2: [...prevState.users2, { Name: "", Type: "", Required : ""}],

        }))
    }

    addClick() {
        this.setState(prevState => ({
            users: [...prevState.users, { Attributes: "", values: "" }],

        }))
    }


    createOptionsUI() {

        return this.state.users2.map((element, i) => (
            <div key={i}>

                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="hidden-xs">
                            <tr>

                                <th>Name</th>
                                <th>Type</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody >

                            <tr>

                                <td class="text-center">
                                    <div className="form-group" > 
                                        <input  name="Name" defaultValue={element.Name || ''} onChange={this.handleChangeOptions.bind(this, i)} type="text" className="form-control" />
                                    </div> 
                                </td>
                                <td class="text-center">
                                    <div className="col-12">
                                        <div className="form-group">

                                            <select name="Type" defaultValue={element.Type || ''} onChange={this.handleChangeOptions.bind(this, i)} className="form-control custom-select-black" >
                                                <option value selected>
                                                    Please Select
                </option>
                                                <optgroup label="Text">
                                                    <option value="field">
                                                        Field
                  </option>
                                                    <option value="textarea">
                                                        Textarea
                  </option>
                                                </optgroup>
                                                <optgroup label="Select">
                                                    <option value="dropdown">
                                                        Dropdown
                  </option>
                                                    <option value="checkbox">
                                                        Checkbox
                  </option>
                                                    <option value="checkbox_custom">
                                                        Custom Checkbox
                  </option>
                                                    <option value="radio" >
                                                        Radio Button
                  </option>
                                                    <option value="radio_custom">
                                                        Custom Radio Button
                  </option>
                                                    <option value="multiple_select">
                                                        Multiple Select
                  </option>
                                                </optgroup>
                                                <optgroup label="Date">
                                                    <option value="date">
                                                        Date
                  </option>
                                                    <option value="date_time">
                                                        Date &amp; Time
                  </option>
                                                    <option value="time">
                                                        Time
                  </option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div> 
                                </td>
                                <td> 
                                <input  name="Required"  defaultValue={element.Required || ''} onClick={this.handleChangeOptions.bind(this, i)}   type="checkbox"   /> &nbsp;<span>Required</span>
                            </td>
                                <td class="text-center" id="product-attributes">

                                    <button type="button" value='remove' onClick={this.removeClick2.bind(this, i)} class="btn btn-default delete-row" data-toggle="tooltip" data-title="Delete Attribute" data-original-title="" title="">
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



    relatedProduct() {

        return this.state.users2.map((element, i) => (
            <div key={i}>
               <div class="table-responsive">
                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                    <h3>Related Products</h3> <br></br>
                                        <table id="datatable" className="table table-striped dt-responsive nowrap table-vertical" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>

                                                    <th> <input type="checkbox"></input></th>
                                                    <th>ID</th>
                                                    <th>Thumbnail</th>

                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Status</th>
                                                    <th>Created</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox"></input>
                                                    </td>
                                                    <td>
                                                        123
                                            </td>
                                                    <td className="product-list-img">
                                                        <img src="image.png" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>

                                                    </td>
                                                    <td>435</td>
                                                    <td><span className="dot"></span></td>
                                                    <td>6 months ago</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox"></input>
                                                    </td>
                                                    <td>
                                                        123
                                            </td>
                                                    <td className="product-list-img">
                                                        <img src="image.png" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>

                                                    </td>
                                                    <td>435</td>
                                                    <td><span className="dot"></span></td>
                                                    <td>6 months ago</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox"></input>
                                                    </td>
                                                    <td>
                                                        123
                                            </td>
                                                    <td className="product-list-img">
                                                        <img src="image.png" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>

                                                    </td>
                                                    <td>435</td>
                                                    <td><span className="dot"></span></td>
                                                    <td>6 months ago</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox"></input>
                                                    </td>
                                                    <td>
                                                        123
                                            </td>
                                                    <td className="product-list-img">
                                                        <img src="image.png" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>

                                                    </td>
                                                    <td>435</td>
                                                    <td><span className="dot"></span></td>
                                                    <td>6 months ago</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox"></input>
                                                    </td>
                                                    <td>
                                                        123
                                            </td>
                                                    <td className="product-list-img">
                                                        <img src="image.png" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>

                                                    </td>
                                                    <td>435</td>
                                                    <td><span className="dot"></span></td>
                                                    <td>6 months ago</td>

                                                </tr>

                                            </tbody>
                                        </table>
                                        <br></br>
                                        <button type="button nav-link" value='add_global' onClick={this.addClickOption2.bind(this)} class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">
                                            Save
    </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        ))
    }



    // Cross sells
    crossSells() {

        return this.state.users2.map((element, i) => (
            <div key={i}>
                <div class="table-responsive">

                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                    <h3>Cross-Sells</h3> <br></br>
                                        <table id="datatable" className="table table-striped dt-responsive nowrap table-vertical" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>

                                                    <th> <input type="checkbox"></input></th>
                                                    <th>ID</th>
                                                    <th>Thumbnail</th>

                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Status</th>
                                                    <th>Created</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox"></input>
                                                    </td>
                                                    <td>
                                                        123
                                            </td>
                                                    <td className="product-list-img">
                                                        <img src="image.png" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>

                                                    </td>
                                                    <td>435</td>
                                                    <td><span className="dot"></span></td>
                                                    <td>6 months ago</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox"></input>
                                                    </td>
                                                    <td>
                                                        123
                                            </td>
                                                    <td className="product-list-img">
                                                        <img src="image.png" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>

                                                    </td>
                                                    <td>435</td>
                                                    <td><span className="dot"></span></td>
                                                    <td>6 months ago</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox"></input>
                                                    </td>
                                                    <td>
                                                        123
                                            </td>
                                                    <td className="product-list-img">
                                                        <img src="image.png" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>

                                                    </td>
                                                    <td>435</td>
                                                    <td><span className="dot"></span></td>
                                                    <td>6 months ago</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox"></input>
                                                    </td>
                                                    <td>
                                                        123
                                            </td>
                                                    <td className="product-list-img">
                                                        <img src="image.png" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>

                                                    </td>
                                                    <td>435</td>
                                                    <td><span className="dot"></span></td>
                                                    <td>6 months ago</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox"></input>
                                                    </td>
                                                    <td>
                                                        123
                                            </td>
                                                    <td className="product-list-img">
                                                        <img src="image.png" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>

                                                    </td>
                                                    <td>435</td>
                                                    <td><span className="dot"></span></td>
                                                    <td>6 months ago</td>

                                                </tr>

                                            </tbody>
                                        </table>
                                        <br></br>
                                        <button type="button nav-link" value='add_global' onClick={this.addClickOption2.bind(this)} class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">
                                            Save
    </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        ))
    }


    // upsells
    upsells() {

        return this.state.users2.map((element, i) => (
            <div key={i}>
               <div class="table-responsive">

                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">
<h3>Up-Sells</h3> <br></br>
                                        <table id="datatable" className="table table-striped dt-responsive nowrap table-vertical" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>

                                                    <th> <input type="checkbox"></input></th>
                                                    <th>ID</th>
                                                    <th>Thumbnail</th>

                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Status</th>
                                                    <th>Created</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox"></input>
                                                    </td>
                                                    <td>
                                                        123
                                            </td>
                                                    <td className="product-list-img">
                                                        <img src="image.png" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>

                                                    </td>
                                                    <td>435</td>
                                                    <td><span className="dot"></span></td>
                                                    <td>6 months ago</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox"></input>
                                                    </td>
                                                    <td>
                                                        123
                                            </td>
                                                    <td className="product-list-img">
                                                        <img src="image.png" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>

                                                    </td>
                                                    <td>435</td>
                                                    <td><span className="dot"></span></td>
                                                    <td>6 months ago</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox"></input>
                                                    </td>
                                                    <td>
                                                        123
                                            </td>
                                                    <td className="product-list-img">
                                                        <img src="image.png" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>

                                                    </td>
                                                    <td>435</td>
                                                    <td><span className="dot"></span></td>
                                                    <td>6 months ago</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox"></input>
                                                    </td>
                                                    <td>
                                                        123
                                            </td>
                                                    <td className="product-list-img">
                                                        <img src="image.png" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>

                                                    </td>
                                                    <td>435</td>
                                                    <td><span className="dot"></span></td>
                                                    <td>6 months ago</td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox"></input>
                                                    </td>
                                                    <td>
                                                        123
                                            </td>
                                                    <td className="product-list-img">
                                                        <img src="image.png" className="img-fluid" />
                                                    </td>
                                                    <td>
                                                        <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>

                                                    </td>
                                                    <td>435</td>
                                                    <td><span className="dot"></span></td>
                                                    <td>6 months ago</td>

                                                </tr>

                                            </tbody>
                                        </table>
                                        <br></br>
                                        <button type="button nav-link" value='add_global' onClick={this.addClickOption2.bind(this)} class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">
                                            Save
    </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        ))
    }



    // options two


    createOptions2() {

        return this.state.options.map((element2, i) => (
            <div key={i} id="results">

                <div class="table-responsive " id="23">

                    <table class="table table-bordered">
                        <thead class="hidden-xs">
                            <tr>
                                <th></th>
                                <th>Label</th>
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
                                <td class="text-center" id="product-attributes">
                                    <div className="form-group">

                                        <input id="Label" name="Label" type="text" defaultValue={element2.label || ''} onChange={this.handleChangeOptions2.bind(this, i)} className="form-control" />
                                    </div>

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
                            <tr>
                                <td class="text-center" id="product-attributes">
                                    <span class="drag-icon">
                                        <i class="fa"></i>
                                        <i class="fa"></i>
                                    </span>
                                </td>
                                <td class="text-center" id="product-attributes">

                                    <div className="form-group">

                                        <input id="Label" name="Label" type="text" defaultValue={element2.label || ''} onChange={this.handleChangeOptions2.bind(this, i)} className="form-control" />
                                    </div>

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
                                    <button type="button" value='remove' onClick={this.removeClick.bind(this, i)} class="btn btn-default delete-row" data-toggle="tooltip" data-title="Delete Attribute" data-original-title="" title="">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center" id="product-attributes">
                                    <span class="drag-icon">
                                        <i class="fa"></i>
                                        <i class="fa"></i>
                                    </span>
                                </td>
                                <td class="text-center" id="product-attributes">

                                    <div className="form-group">

                                        <input id="Label" name="Label" type="text" defaultValue={element2.label || ''} onChange={this.handleChangeOptions2.bind(this, i)} className="form-control" />
                                    </div>

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
                                    <button type="button" value='remove' onClick={this.removeClick.bind(this, i)} class="btn btn-default delete-row" data-toggle="tooltip" data-title="Delete Attribute" data-original-title="" title="">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center" id="product-attributes">
                                    <span class="drag-icon">
                                        <i class="fa"></i>
                                        <i class="fa"></i>
                                    </span>
                                </td>
                                <td class="text-center" id="product-attributes">

                                    <div className="form-group">

                                        <input id="Label" name="Label" type="text" defaultValue={element2.label || ''} onChange={this.handleChangeOptions2.bind(this, i)} className="form-control" />
                                    </div>

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
                                    <button type="button" value='remove' onClick={this.removeClick.bind(this, i)} class="btn btn-default delete-row" data-toggle="tooltip" data-title="Delete Attribute" data-original-title="" title="">
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


    createUI() {

        return this.state.users.map((el, i) => (
            <div>
            
            <div key={i}>

                <div class="table-responsive">
                    <table class="table table-bordered">
                        <tbody >

                            <tr>
                                 
                                <td class="text-center" id="product-attributes">

                                    <div className="form-group" >
                                      
                                        <select className="form-control select2" name="Attributes"  defaultValue={el.Attributes || ''} onChange={this.handleChange.bind(this, i)}>
                                            <option>Select</option>
                                            <option value="Camera">Camera</option>
                                            <option value="Phone">Phone</option>
                                        </select>
                                    </div>



                                </td>
                                <td class="text-center" id="product-attributes">
                                    <div class="form-group">

                                        <div className="form-group"> 
                                        <input type="text" name="values" className="form-control"
                                                value={el.values || ''}
                                                onChange={this.handleChange.bind(this, i)} 
                                                
                                            />

                                         
                                        </div>
                                    </div>
                                </td>
                                <td class="text-center" id="product-attributes">

                                    <button type="button" value='remove' onClick={this.removeClick.bind(this, i)} class="btn btn-default delete-row" data-toggle="tooltip" data-title="Delete Attribute" data-original-title="" title="">
                                        <i class="fa fa-trash"></i>
                                    </button>

                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>
            </div>
            </div>
        ))
    }


    Search = () => {
        const [showResults, setShowResults] = React.useState(false)
        const onClick = () => setShowResults(true)
        return (
            <div>
                <input type="submit" value="Search" onClick={onClick} />
                { showResults ? <createOptions2 /> : null}
            </div>
        )
    }

    handleChange(i, e) {
        const { name, value } = e.target;
        let users = [...this.state.users];
        users[i] = { ...users[i], [name]: value };
        this.setState({ users  });
       
    }

    handleChangeOptions(i, e) {
        console.log("val ",e.target)
        const { name, value } = e.target;
        let users2 = [...this.state.users2];
        users2[i] = { ...users2[i], [name]: value };
        this.setState({ users2 });
        console.log("Users 2",users2) 
    }
    handleChangeOptions2(i, e) {
        const { name, value } = e.target;
        let options = [...this.state.options];
        options[i] = { ...options[i], [name]: value };
        this.setState({ options });
    }


    removeClick(i) {
        let users = [...this.state.users];
        users.splice(i, 1);
        this.setState({ users });
    }
    removeClick2(i) {
        let users2 = [...this.state.users2];
        users2.splice(i, 1);
        this.setState({ users2 });
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

    render() {
        const options = [
            { value: 'Alaska', label: 'Alaska' },
            { value: 'Connecticut', label: 'Connecticut' },
            { value: 'Delaware', label: 'Delaware' },
            { value: 'Florida', label: 'Florida' },
            { value: 'Georgia', label: 'Georgia' },
            { value: 'Indiana', label: 'Indiana' },
            { value: 'Maine', label: 'Maine' },
            { value: 'Maryland', label: 'Maryland' },
            { value: 'Massachusetts', label: 'Massachusetts' },
            { value: 'Michigan', label: 'Michigan' },
            { value: 'New Hampshire', label: 'New Hampshire' },
            { value: 'New Jersey', label: 'New Jersey' },
            { value: 'New York', label: 'New York' },
            { value: 'North Carolina', label: 'North Carolina' },
            { value: 'Ohio', label: 'Ohio' },
            { value: 'Pennsylvania', label: 'Pennsylvania' },
            { value: 'Rhode Island', label: 'Rhode Island' },
            { value: 'South Carolina', label: 'South Carolina' },
            { value: 'Vermont', label: 'Vermont' },
            { value: 'Virginia', label: 'Virginia' },
            { value: 'West Virginia', label: 'West Virginia' },
        ]; 

        return (
            <AUX>
                <div className="page-content-wrapper">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h3>Basic Information</h3>
                                        <hr></hr>
                                        <ul className="nav nav-pills nav-justified" role="tablist">
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link active" data-toggle="tab" href="#home-1" role="tab">
                                                    <span className="d-none d-md-block">General</span><span className="d-block d-md-none"><i className="mdi mdi-home-variant h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#profile-1" role="tab">
                                                    <span className="d-none d-md-block">Price</span><span className="d-block d-md-none"><i className="mdi mdi-account h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#messages-1" role="tab">
                                                    <span className="d-none d-md-block">Inventory</span><span className="d-block d-md-none"><i className="mdi mdi-email h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#settings-1" role="tab">
                                                    <span className="d-none d-md-block">Images</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#seo-1" role="tab">
                                                    <span className="d-none d-md-block">SEO</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                        </ul>
<hr></hr>
                                        <div className="tab-content">
                                            <div className="tab-pane active p-3" id="home-1" role="tabpanel">

                                                <form  onSubmit={this.GeneralSubmit}>
                                                    <div className="row">
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label for="productname">Name</label>
                                                                <input id="productname" name="Name" type="text" onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label for="productdesc">Description</label>
                                                                <textarea className="form-control" id="productdesc" onChange={this.adding}   name="Description" rows="1"></textarea>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Brand</label>
                                                                <select className="form-control select2"  name="Brand" onChange={this.adding} >
                                                                    <option>Select</option>
                                                                    <option value="AK">Alaska</option>
                                                                    <option value="HI">Hawaii</option>
                                                                </select>
                                                            </div>
                                                        </div>


                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Category</label>

                                                                <select className="form-control select2"  name="Category" onChange={this.adding} >
                                                                    <option>Select</option>
                                                                    <option value="AK">Alaska</option>
                                                                    <option value="HI">Hawaii</option>
                                                                </select>

                                                            </div></div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Tax Class</label>
                                                                <select className="form-control select2" name="TaxClass" onChange={this.adding}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Alaska</option>
                                                                    <option value="HI">Hawaii</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Tags</label>

                                                                <select className="form-control select2" name="Tags" onChange={this.adding}>
                                                                    <option>Select</option>
                                                                    <option value="AK">Alaska</option>
                                                                    <option value="HI">Hawaii</option>
                                                                </select>


                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div>
                                                                <input type="checkbox" name="Status" onChange={this.adding}></input> &nbsp;
                                                    <span>Enable the product</span>

                                                            </div>
                                                        </div>

                                                        <div className="col-3">
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save Changes</button>                                        </div>

                                                    </div>



                                                </form>


                                            </div>
                                            <div className="tab-pane p-3" id="profile-1" role="tabpanel">


                                                <form  onSubmit={this.PriceSubmit}>
                                                    <div className="row">
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label for="price">Price</label>
                                                                <input id="price" name="Price" type="number" onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label for="special_price">Special Price</label>
                                                                <input id="special_price" name="SpecialPrice" onChange={this.adding} type="number" className="form-control" />
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Special Price Type</label>
                                                                <select className="form-control select2" name="SpecialPriceType" onChange={this.adding}>
                                                                    <option>Select</option>
                                                                    <option value="Fixed">Fixed</option>
                                                                    <option value="Percent">Percent</option>
                                                                </select>
                                                            </div>
                                                        </div>


                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Special Price Starts</label>
                                                                <input class="form-control datetime-picker flatpickr-input input active" onChange={this.adding} placeholder="" name="SpecialPriceStart" type="date"  />

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Special Price End</label>
                                                                <input   class="form-control datetime-picker flatpickr-input" onChange={this.adding} name="SpecialPriceEnd"   type="date" />
 

                                                            </div>
                                                        </div>

                                                        <div className="col-3">
                                                            <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save</button>                                        </div>

                                                    </div>




                                                </form>



                                            </div>
                                            <div className="tab-pane p-3" id="messages-1" role="tabpanel">

                                                <form onSubmit={this.InventorySubmit}>
                                                    <div className="row">
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label for="price">SKU</label>
                                                                <input id="price" name="SKU" onChange={this.adding} type="number" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Inventory Management</label>
                                                                <select className="form-control select2" name="InventoryManagement" onChange={this.Inventory}>
                                                                    <option value="">Select</option>
                                                                    <option value="No">Don't Track Inventory</option>
                                                                    <option value="Yes">Track Inventory</option>
                                                                </select>
                                                            </div>
                                                        </div>


                                                    </div>
                                                   
                                                    <div className="row"> 
                                                    {this.state.showResults ?
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Qty</label>
                                                                <input id="qty" name="qty" type="number" onChange={this.adding} className="form-control" />

                                                            </div>
                                                        </div>
                                                    :null}

                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Stock Availability</label>
                                                                <select className="form-control select2" name="StockAvailability" onChange={this.adding}>
                                                                    <option value="">Select</option>
                                                                    <option value="AK">In stock</option>
                                                                    <option value="HI">Out of Stock</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-3">
                                                            <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save</button>                                        </div>

                                                    </div>


                                                </form>
                                            </div>
                                            <div className="tab-pane p-3" id="settings-1" role="tabpanel">
                                                <br></br> <br></br>
                                                <div class="row">
                                                    <div class="col-4">
                                                        <div class="single-image-wrapper">
                                                            <h4>Base Images</h4>
                                                            <br></br>
                                                            <input type="file"></input>
                                                        </div>
                                                    </div>

                                                    <div class="col-4">
                                                        <div class="single-image-wrapper">
                                                            <h4>Additional Images</h4>
                                                            <br></br>
                                                            <input type="file"></input>

                                                            <div class="clearfix"></div>

                                                        </div>
                                                    </div>

                                                    <div class="col-4">
                                                        <div class="single-image-wrapper">
                                                            <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save</button>                                        </div>



                                                    </div>

                                                </div>



                                            </div> 

                                            <div className="tab-pane p-3" id="seo-1" role="tabpanel">
                                                <br></br>
                                                <form onSubmit={this.SEOSubmit}>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <label for="metatitle">Meta title</label>
                                                                <input id="metatitle" name="MetaTitle" type="text"  onChange={this.adding} className="form-control" />
                                                            </div>

                                                        </div>

                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <label for="metadescription">Meta Description</label>
                                                                <textarea className="form-control" name="MetaDescription"  onChange={this.adding} rows="1"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save</button>
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div></div>        </div>
                        </div>


                        {/* 2nd panel */}


                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                   
                                        <h3>Advanced Information</h3>
                                        <hr></hr>
                                        
                                        <ul className="nav nav-pills nav-justified" role="tablist">
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link active" data-toggle="tab" href="#attribue-2" role="tab">
                                                    <span className="d-none d-md-block">Attributes</span><span className="d-block d-md-none"><i className="mdi mdi-home-variant h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#options-2" role="tab">
                                                    <span className="d-none d-md-block">Options</span><span className="d-block d-md-none"><i className="mdi mdi-account h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#related-2" role="tab">
                                                    <span className="d-none d-md-block">Related Products</span><span className="d-block d-md-none"><i className="mdi mdi-email h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#upsells-2" role="tab">
                                                    <span className="d-none d-md-block">Up-Sells</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#cross-2" role="tab">
                                                    <span className="d-none d-md-block">Cross-Sells</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#additional-2" role="tab">
                                                    <span className="d-none d-md-block">Additional</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                        </ul>
                                        <hr></hr>
                                        <div className="tab-content">
                                            <div className="tab-pane active p-3" id="attribue-2" role="tabpanel">
                                                <h3>Attributes</h3>
                                                <hr></hr>
                                                <div class="table-responsive">
                    <table class="table table-bordered"> 
                        <thead class="hidden-xs">
                            <tr>
                               
<th> Attribute  </th>
<th> Values  </th>
                                
                                <th></th>
                            </tr>
                        </thead>     
            </table>
            </div>
                                                <form onSubmit={this.AttributeSubmit}>
                                                       {this.createUI()}
                                                    <br></br>
                                                    <div class="row">
                                                        <div class="col-3">
                                                            <button type="button" value='add_new' onClick={this.addClick.bind(this)} class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">
                                                                Add New Attribute
    </button></div>
                                                        <div className="col-4">
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save Changes</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                            {/* Options staterd */}

                                            <div className="tab-pane p-3" id="options-2" role="tabpanel">

                                                <div className="col-lg-12">
                                                    <div className="card m-b-20">
                                                        <div className="card-body">

                                                            <h4 className="mt-0 header-title">Options</h4>
                                                            <hr></hr>

                                                            <div id="accordion">
                                                                <div className="card">
                                                                    <div className="card-header p-3" id="headingOne">
                                                                        <h6 className="m-0">
                                                                            <a href="#collapseOne" className="text-dark" data-toggle="collapse"
                                                                                aria-expanded="true"
                                                                                aria-controls="collapseOne">
                                                                                New Option
                                    </a>
                                                                        </h6>
                                                                    </div>

                                                                    <div id="collapseOne" className="collapse show"
                                                                        aria-labelledby="headingOne" data-parent="#accordion">

                                                                        <form>
                                                                            {this.createOptionsUI()}

                                                                            <div class="row">
                                                                                <div class="col-3">
                                                                                    <button type="button" value='add_new' onClick={this.addClickOptions.bind(this)} class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">
                                                                                        Add New Option
    </button></div> 

                                                                                <div className="col-lg-3 col-md-12 p-l-0">
                                                                                    <div className="form-group">

                                                                                        <select name="options[3][type]" className="form-control custom-select-black" id="option-3-type">
                                                                                            <option value selected>
                                                                                                Select Global Option
                </option>
                                                                                            <optgroup label="Text">
                                                                                                <option value="field">
                                                                                                    Field
                  </option>
                                                                                                <option value="textarea">
                                                                                                    Textarea
                  </option>
                                                                                            </optgroup>
                                                                                            <optgroup label="Select">
                                                                                                <option value="dropdown">
                                                                                                    Dropdown
                  </option>
                                                                                                <option value="checkbox">
                                                                                                    Checkbox
                  </option>
                                                                                                <option value="checkbox_custom">
                                                                                                    Custom Checkbox
                  </option>
                                                                                                <option value="radio" >
                                                                                                    Radio Button
                  </option>
                                                                                                <option value="radio_custom">
                                                                                                    Custom Radio Button
                  </option>
                                                                                                <option value="multiple_select">
                                                                                                    Multiple Select
                  </option>
                                                                                            </optgroup>
                                                                                            <optgroup label="Date">
                                                                                                <option value="date">
                                                                                                    Date
                  </option>
                                                                                                <option value="date_time">
                                                                                                    Date &amp; Time
                  </option>
                                                                                                <option value="time">
                                                                                                    Time
                  </option>
                                                                                            </optgroup>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>







                                                                                <div class="col-3">
                                                                                    <button type="button nav-link" data-toggle="tab" href="#23" role="tab" value='add_global' onClick={this.addClickOption2.bind(this)} class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">
                                                                                        Add Global Option
    </button></div>
                                                                            </div>
                                                                        </form>

                                                                    </div>


                                                                    <div id="collapseOne" className="collapse show " id="hidden"
                                                                        aria-labelledby="headingOne" data-parent="#accordion">

                                                                        <form>
                                                                            {this.createOptions2()}

                                                                            <div class="row">

                                                                                <div className="col-4">
                                                                                    <button type="submit" className="btn btn-primary waves-effect waves-light">Save Changes</button>
                                                                                </div>
                                                                            </div>
                                                                        </form>

                                                                    </div>




                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane p-3" id="related-2" role="tabpanel">

                                                <form>
                                                
                                                    {this.relatedProduct()}
                                                </form>
                                            </div>
                                            <div className="tab-pane p-3" id="upsells-2" role="tabpanel">
                                              
                                                  <form>
                                               {this.upsells()}
                                               </form>
                                            </div>

                                            <div className="tab-pane p-3" id="cross-2" role="tabpanel">
                                                <form>
                                           {this.crossSells()}
                                                </form>
                                            </div>

                                            <div className="tab-pane p-3" id="additional-2" role="tabpanel">


                                                <form onSubmit={this.AdditionalSubmit}>
                                                    <div className="row">
                                                    <div class="col-6">
                                                            <div className="form-group">
                                                                <label for="productdesc">Short Description</label>
                                                                <textarea className="form-control" name="ShortDescription" onChange={this.adding} rows="1"></textarea>
                                                            </div>
                                                        </div>
                                                       
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Product New From</label>  
                                                                <input class="form-control datetime-picker flatpickr-input input active" name="ProductNewFrom" onChange={this.adding} placeholder="" type="date"   />

                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div className="row">
                                                        <div className="col-6">
                                                            <div className="form-group">
                                                                <label className="control-label">Product New To</label>
 
                                                                <input class="form-control datetime-picker flatpickr-input input active" name="ProductNewTo" onChange={this.adding} placeholder="" type="date"   />

                                                            </div></div>
                                                            
                                                            <div className="col-3">
                                                                <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save Changes</button>                                        </div>

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

AddCatalog.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors  
  });
  
  export default connect(
    mapStateToProps,
    {
        saveProductGeneral,
        getLastRecode,
        saveProductPrice,
        saveProductInventory,
        SaveProductSEO,
        SaveProductAttribute,
        SaveProductAdditional,
        SaveProductOptions
    }
  )(withRouter(AddCatalog))