import mongoose from 'mongoose';

const verificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['student', 'professional', 'identity'],
  },
  documentUrl: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  verifiedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Verification || mongoose.model('Verification', verificationSchema);