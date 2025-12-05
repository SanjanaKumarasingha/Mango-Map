const express = require('express');
const multer = require('multer');
const {
  // uploadimages,
  getimages,
  getTrendingImages,
  getimage,
  deleteimage,
  likeimage,
  unlikeimage,
} = require('../controllers/location.controller');

const router = express.Router();
const fileUpload = multer();


// // uploading images
// router.post('/', fileUpload.single('file'), uploadimages);
//like images by id
router.post('/:id/like', likeimage);

//get images
router.get('/', getimages);
//get trending images
router.get('/trending', getTrendingImages);
//get images by id
router.get('/:id', getimage);

//delete images by id
router.delete('/:id', deleteimage);
//remove like from images by id
router.delete('/:id/unlike', unlikeimage);

module.exports = router;
