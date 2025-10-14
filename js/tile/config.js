export const TILE_ERROR_MESSAGES = {
	INIT: {
		TYPING: "Typing error: Tile(x,y) expects numbers"
	},
	LINK_TO: {
		TYPING: "Typing error: linkTo expects a Tile",
		LOGIC: "Logic error: cannot link a Tile to itself"
	},
	UNLINK: {
		TYPING: "Typing error: unlink expects a Tile"
	},
	CHANGE_STATE: {
		INVALID_ENUM: "Invalid enum error: state not in PLAYER_STATE"
	}
};