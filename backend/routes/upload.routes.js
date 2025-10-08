import express from 'express';
import multer from 'multer';
import { uploadFile, deleteFile } from '../controllers/upload.controller.js';
import { protect, adminOnly } from '../middleware/auth.middleware.js';

const router = express.Router();

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB max file size
  },
  fileFilter: (req, file, cb) => {
    // Allow images and videos
    const allowedTypes = /jpeg|jpg|png|gif|webp|mp4|mov|avi|mkv/;
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only image and video files are allowed'));
    }
  },
});

router.post('/', protect, adminOnly, upload.single('file'), uploadFile);
router.delete('/', protect, adminOnly, deleteFile);

export default router;
