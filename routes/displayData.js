const db = require('../config/dbconfig.js')
const express = require('express')
const router = express.Router()

router.get('/_admin', (req, res) => {
    db.query('SELECT * FROM kat_shp', (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.render('_admin', { kategori: results })
        }
    })
})

router.get('/applyers', (req, res) => {
    db.query('SELECT * FROM loi WHERE status=1', (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.render('applyers', { applyer: results })
            console.log(results)
        }
    })
})

router.get('/_listLoi', (req, res) => {
    db.query('SELECT * FROM loi', (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.render('_listLoi', { applyer: results })
            console.log(results)
        }
    })
})

router.get('/_uploadShp', (req, res) => {
    let q1 = 'SELECT * FROM kat_shp'
    let q2 = 'SELECT * FROM shp'

    db.query(q1, function (err, r1) {
        if (err) throw err;
        db.query(q2, function (err, r2) {
            if (err) throw err;
            res.render('_uploadShp', { kat_shp: r1, shp: r2, geojson1: '../assets/geojson/admin_kkr.geojson' });
        });
    });
})

router.get('/map', (req, res) => {
    db.query('SELECT shp.nama_shp, shp.id_kat_shp, shp.status_shp, kat_shp.id, kat_shp.kategori FROM shp LEFT JOIN kat_shp ON shp.id_kat_shp = kat_shp.id WHERE shp.status_shp = 1', (err, results) => {
        if (err) {
            console.log(err)
        } else {
            let groupBy = (element, key) => {
                return element.reduce((value, x) => {
                    (value[x[key]] = value[x[key]] || []).push(x);
                    return value;
                }, {});
            };
            let items = groupBy(results, 'kategori')
            res.render('map', { legend: items, geojson: '../assets/geojson/admin_kkr.geojson' })
            console.log(Object.values(items)[0])
        }
    })
})

router.get('/_listShp', (req, res) => {
    db.query('SELECT shp.id_shp, shp.nama_shp, shp.sumber_shp, shp.deskripsi_shp, shp.tanggal, shp.id_kat_shp, shp.status_shp, shp.type_shp, kat_shp.id, kat_shp.kategori FROM shp LEFT JOIN kat_shp ON shp.id_kat_shp = kat_shp.id', (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.render('_listShp', { shp: results })
            console.log(results)
        }
    })
})

router.get('/_listShp', (req, res) => {
    db.query('SELECT shp.id_shp, shp.nama_shp, shp.sumber_shp, shp.deskripsi_shp, shp.tanggal, shp.id_kat_shp, shp.status_shp, shp.type_shp, kat_shp.id, kat_shp.kategori FROM shp LEFT JOIN kat_shp ON shp.id_kat_shp = kat_shp.id', (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.render('_listShp', { shp: results })
            console.log(results)
        }
    })
})

module.exports = router