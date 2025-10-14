import { PLAYER_STATE } from "./config.js"

console.log(PLAYER_STATE)

let lastTime;
function main(now){
	if(!lastTime) lastTime = now;
    const deltaTime = (now - lastTime) / 1000;
    lastTime = now;
	
	/*
		*** AQUI BUCLE PRINCIPAL DEL JUEGO ***
		* IMPORTANTE: usar SIEMPRE deltaTime cuando 
		se efectuen traslaciones y/o animaciones *
	*/
	
	requestAnimationFrame(main)
}
requestAnimationFrame(main)