// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  article: (where?: ArticleWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  article: (where: ArticleWhereUniqueInput) => ArticleNullablePromise;
  articles: (args?: {
    where?: ArticleWhereInput;
    orderBy?: ArticleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Article>;
  articlesConnection: (args?: {
    where?: ArticleWhereInput;
    orderBy?: ArticleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ArticleConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createArticle: (data: ArticleCreateInput) => ArticlePromise;
  updateArticle: (args: {
    data: ArticleUpdateInput;
    where: ArticleWhereUniqueInput;
  }) => ArticlePromise;
  updateManyArticles: (args: {
    data: ArticleUpdateManyMutationInput;
    where?: ArticleWhereInput;
  }) => BatchPayloadPromise;
  upsertArticle: (args: {
    where: ArticleWhereUniqueInput;
    create: ArticleCreateInput;
    update: ArticleUpdateInput;
  }) => ArticlePromise;
  deleteArticle: (where: ArticleWhereUniqueInput) => ArticlePromise;
  deleteManyArticles: (where?: ArticleWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  article: (
    where?: ArticleSubscriptionWhereInput
  ) => ArticleSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ArticleOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "author_ASC"
  | "author_DESC"
  | "name_ASC"
  | "name_DESC"
  | "postTime_ASC"
  | "postTime_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ArticleWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ArticleWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  author?: Maybe<String>;
  author_not?: Maybe<String>;
  author_in?: Maybe<String[] | String>;
  author_not_in?: Maybe<String[] | String>;
  author_lt?: Maybe<String>;
  author_lte?: Maybe<String>;
  author_gt?: Maybe<String>;
  author_gte?: Maybe<String>;
  author_contains?: Maybe<String>;
  author_not_contains?: Maybe<String>;
  author_starts_with?: Maybe<String>;
  author_not_starts_with?: Maybe<String>;
  author_ends_with?: Maybe<String>;
  author_not_ends_with?: Maybe<String>;
  media_some?: Maybe<ArticleMediaWhereInput>;
  media_every?: Maybe<ArticleMediaRestrictedWhereInput>;
  media_none?: Maybe<ArticleMediaRestrictedWhereInput>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  postTime?: Maybe<String>;
  postTime_not?: Maybe<String>;
  postTime_in?: Maybe<String[] | String>;
  postTime_not_in?: Maybe<String[] | String>;
  postTime_lt?: Maybe<String>;
  postTime_lte?: Maybe<String>;
  postTime_gt?: Maybe<String>;
  postTime_gte?: Maybe<String>;
  postTime_contains?: Maybe<String>;
  postTime_not_contains?: Maybe<String>;
  postTime_starts_with?: Maybe<String>;
  postTime_not_starts_with?: Maybe<String>;
  postTime_ends_with?: Maybe<String>;
  postTime_not_ends_with?: Maybe<String>;
  subtitles_some?: Maybe<ArticleSubtitleWhereInput>;
  subtitles_every?: Maybe<ArticleSubtitleRestrictedWhereInput>;
  subtitles_none?: Maybe<ArticleSubtitleRestrictedWhereInput>;
  texts_some?: Maybe<ArticleTextWhereInput>;
  texts_every?: Maybe<ArticleTextRestrictedWhereInput>;
  texts_none?: Maybe<ArticleTextRestrictedWhereInput>;
  titles_some?: Maybe<ArticleTitleWhereInput>;
  titles_every?: Maybe<ArticleTitleRestrictedWhereInput>;
  titles_none?: Maybe<ArticleTitleRestrictedWhereInput>;
  AND?: Maybe<ArticleWhereInput[] | ArticleWhereInput>;
}

export interface ArticleMediaWhereInput {
  position?: Maybe<Int>;
  position_not?: Maybe<Int>;
  position_in?: Maybe<Int[] | Int>;
  position_not_in?: Maybe<Int[] | Int>;
  position_lt?: Maybe<Int>;
  position_lte?: Maybe<Int>;
  position_gt?: Maybe<Int>;
  position_gte?: Maybe<Int>;
  url?: Maybe<String>;
  url_not?: Maybe<String>;
  url_in?: Maybe<String[] | String>;
  url_not_in?: Maybe<String[] | String>;
  url_lt?: Maybe<String>;
  url_lte?: Maybe<String>;
  url_gt?: Maybe<String>;
  url_gte?: Maybe<String>;
  url_contains?: Maybe<String>;
  url_not_contains?: Maybe<String>;
  url_starts_with?: Maybe<String>;
  url_not_starts_with?: Maybe<String>;
  url_ends_with?: Maybe<String>;
  url_not_ends_with?: Maybe<String>;
  AND?: Maybe<ArticleMediaWhereInput[] | ArticleMediaWhereInput>;
}

export interface ArticleMediaRestrictedWhereInput {
  position?: Maybe<Int>;
  position_not?: Maybe<Int>;
  position_in?: Maybe<Int[] | Int>;
  position_not_in?: Maybe<Int[] | Int>;
  position_lt?: Maybe<Int>;
  position_lte?: Maybe<Int>;
  position_gt?: Maybe<Int>;
  position_gte?: Maybe<Int>;
  url?: Maybe<String>;
  url_not?: Maybe<String>;
  url_in?: Maybe<String[] | String>;
  url_not_in?: Maybe<String[] | String>;
  url_lt?: Maybe<String>;
  url_lte?: Maybe<String>;
  url_gt?: Maybe<String>;
  url_gte?: Maybe<String>;
  url_contains?: Maybe<String>;
  url_not_contains?: Maybe<String>;
  url_starts_with?: Maybe<String>;
  url_not_starts_with?: Maybe<String>;
  url_ends_with?: Maybe<String>;
  url_not_ends_with?: Maybe<String>;
  AND?: Maybe<
    ArticleMediaRestrictedWhereInput[] | ArticleMediaRestrictedWhereInput
  >;
}

export interface ArticleSubtitleWhereInput {
  position?: Maybe<Int>;
  position_not?: Maybe<Int>;
  position_in?: Maybe<Int[] | Int>;
  position_not_in?: Maybe<Int[] | Int>;
  position_lt?: Maybe<Int>;
  position_lte?: Maybe<Int>;
  position_gt?: Maybe<Int>;
  position_gte?: Maybe<Int>;
  subitle?: Maybe<String>;
  subitle_not?: Maybe<String>;
  subitle_in?: Maybe<String[] | String>;
  subitle_not_in?: Maybe<String[] | String>;
  subitle_lt?: Maybe<String>;
  subitle_lte?: Maybe<String>;
  subitle_gt?: Maybe<String>;
  subitle_gte?: Maybe<String>;
  subitle_contains?: Maybe<String>;
  subitle_not_contains?: Maybe<String>;
  subitle_starts_with?: Maybe<String>;
  subitle_not_starts_with?: Maybe<String>;
  subitle_ends_with?: Maybe<String>;
  subitle_not_ends_with?: Maybe<String>;
  AND?: Maybe<ArticleSubtitleWhereInput[] | ArticleSubtitleWhereInput>;
}

export interface ArticleSubtitleRestrictedWhereInput {
  position?: Maybe<Int>;
  position_not?: Maybe<Int>;
  position_in?: Maybe<Int[] | Int>;
  position_not_in?: Maybe<Int[] | Int>;
  position_lt?: Maybe<Int>;
  position_lte?: Maybe<Int>;
  position_gt?: Maybe<Int>;
  position_gte?: Maybe<Int>;
  subitle?: Maybe<String>;
  subitle_not?: Maybe<String>;
  subitle_in?: Maybe<String[] | String>;
  subitle_not_in?: Maybe<String[] | String>;
  subitle_lt?: Maybe<String>;
  subitle_lte?: Maybe<String>;
  subitle_gt?: Maybe<String>;
  subitle_gte?: Maybe<String>;
  subitle_contains?: Maybe<String>;
  subitle_not_contains?: Maybe<String>;
  subitle_starts_with?: Maybe<String>;
  subitle_not_starts_with?: Maybe<String>;
  subitle_ends_with?: Maybe<String>;
  subitle_not_ends_with?: Maybe<String>;
  AND?: Maybe<
    ArticleSubtitleRestrictedWhereInput[] | ArticleSubtitleRestrictedWhereInput
  >;
}

export interface ArticleTextWhereInput {
  position?: Maybe<Int>;
  position_not?: Maybe<Int>;
  position_in?: Maybe<Int[] | Int>;
  position_not_in?: Maybe<Int[] | Int>;
  position_lt?: Maybe<Int>;
  position_lte?: Maybe<Int>;
  position_gt?: Maybe<Int>;
  position_gte?: Maybe<Int>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  AND?: Maybe<ArticleTextWhereInput[] | ArticleTextWhereInput>;
}

export interface ArticleTextRestrictedWhereInput {
  position?: Maybe<Int>;
  position_not?: Maybe<Int>;
  position_in?: Maybe<Int[] | Int>;
  position_not_in?: Maybe<Int[] | Int>;
  position_lt?: Maybe<Int>;
  position_lte?: Maybe<Int>;
  position_gt?: Maybe<Int>;
  position_gte?: Maybe<Int>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  AND?: Maybe<
    ArticleTextRestrictedWhereInput[] | ArticleTextRestrictedWhereInput
  >;
}

export interface ArticleTitleWhereInput {
  position?: Maybe<Int>;
  position_not?: Maybe<Int>;
  position_in?: Maybe<Int[] | Int>;
  position_not_in?: Maybe<Int[] | Int>;
  position_lt?: Maybe<Int>;
  position_lte?: Maybe<Int>;
  position_gt?: Maybe<Int>;
  position_gte?: Maybe<Int>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  AND?: Maybe<ArticleTitleWhereInput[] | ArticleTitleWhereInput>;
}

export interface ArticleTitleRestrictedWhereInput {
  position?: Maybe<Int>;
  position_not?: Maybe<Int>;
  position_in?: Maybe<Int[] | Int>;
  position_not_in?: Maybe<Int[] | Int>;
  position_lt?: Maybe<Int>;
  position_lte?: Maybe<Int>;
  position_gt?: Maybe<Int>;
  position_gte?: Maybe<Int>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  AND?: Maybe<
    ArticleTitleRestrictedWhereInput[] | ArticleTitleRestrictedWhereInput
  >;
}

export interface ArticleCreateInput {
  id?: Maybe<ID_Input>;
  author?: Maybe<String>;
  media?: Maybe<ArticleMediaCreateManyInput>;
  name?: Maybe<String>;
  postTime?: Maybe<String>;
  subtitles?: Maybe<ArticleSubtitleCreateManyInput>;
  texts?: Maybe<ArticleTextCreateManyInput>;
  titles?: Maybe<ArticleTitleCreateManyInput>;
}

export interface ArticleMediaCreateManyInput {
  create?: Maybe<ArticleMediaCreateInput[] | ArticleMediaCreateInput>;
}

export interface ArticleMediaCreateInput {
  position?: Maybe<Int>;
  url?: Maybe<String>;
}

export interface ArticleSubtitleCreateManyInput {
  create?: Maybe<ArticleSubtitleCreateInput[] | ArticleSubtitleCreateInput>;
}

export interface ArticleSubtitleCreateInput {
  position?: Maybe<Int>;
  subitle?: Maybe<String>;
}

export interface ArticleTextCreateManyInput {
  create?: Maybe<ArticleTextCreateInput[] | ArticleTextCreateInput>;
}

export interface ArticleTextCreateInput {
  position?: Maybe<Int>;
  text?: Maybe<String>;
}

export interface ArticleTitleCreateManyInput {
  create?: Maybe<ArticleTitleCreateInput[] | ArticleTitleCreateInput>;
}

export interface ArticleTitleCreateInput {
  position?: Maybe<Int>;
  title?: Maybe<String>;
}

export interface ArticleUpdateInput {
  author?: Maybe<String>;
  media?: Maybe<ArticleMediaUpdateManyInput>;
  name?: Maybe<String>;
  postTime?: Maybe<String>;
  subtitles?: Maybe<ArticleSubtitleUpdateManyInput>;
  texts?: Maybe<ArticleTextUpdateManyInput>;
  titles?: Maybe<ArticleTitleUpdateManyInput>;
}

export interface ArticleMediaUpdateManyInput {
  create?: Maybe<ArticleMediaCreateInput[] | ArticleMediaCreateInput>;
  deleteMany?: Maybe<
    ArticleMediaScalarWhereInput[] | ArticleMediaScalarWhereInput
  >;
  updateMany?: Maybe<
    | ArticleMediaUpdateManyWithWhereNestedInput[]
    | ArticleMediaUpdateManyWithWhereNestedInput
  >;
}

export interface ArticleMediaScalarWhereInput {
  position?: Maybe<Int>;
  position_not?: Maybe<Int>;
  position_in?: Maybe<Int[] | Int>;
  position_not_in?: Maybe<Int[] | Int>;
  position_lt?: Maybe<Int>;
  position_lte?: Maybe<Int>;
  position_gt?: Maybe<Int>;
  position_gte?: Maybe<Int>;
  url?: Maybe<String>;
  url_not?: Maybe<String>;
  url_in?: Maybe<String[] | String>;
  url_not_in?: Maybe<String[] | String>;
  url_lt?: Maybe<String>;
  url_lte?: Maybe<String>;
  url_gt?: Maybe<String>;
  url_gte?: Maybe<String>;
  url_contains?: Maybe<String>;
  url_not_contains?: Maybe<String>;
  url_starts_with?: Maybe<String>;
  url_not_starts_with?: Maybe<String>;
  url_ends_with?: Maybe<String>;
  url_not_ends_with?: Maybe<String>;
  AND?: Maybe<ArticleMediaScalarWhereInput[] | ArticleMediaScalarWhereInput>;
  OR?: Maybe<ArticleMediaScalarWhereInput[] | ArticleMediaScalarWhereInput>;
  NOT?: Maybe<ArticleMediaScalarWhereInput[] | ArticleMediaScalarWhereInput>;
}

export interface ArticleMediaUpdateManyWithWhereNestedInput {
  where: ArticleMediaScalarWhereInput;
  data: ArticleMediaUpdateManyDataInput;
}

export interface ArticleMediaUpdateManyDataInput {
  position?: Maybe<Int>;
  url?: Maybe<String>;
}

export interface ArticleSubtitleUpdateManyInput {
  create?: Maybe<ArticleSubtitleCreateInput[] | ArticleSubtitleCreateInput>;
  deleteMany?: Maybe<
    ArticleSubtitleScalarWhereInput[] | ArticleSubtitleScalarWhereInput
  >;
  updateMany?: Maybe<
    | ArticleSubtitleUpdateManyWithWhereNestedInput[]
    | ArticleSubtitleUpdateManyWithWhereNestedInput
  >;
}

export interface ArticleSubtitleScalarWhereInput {
  position?: Maybe<Int>;
  position_not?: Maybe<Int>;
  position_in?: Maybe<Int[] | Int>;
  position_not_in?: Maybe<Int[] | Int>;
  position_lt?: Maybe<Int>;
  position_lte?: Maybe<Int>;
  position_gt?: Maybe<Int>;
  position_gte?: Maybe<Int>;
  subitle?: Maybe<String>;
  subitle_not?: Maybe<String>;
  subitle_in?: Maybe<String[] | String>;
  subitle_not_in?: Maybe<String[] | String>;
  subitle_lt?: Maybe<String>;
  subitle_lte?: Maybe<String>;
  subitle_gt?: Maybe<String>;
  subitle_gte?: Maybe<String>;
  subitle_contains?: Maybe<String>;
  subitle_not_contains?: Maybe<String>;
  subitle_starts_with?: Maybe<String>;
  subitle_not_starts_with?: Maybe<String>;
  subitle_ends_with?: Maybe<String>;
  subitle_not_ends_with?: Maybe<String>;
  AND?: Maybe<
    ArticleSubtitleScalarWhereInput[] | ArticleSubtitleScalarWhereInput
  >;
  OR?: Maybe<
    ArticleSubtitleScalarWhereInput[] | ArticleSubtitleScalarWhereInput
  >;
  NOT?: Maybe<
    ArticleSubtitleScalarWhereInput[] | ArticleSubtitleScalarWhereInput
  >;
}

export interface ArticleSubtitleUpdateManyWithWhereNestedInput {
  where: ArticleSubtitleScalarWhereInput;
  data: ArticleSubtitleUpdateManyDataInput;
}

export interface ArticleSubtitleUpdateManyDataInput {
  position?: Maybe<Int>;
  subitle?: Maybe<String>;
}

export interface ArticleTextUpdateManyInput {
  create?: Maybe<ArticleTextCreateInput[] | ArticleTextCreateInput>;
  deleteMany?: Maybe<
    ArticleTextScalarWhereInput[] | ArticleTextScalarWhereInput
  >;
  updateMany?: Maybe<
    | ArticleTextUpdateManyWithWhereNestedInput[]
    | ArticleTextUpdateManyWithWhereNestedInput
  >;
}

export interface ArticleTextScalarWhereInput {
  position?: Maybe<Int>;
  position_not?: Maybe<Int>;
  position_in?: Maybe<Int[] | Int>;
  position_not_in?: Maybe<Int[] | Int>;
  position_lt?: Maybe<Int>;
  position_lte?: Maybe<Int>;
  position_gt?: Maybe<Int>;
  position_gte?: Maybe<Int>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  AND?: Maybe<ArticleTextScalarWhereInput[] | ArticleTextScalarWhereInput>;
  OR?: Maybe<ArticleTextScalarWhereInput[] | ArticleTextScalarWhereInput>;
  NOT?: Maybe<ArticleTextScalarWhereInput[] | ArticleTextScalarWhereInput>;
}

export interface ArticleTextUpdateManyWithWhereNestedInput {
  where: ArticleTextScalarWhereInput;
  data: ArticleTextUpdateManyDataInput;
}

export interface ArticleTextUpdateManyDataInput {
  position?: Maybe<Int>;
  text?: Maybe<String>;
}

export interface ArticleTitleUpdateManyInput {
  create?: Maybe<ArticleTitleCreateInput[] | ArticleTitleCreateInput>;
  deleteMany?: Maybe<
    ArticleTitleScalarWhereInput[] | ArticleTitleScalarWhereInput
  >;
  updateMany?: Maybe<
    | ArticleTitleUpdateManyWithWhereNestedInput[]
    | ArticleTitleUpdateManyWithWhereNestedInput
  >;
}

export interface ArticleTitleScalarWhereInput {
  position?: Maybe<Int>;
  position_not?: Maybe<Int>;
  position_in?: Maybe<Int[] | Int>;
  position_not_in?: Maybe<Int[] | Int>;
  position_lt?: Maybe<Int>;
  position_lte?: Maybe<Int>;
  position_gt?: Maybe<Int>;
  position_gte?: Maybe<Int>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  AND?: Maybe<ArticleTitleScalarWhereInput[] | ArticleTitleScalarWhereInput>;
  OR?: Maybe<ArticleTitleScalarWhereInput[] | ArticleTitleScalarWhereInput>;
  NOT?: Maybe<ArticleTitleScalarWhereInput[] | ArticleTitleScalarWhereInput>;
}

export interface ArticleTitleUpdateManyWithWhereNestedInput {
  where: ArticleTitleScalarWhereInput;
  data: ArticleTitleUpdateManyDataInput;
}

export interface ArticleTitleUpdateManyDataInput {
  position?: Maybe<Int>;
  title?: Maybe<String>;
}

export interface ArticleUpdateManyMutationInput {
  author?: Maybe<String>;
  name?: Maybe<String>;
  postTime?: Maybe<String>;
}

export interface ArticleSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ArticleWhereInput>;
  AND?: Maybe<ArticleSubscriptionWhereInput[] | ArticleSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Article {
  id: ID_Output;
  author?: String;
  media?: <T = FragmentableArray<ArticleMedia>>() => T;
  name?: String;
  postTime?: String;
  subtitles?: <T = FragmentableArray<ArticleSubtitle>>() => T;
  texts?: <T = FragmentableArray<ArticleText>>() => T;
  titles?: <T = FragmentableArray<ArticleTitle>>() => T;
}

export interface ArticlePromise extends Promise<Article>, Fragmentable {
  id: () => Promise<ID_Output>;
  author: () => Promise<String>;
  media: <T = FragmentableArray<ArticleMedia>>() => T;
  name: () => Promise<String>;
  postTime: () => Promise<String>;
  subtitles: <T = FragmentableArray<ArticleSubtitle>>() => T;
  texts: <T = FragmentableArray<ArticleText>>() => T;
  titles: <T = FragmentableArray<ArticleTitle>>() => T;
}

export interface ArticleSubscription
  extends Promise<AsyncIterator<Article>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  author: () => Promise<AsyncIterator<String>>;
  media: <T = Promise<AsyncIterator<ArticleMediaSubscription>>>() => T;
  name: () => Promise<AsyncIterator<String>>;
  postTime: () => Promise<AsyncIterator<String>>;
  subtitles: <T = Promise<AsyncIterator<ArticleSubtitleSubscription>>>() => T;
  texts: <T = Promise<AsyncIterator<ArticleTextSubscription>>>() => T;
  titles: <T = Promise<AsyncIterator<ArticleTitleSubscription>>>() => T;
}

export interface ArticleNullablePromise
  extends Promise<Article | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  author: () => Promise<String>;
  media: <T = FragmentableArray<ArticleMedia>>() => T;
  name: () => Promise<String>;
  postTime: () => Promise<String>;
  subtitles: <T = FragmentableArray<ArticleSubtitle>>() => T;
  texts: <T = FragmentableArray<ArticleText>>() => T;
  titles: <T = FragmentableArray<ArticleTitle>>() => T;
}

export interface ArticleMedia {
  position?: Int;
  url?: String;
}

export interface ArticleMediaPromise
  extends Promise<ArticleMedia>,
    Fragmentable {
  position: () => Promise<Int>;
  url: () => Promise<String>;
}

export interface ArticleMediaSubscription
  extends Promise<AsyncIterator<ArticleMedia>>,
    Fragmentable {
  position: () => Promise<AsyncIterator<Int>>;
  url: () => Promise<AsyncIterator<String>>;
}

export interface ArticleMediaNullablePromise
  extends Promise<ArticleMedia | null>,
    Fragmentable {
  position: () => Promise<Int>;
  url: () => Promise<String>;
}

export interface ArticleSubtitle {
  position?: Int;
  subitle?: String;
}

export interface ArticleSubtitlePromise
  extends Promise<ArticleSubtitle>,
    Fragmentable {
  position: () => Promise<Int>;
  subitle: () => Promise<String>;
}

export interface ArticleSubtitleSubscription
  extends Promise<AsyncIterator<ArticleSubtitle>>,
    Fragmentable {
  position: () => Promise<AsyncIterator<Int>>;
  subitle: () => Promise<AsyncIterator<String>>;
}

export interface ArticleSubtitleNullablePromise
  extends Promise<ArticleSubtitle | null>,
    Fragmentable {
  position: () => Promise<Int>;
  subitle: () => Promise<String>;
}

export interface ArticleText {
  position?: Int;
  text?: String;
}

export interface ArticleTextPromise extends Promise<ArticleText>, Fragmentable {
  position: () => Promise<Int>;
  text: () => Promise<String>;
}

export interface ArticleTextSubscription
  extends Promise<AsyncIterator<ArticleText>>,
    Fragmentable {
  position: () => Promise<AsyncIterator<Int>>;
  text: () => Promise<AsyncIterator<String>>;
}

export interface ArticleTextNullablePromise
  extends Promise<ArticleText | null>,
    Fragmentable {
  position: () => Promise<Int>;
  text: () => Promise<String>;
}

export interface ArticleTitle {
  position?: Int;
  title?: String;
}

export interface ArticleTitlePromise
  extends Promise<ArticleTitle>,
    Fragmentable {
  position: () => Promise<Int>;
  title: () => Promise<String>;
}

export interface ArticleTitleSubscription
  extends Promise<AsyncIterator<ArticleTitle>>,
    Fragmentable {
  position: () => Promise<AsyncIterator<Int>>;
  title: () => Promise<AsyncIterator<String>>;
}

export interface ArticleTitleNullablePromise
  extends Promise<ArticleTitle | null>,
    Fragmentable {
  position: () => Promise<Int>;
  title: () => Promise<String>;
}

export interface ArticleConnection {
  pageInfo: PageInfo;
  edges: ArticleEdge[];
}

export interface ArticleConnectionPromise
  extends Promise<ArticleConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ArticleEdge>>() => T;
  aggregate: <T = AggregateArticlePromise>() => T;
}

export interface ArticleConnectionSubscription
  extends Promise<AsyncIterator<ArticleConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ArticleEdgeSubscription>>>() => T;
  aggregate: <T = AggregateArticleSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ArticleEdge {
  node: Article;
  cursor: String;
}

export interface ArticleEdgePromise extends Promise<ArticleEdge>, Fragmentable {
  node: <T = ArticlePromise>() => T;
  cursor: () => Promise<String>;
}

export interface ArticleEdgeSubscription
  extends Promise<AsyncIterator<ArticleEdge>>,
    Fragmentable {
  node: <T = ArticleSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateArticle {
  count: Int;
}

export interface AggregateArticlePromise
  extends Promise<AggregateArticle>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateArticleSubscription
  extends Promise<AsyncIterator<AggregateArticle>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ArticleSubscriptionPayload {
  mutation: MutationType;
  node: Article;
  updatedFields: String[];
  previousValues: ArticlePreviousValues;
}

export interface ArticleSubscriptionPayloadPromise
  extends Promise<ArticleSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ArticlePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ArticlePreviousValuesPromise>() => T;
}

export interface ArticleSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ArticleSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ArticleSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ArticlePreviousValuesSubscription>() => T;
}

export interface ArticlePreviousValues {
  id: ID_Output;
  author?: String;
  name?: String;
  postTime?: String;
}

export interface ArticlePreviousValuesPromise
  extends Promise<ArticlePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  author: () => Promise<String>;
  name: () => Promise<String>;
  postTime: () => Promise<String>;
}

export interface ArticlePreviousValuesSubscription
  extends Promise<AsyncIterator<ArticlePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  author: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  postTime: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Article",
    embedded: false
  },
  {
    name: "ArticleMedia",
    embedded: true
  },
  {
    name: "ArticleSubtitle",
    embedded: true
  },
  {
    name: "ArticleText",
    embedded: true
  },
  {
    name: "ArticleTitle",
    embedded: true
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
