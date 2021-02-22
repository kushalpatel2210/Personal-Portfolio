import Reacct, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {
    render(){
        return(
            <Grid>
                <Cell col = {2} >
                    <div style={{display:'flex'}}>{this.props.skill}</div>
                </Cell>
                <Cell col = {8}>
                        <ProgressBar style={{margin:'5px', width:'100%'}} progress={this.props.progress } />
                </Cell>
            </Grid>
        )
    }
}

export default Skills;