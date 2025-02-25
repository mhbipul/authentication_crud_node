const Joi = require('joi');



exports.signupSchema = Joi.object({
	email: Joi.string()
		.min(6)
		.max(60)
		.required()
		.email({
			tlds: { allow: ['com', 'net'] },
		}),
	password: Joi.string()
		.required()
		.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/), // Fixed \d for digits
});


exports.signinSchema = Joi.object({
	email: Joi.string()
		.min(6)
		.max(60)
		.required()
		.email({
			tlds: { allow: ['com', 'net'] },
		}),
        password: Joi.string()
		.required()
		.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/), // Corrected regex
});

exports.acceptCodeSchema = Joi.object({
	email: Joi.string()
		.min(6)
		.max(60)
		.required()
		.email({
			tlds: { allow: ['com', 'net'] },
		}),
	providedCode: Joi.number().required(),
});

exports.changePasswordSchema = Joi.object({
	    oldPassword: Joi.string()
		.required()
		.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/), // Corrected regex
        newPassword: Joi.string()
		.required()
		.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/), // Corrected regex
});

exports.acceptFPCodeSchema = Joi.object({
	email: Joi.string()
		.min(6)
		.max(60)
		.required()
		.email({
			tlds: { allow: ['com', 'net'] },
		}),
	providedCode: Joi.number().required(),
	newPassword: Joi.string()
		.required()
		.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/), // Corrected regex
});

exports.createPostSchema = Joi.object({
	title: Joi.string().min(3).max(60).required(),
	description: Joi.string().min(3).max(600).required(),
	userId: Joi.string().required(),
});
