import {handleError} from "js/shared/errorHandling.js";
import { DICE_ERROR_MESSAGES } from "./config";
import {random} from "js/shared/random.js";
import { DICE_CONST_VALUES } from "js/config";
import { Effect } from "js/effect/effect";

export class Dice{
    #type;
    #values;
    constructor(type, values){
        if(type == undefined){
            return handleError(DICE_ERROR_MESSAGES.INIT.TYPE.MISSING_ATTRIBUTE);
        } else {
            if(Number.isInteger(type)){
                this.#type = type;
            }
        }
        if(values != undefined){
            if(Array.isArray(this.#values)){
                this.#values = values; 
            }else{
                return handleError(DICE_ERROR_MESSAGES.INIT.VALUES.INVALID_TYPE);
            }
        } else{
            this.#values = [];
        }
    }

    get type() {return this.#type;}
    get values() {return this.#values;}
    
    roll(){
        return this.#values[this.#values.length * random()];
    }

    // If your dice is type normal, then the value sets the dice as a 1-value dice. Else, it adds the number or the effect to the existing list.
    add_value(value){
        if(this.#type = DICE_CONST_VALUES.TYPE.NUMBER){
            if(Number.isInteger(value)){
                this.#values.push(value);
            }else {
                return handleError(DICE_ERROR_MESSAGES.ADD_VALUE.TYPE_MISMATCH_NUMBER);
            }
        }else if(this.#type = DICE_CONST_VALUES.TYPE.EFFECT){
            if(value instanceof Effect){
                this.#values.push(value);
            }else {
                return handleError(DICE_ERROR_MESSAGES.ADD_VALUE.TYPE_MISMATCH_EFFECT);
            }
        }else{
            return handleError(DICE_ERROR_MESSAGES.ADD_VALUE.INVALID_TYPE);
        }

    }

    rm_value(index){
        if(Number.isInteger(index) && index < this.#values.length){
            this.#values.splice(index, 1);
        }

    }
}