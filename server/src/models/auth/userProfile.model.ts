import { Schema, model, Document, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { UserStatus, UserStatusType } from '../../types/userStatus';

export interface IUserProfile extends Document {
  user: Types.ObjectId;
  uuid: string;
  name: string;
  avatar?: string;
  location?: string;
  skills?: string[];
  status?: UserStatusType;
  lastSeen?: Date;
}

const userProfileSchema = new Schema<IUserProfile>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    uuid: { type: String, unique: true },
    name: { type: String, required: true },
    avatar: { type: String },
    location: { type: String },
    skills: { type: [String], default: [] },
    status: { type: String, enum: Object.values(UserStatus), default: UserStatus.OFFLINE },
    lastSeen: { type: Date },
  },
  { timestamps: true }
);

userProfileSchema.pre('save', function (next) {
  if (!this.uuid) {
    this.uuid = uuidv4();
  }

  if (this.isModified('status') && this.status === UserStatus.OFFLINE) {
    this.lastSeen = new Date();
  }

  next();
});

const UserProfile = model<IUserProfile>('UserProfile', userProfileSchema);

export default UserProfile;
