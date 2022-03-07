// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
    res.json({ message: 'registered user' });
};

// @desc login user
// @route POST /api/users/login
// @access Public
const loginUser = (req, res) => {
    res.json({ message: 'login user' });
};


// @desc Get user data
// @route GET /api/users/me
// @access Public
const getMe = (req, res) => {
    res.json({ message: 'gotten user data' });
};

module.exports = {
    registerUser,
    loginUser,
    getMe
};