import React, {Component} from 'react';
import { Cell, Content, Grid } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
            return(
                <div>
                    <Grid>
                        <Cell col={4} className='resume-left-col'>
                            {/* <div style={{textAlign:'center'}}>
                                <img
                                src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
                                alt='avatar'    
                                style={{height:'200px'}}
                                />
                            </div> */}
                                <h2 style = {{paddingTop:'0em',}}>Kushal Patel</h2>
                                <h4 style = {{color:'grey'}}>Programmer</h4>
                                <hr style = {{borderTop: '3px solid #c0c0c0',width:'50%'}}/>
                                <p style = {{textAlign:'justify'}}>Looking to utilize broad knowledge of programming, software engineering lifecycle, 
                                    and data management to perform programming and software development using various programming
                                    languages and related tools and frameworks to solve clients’ business problems as a Programmer.
                                    Offering critical thinking and strong interpersonal skills.</p>
                                <hr style = {{borderTop: '3px solid #c0c0c0',width:'50%'}}/>
                                <h5>Address</h5>
                                <p>Toronto, ON, Canada</p>
                                <h5>Phone</h5>
                                <p>+1 (807) 357-9136</p>
                                <h5>Email</h5>
                                <p>kushalpatel2210@gmail.com</p>
                                <h5>Web</h5>
                                <p>website.com</p>
                                {/* <hr style = {{borderTop: '3px solid #c0c0c0',width:'50%'}}/> */}
                        
                        </Cell>
                        <Cell className='resume-right-col' col={8}>
                            <h2>Education</h2>
                            <Education 
                                startYear = {2019}
                                endYear = {2021}
                                schoolName = "Lakehead University"
                                schoolDescription = "MSc (Electrical and Computer Engineering)"
                                courseWork = "Coursework: Natural Language Processing, Big Data Machine Learning, Software Construction and Evolution, Agile Software Developement."
                            />

                            <Education 
                                startYear = {2015}
                                endYear = {2019}
                                schoolName = "L.D.R.P Institute of Technology and Research"
                                schoolDescription = "Bachelor of Engineering in Computer Engineering"
                                courseWork = "Coursework: Web Development, Data Structures, Database Systems, Artificial Intelligence."
                            />

                            <hr style={{borderTop: ' 3px solid #ffffff'}}/>
                            <h2>Experience</h2>

                            <Experience 
                                startYear={2018}
                                endYear={2019}
                                jobName = "Cyber Octet | Software Developer Intern"
                                jobDescription= "Collaborated with software developers team and architects to work ongoing development project of Animal Care. Introduced REST APIs using Node.js in development phase by considering requirements to list down all body profiles. Worked on database design and wrote stored procedures for recommending profiles to users based on location, profile rating, and preference."
                            />

                            <Experience
                                startYear={2020}
                                endYear = 'Current'
                                jobName = "Concentrix | Technical Support Advisor"
                                jobDescription= "Troubleshoot basic and routine technical issues; including hardware, software, networking, or other designated client products."
                            />

                            <hr style={{borderTop: ' 3px solid #ffffff'}}/>
                            <h2>Skills</h2>
                            <Skills
                                skill = 'javascript'
                                progress={100}
                            />

                            <Skills
                                skill = 'java'
                                progress={100}
                            />

                            <Skills
                                skill = 'HTML/CSS'
                                progress={100}
                            />

                            <Skills
                                skill = 'React'
                                progress={80}
                            />

                            <Skills
                                skill = 'Node'
                                progress={80}
                            />

                            <Skills
                                skill = 'Other'
                                progress={50}
                            />
                        </Cell>
                    </Grid>
                </div>
          ) 
    }
}

export default Resume;