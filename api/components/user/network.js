const express = require('express');
const bodyParser = require('body-parser');

const response = require('../../../network/response');
const controller = require('./index');
const router = express.Router();

router.get('/', list);
router.get('/:id', get);
router.post('/', upSert);
router.put('/', upSert);

function list(req, res) {
    controller.list().then((list) => {
        response.success(req, res, list, 200);
    }).catch((err) => {
        response.error(req, res, err.message, 500);
    });
}

function get(req, res) {
    controller.get(req.params.id).then((user) => {
        response.success(req, res, user, 200);
    }).catch((err) => {
        response.error(req, res, err.message, 500);
    });;
}

function upSert(req, res) {
    controller.upSert(req.body).then((user) => {
        response.success(req, res, user, 200);
    }).catch((err) => {
        response.error(req, res, err.message, 500);
    })
}

module.exports = router;