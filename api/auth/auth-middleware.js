const User = require('../users/users-model');

async function checkUsernameUnique(req, res, next)
{
    try
    {
        const username = req.body.username;
        const user = await User.findByName(username);

        if (!user)
        {
            next();
        }
        else
        {
            next({ message: "username taken", status: 400 });
        }
    }
    catch (err)
    {
        next(err);
    }
}

async function checkUsernameExists(req, res, next)
{
    try
    {
        const username = req.body.username;
        const user = await User.findByName(username);

        if (user)
        {
            next();
        }
        else
        {
            next({ message: "invalid credentials", status: 400 });
        }
    }
    catch (err)
    {
        next(err);
    }
}
function checkUserData(req, res, next)
{
    if (!req.body.username || !req.body.username.trim() || !req.body.password)
    {
        next({ status: 400, message: 'username and password required' });
    }
    else
    {
        req.body.username = req.body.username.trim();
        next();
    }
}
module.exports = {
    checkUsernameUnique,
    checkUsernameExists,
    checkUserData
};