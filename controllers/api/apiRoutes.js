const Workout = require("../../models/Workout.js")
const router = require("express").Router();

    // get request for workouts to find workouts
    router.get("/api/workouts", function (req, res) {
        Workout.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });
    // post request for workouts to add a workout
    router.post("/api/workouts", function (req, res) {
        Workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });
    // put request to edit workout
    router.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(
            req.params.id,
            { $push: { exercises: req.body } },
        )
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });

    router.get(`/api/workouts/range`, (req, res) => {
        // view the past 7 workouts
        Workout.find({}).limit(7).then(data => {
            return res.json(data);
        })
            .catch(err => {
                return res.json(err)
            })
    });


module.exports = router;
