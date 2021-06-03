const Workout = require("../models/workout.js")

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        Workout.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });

    app.post("/api/workouts", function (req, res) {
        Workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(
            req.params.id,
            { $push: { exercises: req.body } },
            // // { new: true, runValidators: true }
        )
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });
    app.get(`/api/workouts/range`, (req,res) => {
        Workout.find({}).limit(7).then(data => {
            return res.json(data);
        })
            .catch(err => {
                return res.json(err)
            })
    });


}
