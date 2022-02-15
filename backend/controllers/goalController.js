//@desc     Get goals
//@route    GET /api/goals
//@access   Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' });
};

//@desc     Set goals
//@route    POST /api/goals
//@access   Private
const setGoals = (req, res) => {
    res.status(200).json({ message: 'Set goals' });
};

//@desc     Update goal
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}` });
};

//@desc     Delete goal
//@route    DELETE /api/goals/:id
//@access   Private
const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goals ${req.params.id}` });
};

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
};