import { SET_GAMES,GAME_FETCHED } from "../contents";

const games = (state=[],action) => {
    switch(action.type){
        case SET_GAMES:
        return action.games
        case GAME_FETCHED:
        let index=state.findIndex(item=>item._id===action.game._id);
        if(index>-1){
             return state.map(item=> {
                 if(item._id === action.game._id) return action.game;
                 return item;
                
             })
        } else {
            return [
                ...state,
                action.game
            ]
        }
        default:
        return state

    }
} 

export default games;
