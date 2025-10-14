/*
	***AQUI LOS VALORES CONFIGURABLES Y/O CONSTANTES***
	***Ejemplo: export const NUM_JUGADORES = 4;***
	* Al poner export podemos obtener ese valor sin tener que poner 
	todos los archivos en el index.html -> mucho más ordenado y seguro *
	* El ';' no es necesario pero mejor que se ponga *
*/
import { setEnum } from "./shared/enum.js";

// PLAYER
export const PLAYER_NUM = 4;
export const PLAYER_SPEED = 7;
export const PLAYER_STATE = setEnum(["IDLE","MOVING"]);

// BOARD
export const BOARD_PLAYER_TURN_ORDER = setEnum(["FORWARD","REVERSE"]);