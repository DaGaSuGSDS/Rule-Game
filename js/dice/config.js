export const DICE_ERROR_MESSAGES = {
    INIT:{
        TYPE: {
            MISSING_ATTRIBUTE: "Attribute missing: you must provide a dice type."
        },
        VALUES: {
            INVALID_TYPE: "Invalid type: values must have Array Type."
        }
    },
    ADD_VALUE:{
        TYPE_MISMATCH_NUMBER: "Type mismatch error: Your dice type is numerical, you can only add numerical values.",
        TYPE_MISMATCH_EFFECT: "Type mismatch error: Your dice is an effect dice, you can only add effects.",
        INVALID_TYPE: "Invalid type: your dice has a invalid type"
    }
};