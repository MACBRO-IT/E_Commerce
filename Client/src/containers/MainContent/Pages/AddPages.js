import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link, withRouter } from 'react-router-dom';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';

import { savePages, savePagesSEO } from "../../../store/Actions/Pages"

class AddPages extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            //Pages_General
            Name: "",
            Body: "",
            Status: "",
            //Pages_SEO
            MetaTitle: "",
            MetaDescription: "",
        };
    }
    PagesSubmit = event => {
        event.preventDefault();
        let data =
        {
            Name: this.state.Name,
            Body: this.state.Body,
            Status: this.state.Status,
            Pages_Id: 1,

        }
        console.log("datas", data)
        this.props.savePages(data, this.props.history);

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
            Body: "",
            Status: "",

        })


    }
    PagesSEOSubmit = event => {
        event.preventDefault();
        let data =
        {
            MetaTitle: this.state.MetaTitle,
            MetaDescription: this.state.MetaDescription,
            SEO_Id: 1,
        }
        console.log("datas", data)
        this.props.savePagesSEO(data, this.props.history);
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
            MetaTitle: "",
            MetaDescription: "",
        })
    }
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
                                        <h3>Page Information</h3>
                                        <hr></hr>
                                        <ul className="nav nav-pills nav-justified" role="tablist"> 
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link active" data-toggle="tab" href="#home-1" role="tab">
                                                    <span className="d-none d-md-block">General</span><span className="d-block d-md-none"><i className="mdi mdi-home-variant h5"></i></span>
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
                                                <form onSubmit={this.PagesSubmit}>
                                                    <div className="row">
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label for="productname">Name</label>
                                                                <input id="productname" name="Name" onChange={this.adding} value={this.state.Name} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div className="form-group">
                                                                <label for="productdesc">Body</label>
                                                                <textarea className="form-control" id="Body" onChange={this.adding} value={this.state.Body} name="Body" rows="1"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div>
                                                                <input type="checkbox" name='Status' onChange={this.adding}  ></input> &nbsp;
                                                    <span>Enable the product</span>

                                                            </div>
                                                        </div>

                                                        <div className="col-3">
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save Changes</button>                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane p-3" id="seo-1" role="tabpanel">
                                                <br></br>
                                                <form onSubmit={this.PagesSEOSubmit}>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <label for="metatitle">Meta title</label>
                                                                <input id="metatitle" name="MetaTitle" onChange={this.adding} value={this.state.MetaTitle} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="form-group">
                                                                <label for="metadescription">Meta Description</label>
                                                                <textarea className="form-control" id="MetaDescription" name="MetaDescription" onChange={this.adding} value={this.state.MetaDescription} rows="1"></textarea>
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
    Pages: state.Pages
});

export default connect(
    mapStateToProps,
    {
        savePages, savePagesSEO
    }
)(withRouter(AddPages));

