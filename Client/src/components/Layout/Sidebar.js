import React, {Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import $ from 'jquery';

class sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Tab: 'index', SubTab: '', MoreTab: '', email_menu : false, ui_menu : false,
            form_menu: false, chart_menu: false, table_menu: false, icon_menu: false, map_menu: false,
            auth_menu: false, extra_menu: false, eco_menu: false, emt_menu: false
        };
    }

    setActiveTab = (tab,subtab,moretab,toggleTab, e)=> {
        this.setState({Tab: tab,SubTab: subtab,MoreTab: moretab});
    }
    
    componentDidMount() 
    {
        var now_route = "";
        var pageUrl = window.location.pathname.split(/[?#]/)[0];
            now_route = pageUrl.substr(1).replace(/_/g," ");
        $('#now_routing').empty();
        if(now_route == "") { now_route="Dashboard" } else {  }
        $('#now_routing').append(now_route);

        $('.toggle-search').on('click', function () {
            var targetId = $(this).data('target');
            var $searchBar;
            if (targetId) {
                $searchBar = $(targetId);
                $searchBar.toggleClass('open');
            }
        });

        $('.button-menu-mobile').on('click', function (event) {
            event.preventDefault();
            $("body").toggleClass("enlarged");
        });

        $('li.has_sub li').on('click', function (event) {
            $("body").toggleClass("enlarged");
        });
    }
    componentDidUpdate() 
    {   
            var now_route = "";
            var pageUrl = window.location.pathname.split(/[?#]/)[0];
                now_route = pageUrl.substr(1).replace("_"," ");
            $('#now_routing').empty();
            if(now_route == "") { now_route="Dashboard" } else {  }
            $('#now_routing').append(now_route);
    }
  
    render() {
        return (
            <div className="left side-menu">

            <div className="topbar-left">
                <div className="">
                    <Link to="/" className="logo"><img src="assets/images/logo-sm.png" height="36" alt="logo" /></Link>
                </div>
            </div>
           
            <div className="sidebar-inner slimscrollleft" >
            <PerfectScrollbar>
                <div id="sidebar-menu">
                    <ul>
                        <li className="menu-title">Main</li>
                        <li className='has_sub active-menu'>

                            <Link to="Dashboard" onClick={()=> this.setState({ dashboard_menu: !this.state.dashboard_menu, email_menu : false, ui_menu: false,form_menu: false,chart_menu: false,table_menu: false,icon_menu: false,map_menu: false,auth_menu: false,extra_menu: false,eco_menu: false,emt_menu: false }) }  className={this.state.Tab === 'index' ? 'waves-effect active-menu':'waves-effect'}  ><i className="mdi mdi-view-dashboard"></i> <span> Dashboard <span className="badge badge-pill badge-primary pull-right">20+</span></span> </Link>
                            <ul className="list-unstyled" style={{display: this.state.dashboard_menu ? 'block' : 'none' }}>
                                </ul>
                        </li>
                        {/* <li>
                            <Link to="widgets" className={this.state.Tab === 'widget' ? 'waves-effect active-menu':'waves-effect'} onClick={this.setActiveTab.bind(this, 'widget','','')}><i className="mdi mdi-cube-outline"></i><span> Widgets </span></Link>
                        </li> */}
<li className={this.state.eco_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#" onClick={()=> this.setState({ eco_menu: !this.state.eco_menu,dashboard_menu : false, email_menu : false, ui_menu: false,form_menu: false,chart_menu: false,table_menu: false,icon_menu: false,map_menu: false,auth_menu: false,extra_menu: false,emt_menu: false }) }   className={this.state.Tab === 'eco' ? 'waves-effect active-menu':'waves-effect'}><i className="mdi mdi-cart-outline"></i><span> Products <span className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                            <ul className="list-unstyled" style={{display: this.state.eco_menu ? 'block' : 'none' }}>
                                <li><Link className={this.state.SubTab === 'Catalog' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'eco','Catalog','')}  to="Catalog">Catalog</Link></li>
                                <li><Link className={this.state.SubTab === 'Catagories' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'eco','Catagories','')}  to="Catagories">Categories</Link></li>
                                <li><Link className={this.state.SubTab === 'Brands' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'eco','Brands','')}  to="Brands">Brands</Link></li>
                                <li><Link className={this.state.SubTab === 'Attributes' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'eco','Attributes','')}  to="Attributes">Attributes</Link></li>
                                <li><Link className={this.state.SubTab === 'AttributeSet' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'eco','AttributeSet','')}  to="AttributeSet">Attribute Sets</Link></li>
                                <li><Link className={this.state.SubTab === 'Options' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'eco','Options','')}  to="Options">Options</Link></li>
                                <li><Link className={this.state.SubTab === 'Tags' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'eco','Tags','')}  to="Tags">Tags</Link></li>
                                <li><Link className={this.state.SubTab === 'Reviews' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'eco','Reviews','')}  to="Reviews">Reviews</Link></li>

                           </ul>
                        </li>
                        <li className={this.state.email_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#" onClick={()=> this.setState({ email_menu: !this.state.email_menu,dashboard_menu : false, ui_menu: false,form_menu: false,chart_menu: false,table_menu: false,icon_menu: false,map_menu: false,auth_menu: false,extra_menu: false,eco_menu: false,emt_menu: false }) } className={this.state.Tab === 'email' ? 'waves-effect active-menu':'waves-effect'}><i className="mdi mdi-email-outline"></i><span> Sales <span className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                            <ul className="list-unstyled" style={{display: this.state.email_menu ? 'block' : 'none' }}>
                                <li><Link  className={this.state.SubTab === 'Orders' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'email','Orders','')}  to="Orders">Orders</Link></li>
                                <li><Link  className={this.state.SubTab === 'Transaction' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'email','Transaction','')}  to="Transaction">Transaction</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="Flash_sales" className={this.state.Tab === 'Flash_sales' ? 'waves-effect active-menu':'waves-effect'} onClick={this.setActiveTab.bind(this, 'Flash_sales','','')}><i className="mdi mdi-calendar-check"></i><span> Flash Sales </span></Link>
                        </li>

                        <li>
                            <Link to="Coupons" className={this.state.Tab === 'Coupons' ? 'waves-effect active-menu':'waves-effect'} onClick={this.setActiveTab.bind(this, 'Coupons','','')}><i className="mdi mdi-calendar-check"></i><span> Coupons </span></Link>
                        </li>

                        <li>
                            <Link to="Pages" className={this.state.Tab === 'Pages' ? 'waves-effect active-menu':'waves-effect'} onClick={this.setActiveTab.bind(this, 'Pages','','')}><i className="mdi mdi-calendar-check"></i><span> Pages </span></Link>
                        </li>
                        <li>
                            <Link to="Media" className={this.state.Tab === 'Media' ? 'waves-effect active-menu':'waves-effect'} onClick={this.setActiveTab.bind(this, 'Media','','')}><i className="mdi mdi-calendar-check"></i><span> Media </span></Link>
                        </li>
                        <li>
                            <Link to="Menus" className={this.state.Tab === 'Menus' ? 'waves-effect active-menu':'waves-effect'} onClick={this.setActiveTab.bind(this, 'Menus','','')}><i className="mdi mdi-calendar-check"></i><span> Menus </span></Link>
                        </li>


                        <li className="menu-title">System</li>
                        <li  className={this.state.ui_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#"  onClick={()=> this.setState({ ui_menu: !this.state.ui_menu, email_menu : false, dashboard_menu: false,form_menu: false,chart_menu: false,table_menu: false,icon_menu: false,map_menu: false,auth_menu: false,extra_menu: false,eco_menu: false,emt_menu: false }) }  className={this.state.Tab === 'ui' ? 'waves-effect active-menu':'waves-effect'}><i className="mdi mdi-buffer"></i> <span> Users <span className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span> </Link>
                            <ul className="list-unstyled" style={{display: this.state.ui_menu ? 'block' : 'none' }}>
                                <li><Link className={this.state.SubTab === 'Users' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','Users','')} to="Users">Users</Link></li>
                                <li><Link className={this.state.SubTab === 'Roles' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'ui','Roles','')} to="Roles">Roles</Link></li>
                              </ul>
                        </li>

                        <li  className={this.state.form_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#"  onClick={()=> this.setState({ form_menu: !this.state.form_menu, dashboard_menu : false, email_menu : false, ui_menu: false,chart_menu: false,table_menu: false,icon_menu: false,map_menu: false,auth_menu: false,extra_menu: false,eco_menu: false,emt_menu: false }) }  className={this.state.Tab === 'form' ? 'waves-effect active':'waves-effect'}><i className="mdi mdi-clipboard-outline"></i><span> Localization  <span className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span> </Link>
                            <ul className="list-unstyled"  style={{display: this.state.form_menu ? 'block' : 'none' }}>
                                <li><Link className={this.state.SubTab === 'CurrencyRates' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'form','CurrencyRates','')} to="CurrencyRates">Currency Rates</Link></li>
                                <li><Link className={this.state.SubTab === 'Taxes' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'form','Taxes','')} to="Taxes">Taxes</Link></li>
                               </ul>

                        </li>

                        <li  className={this.state.chart_menu ? 'has_sub active-menu nav-active' : 'has_sub'}>
                            <Link to="#" onClick={()=> this.setState({ chart_menu: !this.state.chart_menu,dashboard_menu : false, email_menu : false, ui_menu: false,form_menu: false,table_menu: false,icon_menu: false,map_menu: false,auth_menu: false,extra_menu: false,eco_menu: false,emt_menu: false }) }  className={this.state.Tab === 'chart' ? 'waves-effect active':'waves-effect'}><i className="mdi mdi-chart-line"></i><span> Appearance <span className="pull-right"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                            <ul className="list-unstyled" style={{display: this.state.chart_menu ? 'block' : 'none' }}>
                                <li><Link className={this.state.SubTab === 'Sliders' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'chart','Sliders','')} to="Sliders">Sliders</Link></li>
                                <li><Link className={this.state.SubTab === 'StoreFront' ? 'active-menu':''} onClick={this.setActiveTab.bind(this, 'chart','StoreFront','')} to="StoreFront">Store Front</Link></li>

                            </ul>
                        </li>

                        <li>
                            <Link to="Settings" className={this.state.Tab === 'faq' ? 'waves-effect active-menu':'waves-effect'} onClick={this.setActiveTab.bind(this, 'faq','','')}><i className="mdi mdi-help-circle"></i><span> Settings </span></Link>
                        </li>



                    


                    </ul>
                </div>
              
                <div className="clearfix"></div>
                </PerfectScrollbar>
            </div> 
           
        </div>
        );
    }
}

export default withRouter(sidebar);