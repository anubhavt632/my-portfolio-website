import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  projectType: {
    type: String,
    required: true
  },
  budget: {
    type: String
  },
  message: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'in-progress', 'completed', 'rejected'],
    default: 'new'
  }
}, {
  timestamps: true
});

export default mongoose.model('Contact', contactSchema);
