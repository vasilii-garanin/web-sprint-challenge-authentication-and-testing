require('dotenv').config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3300,
    JWT_SECRET: process.env.SECRET || 'shh'
};
