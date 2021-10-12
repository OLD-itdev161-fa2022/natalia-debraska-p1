import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    }
});

const User = momgoose.model('user', UserSchema);

export default User;