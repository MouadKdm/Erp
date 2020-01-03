import React, {Component} from 'react'


class Header extends Component{
    render(){
       return(
        <div>
            <div className="collapse" id="dd">
            <div class="bg-dark p-4">
            <p>hello</p>
            </div> 
            </div>
         <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb_4">
                    <div className="navbar-toggle bg-dark" data-toggle="collapse" aria-controls="dd">
                    <span class="navbar-toggler-icon"></span>
                    </div>
                  
                <div className="container">
                    <a className="navbar-brand" href="Dashboard.html">
                        personal project management tool 
                    </a>
                   

                        <div className="nav navbar-nav navbar-right" id="mobile-nav">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="dashboard">dashboard</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="login"> Login</a>
                                     
                                </li>
                            </ul>
                        </div>
                    </div>
                     {/* <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mobile-nav" 
                        >
                            <span className="navbar-toggler-icon"/>
                        </button> */}
                       

                </nav>   
                </div>       
       );    
    }
}
export default Header;