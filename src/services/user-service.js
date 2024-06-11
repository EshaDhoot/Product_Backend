import User from '../models/user.js';

class UserService {
    async signUp(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            if(error.errorResponse.code === 11000) {
                throw {
                    message: 'User already exists',
                    reason: 'DUPLICATE_EMAIL'
                }
            }
            console.log('something went wrong in signup in service layer');
            throw error;
        }
    }
    async signIn(data) {
        try {
            const user = await User.findOne({email: data.email, role: data.role});
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
            // console.log("token",token);
            return token;
        } catch (error) {
            console.log('something went wrong in signin in service layer')
            throw error;
        }
    }

    async updateProfile(profileId, data) {
        try {
            const profile = await User.findByIdAndUpdate(profileId, data);
            return profile;
        } catch (error) {
            console.log('something went wrong in updating profile in service layer')
            throw error;
        }
    }
};

export default UserService;