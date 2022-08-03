const {
    Schema,
    model
} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    FirstName: {
        type: String,
        //required: true,
        unique: true,
        trim: true,
    },

    LastName: {
        type: String,
        //required:true,
        unique: true,
        trim: true,
    },

    Email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
        unique: true,
        trim: true,
    },

    Password: {
        type: String,
        required: true,
        minLength: 5,
    },


    //Do we need to usr the library for it? or should I make the model for it?
    Address: {
        type: String,
    },

    City: {
        type: String,
    },

    Province: {
        type: String,
    },

    ZipCode: {
        type: String,
    },

    Phone: {
        type: Number,
    },


    biddedItems: [{
        type: Schema.Types.ObjectId,
        ref: 'auctionItem'
    }],
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.Password = await bcrypt.hash(this.Password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.Password);
};

const User = model('User', userSchema);

module.exports = User;