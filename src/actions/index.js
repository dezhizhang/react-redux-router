import { SET_GAMES} from '../contents/index';

export const setGames = (games) => {
   return {
       type:SET_GAMES,
       games

   }
}


export const fetchGames = () => {
    return dispatch => {
        fetch('/api/games')
        .then(res=>res.json())
        .then(data=> dispatch(setGames(data.games)))

       
    }
}

const handleResponse = (response) => {
    if(response.ok) {
        return response.json();

    }else{
        let error = new Error(response.stateText);
        console.log(response.stateText)
        error.response=response;

        throw error;

    }

}


export const saveGame = (data) => {
    return dispatch => {
        return fetch('/api/games',{
            method:'post',
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(handleResponse)
        
    }
}