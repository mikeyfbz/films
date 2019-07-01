import React, {Component, Fragment} from 'react';

class Film extends Component{

    render(){

        return(
            <ul>
                <li><a href={this.props.url}>{this.props.children}</a></li>
            </ul>
        )

    }

}

export default Film;