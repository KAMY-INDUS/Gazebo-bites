import {Schema,models,model} from "mongoose"

const UserSchema = new Schema({
    email:{
        type: String,
        unique: [true,'Gazebo Bites finds that your Email Already Exists'],
        required: [true,'Gazebo Bites Requires your Email']
    },
    username:{
        type:String,
        required: [true,"Gazebo Bites finds that username already exits"]
    },
    image:{
        type:String,
    },
    role:{
        type:String,
    }
});

const User = models.User || model("User",UserSchema);

export default User;