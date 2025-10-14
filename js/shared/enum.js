import { handleError } from "./errorHandling.js";
import { ENUM_ERROR_MESSAGES } from "./config.js";

export function setEnum(source = []){
	if(!Array.isArray(source)) { handleError(ENUM_ERROR_MESSAGES.SET_ENUM.TYPING); return; }
	
	const enumerator = {};
	for(let i = 0; i < source.length; i++){
		if(source[i] in enumerator){ handleError(ENUM_ERROR_MESSAGES.SET_ENUM.DUPLICATION); return; }
		enumerator[source[i]] = i;
	}
	return Object.freeze(enumerator);
}

export function isValidEnumValue(e, value){
	return Object.values(e).includes(value);
}