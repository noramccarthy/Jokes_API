const JokeController = require('../controllers/joke.controller');

module.exports = (app) => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.get('/api/jokes/:_id', JokeController.findOneJoke);
    app.put('/api/jokes/:_id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/:_id', JokeController.deleteExistingJoke);
};