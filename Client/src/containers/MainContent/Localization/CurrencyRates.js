import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';

class CurrencyRates extends Component{
 
render(){
    const data = {
        columns: [
      
          {
            label: 'Currency',
            field: 'Currency',
            sort: 'asc',
            width: 150
          },

          {
            label: 'Code',
            field: 'Code',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Rate',
            field: 'Rate',
            sort: 'asc',
            width: 270
          },

          {
            label: 'Last Updated',
            field: 'Last Updated',
            sort: 'asc',
            width: 270
          },
    
        
  
        ],
        rows: [
        
            {
                
                Currency: 'Saudi Riyal',
               Name: 'SAR',
             Rate:"1.0000",
                LastUpdated: '6 months ago'
              },
         
              {
                
                Currency: 'US Dollar',
               Name: 'USD',
             Rate:"1.0000",
                LastUpdated: '6 months ago'
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
                            <Link to="CurrencyRates" className="btn btn-primary float-right">Refresh Rates</Link> 
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

export default CurrencyRates;   