import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link,withRouter} from 'react-router-dom';
import Select from 'react-select';
import AddBrands from '../Products/AddBrands';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';

import {saveUserRole} from "../../../store/Actions/Users"

class AddRoles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [{ label: "", price: "", price_type: "" }],
             //Roles
        Name: "",
        };
       
    }
    UserRoleSubmit = event => {
      event.preventDefault();
      let data =
      {
        Name: this.state.Name,
        Roles_Id: 1,
      }
      console.log("datas", data)
      this.props.saveUserRole(data, this.props.history);
  
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
                                        <h3>Create Role</h3>
                                        <hr></hr>
                                        <ul className="nav nav-pills nav-justified" role="tablist">
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link active" data-toggle="tab" href="#home-1" role="tab">
                                                    <span className="d-none d-md-block">General</span><span className="d-block d-md-none"><i className="mdi mdi-home-variant h5"></i></span>
                                                </a>
                                            </li>
                                            <li className="nav-item waves-effect waves-light">
                                                <a className="nav-link" data-toggle="tab" href="#restrictions-1" role="tab">
                                                    <span className="d-none d-md-block">Permissions</span><span className="d-block d-md-none"><i className="mdi mdi-settings h5"></i></span>
                                                </a>
                                            </li>
                                        </ul>
                                      <hr></hr>
                                        <div className="tab-content">
                                            <div className="tab-pane active p-3" id="home-1" role="tabpanel">                                           
                                                <form onSubmit={this.UserRoleSubmit}>
                                                    <div className="row">
                                                        <div class="col-4">
                                                            <div className="form-group">
                                                                <label for="first_name">Name</label>
                                                                <input id="name" name="Name" name="Name" onChange={this.adding} type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                          <br></br>
                                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Save </button>                                
                                                       </div>
                                                    </div>
                                                 </form>
                                              </div>
                                                  
                                                   {/* 2nd */}
                                                   <div className="tab-pane p-3" id="restrictions-1" role="tabpanel">
                                                <form>
                                                <div className="btn-group permission-parent-actions pull-right">
  <button type="button" className="btn btn-default allow-all border">Allow all</button>
  <button type="button" className="btn btn-default deny-all border">Deny all</button>
  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
</div>

                                                                
  <div className="col-lg-9 col-md-12">
    <div className="col-md-12">
      <div className="row">
        <div className="permission-parent-head clearfix">
          <h3>Attribute</h3>
        </div>
      </div>
    </div>
    <div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.attributes</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Attribute
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.attributes-index-allow" name="permissions[admin.attributes.index]" className="permission-allow" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">
                   <input type="radio" defaultValue={-1} id="admin.attributes-index-deny" name="permissions[admin.attributes.index]" className="permission-deny" />   
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.attributes-index-inherit" name="permissions[admin.attributes.create]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create Attribute
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.attributes_set-create-inherit" name="permissions[admin.attributes.create]" className="permission-create" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.attributes_set-create-inherit" name="permissions[admin.attributes.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.attributes_set-create-inherit" name="permissions[admin.attributes.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit Attribute
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.attributes-edit-inherit" name="permissions[admin.attributes.edit]" className="permission-edit" checked  />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.attributes-edit-inherit" name="permissions[admin.attributes.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.attributes-edit-inherit" name="permissions[admin.attributes.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete Attribute
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.attributes-delete-inherit" name="permissions[admin.attributes.delete]" className="permission-delete" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.attributes-delete-inherit" name="permissions[admin.attributes.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.attributes-delete-inherit" name="permissions[admin.attributes.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div></div>

          {/* 2nd  */}

          <div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.attribute_sets
</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Attribute Set
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.attributes_set-index-allow" name="permissions[admin.attributes_set.index]" className="permission-allow" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">
                  
                   <input type="radio" defaultValue={-1} id="admin.attributes_set-index-deny" name="permissions[admin.attributes_set.index]" className="permission-deny" />     
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                                 </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.attributes_set-index-inherit" name="permissions[admin.attributes_set.create]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create Attribute Set
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.attributes_set-create-inherit" name="permissions[admin.attributes_set.create]" className="permission-create" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.attributes_set-create-inherit" name="permissions[admin.attributes_set.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.attributes_set-create-inherit" name="permissions[admin.attributes_set.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit Attribute Set
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.attributes_set-edit-inherit" name="permissions[admin.attributes_set.edit]" className="permission-edit" checked  />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.attributes_set-edit-inherit" name="permissions[admin.attributes_set.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.attributes_set-edit-inherit" name="permissions[admin.attributes_set.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete Attribute Set
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.attributes_set-delete-inherit" name="permissions[admin.attributes_set.delete]" className="permission-delete" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.attributes_set-delete-inherit" name="permissions[admin.attributes_set.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.attributes_set-delete-inherit" name="permissions[admin.attributes_set.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div></div>

{/* 3rd */}
<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.brands

</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Brand
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.brands-index-allow" name="permissions[admin.brands.index]" className="permission-allow" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.brands-index-deny" name="permissions[admin.brands.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.brands-index-inherit" name="permissions[admin.brands.create]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create Brand
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.brands-create-inherit" name="permissions[admin.brands.create]" className="permission-create"  checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.brands-create-inherit" name="permissions[admin.brands.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.brands-create-inherit" name="permissions[admin.brands.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit Brand
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.brands-edit-inherit" name="permissions[admin.brands.edit]" className="permission-edit" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.brands-edit-inherit" name="permissions[admin.brands.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.brands-edit-inherit" name="permissions[admin.brands.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete Brand
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.brands-delete-inherit" name="permissions[admin.brands.delete]" className="permission-delete" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.brands-delete-inherit" name="permissions[admin.brands.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.brands-delete-inherit" name="permissions[admin.brands.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div></div>

<br></br>
          {/* 4th */}

          <div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.categories


</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Categories
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.categories-index-allow" name="permissions[admin.categories.index]" className="permission-allow" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.categories-index-deny" name="permissions[admin.categories.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.categories-index-inherit" name="permissions[admin.categories.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create Categories
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.categories-create-inherit" name="permissions[admin.categories.create]" className="permission-create" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.categories-create-inherit" name="permissions[admin.categories.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.categories-create-inherit" name="permissions[admin.categories.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit Categories
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.categories-edit-inherit" name="permissions[admin.categories.edit]" className="permission-edit" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.categories-edit-inherit" name="permissions[admin.categories.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.categories-edit-inherit" name="permissions[admin.categories.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete Categories
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.categories-delete-inherit" name="permissions[admin.categories.delete]" className="permission-delete"  checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.categories-delete-inherit" name="permissions[admin.categories.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.categories-delete-inherit" name="permissions[admin.categories.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div></div>

<br></br>

{/* 5th coupon*/}
<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.coupons


</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Coupons
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.coupons-index-allow" name="permissions[admin.coupons.index]" className="permission-allow" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.coupons-index-deny" name="permissions[admin.coupons.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.coupons-index-inherit" name="permissions[admin.coupons.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create Coupons
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.coupons-create-inherit" name="permissions[admin.coupons.create]" className="permission-create" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.coupons-create-inherit" name="permissions[admin.coupons.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.coupons-create-inherit" name="permissions[admin.coupons.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit Coupons
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.coupons-edit-inherit" name="permissions[admin.coupons.edit]" className="permission-edit" checked  />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.coupons-edit-inherit" name="permissions[admin.coupons.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.coupons-edit-inherit" name="permissions[admin.coupons.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete Coupons
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.coupons-delete-inherit" name="permissions[admin.coupons.delete]" className="permission-delete" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.coupons-delete-inherit" name="permissions[admin.coupons.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.coupons-delete-inherit" name="permissions[admin.categories.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div></div>

<br></br>
{/* 6th currency */}

<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.currency_rate</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Currency Rates
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.currency_rate-index-allow" name="permissions[admin.currency_rate.index]" className="permission-allow" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.currency_rate-index-deny" name="permissions[admin.currency_rate.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.currency_rate-index-inherit" name="permissions[admin.currency_rate.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit Currency Rates
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.currency_rate-edit-inherit" name="permissions[admin.currency_rate.edit]" className="permission-edit" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.currency_rate-edit-inherit" name="permissions[admin.currency_rate.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.currency_rate-edit-inherit" name="permissions[admin.currency_rate.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
         
          
           
            </div>
          </div></div></div>

<br></br>   

{/* 7th FlashSale */}

<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.media


</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Flash Sale
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.flash_sales-index-allow" name="permissions[admin.flash_sales.index]" className="permission-allow" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.flash_sales-index-deny" name="permissions[admin.flash_sales.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.flash_sales-index-inherit" name="permissions[admin.flash_sales.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create Flash Sale
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.flash_sales-create-inherit" name="permissions[admin.flash_sales.create]" className="permission-create"  checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.flash_sales-create-inherit" name="permissions[admin.flash_sales.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.flash_sales-create-inherit" name="permissions[admin.flash_sales.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit Flash Sale
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.flash_sales-edit-inherit" name="permissions[admin.flash_sales.edit]" className="permission-edit" checked  />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.flash_sales-edit-inherit" name="permissions[admin.flash_sales.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.flash_sales-edit-inherit" name="permissions[admin.flash_sales.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
                </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete Flash Sale
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.flash_sales-delete-inherit" name="permissions[admin.flash_sales.delete]" className="permission-delete" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.flash_sales-delete-inherit" name="permissions[admin.flash_sales.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.flash_sales-delete-inherit" name="permissions[admin.categories.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div>

<br></br>   


{/* 8th Importer */}

<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.importer
</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Importer
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.importer-index-allow" name="permissions[admin.importer.index]" className="permission-allow" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.importer-index-deny" name="permissions[admin.importer.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.importer-index-inherit" name="permissions[admin.importer.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create Importer
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.importer-create-inherit" name="permissions[admin.importer.create]" className="permission-create"checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.importer-create-inherit" name="permissions[admin.importer.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.importer-create-inherit" name="permissions[admin.importer.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
           </div></div></div></div>
<br></br>   

{/* 9th media*/}

<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.media
</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Media
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.media-index-allow" name="permissions[admin.media.index]" className="permission-allow" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.media-index-deny" name="permissions[admin.media.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.media-index-inherit" name="permissions[admin.media.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create Media
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.media-create-inherit" name="permissions[admin.media.create]" className="permission-create" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.media-create-inherit" name="permissions[admin.media.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.media-create-inherit" name="permissions[admin.media.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete Media
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.media-delete-inherit" name="permissions[admin.media.delete]" className="permission-delete" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.media-delete-inherit" name="permissions[admin.media.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.media-delete-inherit" name="permissions[admin.media.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           </div>
            </div>
          </div></div></div>

<br></br>   



{/* 10th */}

<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.menus


</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Menus
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.menus-index-allow" name="permissions[admin.menus.index]" className="permission-allow" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.menus-index-deny" name="permissions[admin.menus.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.menus-index-inherit" name="permissions[admin.menus.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create Menus
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.menus-create-inherit" name="permissions[admin.menus.create]" className="permission-create" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.menus-create-inherit" name="permissions[admin.menus.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.menus-create-inherit" name="permissions[admin.menus.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit Menus
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.menus-edit-inherit" name="permissions[admin.menus.edit]" className="permission-edit" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.menus-edit-inherit" name="permissions[admin.menus.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.menus-edit-inherit" name="permissions[admin.menus.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
                </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete Menus
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.menus-delete-inherit" name="permissions[admin.menus.delete]" className="permission-delete" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.menus-delete-inherit" name="permissions[admin.menus.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.menus-delete-inherit" name="permissions[admin.menus.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
          
            </div>
            <div className="col-md-4 col-sm-4">
                <h6>admin.menu_items
</h6>
              </div>
              <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Menu Items
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.menu_items-index-allow" name="permissions[admin.menu_items.index]" className="permission-allow" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.menu_items-index-deny" name="permissions[admin.menu_items.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.menu_items-index-inherit" name="permissions[admin.menu_items.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create Menu Items
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.menu_items-create-inherit" name="permissions[admin.menu_items.create]" className="permission-create" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.menu_items-create-inherit" name="permissions[admin.menu_items.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.menu_items-create-inherit" name="permissions[admin.menu_items.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit Menu Items
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.menu_items-edit-inherit" name="permissions[admin.menu_items.edit]" className="permission-edit" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.menu_items-edit-inherit" name="permissions[admin.menu_items.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.menu_items-edit-inherit" name="permissions[admin.menu_items.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
                </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete Menu Items
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.menu_items-delete-inherit" name="permissions[admin.menu_items.delete]" className="permission-delete" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.menu_items-delete-inherit" name="permissions[admin.menu_items.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.menu_items-delete-inherit" name="permissions[admin.menu_items.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
          
            </div>

          </div></div></div>
          

<br></br>   

{/* 11th option */}


<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.options



</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Options
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.options-index-allow" name="permissions[admin.options.index]" className="permission-allow"checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.options-index-deny" name="permissions[admin.options.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.options-index-inherit" name="permissions[admin.options.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create Options
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.options-create-inherit" name="permissions[admin.options.create]" className="permission-create" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.options-create-inherit" name="permissions[admin.options.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.options-create-inherit" name="permissions[admin.options.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit Options
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.options-edit-inherit" name="permissions[admin.options.edit]" className="permission-edit"  checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.options-edit-inherit" name="permissions[admin.options.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.options-edit-inherit" name="permissions[admin.options.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
                </div>
                
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete Options
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.options-delete-inherit" name="permissions[admin.options.delete]" className="permission-delete" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.options-delete-inherit" name="permissions[admin.options.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.options-delete-inherit" name="permissions[admin.options.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div></div>

<br></br>   


{/* 12th */}


<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.orders



</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Orders
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.orders-index-allow" name="permissions[admin.orders.index]" className="permission-allow" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.orders-index-deny" name="permissions[admin.orders.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.orders-index-inherit" name="permissions[admin.orders.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create Orders
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.orders-create-inherit" name="permissions[admin.orders.create]" className="permission-create" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.orders-create-inherit" name="permissions[admin.orders.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.orders-create-inherit" name="permissions[admin.orders.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit Orders
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.orders-edit-inherit" name="permissions[admin.orders.edit]" className="permission-edit" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.orders-edit-inherit" name="permissions[admin.orders.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.orders-edit-inherit" name="permissions[admin.orders.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
                </div>
                
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete Orders
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.orders-delete-inherit" name="permissions[admin.orders.delete]" className="permission-delete"  checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.orders-delete-inherit" name="permissions[admin.orders.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.orders-delete-inherit" name="permissions[admin.orders.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div></div>

<br></br>   

{/* 13th */}

<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.pages



</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Orders
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.pages-index-allow" name="permissions[admin.pages.index]" className="permission-allow" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.pages-index-deny" name="permissions[admin.pages.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.pages-index-inherit" name="permissions[admin.pages.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create pages
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.pages-create-inherit" name="permissions[admin.pages.create]" className="permission-create" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.pages-create-inherit" name="permissions[admin.pages.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.pages-create-inherit" name="permissions[admin.pages.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit pages
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.pages-edit-inherit" name="permissions[admin.pages.edit]" className="permission-edit" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.pages-edit-inherit" name="permissions[admin.pages.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.pages-edit-inherit" name="permissions[admin.pages.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
                </div>
                
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete pages
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.pages-delete-inherit" name="permissions[admin.pages.delete]" className="permission-delete" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.pages-delete-inherit" name="permissions[admin.pages.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.pages-delete-inherit" name="permissions[admin.pages.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div></div>

<br></br>   

{/* 14th */}
<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.products



</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Orders
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.products-index-allow" name="permissions[admin.products.index]" className="permission-allow" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.products-index-deny" name="permissions[admin.products.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.products-index-inherit" name="permissions[admin.products.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create products
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.products-create-inherit" name="permissions[admin.products.create]" className="permission-create" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.products-create-inherit" name="permissions[admin.products.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.products-create-inherit" name="permissions[admin.products.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit products
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.products-edit-inherit" name="permissions[admin.products.edit]" className="permission-edit" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.products-edit-inherit" name="permissions[admin.products.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.products-edit-inherit" name="permissions[admin.products.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
                </div>
                
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete products
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.products-delete-inherit" name="permissions[admin.products.delete]" className="permission-delete" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.products-delete-inherit" name="permissions[admin.products.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.products-delete-inherit" name="permissions[admin.products.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div></div>

<br></br>   
{/* 15th report */}
<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.reports



</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Reports
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.reports-index-allow" name="permissions[admin.reports.index]" className="permission-allow" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.reports-index-deny" name="permissions[admin.reports.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.reports-index-inherit" name="permissions[admin.reports.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div></div></div>

<br></br>   


{/* 16th */}

<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.reviews



</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Reviews
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.reviews-index-allow" name="permissions[admin.reviews.index]" className="permission-allow"checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.reviews-index-deny" name="permissions[admin.reviews.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.reviews-index-inherit" name="permissions[admin.reviews.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create reviews
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.reviews-create-inherit" name="permissions[admin.reviews.create]" className="permission-create" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.reviews-create-inherit" name="permissions[admin.reviews.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.reviews-create-inherit" name="permissions[admin.reviews.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit reviews
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.reviews-edit-inherit" name="permissions[admin.reviews.edit]" className="permission-edit" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.reviews-edit-inherit" name="permissions[admin.reviews.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.reviews-edit-inherit" name="permissions[admin.reviews.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
                </div>
                
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete reviews
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.reviews-delete-inherit" name="permissions[admin.reviews.delete]" className="permission-delete" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.reviews-delete-inherit" name="permissions[admin.reviews.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.reviews-delete-inherit" name="permissions[admin.reviews.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div></div>

<br></br> 

{/* 17th */}

<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.settings
</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit Settings
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.settings-edit-allow" name="permissions[admin.settings.edit]" className="permission-allow" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.settings-edit-deny" name="permissions[admin.settings.edit]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.settings-edit-inherit" name="permissions[admin.settings.edit]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div></div></div>

<br></br>   
{/* 18th */}

<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.sliders



</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Sliders
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.sliders-index-allow" name="permissions[admin.sliders.index]" className="permission-allow"checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.sliders-index-deny" name="permissions[admin.sliders.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.sliders-index-inherit" name="permissions[admin.sliders.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create sliders
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.sliders-create-inherit" name="permissions[admin.sliders.create]" className="permission-create" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.sliders-create-inherit" name="permissions[admin.sliders.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.sliders-create-inherit" name="permissions[admin.sliders.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit sliders
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.sliders-edit-inherit" name="permissions[admin.sliders.edit]" className="permission-edit" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.sliders-edit-inherit" name="permissions[admin.sliders.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.sliders-edit-inherit" name="permissions[admin.sliders.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
                </div>
                
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete sliders
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.sliders-delete-inherit" name="permissions[admin.sliders.delete]" className="permission-delete"  checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.sliders-delete-inherit" name="permissions[admin.sliders.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.sliders-delete-inherit" name="permissions[admin.sliders.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div></div>

<br></br> 
{/* 20th */}
<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.tags



</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index tags
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.tags-index-allow" name="permissions[admin.tags.index]" className="permission-allow" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.tags-index-deny" name="permissions[admin.tags.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.tags-index-inherit" name="permissions[admin.tags.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create tags
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.tags-create-inherit" name="permissions[admin.tags.create]" className="permission-create" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.tags-create-inherit" name="permissions[admin.tags.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.tags-create-inherit" name="permissions[admin.tags.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit tags
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.tags-edit-inherit" name="permissions[admin.tags.edit]" className="permission-edit" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.tags-edit-inherit" name="permissions[admin.tags.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.tags-edit-inherit" name="permissions[admin.tags.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
                </div>
                
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete tags
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.tags-delete-inherit" name="permissions[admin.tags.delete]" className="permission-delete"  checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.tags-delete-inherit" name="permissions[admin.tags.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.tags-delete-inherit" name="permissions[admin.tags.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div></div>

<br></br> 
{/* 21th */}
<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.taxes



</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index taxes
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.taxes-index-allow" name="permissions[admin.taxes.index]" className="permission-allow" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.taxes-index-deny" name="permissions[admin.taxes.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.taxes-index-inherit" name="permissions[admin.taxes.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create taxes
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.taxes-create-inherit" name="permissions[admin.taxes.create]" className="permission-create" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.taxes-create-inherit" name="permissions[admin.taxes.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.taxes-create-inherit" name="permissions[admin.taxes.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit taxes
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.taxes-edit-inherit" name="permissions[admin.taxes.edit]" className="permission-edit" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.taxes-edit-inherit" name="permissions[admin.taxes.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.taxes-edit-inherit" name="permissions[admin.taxes.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
                </div>
                
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete taxes
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.taxes-delete-inherit" name="permissions[admin.taxes.delete]" className="permission-delete" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.taxes-delete-inherit" name="permissions[admin.taxes.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.taxes-delete-inherit" name="permissions[admin.taxes.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div></div>

<br></br> 
{/* 22th */}

<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.transaction
</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Transaction
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.transaction-index-allow" name="permissions[admin.transaction.index]" className="permission-allow" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.transaction-index-deny" name="permissions[admin.transaction.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.transaction-index-inherit" name="permissions[admin.transaction.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div></div></div>

<br></br>   
{/* 23th */}
<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.translations

</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index Translations
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.translations-index-allow" name="permissions[admin.translations.index]" className="permission-allow"checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.translations-index-deny" name="permissions[admin.translations.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.translations-index-inherit" name="permissions[admin.translations.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit translations
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.translations-edit-allow" name="permissions[admin.translations.edit]" className="permission-allow" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.translations-edit-deny" name="permissions[admin.translations.edit]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.translations-edit-inherit" name="permissions[admin.translations.edit]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div></div></div>

<br></br>   
{/* 24th */}
<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.users



</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index taxes
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.users-index-allow" name="permissions[admin.users.index]" className="permission-allow" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.users-index-deny" name="permissions[admin.users.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.users-index-inherit" name="permissions[admin.users.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create users
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.users-create-inherit" name="permissions[admin.users.create]" className="permission-create" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.users-create-inherit" name="permissions[admin.users.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.users-create-inherit" name="permissions[admin.users.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit users
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.users-edit-inherit" name="permissions[admin.users.edit]" className="permission-edit" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.users-edit-inherit" name="permissions[admin.users.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.users-edit-inherit" name="permissions[admin.users.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
                </div>
                
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete users
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.users-delete-inherit" name="permissions[admin.users.delete]" className="permission-delete"  checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.users-delete-inherit" name="permissions[admin.users.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.users-delete-inherit" name="permissions[admin.users.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div></div>

<br></br> 
{/* 25th */}
<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.roles



</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Index roles
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
                   <input type="radio" defaultValue={1} id="admin.roles-index-allow" name="permissions[admin.roles.index]" className="permission-allow" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

                   <input type="radio" defaultValue={-1} id="admin.roles-index-deny" name="permissions[admin.roles.index]" className="permission-deny" />        
                   &nbsp; &nbsp; &nbsp;<label>Deny</label> 
                   
                              </div>
                 
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.roles-index-inherit" name="permissions[admin.roles.index]" className="permission-inherit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Create roles
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0}  id="admin.roles-create-inherit" name="permissions[admin.roles.create]" className="permission-create" checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.roles-create-inherit" name="permissions[admin.roles.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.roles-create-inherit" name="permissions[admin.roles.create]" className="permission-create"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit roles
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.roles-edit-inherit" name="permissions[admin.roles.edit]" className="permission-edit" checked />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.roles-edit-inherit" name="permissions[admin.roles.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.roles-edit-inherit" name="permissions[admin.roles.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
                </div>
                
            </div>
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Delete roles
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.roles-delete-inherit" name="permissions[admin.roles.delete]" className="permission-delete"  checked/>
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.roles-delete-inherit" name="permissions[admin.roles.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.roles-delete-inherit" name="permissions[admin.roles.delete]" className="permission-delete"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          
           
            </div>
          </div></div></div>

<br></br> 
{/* 26th */}

<div className="clearfix" />
    <div className="permission-group">
      <div className="row">
        <div className="col-md-12">
          <div className="permission-group-head">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <h4>admin.storefront



</h4>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="btn-group permission-group-actions pull-right">
                  <button type="button" className="btn btn-default allow-all border">Allow all</button>
                  <button type="button" className="btn btn-default deny-all border">Deny all</button>
                  <button type="button" className="btn btn-default inherit-all border">Inherit all</button>
                </div>
              </div>

            </div>
          </div>
          <br></br>
          <div className="col-md-12">
            <div className="permission-row">
              <div className="row">
                <div className="col-md-5 col-sm-4">
                  <span className="permission-label">Edit Storefront Settings
                  </span></div>
                <div className="col-md-7 col-sm-8">
                  <div className="row">
                   <div class="col-4">
<input type="radio" defaultValue={0} id="admin.storefront-edit-inherit" name="permissions[admin.storefront.edit]" className="permission-edit"checked  />
&nbsp; &nbsp; &nbsp;<label >Allow</label> 
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.storefront-edit-inherit" name="permissions[admin.storefront.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Deny</label>
                   </div>
                   <div class="col-4">

<input type="radio" defaultValue={0} id="admin.storefront-edit-inherit" name="permissions[admin.storefront.edit]" className="permission-edit"  />
&nbsp; &nbsp; &nbsp;<label >Inherit</label>
                   </div>
                  </div>
                </div>
                </div>
                
            </div>
    
           
            </div>
          </div></div></div>

<br></br> 
          </div>
          <button type="button" value='add_new'  class="btn btn-default btn-primary waves-effect waves-light" id="add-new-attribute">
                                                                Save
    </button>
          </form></div>
                                             
                                                

                                            </div>
              
                                           

                                            
                                        </div>
                                    </div></div>        </div>
                        </div>
                    </div>
             


            </AUX>
        );
    }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  Users: state.Users
});

export default connect(
  mapStateToProps,
  {
    saveUserRole,
  }
)(withRouter(AddRoles));

   