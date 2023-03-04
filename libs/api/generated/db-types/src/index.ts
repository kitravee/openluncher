import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import * as Validator from 'class-validator';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    password = "password"
}

export enum SupporterScalarFieldEnum {
    id = "id",
    rate = "rate",
    createdAt = "createdAt",
    displayName = "displayName",
    email = "email",
    mobile = "mobile",
    message = "message"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(SupporterScalarFieldEnum, { name: 'SupporterScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@ArgsType()
export class AggregateSupporterRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class AggregateUserRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof DateTimeFilter>;
}

@ArgsType()
export class FindSupporterRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class FindUserRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatFilter, {nullable:true})
    not?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class FloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _sum?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _min?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _max?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@ArgsType()
export class RunCommandRawArgs {
    @Field(() => GraphQLJSON, {nullable:false})
    command!: any;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@ObjectType()
export class AggregateSupporter {
    @Field(() => SupporterCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SupporterCountAggregate>;
    @Field(() => SupporterAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof SupporterAvgAggregate>;
    @Field(() => SupporterSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof SupporterSumAggregate>;
    @Field(() => SupporterMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SupporterMinAggregate>;
    @Field(() => SupporterMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SupporterMaxAggregate>;
}

@ArgsType()
export class CreateManySupporterArgs {
    @Field(() => [SupporterCreateManyInput], {nullable:false})
    @Type(() => SupporterCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<SupporterCreateManyInput>;
}

@ArgsType()
export class CreateOneSupporterArgs {
    @Field(() => SupporterCreateInput, {nullable:false})
    @Type(() => SupporterCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof SupporterCreateInput>;
}

@ArgsType()
export class DeleteManySupporterArgs {
    @Field(() => SupporterWhereInput, {nullable:true})
    @Type(() => SupporterWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof SupporterWhereInput>;
}

@ArgsType()
export class DeleteOneSupporterArgs {
    @Field(() => SupporterWhereUniqueInput, {nullable:false})
    @Type(() => SupporterWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof SupporterWhereUniqueInput>;
}

@ArgsType()
export class FindFirstSupporterOrThrowArgs {
    @Field(() => SupporterWhereInput, {nullable:true})
    @Type(() => SupporterWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof SupporterWhereInput>;
    @Field(() => [SupporterOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SupporterOrderByWithRelationInput>;
    @Field(() => SupporterWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SupporterWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SupporterScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SupporterScalarFieldEnum>;
}

@ArgsType()
export class FindFirstSupporterArgs {
    @Field(() => SupporterWhereInput, {nullable:true})
    @Type(() => SupporterWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof SupporterWhereInput>;
    @Field(() => [SupporterOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SupporterOrderByWithRelationInput>;
    @Field(() => SupporterWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SupporterWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SupporterScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SupporterScalarFieldEnum>;
}

@ArgsType()
export class FindManySupporterArgs {
    @Field(() => SupporterWhereInput, {nullable:true})
    @Type(() => SupporterWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof SupporterWhereInput>;
    @Field(() => [SupporterOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SupporterOrderByWithRelationInput>;
    @Field(() => SupporterWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SupporterWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SupporterScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SupporterScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueSupporterOrThrowArgs {
    @Field(() => SupporterWhereUniqueInput, {nullable:false})
    @Type(() => SupporterWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof SupporterWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueSupporterArgs {
    @Field(() => SupporterWhereUniqueInput, {nullable:false})
    @Type(() => SupporterWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof SupporterWhereUniqueInput>;
}

@ArgsType()
export class SupporterAggregateArgs {
    @Field(() => SupporterWhereInput, {nullable:true})
    @Type(() => SupporterWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof SupporterWhereInput>;
    @Field(() => [SupporterOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SupporterOrderByWithRelationInput>;
    @Field(() => SupporterWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SupporterWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SupporterCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SupporterCountAggregateInput>;
    @Field(() => SupporterAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof SupporterAvgAggregateInput>;
    @Field(() => SupporterSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof SupporterSumAggregateInput>;
    @Field(() => SupporterMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SupporterMinAggregateInput>;
    @Field(() => SupporterMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SupporterMaxAggregateInput>;
}

@InputType()
export class SupporterAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    rate?: true;
}

@ObjectType()
export class SupporterAvgAggregate {
    @Field(() => Float, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(5)
    rate?: number;
}

@InputType()
export class SupporterAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;
}

@InputType()
export class SupporterCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    rate?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    displayName?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    mobile?: true;
    @Field(() => Boolean, {nullable:true})
    message?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class SupporterCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    rate!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    displayName!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    mobile!: number;
    @Field(() => Int, {nullable:false})
    message!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class SupporterCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    displayName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mobile?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;
}

@InputType()
export class SupporterCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Float, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(5)
    rate!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    displayName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    mobile?: string;
    @Field(() => String, {nullable:true})
    message?: string;
}

@InputType()
export class SupporterCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Float, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(5)
    rate!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    displayName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    mobile?: string;
    @Field(() => String, {nullable:true})
    message?: string;
}

@ArgsType()
export class SupporterGroupByArgs {
    @Field(() => SupporterWhereInput, {nullable:true})
    @Type(() => SupporterWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof SupporterWhereInput>;
    @Field(() => [SupporterOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SupporterOrderByWithAggregationInput>;
    @Field(() => [SupporterScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SupporterScalarFieldEnum>;
    @Field(() => SupporterScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof SupporterScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SupporterCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SupporterCountAggregateInput>;
    @Field(() => SupporterAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof SupporterAvgAggregateInput>;
    @Field(() => SupporterSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof SupporterSumAggregateInput>;
    @Field(() => SupporterMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SupporterMinAggregateInput>;
    @Field(() => SupporterMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SupporterMaxAggregateInput>;
}

@ObjectType()
export class SupporterGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Float, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(5)
    rate!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => String, {nullable:false})
    displayName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    mobile?: string;
    @Field(() => String, {nullable:true})
    message?: string;
    @Field(() => SupporterCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SupporterCountAggregate>;
    @Field(() => SupporterAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof SupporterAvgAggregate>;
    @Field(() => SupporterSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof SupporterSumAggregate>;
    @Field(() => SupporterMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SupporterMinAggregate>;
    @Field(() => SupporterMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SupporterMaxAggregate>;
}

@InputType()
export class SupporterMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    rate?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    displayName?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    mobile?: true;
    @Field(() => Boolean, {nullable:true})
    message?: true;
}

@ObjectType()
export class SupporterMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Float, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(5)
    rate?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    mobile?: string;
    @Field(() => String, {nullable:true})
    message?: string;
}

@InputType()
export class SupporterMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    displayName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mobile?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;
}

@InputType()
export class SupporterMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    rate?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    displayName?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    mobile?: true;
    @Field(() => Boolean, {nullable:true})
    message?: true;
}

@ObjectType()
export class SupporterMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Float, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(5)
    rate?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    mobile?: string;
    @Field(() => String, {nullable:true})
    message?: string;
}

@InputType()
export class SupporterMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    displayName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mobile?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;
}

@InputType()
export class SupporterOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    displayName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mobile?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;
    @Field(() => SupporterCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SupporterCountOrderByAggregateInput>;
    @Field(() => SupporterAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof SupporterAvgOrderByAggregateInput>;
    @Field(() => SupporterMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SupporterMaxOrderByAggregateInput>;
    @Field(() => SupporterMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SupporterMinOrderByAggregateInput>;
    @Field(() => SupporterSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof SupporterSumOrderByAggregateInput>;
}

@InputType()
export class SupporterOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    displayName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    mobile?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;
}

@InputType()
export class SupporterScalarWhereWithAggregatesInput {
    @Field(() => [SupporterScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SupporterScalarWhereWithAggregatesInput>;
    @Field(() => [SupporterScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SupporterScalarWhereWithAggregatesInput>;
    @Field(() => [SupporterScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SupporterScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    rate?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    displayName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    mobile?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    message?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class SupporterSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    rate?: true;
}

@ObjectType()
export class SupporterSumAggregate {
    @Field(() => Float, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(5)
    rate?: number;
}

@InputType()
export class SupporterSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;
}

@InputType()
export class SupporterUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Float, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(5)
    rate!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    displayName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    mobile?: string;
    @Field(() => String, {nullable:true})
    message?: string;
}

@InputType()
export class SupporterUncheckedUpdateManyInput {
    @Field(() => Float, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(5)
    rate?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    mobile?: string;
    @Field(() => String, {nullable:true})
    message?: string;
}

@InputType()
export class SupporterUncheckedUpdateInput {
    @Field(() => Float, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(5)
    rate?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    mobile?: string;
    @Field(() => String, {nullable:true})
    message?: string;
}

@InputType()
export class SupporterUpdateManyMutationInput {
    @Field(() => Float, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(5)
    rate?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    mobile?: string;
    @Field(() => String, {nullable:true})
    message?: string;
}

@InputType()
export class SupporterUpdateInput {
    @Field(() => Float, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(5)
    rate?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    displayName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    mobile?: string;
    @Field(() => String, {nullable:true})
    message?: string;
}

@InputType()
export class SupporterWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
}

@InputType()
export class SupporterWhereInput {
    @Field(() => [SupporterWhereInput], {nullable:true})
    AND?: Array<SupporterWhereInput>;
    @Field(() => [SupporterWhereInput], {nullable:true})
    OR?: Array<SupporterWhereInput>;
    @Field(() => [SupporterWhereInput], {nullable:true})
    NOT?: Array<SupporterWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => FloatFilter, {nullable:true})
    rate?: InstanceType<typeof FloatFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    displayName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    mobile?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    message?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class Supporter {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Float, {nullable:false})
    rate!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => String, {nullable:false})
    displayName!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    mobile!: string | null;
    @Field(() => String, {nullable:true})
    message!: string | null;
}

@ArgsType()
export class UpdateManySupporterArgs {
    @Field(() => SupporterUpdateManyMutationInput, {nullable:false})
    @Type(() => SupporterUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof SupporterUpdateManyMutationInput>;
    @Field(() => SupporterWhereInput, {nullable:true})
    @Type(() => SupporterWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof SupporterWhereInput>;
}

@ArgsType()
export class UpdateOneSupporterArgs {
    @Field(() => SupporterUpdateInput, {nullable:false})
    @Type(() => SupporterUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof SupporterUpdateInput>;
    @Field(() => SupporterWhereUniqueInput, {nullable:false})
    @Type(() => SupporterWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof SupporterWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneSupporterArgs {
    @Field(() => SupporterWhereUniqueInput, {nullable:false})
    @Type(() => SupporterWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof SupporterWhereUniqueInput>;
    @Field(() => SupporterCreateInput, {nullable:false})
    @Type(() => SupporterCreateInput)
    create!: InstanceType<typeof SupporterCreateInput>;
    @Field(() => SupporterUpdateInput, {nullable:false})
    @Type(() => SupporterUpdateInput)
    update!: InstanceType<typeof SupporterUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    @ValidateNested({ each: true })
    data!: Array<UserCreateManyInput>;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    @ValidateNested({ each: true })
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested({ each: true })
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @HideField()
    password!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested({ each: true })
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password!: string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password?: string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password?: string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name!: string | null;
    @HideField()
    password!: string;
}
