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
};

export default UserService;