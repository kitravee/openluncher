import { Injectable } from '@nestjs/common';
import { DbService } from '@openluncher/api/data-access-db';
import {
  CreateOneSupporterArgs,
  FindManySupporterArgs,
  FindUniqueSupporterArgs,
  UpdateOneSupporterArgs,
} from '@openluncher/api/generated/db-types';

@Injectable()
export class SupporterService {
  constructor(private db: DbService) {}

  findOne(findSupporterArgs: FindUniqueSupporterArgs) {
    return this.db.supporter.findUnique(findSupporterArgs);
  }

  findAll(findManySupporterArgs: FindManySupporterArgs) {
    return this.db.supporter.findMany(findManySupporterArgs);
  }

  create(createSupporter: CreateOneSupporterArgs) {
    return this.db.supporter.create(createSupporter);
  }

  update(updateSupporterArgs: UpdateOneSupporterArgs) {
    return this.db.supporter.update(updateSupporterArgs);
  }

  remove(removeUserArgs: FindUniqueSupporterArgs) {
    return this.db.supporter.delete(removeUserArgs);
  }

  async getTotalRatings() {
    const response = await this.db.supporter.aggregate({
      _sum: {
        rate: true,
      },
    });

    return response._sum;
  }
}
