import React, {Component} from 'react';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';


export default class Header extends Component {

    render() {
        return(
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
                            <li className="nav-item ">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacts">contacts</a>

                            </li>
                        </ul>
                    </div>
                </nav>
        )
    }
}