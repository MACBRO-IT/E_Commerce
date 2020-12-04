import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import MultipleArea from '../../Chartstypes/Apex/MultipleArea';
import { PieChart } from 'react-easy-chart';
import { Tooltip } from 'reactstrap';
import DonutChart from '../../Chartstypes/Apex/DonutChart';
import StackColumn from '../../Chartstypes/Apex/StackColumn';

class Dashboard extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          fb: false,
          tw: false,
          num: false,
          sky: false,
          fb1: false,
          tw1: false,
          num1: false,
          sky1: false,
        };
    }

render(){
    return(
           <AUX>
            <div className="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat widget-chart-sm clearfix bg-white">
                            <PieChart
                                size={70}
                                innerHoleSize={50}
                                data={[
                                { key: 'A', value: 100, color: '#f2f2f2' },
                                { key: 'B', value: 200, color: '#3bc3e9' },
                                ]}
                            />

                                <div className="mini-stat-info text-right">
                                    <span className="counter text-info">9541</span>
                                    Total Sales
                                </div>
                                <div className="clearfix"></div>
                                {/* <p className=" mb-0 m-t-20 text-muted">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p> */}
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat widget-chart-sm clearfix bg-white">
                            <PieChart 
                                size={70}
                                data={[
                                { key: 'A', value: 100, color: '#f2f2f2' },
                                { key: 'B', value: 200, color: '#4ac18e' },
                                ]}
                            />
                            
                                <div className="mini-stat-info text-right">
                                    <span className="counter text-lime">36521</span>
                                   Total Orders
                                </div>
                                <div className="clearfix"></div>
                                {/* <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p> */}
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat widget-chart-sm clearfix bg-white">
                            <PieChart
                                size={70}   
                                innerHoleSize={50}
                                data={[
                                { key: 'A', value: 100, color: '#f2f2f2' },
                                { key: 'B', value: 200, color: '#ea553d' },
                                ]}
                            />
                             <div className="mini-stat-info text-right">
                                    <span className="counter text-danger">6521</span>
                                    Total Products
                                </div>
                                <div className="clearfix"></div>
                                {/* <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p> */}
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat widget-chart-sm clearfix bg-white">
                                
                            <PieChart 
                                size={70}
                                data={[
                                { key: 'A', value: 60, color: '#f2f2f2' },
                                { key: 'B', value: 200, color: '#1d1e3a' },
                                ]}
                            />
                            <div className="mini-stat-info text-right">
                                    <span className="counter text-dark">1002</span>
                                    Total Customers
                                </div>
                                <div className="clearfix"></div>
                                {/* <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p> */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <h4 className="mt-0 header-title">Sales Analystics</h4>

                                    {/* <div className="row text-center m-t-20">
                                        <div className="col-6">
                                            <h5 className="">56241</h5>
                                            <p className="text-muted font-14">Marketplace</p>
                                        </div>
                                        <div className="col-6">
                                            <h5 className="">23651</h5>
                                            <p className="text-muted font-14">Total Income</p>
                                        </div>
                                    </div> */}
                                   <StackColumn />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <h4 className="mt-0 m-b-15 header-title">Latest Search Terms</h4>
                                    <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead>
                                        <tr>
                                            <th>S/no</th>
                                            <th>Keyword</th>
                                            <th>Results</th>
                                            <th>Hits</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                       
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                       
                                        </tbody>
                                    </table>
                                </div>
</div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <h4 className="mt-0 m-b-15 header-title">Latest Orders</h4>
                                    <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Customer</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th> 79</th>
                                            <td>Sabir khan</td>
                                            <td>Pending</td>
                                            <td>67324</td>
                                        </tr>
                                        <tr>
                                            <th> 80</th>
                                            <td>Demo</td>
                                            <td>Pending</td>
                                            <td>2344</td>
                                        </tr>
                                        <tr>
                                            <th> 80</th>
                                            <td>Demo</td>
                                            <td>Pending</td>
                                            <td>2344</td>
                                        </tr>
                                         <tr>
                                            <th> 80</th>
                                            <td>Demo</td>
                                            <td>Pending</td>
                                            <td>2344</td>
                                        </tr>
                                        <tr>
                                            <th> 80</th>
                                            <td>Demo</td>
                                            <td>Pending</td>
                                            <td>2344</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <h4 className="mt-0 m-b-15 header-title">Latest Reviews</h4>
                                    <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Customer</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>No data available!</tr>
                                        </tbody>
                                    </table>
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

export default Dashboard;   