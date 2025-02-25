const jwt = require('jsonwebtoken');

exports.identifier = (req, res, next) => {
	try {
		let token = req.headers.authorization || req.cookies['Authorization'];

		if (!token) {
			return res.status(403).json({ success: false, message: 'Unauthorized: No token provided' });
		}

		// Ensure token has the "Bearer" prefix
		if (token.startsWith('Bearer ')) {
			token = token.split(' ')[1]; // Extract actual token
		}

		const jwtVerified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = jwtVerified;
		next();
	} catch (error) {
		console.error('JWT Verification Error:', error.message);
		return res.status(403).json({ success: false, message: 'Unauthorized: Invalid or expired token' });
	}
};
