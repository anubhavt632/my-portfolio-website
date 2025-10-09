import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Graphic Design', 'Video Editing', 'Web Development', 'Electronics']
  },
  subcategory: {
    type: String,
    enum: [
      'Logos', 'Social Media', 'Banners', 'Illustrations', // Graphic Design
      'Advertisements', 'Educational', 'Promotional', 'Reels', // Video Editing
      'Websites', 'Web Apps', 'E-commerce', 'Figma Designs', // Web Development
      'IoT Projects', 'Circuit Design', 'Automation' // Electronics
    ]
  },
  tags: [{
    type: String
  }],
  imageUrl: {
    type: String
  },
  imagePath: {
    type: String
  },
  videoUrl: {
    type: String
  },
  videoPath: {
    type: String
  },
  projectUrl: {
    type: String
  },
  githubUrl: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

export default mongoose.model('Project', projectSchema);
