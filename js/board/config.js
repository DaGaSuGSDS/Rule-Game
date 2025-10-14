export const BOARD_ERROR_MESSAGES = {
	INIT: {
		TYPING: "Typing error: Board(initTile) initTile must be Tile"
	},
	ADD_PLAYER: {
		TYPING: "Typing error: Board.addPlayer(player) player must be Player",
		DUPLICATE: "Duplication error: Board.addPlayer(player) player is already on the list"
	},
	NEXT_PLAYER: {
		INVALID_ENUM: "Invalid enum error: state not in BOARD_PLAYER_TURN_ORDER"
	}
}