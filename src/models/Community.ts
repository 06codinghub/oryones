import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a community name'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a community description'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
    enum: ['Technology', 'Programming', 'Design', 'Business', 'Other'],
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  isPrivate: {
    type: Boolean,
    default: false,
  },
  accessCode: {
    type: String,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Community || mongoose.model('Community', communitySchema);