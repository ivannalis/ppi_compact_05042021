const db = require('../config/dbconfig.js')
const multer = require("multer")

/* -------------------------------------------------------------------------- */
/*                           upload file dependencies                          */
/* -------------------------------------------------------------------------- */

const geoStorage = "public/assets/geojson/"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, geoStorage)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    },
})

// const uploadGeoJson = multer({ storage: storage })
const upload = multer({ storage: storage }).single("path_shp");

/* -------------------------------------------------------------------------- */
/*                           end upload dependencies                          */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 insert data                                 */
/* -------------------------------------------------------------------------- */

exports.insertData = (req, res) => {
    const {
        kategori,
        deskripsi
    } = req.body
    db.query('INSERT INTO kat_shp SET ?', {
        kategori: kategori,
        deskripsi: deskripsi
    }, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/_admin')
        }
    })
}
exports.insertSHP = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(400).send("Something went wrong!");
        }
        const {
            nama_shp,
            sumber_shp,
            id_kat_shp,
            status_shp,
            deskripsi_shp,
            type_shp
        } = req.body

        db.query('INSERT INTO shp SET ?', {
            nama_shp: nama_shp,
            sumber_shp: sumber_shp,
            id_kat_shp: id_kat_shp,
            status_shp: status_shp,
            deskripsi_shp: deskripsi_shp,
            path_shp: req.file.destination + req.file.filename,
            type_shp: type_shp,
            kat_style: 'default'
        }, (err, results) => {
            if (err) {
                console.log(err)
            } else {
                // res.redirect('/_listShp');
                db.query('INSERT INTO styleshp SET ?', { id_shp: results.insertId, style_by: 'default' }, (err, style) => {
                    if (err) throw err;
                    res.redirect('/_listShp');
                });
            }
        })
    });
}

exports.insertStyleSHP = (req, res) => {
    let val = Object.values(req.body)
    db.query('INSERT INTO styleshp (prop_shp, color_prop, id_shp, style_by) VALUES ?', [val],
        (err, results) => {
            if (err) {
                console.log(err)
            } else {
                res.redirect('/_listShp')
            }
        })
}
exports.insertLoi = (req, res) => {
    const {
        pengirim,
        email,
        afiliasi,
        web_afiliasi,
        jenis_afiliasi,
        negara,
        ketertarikan,
        role,
        deskripsi,
        file
    } = req.body
    db.query('INSERT INTO loi SET ?', {
        pengirim: pengirim,
        email: email,
        afiliasi: afiliasi,
        web_afiliasi: web_afiliasi,
        jenis_afiliasi: jenis_afiliasi,
        negara: negara,
        ketertarikan: ketertarikan,
        role: role,
        deskripsi: deskripsi,
        file: file
    }, (err, results) => {
        if (err) {
            res.render('thankspage', {
                h1: 'Gagal!',
                h2: 'Letter of Interest anda gagal terkirim',
                p: 'LoI anda gagal dikirim. Meski begitu, anda dapat mengirimkannya secara langsung <br>ke email kami, admin@bentangkalimantan.org'
            })
            console.log(err)
        } else {
            res.render('thankspage', {
                h1: 'Congratulations!',
                h2: 'Letter of Interest anda berhasil terkirim',
                p: 'Terima kasih atas ketertarikan anda, pantau terus status LoI anda melalui email atau kunjungi'
            })
            console.log(results)
        }
    })
}

/* -------------------------------------------------------------------------- */
/*                               end insert data                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 delete data                                */
/* -------------------------------------------------------------------------- */

exports.deleteKat = (req, res) => {
    let id = req.params.id
    db.query('DELETE FROM kat_shp WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            db.query('UPDATE shp SET ? WHERE id_kat_shp= ?', [{ id_kat_shp: 15 }, id], (err, kat_shp) => {
                if (err) throw err;
                res.redirect('/_admin')
                console.log(kat_shp)
            });
        }
    })
}

exports.deleteLoi = (req, res) => {
    let id = req.params.id_loi
    db.query('DELETE FROM loi WHERE id_loi = ?', [id], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/_listLoi')
        }
    })
}

exports.deleteShp = (req, res) => {
    let id = req.params.id_shp
    db.query('DELETE FROM shp WHERE id_shp = ?', [id], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/_listShp')
        }
    })
}

exports.detleteStyle = (req, res) => {
    let val = Object.values(req.body)
    db.query('DELETE FROM styleshp WHERE id_style ?', [val],
        (err, results) => {
            if (err) {
                console.log(err)
            } else {
                res.redirect('/_listShp')
            }
        })
}

/* -------------------------------------------------------------------------- */
/*                               end delete data                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 updata data                                */
/* -------------------------------------------------------------------------- */

exports.editKat = (req, res) => {
    let id = req.params.id
    db.query('SELECT * FROM kat_shp WHERE id = ?', id, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.render('_editKat', {
                kategori: results[0]
            })
        }
    })
}

