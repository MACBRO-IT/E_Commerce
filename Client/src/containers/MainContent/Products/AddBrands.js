import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from 'react-router-dom';
import Select from 'react-select';


class AddBrands extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleSubmit = this.handleSubmit.bind(this);
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

                                                <form>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="productname">Name</label>
                                                                <input id="productname" name="productname" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                            <label for="productname">Status</label>&nbsp; <br></br>
                                                            <input type="checkbox"></input> &nbsp;
                                                    <span>Enable the brand</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-4">
                                                        <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save Changes</button>                                        </div>

                                                    
                                                    </div>

                                                   </form>
                                                   </div>

                                                   <div className="tab-pane p-3" id="settings-1" role="tabpanel">
                                                <br></br> 
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
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save Changes</button>                                        </div>



                                                    </div>

                                                </div>



                                            </div>

                                            <div className="tab-pane p-3" id="seo-1" role="tabpanel">
                                                <br></br>
                                                <form>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <label for="metatitle">Meta title</label>
                                                                <input id="metatitle" name="productname" type="text" className="form-control" />
                                                            </div>

                                                        </div>

                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <label for="metadescription">Meta Description</label>
                                                                <textarea className="form-control" id="metadescription" rows="1"></textarea>
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
                                    </div></div>        </div>
                        </div>
                    </div>
                </div>


            </AUX>
        );
    }
}

export default AddBrands;   