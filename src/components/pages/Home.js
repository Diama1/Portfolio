import React, { Component } from 'react';
import Header from '../layouts/Header';
import { Link } from 'react-router-dom';


export default class Portfolio extends Component {
     render(){
         return(
              <div className="App" data-spy="scroll" data-target="#navbarResponsive">
                <div id="home">
                <Header />
                    <div className="landing">
                      <div className="home-wrap">
                        <div className="home-inner">
                      
                        </div>
                      </div>
                    </div>
                    <div className="caption text-left">
                      <h4> Hello, I am</h4>
                      <h1>Diane Mahoro</h1>
                      <p>Lorem.....</p>
                      <Link className="btn btn-outline-light btn-lg" to="#">
                        get Started
                      </Link>
                    </div>
                 
                </div>
                <div id="about" className="offset">
                  
                </div>
                <div id="skills" className="offset">

                </div>
                <div id="services" className="offset">
                </div>
                <div id="contacts" className="offset">
                </div>
              </div>
          
         )
     }
}