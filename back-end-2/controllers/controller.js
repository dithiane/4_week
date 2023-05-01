const db = require('../server/db.json')
let id = db.length;

module.exports = {
    getHouses :(req, res) => {
        res.status(200).send(db)
    },
    createHouse: (req, res) => {
        id++
        let newHouse = {...req.body, id}
        db.push(newHouse)
        res.status(200).send(db)
    },
    deleteHouse: (req, res) => {
        let updatedDb = db.filter(el => el.id !== +req.params.id)
        res.status(200).send(updatedDb)
    },
    updateHouse : (req, res) => {
        const { id } = req.params;
        const { type } = req.body

        let index = db.findIndex(el=> +el.id === +id)

        if (type === "plus") {
            db[index].price++
            console.log(db)
            res.status(200).send(db)
        } else if (type === 'minus') {
            db[index].price--
            res.status(200).send(db)
        } else res.sendStatus(400)
    }
}