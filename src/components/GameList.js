import React from 'react'
import PropTypes from 'prop-types';
import GameCard from './GameCard'
import { connect } from 'react-redux';


const GameList = ({ games }) => {
    const emptyMessage = (
        <p>暂无数据..........</p>
    )
    const gamesList = (
        <div className='ui four cards'>
          { games.map((item,index) =>{
              return (<GameCard game={ item } key={index}/>)
          })}
        </div>
    )
    return (<div>
        { games.length===0 ? emptyMessage : gamesList}
    </div>)
}

GameList.propTypes={
    games:PropTypes.array.isRequired
}

const mapStateProps = (state) => {
    console.log(state);
    
    return {
        game:state.games
    }
}

export default connect(mapStateProps,{ })(GameList);

