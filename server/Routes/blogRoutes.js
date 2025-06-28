const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const blogController = require('../Controllers/blogController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

router.post('/', upload.single('image'), blogController.createBlog);
router.get('/', blogController.getAllBlogs);

module.exports = router;