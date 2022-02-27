import firstPlayer from "../../utils/firstPlayer/firstplayer";

export default function initGame(){

   const initalScore={
        player1: {round:0, current:0},
        player2: {round:0, current:0}
     };

    const initPlayer = firstPlayer(); 

    const initWinner = "";

    const initModal = { visible: 0 }

    return [initalScore,initPlayer,initWinner, initModal];


}