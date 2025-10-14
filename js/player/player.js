import { handleError } from "/js/shared/errorHandling.js"
import { PLAYER_ERROR_MESSAGES } from "./config.js"
import { PLAYER_SPEED, PLAYER_STATE } from "/js/config.js"
import { isValidEnumValue } from "/js/shared/enum.js"

export class Player{
	#actTile; 
	#nxtTile;
	#progress = 0;
	#remainingTiles = 0;
	#card_list = [];
	#dice_list = [];
	#state = PLAYER_STATE.IDLE;
	
	get actualTile() { return this.#actTile; }
	get nextTile() { return this.#nxtTile; }
	get progress() { return this.#progress; }
	get remainingTiles() { return this.#remainingTiles; }
	get card_list() { return [...this.#card_list]; }
	get dice_list() { return [...this.#dice_list]; }
	get state() { return this.#state; }
	
	addCard(card){
		if(false /*test if card*/) return handleError(PLAYER_ERROR_MESSAGES.ADD_CARD.TYPING) 
		this.#card_list.push(card);
	}
	addDice(dice){
		if(false /*test if dice*/) return handleError(PLAYER_ERROR_MESSAGES.ADD_DICE.TYPING) 
		this.#dice_list.push(dice);
	}
	updateProgress(deltaTime){
		if(this.#progress > 0){
			this.#progress -= deltaTime * PLAYER_SPEED;
			if(this.#progress <= 0) this.#progress = 0;
		}
	}
	changeState(state){
		if(!isValidEnumValue(PLAYER_STATE, state)) return handleError(PLAYER_ERROR_MESSAGES.CHANGE_STATE.INVALID_ENUM)
		this.#state = state;
	}
}