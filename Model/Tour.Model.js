const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please add a name for the tour"],
        unique:[true,"The tour place should be unique"],
        trim:true,
        minLength: [3,"The name of tour place must have at least 3 characters."],
        maxLength: [100,"Name can't be this long"]
    },
    description: {
        type: String,
        required: [true,"The tour place must have a description"]
    },
    ticketPrice: {
        type: Number,
        required: [true,"The tour ticket must have a price"],
        min: [0, "Ticket price can't be negative"],
    },
    img:{
      type:String,
      required:[true,"There must be something interesting about the tour place"],
      min:[0,"What are the users looking for at the tour place ?"]
    },
    viewCount:{
      type:Number,
      required:[true,"The company needs to track the users view"],
      min: [0,"views can't be negative"]
    }
 
})
  

tourSchema.methods.logger = function(){
    console.log(`Data saved for ${this.name} in the database`);
}

const Tour = mongoose.model("Tour",tourSchema)

module.exports = Tour;

