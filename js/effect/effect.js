export class Effect {
    #effect_id;
    #effect_type;
    constructor(effect_id, effect_type){
        this.#effect_id = effect_id;
        this.#effect_type = effect_type;
    }
}