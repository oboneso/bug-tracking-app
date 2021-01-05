import mongoose from 'mongoose'

console.log('accessing userModel.js file'.file)

const userSchema = mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true,
      unique: true
    },
    password: { 
      type: String,
      required: true
    },
    isAdmin: { 
      type: Boolean,
      required: true,
      default: false
    },
    avatar: {
      type: String,
    }
  }, 
  {
    timestamps: true // mongoose allows a second argument of options, 'timestamps' auto populates fields: 'created at' & 'updated at'
  }
)

const User = mongoose.model('User', userSchema)

export default User