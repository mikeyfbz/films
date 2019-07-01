import React, {Component, Fragment} from 'react';
import Film from './Film'


class FilmList extends Component {

    render(){

        const filmComponent = this.props.films.map(film => {
            return (
                <Film key={film.id} url={film.url}>{film.name}</Film>
            )
        })

        return(
            <Fragment>
                {filmComponent}
            </Fragment>
        )

    }

}

export default FilmList;