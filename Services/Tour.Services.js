const Tour = require("../Model/Tour.Model");

exports.getAllTourService = async (query)=>{
    const tours = await Tour.find()
    .skip(query.skip)
    .limit(query.limit)
    .select(query.fields)
    .sort(query.sortBy)
    return tours;
}
exports.postATourService = async (data)=>{
    const tours = await Tour.create(data);
    return tours;
}
exports.getATourService = async (id) =>{
    const tour = await Tour.findById(id);
    tour.$inc("viewCount",1);
    await tour.save();

    return tour;
}
exports.updateATourService = async(id,data)=>{
    const result = await Tour.updateOne({_id:id},{$set:data},{
        runValidators:true
    });
    
    return result;
}

exports.getCheapestToursService = async () =>{
    const tours = await Tour.find({}).sort("ticketPrice").limit(3)
    return tours;
}

exports.getTopViewedToursService = async () =>{
    const viewedTours = await Tour.find({}).sort("viewCount").limit(3)
    return viewedTours;
}




