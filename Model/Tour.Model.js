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
    /* createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      detfault: Date.now
    } */
})

tourSchema.pre("save",function(next){
    console.log("before saving data".bgGreen.bold);
    if(this.quantity == 0){
      this.status = "out-of-stock"
    } 
    // adding some functionality to the products data before saving it to the database
    next();
  })
  

tourSchema.methods.logger = function(){
    console.log(`Data saved for ${this.name} in the database`);
}

const Tour = mongoose.model("Tour",tourSchema)

module.exports = Tour;


/* 
image:{
  type:String,
  required:[true,"The tour place should have a image to look at"]
}, 
status: {
  type: String,
  required: true,
  enum: {
    values: ["in-stock", "out-of-stock", "discontinued"],
    message: "status can't be {VALUE}",
  },
}, */