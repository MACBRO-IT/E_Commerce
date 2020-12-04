import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from 'react-router-dom';
import Select from 'react-select';


class AddMenus extends Component {

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
    

    render() {

    
        return (
            <AUX>
                <div className="page-content-wrapper">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h3>Create Menu</h3>
                                        <hr></hr>
                                       
                         
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
                                                            <label className="control-label">Status</label><br></br>
                                                                <input type="checkbox"></input> &nbsp;
                                                    <span>Enable the menu</span>

                                                            </div>
                                                        </div>
                                                        
                                                        <div className="col-4">
                                                            <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save Changes</button>                                
                                                       </div>

                                                    </div>
                                    </form>
                                
              </div></div></div></div></div></div>

            </AUX>
        );
    }
}

export default AddMenus;   