exports.updateKat = (req, res) => {
    let newData = req.body
    let id = req.params.id
    db.query('UPDATE kat_shp SET ? WHERE id= ?', [newData, id], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/_admin')
        }
    })
}

exports.editLoi = (req, res) => {
    let id = req.params.id_loi
    db.query('SELECT * FROM loi WHERE id_loi = ?', id, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.render('_editLoi', {
                detailLoi: results[0]
            })
        }
    })
}

exports.updateLoi = (req, res) => {
    let newData = req.body
    let id = req.params.id_loi
    db.query('UPDATE loi SET ? WHERE id_loi= ?', [newData, id], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/_listLoi')
        }
    })
}

exports.editShp = (req, res) => {
    let id = req.params.id_shp
    db.query('SELECT shp.id_shp, shp.nama_shp, shp.id_kat_shp, shp.sumber_shp, shp.status_shp, shp.deskripsi_shp, kat_shp.id, kat_shp.kategori FROM shp LEFT JOIN kat_shp ON shp.id_kat_shp = kat_shp.id WHERE shp.id_shp = ?', id,
        (err, results) => {
            if (err) throw err;
            db.query('SELECT * FROM kat_shp', function (err, kat_shp) {
                if (err) throw err;
                res.render('_editShp', { shp: results[0], kat_shp: kat_shp });
                console.log(kat_shp)
            });
        })
}

exports.updateShp = (req, res) => {
    upload(req, res, (err) => {
        let id = req.params.id_shp
        let file = req.file
        const {
            nama_shp,
            sumber_shp,
            id_kat_shp,
            deskripsi_shp,
            status_shp,
            path_shp
        } = req.body

        if (err) {
            res.status(400).send("Something went wrong!");
        }
        if (file === undefined) {
            db.query('UPDATE shp SET ? WHERE id_shp = ?', [{
                nama_shp: nama_shp,
                sumber_shp: sumber_shp,
                id_kat_shp: id_kat_shp,
                deskripsi_shp: deskripsi_shp,
                status_shp: status_shp,
            }, id], (err, results) => {
                if (err) {
                    console.log(err)
                } else {
                    res.redirect('/_listShp')
                }
            })
        } else {
            db.query('UPDATE shp SET ? WHERE id_shp = ?', [{
                nama_shp: nama_shp,
                sumber_shp: sumber_shp,
                id_kat_shp: id_kat_shp,
                deskripsi_shp: deskripsi_shp,
                path_shp: req.file.destination + req.file.filename,
                status_shp: status_shp,
            }, id], (err, results) => {
                if (err) {
                    console.log(err)
                } else {
                    res.redirect('/_listShp')
                }
            })
        }
    });
}
/* -------------------------------------------------------------------------- */
/*                               end update data                              */
/* -------------------------------------------------------------------------- */

exports.styleShp = (req, res) => {
    let id = req.params.id_shp
    db.query('SELECT * FROM shp WHERE id_shp = ?', id, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.render('_styleShp', {
                infoShp: results[0]
            })
        }
    })
}
// detail shp
exports.detailShp = (req, res) => {
    let id = req.params.id_shp
    db.query('SELECT * FROM shp WHERE shp.id_shp = ?', id,
        (err, detailShp) => {
            if (err) throw err;
            db.query('SELECT * FROM styleshp WHERE styleshp.id_shp = ?', id,
                (err, styleshp) => {
                    if (err) {
                        res.redirect('_admin');
                    } else {
                        let fin = JSON.stringify(styleshp)
                        res.render('_detailShp', { detailShp: detailShp[0], styleshp: styleshp })
                        console.log(styleshp)
                    }
                })
        })
}

exports.detailStyle = (req, res) => {
    let id = req.params.id_shp
    db.query('SELECT * FROM shp WHERE shp.id_shp = ?', id,
        (err, detailShp) => {
            if (err) throw err;
            db.query('SELECT * FROM styleshp WHERE styleshp.id_shp = ?', id,
                (err, styleshp) => {
                    if (err) throw err;
                    let fin = JSON.stringify(styleshp)
                    res.render('_detailStyle', { detailShp: detailShp[0], styleshp: styleshp })
                })
        })
}

exports.editStyle = (req, res) => {
    let id = req.params.id_shp
    db.query('SELECT * FROM shp WHERE shp.id_shp = ?', id,
        (err, detailShp) => {
            if (err) throw err;
            db.query('SELECT * FROM styleshp WHERE styleshp.id_shp = ?', id,
                (err, styleshp) => {
                    if (err) throw err;
                    let fin = JSON.stringify(styleshp)
                    res.render('_editstyle', { detailShp: detailShp[0], styleshp: styleshp })
                    console.log(styleshp)
                })
        })
}

exports.updateStyleShp = (req, res) => {
    let val = Object.values(req.body)
    db.query('INSERT INTO styleshp (id_style, color_prop, label_style) VALUES ? ON DUPLICATE KEY UPDATE color_prop = values(color_prop),label_style = values(label_style) ', [val], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/_listShp')
        }
    })
}




















