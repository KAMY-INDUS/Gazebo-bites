import {Schema,models,model} from "mongoose";

const MenuSchema = new Schema({
    name:{
        type: String,
        required: [true,'Food Item Name is required'],
    },
    id:{
        type:Number,
        required: [true,'Food Item ID is required'],
        unique: [true,'Food Item Already Exists']
    }
})

const Menu = models.Menu || model("Menu",MenuSchema);

export default Menu;