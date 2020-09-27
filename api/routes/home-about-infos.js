const express = require('express');
const router = express.Router();

const HomeAboutInfoController = require('../controllers/home-about-info');

router.get('/', HomeAboutInfoController.get_all_home_about_info);

router.post('/', HomeAboutInfoController.post_home_about_info);

router.patch('/:homeAboutInfoId', HomeAboutInfoController.patch_home_about_info);

router.delete('/', HomeAboutInfoController.delete_all_home_about_info);

module.exports = router