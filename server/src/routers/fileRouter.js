const express = require("express");
const { uploadFileToS3 } = require("../middleware/s3-handler");
const auth = require("../middleware/auth");
const Post = require("../models/postModel");
const router = new express.Router();

router.post("/upload-file", auth, uploadFileToS3, async (req, res) => {
    if (!req.files) {
        res.status(422).send({
            code: 422,
            message: "File not uploaded",
        });
    }
    try {
        let files = req.files.filter((file) => {
            if (file != undefined && file.key != undefined) return file.key;
        });
        files = files.map((file) => process.env.FILES_STORAGE + file.key);
        console.log(files);
        const _id = req.query.id;
        const result = await Post.findOneAndUpdate(
            { _id },
            { files },
            {
                new: true,
                runValidators: true,
            }
        );
        res.send({ result });
    } catch (err) {
        res.send({ error: err.message });
    }
});

router.delete("delete-file");

module.exports = router;
