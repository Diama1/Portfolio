/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import cv from '../../assets/docs/myResume.pdf';
import { getAllServices } from '../../redux/actions/service.action';
// import Loader from '../layouts/Loader';

export class Portfolio extends Component {


  componentWillMount() {
    const { getAllServices: getServices } = this.props;
    getServices();
  }
  render() {
    // if (this.state.loading) return <Loader />;
    const { serviceReducer } = this.props;
  
    return (
      <div className='App' data-spy='scroll' data-target='#navbarResponsive'>
        <div id='home'>
          <Header />
          <div className='landing'>
            <div className='home-wrap'>
              <div className='home-inner'></div>
            </div>
          </div>
          <div className='caption text-left'>
            <h4> Hello, I am</h4>
            <h1>Diane Mahoro</h1>
            <p>Lorem.....</p>
            <Link className='btn btn-outline-light btn' target='_blank' to={cv}>
              Download CV
            </Link>
          </div>
        </div>
        <div id='about' className='offset'>
          <div className='container padding'>
            <div className='row padding'>
              <div className='col-md-12 col-lg-6'>
                <h4> I am Diane,</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores.
                </p>
                <p>
                  My passion is to design digital user experiences through the
                  bold interface and meaningful interactions.
                </p>
                <br />
                <Link className='btn btn-outline-light ' to='#'>
                  Learn More
                </Link>
              </div>
              <div className='col-md-12 col-lg-6'>
                <img
                  className='img-fluid'
                  src='https://www.howwemadeitinafrica.com/wp-content/uploads/2019/01/database-computer-coding.jpg'
                />
              </div>
            </div>
          </div>
        </div>

        <div id='services' className='offset'>
          <div className='fixed-background'>
            <div className='row dark text-center '>
              <div className='col-12'>
                <h3 className='heading'>Service offers</h3>
                <div className='heading-underline'></div>
              </div>
              {
                serviceReducer.list.map(service => (
                <div className='col-md-4'>
                  <div className='feature'>
                    <i className='fas fa-code fa-3x'></i>
                  </div>
                  <h4 className='heading'>{service.title}</h4>
                  <p className='lead'>
                    {service.description}
                  </p>
                </div>  
                ))
              }


            </div>
            <div className='fixed-wrap'>
              <div className='fixed'></div>
            </div>
          </div>
        </div>

        <div id='skills' className='offset'>
          <div className='container'>
            <div className='row'>
              <div id='summary' className='col-md-12 col-lg-6 '>
                <div className='card mt-5 '>
                  <div className='card-body'>
                    <h4 className='font-weight-bold'>
                      Make Special things with you passion
                    </h4>
                    <p>
                      I design and develop services for customers of all sizes,
                      specializing in creating stylish, modern websites, web
                      services and online stores.
                    </p>
                    <p>
                      My passion is to design digital user experiences through
                      the bold interface and meaningful interactions.
                    </p>
                    <br />
                    <Link className='btn btn-outline-light' to='#'>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-md-12 col-lg-6'>
                <div className='card mt-5 '>
                  <div className='card-body'>
                    <h4 className='card-title text-uppercase font-weight-bold'>
                      My skills
                    </h4>
                    <div className='heading-underline'></div>
                    <div className='skill'>
                      <div className='progress-lt'>
                        <h6>Html/css</h6>
                        <span>92%</span>
                        <div className='progress'>
                          <div
                            className='progress-bar theme-g-bg'
                            role='progressbar'
                            aria-valuenow='92'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      <div className='progress-lt'>
                        <h6>Javascript</h6>
                        <span>89%</span>
                        <div className='progress'>
                          <div
                            className='progress-bar theme-g-bg'
                            role='progressbar'
                            aria-valuenow='89'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '89%' }}></div>
                        </div>
                      </div>
                      <div className='progress-lt'>
                        <h6>Python</h6>
                        <span>76%</span>
                        <div className='progress'>
                          <div
                            className='progress-bar theme-g-bg'
                            role='progressbar'
                            aria-valuenow='76'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '76%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='portfolio' className='offset'>
          <div className='row text-center'>
            <div className='col-12'>
              <h3 className='heading'>Our Portfolio</h3>
              <div className='heading-underline'></div>
              <div className='container w-50 text-center'>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores. My passion is to design digital
                  user experiences through the bold interface.
                </p>
              </div>
            </div>
            <div className="row portfolio-row">
              
              <div className='col-md-4'>
                <div className='card mt-4 portfolio-col'>
                  <div className='portfolio-img'>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/360a2b71229835.5bbe26acf27f3.jpg' />
                    <div className='portfolio-hover'>
                      <div className='action-btn'>
                        <a href='youtube' className='popup-video theme-color'>
                          <i className='fas fa-play'></i>
                        </a>
                        <a
                          className='lightbox-gallery theme-color'
                          href='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/360a2b71229835.5bbe26acf27f3.jpg'>
                          <i className='fas fa-expand'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-info">
                    <h5>Makeup </h5>
                    <span>Resent Work</span>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card mt-4 portfolio-col'>
                  <div className='portfolio-img'>
                    <img src='https://mir-cdn.behance.net/v1/rendition/project_modules/2800_opt_1/eeea3391912141.5e3d9ee163b10.jpg' />
                  </div>
                  <div className="portfolio-info">
                    <h5>the Earing</h5>
                    <span>Resent Work</span>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card mt-4 portfolio-col'>
                  <div className='portfolio-img'>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/b3ba5b88438857.5df223c0e17b7.jpg' />
                  </div>
                  <div className="portfolio-info">
                    <h5>SuperDry</h5>
                    <span>Resent Work</span>
                  </div>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='card mt-4 portfolio-col'>
                  <div className='portfolio-img'>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/b3ba5b88438857.5df223c0e17b7.jpg' />
                  </div>
                  <div className="portfolio-info">
                    <h5>SuperDry</h5>
                    <span>Resent Work</span>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card mt-4 portfolio-col'>
                  <div className='portfolio-img'>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/360a2b71229835.5bbe26acf27f3.jpg' />
                  </div>
                  <div className="portfolio-info">
                    <h5>Makeup </h5>
                    <span>Resent Work</span>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card mt-4 portfolio-col'>
                  <div className='portfolio-img'>
                    <img src='https://mir-cdn.behance.net/v1/rendition/project_modules/2800_opt_1/eeea3391912141.5e3d9ee163b10.jpg' />
                  </div>
                  <div className="portfolio-info">
                    <h5>SuperDry</h5>
                    <span>Resent Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='contacts' className='offset'>
          <footer>
            <div className='row justify-content-center'>
              <div className='col-md-5 text-center'>
                <img src={logo} alt='Logo' />
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <strong> Contact info </strong>
                <p>
                  +(250)78983920 <br />
                  email@diama.com{' '}
                </p>
                <a
                  href='https://www.facebook.com/diane.mahoro.3'
                  target='_blank'>
                  <i className='fab fa-facebook-square'></i>
                </a>
                <a href='https://twitter.com/Diama1Dev48' target='_blank'>
                  <i className='fab fa-twitter-square'></i>
                </a>
                <a href='/' target='_blank'>
                  <i className='fab fa-instagram'></i>
                </a>
              </div>
              <hr className='socket' />
              &copy; diama Code
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ serviceReducer }) => ({
  serviceReducer,
});
export default connect(
  mapStateToProps,
  { getAllServices },
)(Portfolio);
