const db = require("../../data/dbConfig");


function findByName(name)
{
    return db("users")
        .select("id", "username", "password")
        .where("username", name)
        .first();
}

async function add(user)
{
    const [id] = await db("users").insert(user);
    return findById(id);
}

function findById(id)
{
    return db("users")
        .select("id", "username", "password")
        .where("id", id)
        .first();
}

module.exports = {
    add,
    findByName,
    findById
};