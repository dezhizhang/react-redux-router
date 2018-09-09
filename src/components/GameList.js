import React from 'react'
import PropTypes from 'prop-types';

const GameList = ({ games }) => {
    const emptyMessage = (
        <p>暂无数据..........</p>
    )
    const gamesList = (
        <p>GameList</p>
    )
    return (<div>
        { games.length===0 ? emptyMessage : gamesList}
    </div>)
}

GameList.propTypes={
    games:PropTypes.array.isRequired
}

export default GameList;
