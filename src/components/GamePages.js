import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameList from './GameList';
import { fetchGames } from '../actions/index'


class GamePages extends React.Component{
    componentDidMount(){
        this.props.fetchGames()

    }
    render(){
        return(<div>
            <GameList games={ this.props.games }/>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        games:state.games

    }
}

GamePages.propTypes={
    games:PropTypes.array.isRequired,
    fetchGames:PropTypes.func.isRequired

}

export default connect(mapStateToProps,{ fetchGames })(GamePages);
