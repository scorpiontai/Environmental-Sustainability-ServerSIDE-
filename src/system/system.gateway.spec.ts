import { Test, TestingModule } from '@nestjs/testing';
import { SystemGateway } from './system.gateway';

describe('SystemGateway', () => {
  let gateway: SystemGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemGateway],
    }).compile();

    gateway = module.get<SystemGateway>(SystemGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
