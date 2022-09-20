const express = require('express');
const tourController = require('../Controller/Tour.Controller');
const router = express.Router();


router
    .route("/")
        .get(tourController.getAllTours)
        .post(tourController.postATour)
router
    .route('/cheapest')
        .get(tourController.getCheapestTours)
router
    .route('/trending')
        .get(tourController.getTopViewedTours)
router
    .route('/:id')
        .get(tourController.getATour)
        .patch(tourController.updateATour)


        
module.exports =router