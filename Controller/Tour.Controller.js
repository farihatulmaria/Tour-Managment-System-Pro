const Tour = require("../Model/Tour.Model")
const { getAllTourService ,postATourService,getATourService,updateATourService, getCheapestToursService, getTopViewedToursService} = require("../Services/Tour.Services")

exports.getAllTours = async(req,res)=>{
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
        const tours = await getAllTourService(queries)
        res.send(tours)
        res.status(200).json({
            status:"success",
            message:"can get the data 😊",
            data:tours
        })
    } catch (err) {
        res.status(400).json({
            status:"failed",
            message:"can't get the data 😱",
            error:err.message
        })
    }
}
exports.postATour = async (req,res)=>{
    try {
        const tour = await postATourService(req.body)

        res.send(tour)

        const result = await tour.save() 
        result.logger()
        // const result = await product.create(req.body)
        res.status(200).json({
            status:'success',
            message:'Data inserted successfully ! 😊',
            data: result
        })
        res.send('it works')
        } catch (err) {
            res.status(400).json({
                status:"fail",
                message:"Data can't be inserted 😱",
                error: err.message
            })
        }
}
exports.getATour = async (req,res)=>{
    try {
        const {id} = req.params;
        const tour = await getATourService(id);
        res.status(200).json({
            status:'success',
            message:'can get data successfully ! 😊',
            data: tour
        })
    } catch (err) {
        res.status(400).json({
            status:"fail",
            message:"can't get data 😱",
            error: err.message
        })
    }
}
exports.updateATour = async(req,res)=>{
    try {
        const {id} = req.params;
        const data = req.body;
        const result = await updateATourService(id,data)
        res.status(200).json({
            status:'success',
            message:'can get data successfully ! 😊',
            data: result
        })
    } catch (err) {
        res.status(400).json({
            status:"fail",
            message:"can't get data 😱",
            error: err.message
        })
    }
}
exports.getCheapestTours = async(req,res)=>{
    try {
        const cheapestTours = await getCheapestToursService();
        res.send(cheapestTours);
        res.status(200).json({
            status:'success',
            message:'can get data successfully ! 😊',
            data: cheapestTours
        })
    } catch (err) {
        res.status(400).json({
            status:"fail",
            message:"can't get data 😱",
            error: err.message
        })
    }
}

exports.getTopViewedTours = async(req,res)=>{
    try {
        const topViewedTours = await getTopViewedToursService();
        res.send(topViewedTours);
        res.status(200).json({
            status:'success',
            message:'can get data successfully ! 😊',
            data: cheapestTours
        })
    } catch (err) {
        res.status(400).json({
            status:"fail",
            message:"can't get data 😱",
            error: err.message
        })
    }
}