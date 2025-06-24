import { Test, TestingModule } from '@nestjs/testing';
import { ToDosController } from './to-dos.controller';
import { ToDosService } from './to-dos.service';

describe('ToDosController', () => {
  let controller: ToDosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToDosController],
      providers: [ToDosService],
    }).compile();

    controller = module.get<ToDosController>(ToDosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
