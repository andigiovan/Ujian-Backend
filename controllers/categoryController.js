const db = require("../database")

module.exports = {
    addCategory: (req, res) => {
        db.query(`insert into categories values (0, '${req.body.nama}')`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    editCategory: (req, res) => {
        db.query(`update categories set nama = '${req.body.nama}' where id = ${req.body.id}`, (err, result) => {
            if (err) throw err
            res.send('Edit Berhasil')
        })
    },
    deleteCategory: (req, res) => {
        db.query(`delete from categories where id = ${req.params.id}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
        
}