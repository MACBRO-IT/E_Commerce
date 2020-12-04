import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { ProgressBar  } from 'react-bootstrap';
import { Progress } from 'reactstrap';

class Options extends Component{
 
render(){


    return(
           <AUX>
		   <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                            <Link to="/AddOptions"   className="btn btn-primary float-right">Create Option</Link> 
<br></br>
<br></br>
                                <table id="datatable" className="table table-striped dt-responsive nowrap table-vertical" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                       
                                        <th> <input type="checkbox"></input></th>
                                        <th>ID</th> 
                                          
                                            <th>Name</th>
                                            <th>Type</th>
                                           
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
                                           
                                            <td>
                                                <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>
                                               
                                            </td>
                                            <td>Specification</td>
                                            
                                            <td>6 months ago</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox"></input>
                                            </td>
                                            <td>
                                                123
                                            </td>
                                           
                                            <td>
                                                <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>
                                               
                                            </td>
                                            <td>Specification</td>
                                         
                                            <td>6 months ago</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox"></input>
                                            </td>
                                            <td>
                                                123
                                            </td>
                                           
                                            <td>
                                                <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>
                                               
                                            </td>
                                            <td>Specification</td>
                                           
                                            <td>6 months ago</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox"></input>
                                            </td>
                                            <td>
                                                123
                                            </td>
                                           
                                            <td>
                                                <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>
                                               
                                            </td>
                                            <td>Specification</td>
                                           
                                            <td>6 months ago</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox"></input>
                                            </td>
                                            <td>
                                                123
                                            </td>
                                           
                                            <td>
                                                <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>
                                               
                                            </td>
                                            <td>Specification</td>
                                          
                                            <td>6 months ago</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox"></input>
                                            </td>
                                            <td>
                                                123
                                            </td>
                                           
                                            <td>
                                                <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>
                                               
                                            </td>
                                            <td>Specification</td>
                                           
                                            <td>6 months ago</td>
                                            
                                        </tr>
                                       
                                    </tbody>
                                </table>
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

export default Options;   