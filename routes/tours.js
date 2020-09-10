const router = require('express').Router();
let Tours = require('../models/tours.model');

router.route('/').get((req, res) => {
  Tours.find()
    .then(tours => res.json(tours))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const number = Number(req.body.number);
  const date = Date.parse(req.body.date);

  const newTour = new Tours({
    username,
    description,
    number,
    date,
  });

  newTour.save()
  .then(() => res.json('Tour added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Tours.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Tours.findByIdAndDelete(req.params.id)
    .then(() => res.json('Tour deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Tours.findById(req.params.id)
    .then(tour => {
        tour.username = req.body.username;
        tour.description = req.body.description;
        tour.number = Number(req.body.number);
        tour.date = Date.parse(req.body.date);

        tour.save()
        .then(() => res.json('Tour updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;