

// middleware to validate the request body of put request
const validateUserPut = async (req, res, next) => {
    const requiredFields = ["firstName", "lastName", "email"];

    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
        return res.status(400).json({ message: `Missing fields: ${missingFields.join(", ")} is required` });
    }
    next(); // pass control to the next handler or route handler

};

exports.validateUserPut = validateUserPut;