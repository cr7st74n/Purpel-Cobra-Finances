const jwt = require('jsonwebtoken')
const {ApolloError} = require('apollo-server-express')
require("dotenv").config();


module.exports = {
    authMiddleware({req}) {
        let token = req.headers.authorization;

        if (!token) return req;

        if (!token.includes('Verify')) {
            throw new ApolloError('Invalid token')
        }

        token = token.split(' ').pop().trim()

        try{
            const { data } = jwt.decode(token, JWT_SECRET, {
                maxAge: '6h'
            } );

            req.user = data;
            return req;
        } catch (err) {
            throw new ApolloError('Invalid')
        }
    },

    signToken(user_data) {
        return jwt.sign({data: user_data}, JWT_SECRET, {
            expiresIn: '6h'
        });
    }
}