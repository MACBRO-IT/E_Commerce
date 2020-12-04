import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';

class Pages extends Component{
 
render(){
    const data = {
        columns: [
      
          {
            label: 'ID',
            field: 'ID',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Name',
            field: 'Name',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Status',
            field: 'Status',
            sort: 'asc',
            width: 270
          },
        
          {
            label: 'Created',
            field: 'Created',
            sort: 'asc',
            width: 270
          },
        
        ],
        rows: [
        
            {
                
                ID: '40',
               Name: 'Percent Discount',
               Status:'Active',
                Created: '3 days ago'
              },
             
              {
                
                ID: '40',
               Name: 'Percent Discount',
              
               Status:'Active',
                Created: '3 days ago'
              },
              {
                
                ID: '40',
               Name: 'Percent Discount',
              
               Status:'Active',
                Created: '3 days ago'
              },
              {
                
                ID: '40',
               Name: 'Percent Discount',
              
               Status:'Active',
                Created: '3 days ago'
              },
       
        ]
      };
    return(
           <AUX>
		   
		      <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">
                            <Link to="/AddPages"   className="btn btn-primary float-right">Add Page</Link> 
<br></br><br></br><br></br>
                                <MDBDataTable
                                           striped
                                            bordered
                                            hover
                                            data={data}
                                            />
                            </div>
                        </div>
                    </div>
                </div> 

              </div></div>
		 
           </AUX>
        );
    }
}

export default Pages;   