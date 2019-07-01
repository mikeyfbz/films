import React, {Component, Fragment} from 'react';

class UpcomingFilms extends Component {

    render(){

        return(
            <a href={this.props.url}>View More Upcoming Releases >></a>
        )
    }

}

export default UpcomingFilms;