function firstPlayer()
{
 return "player" + parseInt(Math.floor(Math.random() * (2 - 1 + 1)) + 1);
}

export default firstPlayer;