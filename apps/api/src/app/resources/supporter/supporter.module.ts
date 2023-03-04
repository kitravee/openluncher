import { Module } from '@nestjs/common';
import { SupporterService } from './supporter.service';
import { SupporterResolver } from './supporter.resolver';
import { DbService } from '@openluncher/api/data-access-db';

@Module({
  providers: [SupporterResolver, SupporterService, DbService],
})
export class SupporterModule {}
