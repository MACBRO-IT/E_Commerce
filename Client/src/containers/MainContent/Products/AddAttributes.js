import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from 'react-router-dom';
import Select from 'react-select';


class AddAttributes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [{values: "" }],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    attributeUI() {

        return this.state.users.map((el, i) => (
            <div key={i}>

                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="hidden-xs">
                            <tr>
                                <th></th>
                                
                                <th>Values</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody >

                            <tr>
                                <td class="text-center" id="product-attributes">
                                    <span class="drag-icon">
                                        <i class="fa"></i>
                                        <i class="fa"></i>
                                    </span>
                                </td>
                                <td class="text-center" id="product-attributes">

                                    <div className="form-group" >
                                      
                                        <input id="value" name="value" type="text" className="form-control" />
                                        
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



    addClickOption2() {
        this.setState(prevState => ({
            options: [...prevState.options, { label: "", price: "", price_type: "" }],

        }))
    }


    addClickOptions() {
        this.setState(prevState => ({

            users2: [...prevState.users2, { name: "", type: "", }],

        }))
    }

    addClick() {
        this.setState(prevState => ({
            users: [...prevState.users, { attributes: "", values: "" }],

        }))
    }


  

    handleChange(i, e) {
        const { name, value } = e.target;
        let users = [...this.state.users];
        users[i] = { ...users[i], [name]: value };
        this.setState({ users });
    }

    handleChangeOptions(i, e) {
        const { name, value } = e.target;
        let users2 = [...this.state.users2];
        users2[i] = { ...users2[i], [name]: value };
        this.setState({ users2 });
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

        return (
            <AUX>
                <div className="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h3>Create Brand</h3>
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
                                                                <label className="control-label">Attribute Set</label>
                                                                <select className="form-control select2">
                                                                    <option>Select</option>
                                                                    <option value="AK">Camera</option>
                                                                    <option value="HI">Hardware</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="attribute_name">Name</label>
                                                                <input id="attribute_name" name="attribute_name" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-4">
                                                        <div className="form-group">
                                                                <label className="control-label">Categories</label>
                                                                
                                                                         <Select
                                                           onChange={this.handleChangeOptions.bind()}
                                                               isMulti={true}
                                                               />
                                                                                                    </div>
                                                                                                    </div> 

                                                      <div class="row">                                      
                                                        <div class="col-12">
                                                            <div className="form-group">
                                                            <label for="productname">Filterable</label>&nbsp; <br></br>
                                                            <input type="checkbox"></input> &nbsp;
                                                    <span>Use this attribute for filtering products</span>
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
                                           
                                                <form >
                                                    {this.attributeUI()}
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



                                        </div>
                                    </div></div>        </div>
                        </div>
                    </div>
                </div>


            </AUX>
        );
    }
}

export default AddAttributes;   