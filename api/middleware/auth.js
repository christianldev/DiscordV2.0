import jwt from 'jsonwebtoken';

const config = process.env;

const verifyToken = (req, res, next) => {
	let token = req.headers['authorization'];

	if (!token) {
		return res
			.status(403)
			.send({auth: false, message: 'No token provided.'});
	}
	try {
		token = jwt.verify(
			token.replace('Bearer ', ''),
			config.JWT_SECRET
		);

		req.user = token;
	} catch (error) {
		return res
			.status(401)
			.send({auth: false, message: 'Unauthorized'});
	}

	return next();
};

export default verifyToken;
