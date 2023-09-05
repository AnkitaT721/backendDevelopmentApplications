import mongoose, { Schema, Document } from 'mongoose';

export interface ITaskData extends Document {
  task: string;
}

const taskSchema: Schema = new Schema({
  task: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.model<ITaskData>('Task', taskSchema);