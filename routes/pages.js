const express = require('express')
const db = require('../config/dbconfig.js')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/about-us', (req, res) => {
    res.render('about-us')
})

router.get('/list', (req, res) => {
    res.render('list')
})

router.get('/detail-indikator', (req, res) => {
    res.render('detail-indikator')
})

router.get('/loi', (req, res) => {
    res.render('loi')
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

router.get('/thankspage', (req, res) => {
    res.render('thankspage')
})

router.get('/_editKat', (req, res) => {
    res.render('_editKat', { kategori: {} })
})

router.get('/_editLoi', (req, res) => {
    res.render('_editLoi', { detailLoi: {} })
})

router.get('/_editShp', (req, res) => {
    res.render('_editShp', { shp: {} })
})

// router.get('/_detailShp', (req, res) => {
//     res.render('_detailShp', { style_by: {} })
// })

module.exports = router