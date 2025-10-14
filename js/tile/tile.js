import { handleError } from "/js/shared/errorHandling.js"
import { TILE_ERROR_MESSAGES } from "./config.js"

export class Tile{
	#x = 0;
	#y = 0;
	#prev = [];
	#next = [];
	constructor(x, y) {
		if (!Number.isFinite(x) || !Number.isFinite(y)) {
			handleError(TILE_ERROR_MESSAGES.INIT.TYPING);
			return;
		}
		this.#x = x;
		this.#y = y;
	}
	
	get x() { return this.#x; }
	get y() { return this.#y; }
	get prev() { return [...this.#prev]; }
	get next() { return [...this.#next]; }
	
	linkTo(tile, bidirectional = true) {
		if (!(tile instanceof Tile)) return handleError(TILE_ERROR_MESSAGES.LINK_TO.TYPING);
		if (tile === this) return handleError(TILE_ERROR_MESSAGES.LINK_TO.LOGIC);
		if (!this.#next.includes(tile)){ this.#next.push(tile); }
		if (bidirectional && !tile.#prev.includes(this)) { tile.#prev.push(this); }
	}
	unlink(tile, bidirectional = true) {
		if (!(tile instanceof Tile)) return handleError(TILE_ERROR_MESSAGES.UNLINK.TYPING);
		this.#next = this.#next.filter(t => t !== tile);
		if (bidirectional) tile.#prev = tile.#prev.filter(t => t !== this);
	}
}