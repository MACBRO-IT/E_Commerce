import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from 'react-router-dom';
import Select from 'react-select';


class AddSliders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [{ caption_1: "", caption_2: "", direction: "" , call_to_url:"", call_to_action:""}],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    addClickOption2() {
        this.setState(prevState => ({
            options: [...prevState.options, {caption_1: "", caption_2: "", direction: "" , call_to_url:"", call_to_action:"" }],

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

<div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">
                                        <table style={{width:"100%"}}>
                                        <button type="button" value='remove' onClick={this.removeClick3.bind(this, i)} class="btn btn-default delete-row float-right" data-toggle="tooltip" data-title="Delete Attribute" data-original-title="" title="">
                                        <i class="fa fa-times"></i>
                                    </button>
<input type="file"></input> 
<br></br>
                                        <h3>Image Slide </h3>
                                        <hr></hr>
                                        <ul className="nav nav-pills nav-justified" role="tablist">
                                            <li className="nav-item " >
                                                <a className="nav-link active" data-toggle="tab" href="#general-1" role="tab">
                                                    <span className="d-none d-md-block">General</span><span className="d-block d-md-none"><i className="mdi mdi-home-variant h5"></i></span>
                                                </a>
                                            </li>
                                           
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#options-1" role="tab">
                                                    <span className="d-none d-md-block">Options</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                        </ul>
<hr></hr>
                                        <div className="tab-content">
                                            <div className="tab-pane active p-1" id="general-1" role="tabpanel">
                                                <form>
                                                    <h6>Caption 1</h6>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="caption_1">Caption 1</label>
                                                                <input id="caption_1" name="caption_1" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="caption_2">Caption 2</label>
                                                                <input id="caption_2" name="caption_2" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                        <div className="form-group">
                                                                <label className="control-label">Direction</label>
                                                                <select className="form-control select2">
                                                                    <option>Select</option>
                                                                    <option value="AK">Right</option>
                                                                    <option value="HI">Left</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        </div>

                                                        <div class="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="call_to_action">Call to Action Text</label>
                                                                <input id="call_to_action" name="call_to_action" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="call_to">Call to Action URL</label>
                                                                <input id="call_to-url" name="call_to_url" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                            <label for="productname"></label>&nbsp; <br></br>
                                                            <input type="checkbox"></input> &nbsp;
                                                    <span>Open in new window</span>
                                                            </div>
                                                        
                                                        </div>
                                                        </div>
                                                      
                                                   </form>
                                                   </div>
                                                   <div className="tab-pane p-4" id="options-1" role="tabpanel">
                                           
                                             
                                                                       <form>
                                                                        
                                                <div class="col-4 float-right" >
                                                                       <div className="form-group">
                                                                <label className="control-label">Direction</label>
                                                                <select className="form-control select2">
                                                                    <option>Select</option>
                                                                    <option value="AK">Right</option>
                                                                    <option value="HI">Left</option>
                                                                </select>
                                                            </div></div>
                                                            <br></br>
                                                            <br></br>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="delay">Delay</label>
                                                                <input id="delay" name="delay" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                        <div className="form-group">
                                                                <label className="control-label">Effect</label>
                                                                <select className="form-control select2">
                                                                    <option>Select</option>
                                                                    <option value="AK">Fade up</option>
                                                                    <option value="HI">FadeInLeft</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                       
                                                      
                                                    </div>
                                                     
                                                    
                                                </form>
                                            
                                            </div>
                                            
                                        </div>
                                        </table>
                                        </div>
                                        </div>        </div>
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

                                        <h3>Create Option</h3>
                                        <hr></hr>
                                        <ul className="nav nav-pills nav-justified" role="tablist">
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link active" data-toggle="tab" href="#homes-1" role="tab">
                                                    <span className="d-none d-md-block">Slides</span><span className="d-block d-md-none"><i className="mdi mdi-home-variant h5"></i></span>
                                                </a>
                                            </li>
                                           
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#values-1" role="tab">
                                                    <span className="d-none d-md-block">Settings</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                        </ul>
<hr></hr>
                                        <div className="tab-content">
                                            <div className="tab-pane active p-2" id="homes-1" role="tabpanel">
                                                <form>

                                                   {this.createOptions2()}
                                                   <div class="row">
                                                                            <div class="col-3">
                                                            <button type="button" value='add_new' onClick={this.addClickOption2.bind(this)} class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">
                                                                Add Slide
    </button></div>
                                                                                <div className="col-4">
                                                                                    <button type="submit" className="btn btn-primary waves-effect waves-light">Save</button>
                                                                                </div>
                                                                            </div>
                                                   </form>
                                                   </div>

                                                   <div className="tab-pane p-3" id="values-1" role="tabpanel">
                                        
                                                                       <form>
                                                                       <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="slider_name">Name</label>
                                                                <input id="slider_name" name="slider_name" type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="speed">Speed</label>
                                                                <input id="speed" name="speed" type="number" className="form-control" />
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                            <label for="productname">Fade</label>&nbsp; <br></br>
                                                            <input type="checkbox"></input> &nbsp;
                                                    <span>Fade slides instead of sliding</span>
                                                            </div>
                                                        
                                                        </div>
                                                        </div>
                                                        <div className="row">

                                                        <div class="col-4">
                                                            <div className="form-group">
                                                            <label for="productname">Autoplay</label>&nbsp; <br></br>
                                                            <input type="checkbox"></input> &nbsp;
                                                    <span>Enable autoplay</span>
                                                            </div>
                                                            
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="speed">Autoplay Speed</label>
                                                                <input id="speed" name="speed" type="number" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                            <label for="productname">Dots</label>&nbsp; <br></br>
                                                            <input type="checkbox"></input> &nbsp;
                                                    <span>Show slider dots</span>
                                                            </div>
                                                            
                                                        </div>
                                                            </div>
<div class="row">
                                              
<div class="col-4">
                                                            <div className="form-group">
                                                            <label for="productname">Arrows</label>&nbsp; <br></br>
                                                            <input type="checkbox"></input> &nbsp;
                                                    <span>Show Prev/Next arrows</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                        <br></br>
                                                        &nbsp; &nbsp; &nbsp;<button type="submit" className="btn btn-primary waves-effect waves-light">&nbsp;Save &nbsp; </button>                                  
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

export default AddSliders;   