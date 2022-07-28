const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },

    email:{
        type:String,
        required:true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
        unique:true,
        trim:true,
    },

    password:{
        type:String,
        required:true,
        minLength:5,
    },


    //Do we need to usr the library for it? or should I make the model for it?
    address:{
    type:String,
    }
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

userSchema.methods.isCorrectPassword = async function (password) {
return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;