import React, { Component } from 'react';
import Header from '../layouts/Header';

export default class Portfolio extends Component {
     render(){
         return(
           <div>
              <div className="App" data-spy="scroll" data-target="#navbarResponsive">
                <div id="home" className="offset">
                <Header />
                <div className="landing">
                  <div className="home-wrap">
                    <div className="home-inner">
                  
                    </div>
                  </div>
                </div>
                <div className=""> </div>
                </div>
                <div id="portfolio" className="offset">

                </div>
              </div>
           </div>
         )
     }
}