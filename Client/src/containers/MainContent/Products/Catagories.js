import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link ,withRouter} from 'react-router-dom';
import Select from 'react-select';
import { connect } from 'react-redux'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { saveProductCatagoriesGeneral} from   "../../../store/Actions/Products/Catagories"


class Catagories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            users: [{ attributes: "", values: "" }],
            users2: [{ name: "", type: "" }],
            options: [{ label: "", price: "", price_type: "" }],

            //Catagories
            Name:"",
            Searchable:"",
            Status:""


        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.CatagoriesSubmit = this.CatagoriesSubmit.bind(this);
    }

    adding = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        })
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


    //Catagories submit

    CatagoriesSubmit = event => {
        event.preventDefault(); 
        let data = 
        { 
            Name: this.state.Name,
            Searchable: this.state.Searchable,
            Status: this.state.Status,
            Category_Id : 1
            
        } 
         this.props.saveProductCatagoriesGeneral(data,this.props.history);  
       
         toast.success('Added Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          this.setState({
            Name:"",
            Searchable:"",
            Status:""
          })  
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
                  <ToastContainer
position="top-right"
autoClose={5000}
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

                                        <h3>Catagories</h3>
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
                                          
                                        </ul>
<hr></hr>
                                        <div className="tab-content">
                                            <div className="tab-pane active p-3" id="home-1" role="tabpanel">

                                                <form onSubmit={this.CatagoriesSubmit}>
                                                    <div className="row">
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label for="productname">Name</label>
                                                                <input id="productname" name="Name" type="text" value={this.state.Name} onChange={this.adding} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                            <label for="productname">Searchable</label>&nbsp; <br></br>
                                                            <input type="checkbox" name="Searchable" value={this.state.Searchable} onChange={this.adding}></input> &nbsp;
                                                    <span>Show this category in search box category list</span>
                                                            </div>
                                                        </div></div>

                                                        <div className="row">
                                                        <div className="col-4">
                                                            <div className="form-group">
                                                            <label for="productname">Status </label>&nbsp; <br></br>
                                                                <input type="checkbox" name="Status" value={this.state.Status} onChange={this.adding}></input> &nbsp;
                                                    <span>Enable the category</span>

                                                            </div>
                                                        </div>

                                                        <div className="col-4">
                                                        <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save Changes</button>                                        </div>

                                                          
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
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save Changes</button>                                        </div>



                                                    </div>

                                                </div>



                                            </div>
                </div></div></div></div></div></div></div>


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
        saveProductCatagoriesGeneral
    }
)(withRouter(Catagories)) ;   