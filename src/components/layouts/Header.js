import React, {Component} from 'react';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';


export default class Header extends Component {

    render() {
        return(
            <header>
                <nav className= 'navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
                    <Link to="/">
                        <img
                        className="navbar-brand"
                        src={logo}
                        alt="Logo"
                        style={{
                            width: 50,
                        }}
                        />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="#home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#home">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#home">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#home">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}