const express = require("express");
const auth = require("../middleware/auth");
const Post = require("../models/postModel");
const setFilter = require("../utills/filter");
const setSort = require("../utills/sort");

const router = new express.Router();

router.post("/posts/new", auth, async (req, res) => {
    const post = new Post({
        ...req.body,
        user: req.user._id,
    });
    try {
        await post.save();
        res.send({ id: post._id });
    } catch (err) {
        console.log(err.message);
        res.status(400).send(err);
    }
});

router.get("/posts/all", async (req, res) => {
    try {
        const skip = parseInt(req.query.skip);
        const limit = parseInt(req.query.limit);
        const filter = req.query.filter;
        const sort = req.query.sort;
        const sortFinal = setSort(sort);
        const filterObj = JSON.parse(filter);
        const filterFinal = setFilter(filterObj);
        console.log("skip", skip);
        const posts = await Post.find(filterFinal)
            .sort(sortFinal)
            .skip(skip)
            .limit(limit);
        if (!posts) {
            return res.status(404).send({
                status: 404,
                message: "no posts yet",
            });
        }

        console.log(posts);
        console.log("/////////////");

        res.send(posts);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
});

router.get("/posts/:id", async (req, res) => {
    const _id = req.params.id;

    try {
        const post = await Task.findOne({ _id, user: req.user_id });

        if (!post) {
            return res.status(404).send({
                status: 404,
                message: "no post",
            });
        }

        res.send(task);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.patch("/posts/edit/:id", auth, async (req, res) => {
    const allowdUpdates = ["address", "about", "payment", "files", "contact"];
    for (let update in req.body) {
        if (!allowdUpdates.includes(update)) {
            return res.status(400).send({
                status: 400,
                message: "Invalid update: " + update,
            });
        }
    }
    const _id = req.params.id;
    const files = { files: req.files };
    try {
        const post = await Post.findOneAndUpdate(
            { _id, user: req.user_id },
            files,
            {
                new: true,
                runValidators: true,
            }
        );
        if (!post) {
            return res.status(404).send({
                status: 404,
                message: "No post",
            });
        }
        res.send(post);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete("/posts/delete", auth, async (req, res) => {
    const _id = req.query._id;
    try {
        const post = await Post.findOneAndDelete({ _id, user: req.user_id });
        if (!post) {
            return res.status(404).send({
                status: 404,
                message: "no post",
            });
        }
        res.send();
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
