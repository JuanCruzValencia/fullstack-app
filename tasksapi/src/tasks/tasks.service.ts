import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from 'src/dto/create-tasks.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { Task } from 'src/schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}
  async findAll() {
    return this.taskModel.find().exec();
  }

  async findOne(id: string) {
    return this.taskModel.findById(id).exec();
  }

  async create(task: CreateTaskDto) {
    console.log(task);
    const createTask = new this.taskModel(task);
    return createTask.save();
  }

  async updateOne(id: string, task: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, task, { new: true });
  }

  async deleteOne(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}
