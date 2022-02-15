//@desc     Get goals
//@route    GET /api/goals
//@access   Private
const getGoals = async (req, res) => {
    res.status(200).json({ message: 'Get goals' });
};

//@desc     Set goals
//@route    POST /api/goals
//@access   Private
const setGoals = async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    res.status(200).json({ message: 'Set goals' });
};

//@desc     Update goal
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = async (req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}` });
};

//@desc     Delete goal
//@route    DELETE /api/goals/:id
//@access   Private
const deleteGoal = async (req, res) => {
    res.status(200).json({ message: `Delete goals ${req.params.id}` });
};

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
};