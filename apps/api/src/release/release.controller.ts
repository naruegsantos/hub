import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReleaseService } from './release.service';
import { CreateReleaseDto } from './dto/create-release.dto';
import { UpdateReleaseDto } from './dto/update-release.dto';

@Controller('release')
export class ReleaseController {
  constructor(private readonly releaseService: ReleaseService) {}

  @Post()
  create(@Body() createreleaseDto: CreateReleaseDto) {
    return this.releaseService.create(createreleaseDto);
  }
  
  @Get()
  findAll() {
    return this.releaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.releaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatereleaseDto: UpdateReleaseDto) {
    return this.releaseService.update(+id, updatereleaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.releaseService.remove(+id);
  }
}
