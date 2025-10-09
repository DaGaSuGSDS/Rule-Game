import { handleError } from "/js/shared/errorHandling.js"

export class Tile{
	#x = 0;
	#y = 0;
	#prev = [];
	#next = [];
	constructor(x, y) {
		if (!Number.isFinite(x) || !Number.isFinite(y)) {
			handleError("Typing error: Tile(x,y) expects numbers");
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
		if (!(tile instanceof Tile)) {
			handleError("Typing error: linkTo expects a Tile");
			return;
		}
		if (tile === this) {
			handleError("Logic error: cannot link a Tile to itself");
			return;
		}
		if (!this.#next.includes(tile)){ this.#next.push(tile); }
		if (bidirectional && !tile.#prev.includes(this)) { tile.#prev.push(this); }
	}
}