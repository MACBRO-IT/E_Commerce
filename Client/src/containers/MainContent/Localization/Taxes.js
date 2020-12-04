import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';

class Taxes extends Component{
 
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
            label: 'Tax Class',
            field: 'Tax Class',
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
                
                ID: '1',
               TaxClass: 'Percent Dhaka tax',
             
                Created: '3 months ago'
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
                            <Link to="/AddTaxes" className="btn btn-primary float-right">Create Tax</Link> 
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

export default Taxes;   