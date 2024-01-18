import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-tasks.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async findAll() {
    const tasks = this.tasksService.findAll();
    if (!tasks) throw new NotFoundException('db is empty');
    return tasks;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = this.tasksService.findOne(id);
    if (!task) throw new NotFoundException('task not found');
    return task;
  }

  @Post()
  async create(@Body() task: CreateTaskDto) {
    console.log(task);
    return this.tasksService.create(task);
  }

  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() task: UpdateTaskDto) {
    const taskUpdated = this.tasksService.updateOne(id, task);
    if (!taskUpdated) throw new NotFoundException('task not found');
    return taskUpdated;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    const taskDeleted = this.tasksService.deleteOne(id);
    if (!taskDeleted) throw new NotFoundException('task not found');
    return taskDeleted;
  }
}
