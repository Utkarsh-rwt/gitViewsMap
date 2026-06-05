import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    githubUsername: {
        type: String,
        required: true,
        unique: true
    },
     count:{
        type:Number,
        required:true

    }
});

const User = mongoose.model("User", userSchema);
export default User;