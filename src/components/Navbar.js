
import { Component } from 'react';
import './Navbar.css'
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
class Navbar extends Component{
    state ={clicked: false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return(
        <>
          <nav className='NavBarItems'>
          <img
              src='images/hawl.jpg' className='nav-logo'/>
            <div className="menu-icons" onClick={this.handleClick}>
            {/*<i id="bar" className={this.state.clicked? 'fas fa-times':'fas fa-bars'}></i>*/}
          </div>
          
          <div>
            <ul className="nav-menu"> 
              {MenuItems.map((item,index)=>{
                return(
                  <li key={index}>
                    <Link className={item.cName} to={item.url}>
                      {item.title}
                      </Link>
                    </li>

                )
              })}
                
            </ul>
          </div>
          </nav>
        </>
    )
    }
}
export default Navbar