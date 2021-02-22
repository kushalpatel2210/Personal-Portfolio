import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

class Education extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
                        <p style={{margin:'0px'}}>{this.props.schoolDescription}</p>
                        <p>{this.props.courseWork}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Education; 
