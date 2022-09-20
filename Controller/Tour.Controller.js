const Tour = require("../Model/Tour.Model")
const { getAllTourService ,postATourService,getATourService,updateATourService, getCheapestToursService, getTopViewedToursService} = require("../Services/Tour.Services")

module.exports.getAllTours = async(req,res)=>{
    try {
        const fillers = {...req.query};
        const queries = {}
        if(fillers.sort){
            const sortBy = query.sort.split(',').join(" ");
            queries.sortBy = sortBy
        }
        if(fillers.fields){
            const fields = query.fields.split(',').join(" ");
            queries.fields = fields
        }
        if(fillers.page || fillers.limit){
            const page = Number(fillers.page) || 0;
            const limit = Number(fillers.limit) || 10;
            const skip = (page -1) * limit;
            queries.skip = skip
            queries.limit = limit
        }
        const tours = await getAllTourService(queries);
        res.send(tours);
        res.status(200)
    } catch (err) {
        res.status(400)
       
    }
}
module.exports.postATour = async (req,res)=>{
    try {
        const tour = await postATourService(req.body)

        res.send(tour)

        const result = await tour.save() 
        result.logger()
        // const result = await product.create(req.body)
        res.status(200)
        res.send('it works')
        } catch (err) {
            res.status(400)
        }
}
module.exports.getATour = async (req,res)=>{
    try {
        const {id} = req.params;
        const tour = await getATourService(id);
        res.send(tour)
        res.status(200)
    } catch (err) {
        res.status(400)
    }
}
module.exports.updateATour = async(req,res)=>{
    try {
        const {id} = req.params;
        const data = req.body;
        const result = await updateATourService(id,data)
        res.send(result)
        res.status(200)
    } catch (err) {
        res.status(400)
    }
}
module.exports.getCheapestTours = async(req,res)=>{
    try {
        const cheapestTours = await getCheapestToursService();
        res.send(cheapestTours);
        res.status(200)
    } catch (err) {
        res.status(400)
    }
}
module.exports.getTopViewedTours = async(req,res)=>{
    try {
        const topViewedTours = await getTopViewedToursService();
        res.send(topViewedTours);
        res.status(200)
    } catch (err) {
        res.status(400)
    }
}