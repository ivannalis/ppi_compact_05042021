const express = require('express')
const router = express.Router()
const Controller = require('../controllers/auth')

router.post('/_admin', Controller.insertData)
router.post('/loi', Controller.insertLoi)
router.post('/_uploadShp', Controller.insertSHP)

router.post('/_styleShp', Controller.insertStyleSHP)

router.get('/delete/:id', Controller.deleteKat)
router.get('/deleteLoi/:id_loi', Controller.deleteLoi)
router.get('/deleteShp/:id_shp', Controller.deleteShp)
router.get('/detleteStyle/:id_shp', Controller.detleteStyle)

router.get('/editKat/:id', Controller.editKat)
router.post('/editKat/:id', Controller.updateKat)
router.get('/editLoi/:id_loi', Controller.editLoi)
router.post('/editLoi/:id_loi', Controller.updateLoi)
router.get('/editShp/:id_shp', Controller.editShp)
router.post('/editShp/:id_shp', Controller.updateShp)

router.get('/styleShp/:id_shp', Controller.styleShp)
// detail shp
router.get('/detailShp/:id_shp', Controller.detailShp)

router.get('/detailStyle/:id_shp', Controller.detailStyle)
router.get('/editStyle/:id_shp', Controller.editStyle)

router.post('/editstyle/:id_shp', Controller.updateStyleShp)

module.exports = router