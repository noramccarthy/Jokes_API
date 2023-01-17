const Joke = require ('../models/joke.model');

module.exports = {
    findAllJokes: (req, res) => {
        Joke.find()
            .then((allJokes) => res.json(allJokes))
            .catch(err => res.json({
                message: "Something went wrong with Joke.find()",
                error: err
            })
        );
    },
    findOneJoke: (req, res) => {
        Joke.findOne({_id: req.params.id})
            .then(oneSingleJoke => res.json({joke : oneSingleJoke})
            )
            .catch((err) => res.json ({
                message: "Something went wrong with Joke.findOne()",
                error: err
            })
        );
    },
    createNewJoke: (req, res) => {
        Joke.create(req.body)
            .then(newJoke => res.json({ joke: newJoke })
            )
            .catch((err) => res.json({
                message: "Something went wrong with Joke.create()",
                error: err
            })
        );
    },
    updateExistingJoke:(req, res) => {
        Joke.findOneAndUpdate({ _id:req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedJoke) => 
                res.json({ joke: updatedJoke })
            )
            .catch((err) => res.json({
                message: "Something went wrong with Joke.findOneAndUpdate()",
                error: err
            })
        );
    },
    deleteExistingJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then(result => res.json({ result: result})
            )
            .catch((err) => res.json({
                message: "Something went wrong with Joke.remove()",
                error: err
            })
        );
    }
};