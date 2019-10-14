const db = require("../database")

module.exports = {
    addMovie: (req, res) => {
        db.query(`insert into movies values (0, '${req.body.nama}', '${req.body.tahun}', '${req.body.description}' )`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
    editMovie: (req, res) => {
        db.query(`update movies set nama = '${req.body.nama}', tahun = '${req.body.tahun}', description = '${req.body.description}'  where id = ${req.body.id}`, (err, result) => {
            if (err) throw err
            res.send('Edit Berhasil')
        })
    },
    deleteMovie: (req, res) => {
        db.query(`delete from movies where id = ${req.params.id}`, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    },
        
}