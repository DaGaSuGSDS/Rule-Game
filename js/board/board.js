import { handleError } from "/js/shared/errorHandling.js";
import { BOARD_ERROR_MESSAGES } from "./config.js";
import { BOARD_PLAYER_TURN_ORDER } from "/js/config.js";
import { Tile } from "/js/tile/tile.js";
import { Player } from "/js/player/player.js";

class Board{
	#initTile;
	#playerList = [];
	#turn = 0;
	#playerTurn = 0;
	#playerOrder = BOARD_PLAYER_TURN_ORDER.FORWARD;
	
	constructor(initTile){
		if(!(initTile instanceof Tile)) return handleError(BOARD_ERROR_MESSAGES.INIT.TYPING);
		this.#initTile = initTile;
	}
	
	get initTile(){ return this.#tile; }
	get playerList(){ return [...this.#playerList]; }
	get turn(){ return this.#turn; }
	
	addPlayer(player){
		if(!(player instanceof Player)) return handleError(BOARD_ERROR_MESSAGES.ADD_PLAYER.TYPING);
		if(this.#playerList.includes(player)) return handleError(BOARD_ERROR_MESSAGES.ADD_PLAYER.DUPLICATE);
		this.#playerList.push(player);
	}
	
	#nextPlayer(){
		switch(this.#playerOrder){
			case BOARD_PLAYER_TURN_ORDER.FORWARD:
				this.#playerTurn = (this.#playerTurn + 1) % this.#playerList.length;
				break;
			case BOARD_PLAYER_TURN_ORDER.REVERSE:
				this.#playerTurn = (this.#playerTurn - 1) < 0 ? (this.playerList.length - 1) : (this.#playerTurn - 1);
				break;
			default:
				return handleError(BOARD_ERROR_MESSAGES.NEXT_PLAYER.INVALID_ENUM);
		}
	}
	
	nextTurn(){
		this.#turn += 1;
		this.#nextPlayer();
	}
}