import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({'string.pattern.base': 'Your brand value didnt match pattern'}),
    price: Joi.number().min(0).max(1000000).
    messages({'string.pattern.base': 'Your price value didnt match pattern'}),
    year: Joi.number().min(1990).max(2024)
        .messages({'string.pattern.base': 'Your year value didnt match pattern'}),

})