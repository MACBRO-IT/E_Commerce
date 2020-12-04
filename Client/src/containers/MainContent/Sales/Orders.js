import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';

class Orders extends Component{
 
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
            label: 'Customer Name',
            field: 'Customer Name',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Customer Email',
            field: 'Customer Email',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Status',
            field: 'Status',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Total',
            field: 'Total',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Created',
            field: 'Created',
            sort: 'asc',
            width: 150
          },
         
        ],
        rows: [
          {
            ID: '40',
            Customer_name: 'System Architect',
            Customer_email: 'Edinburgh@gmail.com',
            Status: 'Pending',
            Total: '3534546',
            Created: '3 days ago'
          },
          {
            ID: '40',
            Customer_name: 'System Architect',
            Customer_email: 'Edinburgh@gmail.com',
            Status: 'Pending',
            Total: '3534546',
            Created: '3 days ago'
          },
         
          {
            ID: '40',
            Customer_name: 'System Architect',
            Customer_email: 'Edinburgh@gmail.com',
            Status: 'Pending',
            Total: '3534546',
            Created: '3 days ago'
          },
          {
            ID: '40',
            Customer_name: 'System Architect',
            Customer_email: 'Edinburgh@gmail.com',
            Status: 'Pending',
            Total: '3534546',
            Created: '3 days ago'
          },
          {
            ID: '40',
            Customer_name: 'System Architect',
            Customer_email: 'Edinburgh@gmail.com',
            Status: 'Pending',
            Total: '3534546',
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

export default Orders;   