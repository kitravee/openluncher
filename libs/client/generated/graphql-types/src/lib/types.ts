export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createSupporter: Supporter;
  createUser: User;
  removeSupporter: Supporter;
  removeUser: User;
  updateSupporter: Supporter;
  updateUser: User;
};


export type MutationCreateSupporterArgs = {
  data: SupporterCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationRemoveSupporterArgs = {
  where: SupporterWhereUniqueInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateSupporterArgs = {
  data: SupporterUpdateInput;
  where: SupporterWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type Query = {
  __typename?: 'Query';
  supporter: Supporter;
  supporters: Array<Supporter>;
  totalRatings: SupporterSumAggregate;
  user: User;
  users: Array<User>;
};


export type QuerySupporterArgs = {
  where: SupporterWhereUniqueInput;
};


export type QuerySupportersArgs = {
  cursor?: InputMaybe<SupporterWhereUniqueInput>;
  distinct?: InputMaybe<Array<SupporterScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SupporterOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SupporterWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  totalUpdated: SupporterSumAggregate;
};

export type Supporter = {
  __typename?: 'Supporter';
  createdAt: Scalars['DateTime'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  rate: Scalars['Float'];
};

export type SupporterAvgAggregate = {
  __typename?: 'SupporterAvgAggregate';
  rate?: Maybe<Scalars['Float']>;
};

export type SupporterCountAggregate = {
  __typename?: 'SupporterCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  displayName: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  message: Scalars['Int'];
  mobile: Scalars['Int'];
  rate: Scalars['Int'];
};

export type SupporterCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayName: Scalars['String'];
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  rate: Scalars['Float'];
};

export type SupporterMaxAggregate = {
  __typename?: 'SupporterMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
};

export type SupporterMinAggregate = {
  __typename?: 'SupporterMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
};

export type SupporterOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  displayName?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  mobile?: InputMaybe<SortOrder>;
  rate?: InputMaybe<SortOrder>;
};

export enum SupporterScalarFieldEnum {
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Email = 'email',
  Id = 'id',
  Message = 'message',
  Mobile = 'mobile',
  Rate = 'rate'
}

export type SupporterSumAggregate = {
  __typename?: 'SupporterSumAggregate';
  rate?: Maybe<Scalars['Float']>;
};

export type SupporterUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['Float']>;
};

export type SupporterWhereInput = {
  AND?: InputMaybe<Array<SupporterWhereInput>>;
  NOT?: InputMaybe<Array<SupporterWhereInput>>;
  OR?: InputMaybe<Array<SupporterWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  displayName?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  mobile?: InputMaybe<StringFilter>;
  rate?: InputMaybe<FloatFilter>;
};

export type SupporterWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type UserCreateInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};
