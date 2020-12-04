import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from 'react-router-dom';
import Select from 'react-select';


class AddFlashSales extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [{ label: "", price: "", price_type: "" }],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <div className="page-content-wrapper">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h3>Create Flash Sales</h3>
                                        <hr></hr>
                                        <ul className="nav nav-pills nav-justified" role="tablist">
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link active" data-toggle="tab" href="#home-1" role="tab">
                                                    <span className="d-none d-md-block">General</span><span className="d-block d-md-none"><i className="mdi mdi-home-variant h5"></i></span>
                                                </a>
                                            </li>
                                           
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#values-1" role="tab">
                                                    <span className="d-none d-md-block">values</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                        </ul>
<hr></hr>
                                        <div className="tab-content">
                                            <div className="tab-pane active p-3" id="home-1" role="tabpanel">

                                                <form>
                                                    <div className="row">
                                                       
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="attribute_name">Name</label>
                                                                <input id="attribute_name" name="attribute_name" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                        <div className="form-group">
                                                                <label className="control-label">Type</label>
                                                                
                                                                         <Select
                                                           onChange={this.handleChangeOptions2.bind(this)}
                                                               isMulti={true}
                                                               />
                                                                                                    </div>
                                                                                                    </div> 

<div class="row">                                      

                                                        <div class="col-12">
                                                            <div className="form-group">
                                                            <label for="productname">Required</label>&nbsp; <br></br>
                                                            <input type="checkbox"></input> &nbsp;
                                                    <span>This option is required</span>
                                                            </div>
                                                        </div> </div>

                                                        <div className="col-6">
                                                        <br></br>
                                                        &nbsp; &nbsp; &nbsp;<button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>                                  
                                                            
                                                     </div>
                                                    </div>
                                                   </form>
                                                   </div>
                                                   <div className="tab-pane p-3" id="values-1" role="tabpanel">
                                           
                                             
                                                <form>
                                                                            {this.createOptions2()}

                                                                            <div class="row">
                                                                            <div class="col-3">
                                                            <button type="button" value='add_new' onClick={this.addClickOption2.bind(this)} class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">
                                                                Add New Attribute
    </button></div>
                                                                                <div className="col-4">
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

export default AddFlashSales;   