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
                  <div className="container padding">
                    <div className="row padding">
                      <div className="col-md-12 col-lg-6">
                        < h2> I am Diane,</h2>
                        <p>
                          I design and develop services for customers of all sizes, 
                          specializing in creating stylish, 
                          modern websites, web services and online stores.
                        </p>
                        <p>
                          My passion is to design digital user experiences 
                          through the bold interface and meaningful interactions.
                        </p>
                        <br />
                        <a className="btn btn-primary" href="#">
                          Learn More
                        </a>

                      </div>
                      <div className="col-md-12 col-lg-6">
                        <img className="img-fluid" src="https://www.howwemadeitinafrica.com/wp-content/uploads/2019/01/database-computer-coding.jpg" />
                      </div>
                    </div>
                    <hr />
                  </div>
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