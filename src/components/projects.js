import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: 'url(https://developers.redhat.com/blog/wp-content/uploads/2020/04/React-logo.png) center / cover' }}>
                        React Project
                   </CardTitle>
                    <CardText align="justify">
                        This personal portfolio website is built using ReactJs.
                   </CardText>
                    <CardActions border>
                        <a href='https://github.com/kushalpatel2210/Personal-Portfolio' rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                    </CardActions>
                </Card>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className='projects-grid'>
                    <Grid className='projects-nlp'>
                        <cell col={1}>
                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                                <CardTitle style={{ color: "#fff", height: "176px", background: 'url(https://miro.medium.com/max/3972/1*9BqhG4nEQXFTp5CJyd7LSw.png) center / cover ' }}>
                                    Multiclass Sentiment Analysis Using Python
                            </CardTitle>
                                <CardText align="justify">
                                    Sentiment analysis refers to the automatic collection, aggregation, and classification of data collected online into different emotion classes.
                            </CardText>
                                <CardActions border>
                                    <a href='https://github.com/kushalpatel2210/multi-class-sentiment-analysis-using-deep-learning' rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </cell>
                        <cell col={1}>
                            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                                <CardTitle style={{ color: "#fff", height: "176px", background: 'url(https://miro.medium.com/max/3972/1*9BqhG4nEQXFTp5CJyd7LSw.png) center / cover ' }}>
                                    Image Caption Generation
                            </CardTitle>
                                <CardText align="justify">
                                    Image caption generator is a popular research area of Artificial Intelligence that deals with image understanding and a language description.
                            </CardText>
                                <CardActions border>
                                    <a href='https://github.com/kushalpatel2210/Image-captioning' rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </cell>
                    </Grid>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: 'url(https://i.pinimg.com/originals/a3/51/82/a351820b268070215664dcdbd4dc7a84.jpg) center / cover' }}>
                        Real-Time Twitter Sentiment Analysis in R
                </CardTitle>
                    <CardText align="justify">
                        This project was about classification of real-time Tweets into positive and negative nature.
                </CardText>
                    <CardActions border>
                        <a href='https://github.com/kushalpatel2210/sentiment-analysis-for-twitter-dataset-in-R' rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                    </CardActions>
                </Card>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: "#fff", height: "176px", background: 'url(https://www.samsconnectingdots.com/wp-content/uploads/2018/12/Objectives-Of-A-Smart-Building.jpg) center / cover' }}>
                        Smart City
                </CardTitle>
                    <CardText align="justify">
                        Town automation modules were designed to automate and digitize the different aspects of the town for better performance, efficiency and effectiveness which in turned to improve productivity of the system.
                </CardText>
                    <CardActions border>
                        <a href='https://github.com/kushalpatel2210/smart-city' rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                    </CardActions>
                </Card>
            )
        }
    }


    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Natural Language Processing</Tab>
                    <Tab>Big Data - R</Tab>
                    <Tab>Internet of Things (IOT)</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;