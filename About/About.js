import React, { Component } from 'react';
import './About.css';
import {Helmet} from 'react-helmet';

class About extends Component {
    render() {
    return (
        <div className="application">
            <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>
            <div id="section">
                <h2>ABOUT US</h2>
            </div>
             {/* header Component */}
            <div className="row">
            <div id="img" className="column">
               <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></img>
            </div>
            <div className="column">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Why do we use it-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  
                </p>
                <div id="btn">
                <button className="btn">Know More</button> 
                </div>
               {/* button Component */}
            </div>
            </div>
            <div id="content">
                <div id="content-info">
                 <div className="rows">
                      <div className="columns">
                      <span>
                          <h1>600+</h1>
                             <h4>Students</h4>
                            </span>
                          </div>
                          <div className="columns">
                      <span>
                          <h1>10</h1>
                             <h4>Events</h4>
                            </span>
                          </div>
                          <div className="columns">
                      <span>
                          <h1>50%</h1>
                             <h4>Female Participation</h4>
                            </span>
                          </div>
                          <div className="columns">
                      <span>
                          <h1>38</h1></span>
                             <h4>Dedicated Members</h4>
                            
                          </div> 
                      </div>
                </div>
            </div>
        </div>
    );
        }
}
export default About;