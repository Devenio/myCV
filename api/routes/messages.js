const router = require("express").Router();
const { Message, messageValidator } = require("../model/Message");

router.get("/", (req, res) => {});

router.post("/", (req, res) => {
    const data = req.body;

    if (messageValidator(data).error == undefined) {
        const message = new Message(data);
        message
            .insertOne()
            .then(ex => {
                res.send(ex);
            })
            .catch(err => {
                console.log(err);
                res.status(400).send(err);
            });
    } else {
        return res.json({ errorMessage: messageValidator(data).error.details[0].message});
    }
});

module.exports = router;
