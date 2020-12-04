import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';

class Transaction extends Component{
 
render(){
    const data = {
        columns: [
          {
            label: 'Order ID',
            field: ' Order ID',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Transaction ID',
            field: 'Transaction ID',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Payment Method',
            field: 'Payment Method',
            sort: 'asc',
            width: 270
          },
        
         
          {
            label: 'Created',
            field: 'Created',
            sort: 'asc',
            width: 150
          },
         
        ],
        rows: [
         
            
         
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
                                            No data available
                            </div>
                        </div>
                    </div>
                </div> 

              </div></div>
		 
           </AUX>
        );
    }
}

export default Transaction;   