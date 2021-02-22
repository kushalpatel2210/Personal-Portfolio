import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';


class Landing extends Component{
    render(){
        return(
            
            <div style={{width: '100%' , margin: 'auto'}}>
                    <Grid className="landing-grid">
                        <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <Cell col={12}>
                        
                            <img
                                src = 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png'
                                alt = 'avatar'
                                className = 'avatar-img'
                            />
                            <div className = 'banner-text'>
                                <h1>Full Stack Developer</h1>
                                <hr/>
                                <p>C | C++ | JavaScript | Core Java | Python | SQL | R | Django | Node.js | React.js | REST | Spring Boot</p>

                                <div className="social-links">

                                    {/* Linkedin */}
                                    <a href="https://www.linkedin.com/in/kushalpatel2210/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                    </a>    

                                    {/* Github */}
                                    <a href="https://github.com/kushalpatel2210" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true"/>
                                    </a>    

                                    {/* freecodecamp */}
                                    <a href="https://www.freecodecamp.org/kushalpatel2210" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                    </a>  
                                </div>  
                            </div>

                            <div className='copyright'>
                             <p style={{color:'white'}}>Copyright &copy; Kushal Patel 2021</p>
                            </div>
                            
                        </Cell>
                    </Grid>
            </div>
        )        
    }
}

export default Landing;