const express = require("express");

const reviews = express.Router({mergeParams: true});

const {
    getAllReviews,
    getReview,
    newReview,
    deleteReview,
    updateReview,
} = require("../queries/reviews");

reviews.get("/", async (req, res) => {
    const {songId} = req.params;
    const allReviews = await getAllReviews(songId);
    if(allReviews[0]){
        res.status(202).json(allReviews);
    } else {
        res.status(500).json({error: "server error"});
    }
});

reviews.get("/:id",(req, res) => {
    const {id} = req.params;
    const review = await getReview(id);
    if(review){
        res.status(200).json(review);
    } else {
        res.status(500).json({error: "not found"});
    }
});

reviews.put("/:id", async (req, res) => {
    const {id} = req.params;
    const updatedReview = await updateReview(id, req.body);
    if(updatedReview.id) {
        res.status(200).json(updatedReview);
    } else {
        res.status.apply(500).json({error: "Review not found"});
    }
});

reviews.post("/", async (req, res) => {
    const review = await newReview(req.body);
    res.status(200).json(review);
});

reviews.delete("/:id", async(req, res) => {
    const {id} = req.params;
    const deletedReview = await deleteReview(id);
    if(deletedReview.id) {
        res.status(200).json(deletedReview);
    } else {
        res.status(500).json({error: "Review not found"});
    }
});

module.exports = reviews;