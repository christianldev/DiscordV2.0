import express from 'express';
const router = express.Router();
import authController from '../controllers/auth/authController.js';
import validation from 'express-joi-validation';
import auth from '../middleware/auth.js';
import registerSchema from '../validators/registerSchema.js';
import loginSchema from '../validators/loginSchema.js';

const validator = validation.createValidator({});

router.post(
	'/register',
	validator.body(registerSchema),
	authController.postRegister
);

router.post(
	'/login',
	validator.body(loginSchema),
	authController.postLogin
);

// test route to verify if our middleware is working
router.get('/test', auth, (req, res) => {
	res.send('Auth route working');
});

export default router;
