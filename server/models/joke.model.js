const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setUp: {
            type: String,
            required: [true, "Set up is required."]
        },
        punchLine: {
            type: String,
            required: [true, "Punchline is required."]
        }
    },
    {timestamps: true}
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;