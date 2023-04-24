const express = require('express')
const router = new express.Router();
const Student = require('../model/student')


router.get('/', (req, res) => {
    res.send('Hello')
})


router.post("/students", (req, res) => {
    const user = new Student(req.body)
    console.log(req.body);

    user.save().then(() => {
        res.status(201).send(user)
        console.log("data save");
    }).catch((err) => { res.status(400).send(err) })
    // res.send()

})

router.post('/students', async (req, res) => {

    try {

        const user = new Student(req.body)
        const createUser = await user.save()
        res.status(201).send(createUser)
    } catch (e) {

        res.status(400).send(err)
    }

})

router.get('/studentsData', async (req, res) => {
    try {

        const studentData = await Student.find()
        res.send(studentData)

    } catch (e) {
        res.send(e)
    }

})


router.get('/students/:id', async (req, res) => {
    try {

        const _id = req.params.id
        const studentData = await Student.findById(_id)
        res.send(studentData);
    } catch (e) {
        res.status(500).send(e)
    }
});


router.delete('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const deleteData = await Student.findByIdAndDelete(_id)
        if (!_id) { return res.status(400).send() } res.send(deleteData)

    } catch (e) { res.status(500).send(e) }
})

router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const updateData = await Student.findByIdAndUpdate(_id, req.body)
        // if (!_id) { return res.status(400).send() } 
        res.send(updateData)

    } catch (e) { res.status(500).send(e) }
})


module.exports = router;