import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from 'react-router-dom';
import Select from 'react-select';


class AddTags extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [{values: "" }],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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

                                        <h3>Create Tag</h3>
                                        <hr></hr>
                                        <div className="tab-content">
                                            <div id="home-1" role="tabpanel">

<span>Tag Information</span>
<hr></hr>
                                                <form>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="attribute_name">Name</label>
                                                                <input id="attribute_name" name="attribute_name" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        
                                                       
                                                        <div className="col-6">
                                                        <br></br>
                                                        &nbsp; &nbsp; &nbsp;<button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;   Save &nbsp; </button>                                  
                                                            
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

export default AddTags;   