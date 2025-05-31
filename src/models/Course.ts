import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a course title'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a course description'],
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
    min: 0,
  },
  isFree: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
  },
  content: [{
    title: String,
    description: String,
    videoUrl: String,
    duration: Number,
  }],
  enrolledStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  ratings: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: Number,
    review: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Course || mongoose.model('Course', courseSchema);