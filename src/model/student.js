const mongoose = require('mongoose')
const validator = require('validator')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },

    email: {
        type: String,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error('invalid error');
            }
        }

    },
    phone:{
        type:Number,
        min:10,
    
        required: true,

    },
    address:{
        type:String,
        required:true
    }

})


const Student = new mongoose.model("Student",studentSchema)

module.exports = Student;