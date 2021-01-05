import mongoose from 'mongoose'

console.log('accessing ticketModel.js file'.file)

const noteSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    note: { type: String, required: true },
  }, 
  {
    timestamps: true
  }
)

const ticketSchema = mongoose.Schema(
  {
    title: { 
      type: String, 
      required: true 
    },
    description: { 
      type: String, 
      required: true 
    },
    open: { 
      type: Boolean, 
      default: true 
    },
    closed: { 
      type: Boolean,
      default: false 
    },
    developer: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' // ref: means 'reference' and will create a relationship from the 'User' document
    },
    submittedBy: { 
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: 'User' // ref: means 'reference' and will create a relationship from the 'User' document
    },
    priority: { 
      low: { type: Boolean }, 
      medium: { type: Boolean },
      high: { type: Boolean }    
    },
    notes: [ noteSchema ]
  }, 
  {
    timestamps: true // mongoose allows a second argument of options, 'timestamps' auto populates fields: 'created at' & 'updated at'
  }
)

const Ticket = mongoose.model('Ticket', ticketSchema)

export default Ticket