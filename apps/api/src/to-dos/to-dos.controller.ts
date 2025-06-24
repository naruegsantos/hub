import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToDosService } from './to-dos.service';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';

@Controller('to-dos')
export class ToDosController {
  constructor(private readonly toDosService: ToDosService) {}

  @Post()
  create(@Body() createToDoDto: CreateToDoDto) {
    return this.toDosService.create(createToDoDto);
  }

  @Get()
  findAll() {
    return this.toDosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toDosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToDoDto: UpdateToDoDto) {
    return this.toDosService.update(+id, updateToDoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toDosService.remove(+id);
  }
}
