import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import {
  CreateOneSupporterArgs,
  FindManySupporterArgs,
  FindUniqueSupporterArgs,
  Supporter,
  SupporterSumAggregate,
  UpdateOneSupporterArgs,
} from '@openluncher/api/generated/db-types';
import { SupporterService } from './supporter.service';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() => Supporter)
export class SupporterResolver {
  constructor(private readonly supporterService: SupporterService) {}

  @Subscription(() => SupporterSumAggregate)
  totalUpdated() {
    return pubSub.asyncIterator('CREATE_SUPPORTER');
  }

  @Mutation(() => Supporter)
  async createSupporter(@Args() userCreateArgs: CreateOneSupporterArgs) {
    const createdSupporter = await this.supporterService.create(userCreateArgs);

    const totalUpdated = await this.supporterService.getTotalRatings();

    pubSub.publish('CREATE_SUPPORTER', { totalUpdated });

    return createdSupporter;
  }

  @Query(() => Supporter)
  supporter(@Args() findUserArgs: FindUniqueSupporterArgs) {
    return this.supporterService.findOne(findUserArgs);
  }

  @Query(() => [Supporter])
  supporters(@Args() findManySupporterArgs: FindManySupporterArgs) {
    return this.supporterService.findAll(findManySupporterArgs);
  }

  @Query(() => SupporterSumAggregate)
  async totalRatings() {
    return this.supporterService.getTotalRatings();
  }

  @Mutation(() => Supporter)
  updateSupporter(@Args() supporterUpdateInput: UpdateOneSupporterArgs) {
    return this.supporterService.update(supporterUpdateInput);
  }

  @Mutation(() => Supporter)
  removeSupporter(@Args() removeSupporterArgs: FindUniqueSupporterArgs) {
    return this.supporterService.remove(removeSupporterArgs);
  }
}
