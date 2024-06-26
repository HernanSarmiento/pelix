import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs'

import User from '../models/user_model.js';
import { errorHandler } from '../helpers/error.js';



export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashed_password = bcryptjs.hashSync(password, 10);
    const new_user = await new User({ username, email, password: hashed_password });
    try {
        const user = await new_user.save();
        res.json('User created succesfully').status(204);
    } catch (err) {
        next(err);
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user_found = await User.findOne({ email });
        if (!user_found) return errorHandler(404, 'user not found');
        const valid_password = bcryptjs.compareSync(password,user_found.password);
        if(!valid_password) return errorHandler(404,'Wrong credentials');
        const token = jwt.sign({id:user_found.id},'3n1jk2iahds4nj2nvxc');
        const {password:pass , ...rest} = user_found._doc;
        res
            .cookie('access_token',token,{httpOnly:true})
            .json(rest)
            .status(200);
    }catch(err){
        next(err);
    }
}; 