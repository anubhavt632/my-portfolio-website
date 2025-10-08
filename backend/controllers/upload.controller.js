import { storage } from '../config/firebase.js';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

// @desc    Upload file to Firebase Storage
// @route   POST /api/upload
// @access  Private/Admin
export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file provided' });
    }

    const { category } = req.body;
    if (!category) {
      return res.status(400).json({ message: 'Category is required' });
    }

    const file = req.file;
    const timestamp = Date.now();
    const fileName = `${timestamp}_${file.originalname}`;
    
    // Organize files by category
    const folderPath = `projects/${category}/${fileName}`;
    const storageRef = ref(storage, folderPath);

    // Upload file to Firebase Storage
    const metadata = {
      contentType: file.mimetype,
    };

    await uploadBytes(storageRef, file.buffer, metadata);
    const downloadURL = await getDownloadURL(storageRef);

    res.status(200).json({
      message: 'File uploaded successfully',
      url: downloadURL,
      path: folderPath,
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete file from Firebase Storage
// @route   DELETE /api/upload
// @access  Private/Admin
export const deleteFile = async (req, res) => {
  try {
    const { path } = req.body;
    
    if (!path) {
      return res.status(400).json({ message: 'File path is required' });
    }

    const fileRef = ref(storage, path);
    await deleteObject(fileRef);

    res.status(200).json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ message: error.message });
  }
};
