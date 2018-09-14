import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const GameCard = ({ game }) => {
    return (
    <div className='ui card'>
        <div className='image'>
          <img src={ game.cover} alt='gmae cover'/>
        </div>
        <div className='content'>
          <div className='header'>{game.username}</div>
        </div>
        <div className='extra content'>
          <div className='ui to button'>
            {/* <Link to={`/game/${game._id}`} className='ui basic button green'>edit</Link> */}
            <div className='ui basic button green'>edit</div>
            <div className='ui basic button red'>delete</div>
          </div>
        </div>
    </div>)
}

GameCard.propTypes = {
  game:PropTypes.object.isRequired

}

export default GameCard;


