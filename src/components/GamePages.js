import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameList from './GameList';


class GamePages extends React.Component{
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
    games:PropTypes.array.isRequired

}

export default connect(mapStateToProps,{})(GamePages);
