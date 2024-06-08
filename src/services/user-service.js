import User from '../models/user.js';

class UserService {
    async signUp(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log('something went wrong in signup in service layer');
            throw error;
        }
    }
    async signIn(data) {
        try {
            const user = await User.findOne({email: data.email});
            if (!user) {
                throw {
                    message: 'No user Found'
                };
            }
            if (!user.comparePassword(data.password)) {
                throw {
                    message: 'Incorrect Password'
                };
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            console.log('something went wrong in signin in service layer')
            throw error;
        }
    }
};

export default UserService;