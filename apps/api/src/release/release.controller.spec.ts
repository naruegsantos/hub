import { Test, TestingModule } from '@nestjs/testing';
import { releaseController } from './release.controller';
import { releaseService } from './release.service';

describe('releaseController', () => {
  let controller: releaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [releaseController],
      providers: [releaseService],
    }).compile();

    controller = module.get<releaseController>(releaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
