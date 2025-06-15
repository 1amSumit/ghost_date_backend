
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Matches
 * 
 */
export type Matches = $Result.DefaultSelection<Prisma.$MatchesPayload>
/**
 * Model UserDetail
 * 
 */
export type UserDetail = $Result.DefaultSelection<Prisma.$UserDetailPayload>
/**
 * Model UserPreferences
 * 
 */
export type UserPreferences = $Result.DefaultSelection<Prisma.$UserPreferencesPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model Liked
 * 
 */
export type Liked = $Result.DefaultSelection<Prisma.$LikedPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matches`: Exposes CRUD operations for the **Matches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.matches.findMany()
    * ```
    */
  get matches(): Prisma.MatchesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDetail`: Exposes CRUD operations for the **UserDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDetails
    * const userDetails = await prisma.userDetail.findMany()
    * ```
    */
  get userDetail(): Prisma.UserDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreferences`: Exposes CRUD operations for the **UserPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreferences.findMany()
    * ```
    */
  get userPreferences(): Prisma.UserPreferencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.liked`: Exposes CRUD operations for the **Liked** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likeds
    * const likeds = await prisma.liked.findMany()
    * ```
    */
  get liked(): Prisma.LikedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Matches: 'Matches',
    UserDetail: 'UserDetail',
    UserPreferences: 'UserPreferences',
    Media: 'Media',
    Liked: 'Liked',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "matches" | "userDetail" | "userPreferences" | "media" | "liked" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Matches: {
        payload: Prisma.$MatchesPayload<ExtArgs>
        fields: Prisma.MatchesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          findFirst: {
            args: Prisma.MatchesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          findMany: {
            args: Prisma.MatchesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>[]
          }
          create: {
            args: Prisma.MatchesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          createMany: {
            args: Prisma.MatchesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>[]
          }
          delete: {
            args: Prisma.MatchesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          update: {
            args: Prisma.MatchesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          deleteMany: {
            args: Prisma.MatchesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>[]
          }
          upsert: {
            args: Prisma.MatchesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          aggregate: {
            args: Prisma.MatchesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatches>
          }
          groupBy: {
            args: Prisma.MatchesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchesCountArgs<ExtArgs>
            result: $Utils.Optional<MatchesCountAggregateOutputType> | number
          }
        }
      }
      UserDetail: {
        payload: Prisma.$UserDetailPayload<ExtArgs>
        fields: Prisma.UserDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>
          }
          findFirst: {
            args: Prisma.UserDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>
          }
          findMany: {
            args: Prisma.UserDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>[]
          }
          create: {
            args: Prisma.UserDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>
          }
          createMany: {
            args: Prisma.UserDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>[]
          }
          delete: {
            args: Prisma.UserDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>
          }
          update: {
            args: Prisma.UserDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>
          }
          deleteMany: {
            args: Prisma.UserDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>[]
          }
          upsert: {
            args: Prisma.UserDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>
          }
          aggregate: {
            args: Prisma.UserDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDetail>
          }
          groupBy: {
            args: Prisma.UserDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDetailCountArgs<ExtArgs>
            result: $Utils.Optional<UserDetailCountAggregateOutputType> | number
          }
        }
      }
      UserPreferences: {
        payload: Prisma.$UserPreferencesPayload<ExtArgs>
        fields: Prisma.UserPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findFirst: {
            args: Prisma.UserPreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findMany: {
            args: Prisma.UserPreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          create: {
            args: Prisma.UserPreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          createMany: {
            args: Prisma.UserPreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          delete: {
            args: Prisma.UserPreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          update: {
            args: Prisma.UserPreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.UserPreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          upsert: {
            args: Prisma.UserPreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          aggregate: {
            args: Prisma.UserPreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreferences>
          }
          groupBy: {
            args: Prisma.UserPreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      Liked: {
        payload: Prisma.$LikedPayload<ExtArgs>
        fields: Prisma.LikedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPayload>
          }
          findFirst: {
            args: Prisma.LikedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPayload>
          }
          findMany: {
            args: Prisma.LikedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPayload>[]
          }
          create: {
            args: Prisma.LikedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPayload>
          }
          createMany: {
            args: Prisma.LikedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPayload>[]
          }
          delete: {
            args: Prisma.LikedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPayload>
          }
          update: {
            args: Prisma.LikedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPayload>
          }
          deleteMany: {
            args: Prisma.LikedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPayload>[]
          }
          upsert: {
            args: Prisma.LikedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedPayload>
          }
          aggregate: {
            args: Prisma.LikedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLiked>
          }
          groupBy: {
            args: Prisma.LikedGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikedGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikedCountArgs<ExtArgs>
            result: $Utils.Optional<LikedCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    matches?: MatchesOmit
    userDetail?: UserDetailOmit
    userPreferences?: UserPreferencesOmit
    media?: MediaOmit
    liked?: LikedOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    liked_users: number
    given_likes: number
    matches1: number
    matches2: number
    message_from_user: number
    message_to_user: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liked_users?: boolean | UserCountOutputTypeCountLiked_usersArgs
    given_likes?: boolean | UserCountOutputTypeCountGiven_likesArgs
    matches1?: boolean | UserCountOutputTypeCountMatches1Args
    matches2?: boolean | UserCountOutputTypeCountMatches2Args
    message_from_user?: boolean | UserCountOutputTypeCountMessage_from_userArgs
    message_to_user?: boolean | UserCountOutputTypeCountMessage_to_userArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLiked_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGiven_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatches1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatches2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessage_from_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessage_to_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
    last_seen: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
    last_seen: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    created_at: number
    updated_at: number
    last_seen: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    last_seen?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    last_seen?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    last_seen?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    created_at: Date
    updated_at: Date | null
    last_seen: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_seen?: boolean
    user_details?: boolean | User$user_detailsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    media?: boolean | User$mediaArgs<ExtArgs>
    liked_users?: boolean | User$liked_usersArgs<ExtArgs>
    given_likes?: boolean | User$given_likesArgs<ExtArgs>
    matches1?: boolean | User$matches1Args<ExtArgs>
    matches2?: boolean | User$matches2Args<ExtArgs>
    message_from_user?: boolean | User$message_from_userArgs<ExtArgs>
    message_to_user?: boolean | User$message_to_userArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_seen?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_seen?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_seen?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "created_at" | "updated_at" | "last_seen", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_details?: boolean | User$user_detailsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    media?: boolean | User$mediaArgs<ExtArgs>
    liked_users?: boolean | User$liked_usersArgs<ExtArgs>
    given_likes?: boolean | User$given_likesArgs<ExtArgs>
    matches1?: boolean | User$matches1Args<ExtArgs>
    matches2?: boolean | User$matches2Args<ExtArgs>
    message_from_user?: boolean | User$message_from_userArgs<ExtArgs>
    message_to_user?: boolean | User$message_to_userArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      user_details: Prisma.$UserDetailPayload<ExtArgs> | null
      preferences: Prisma.$UserPreferencesPayload<ExtArgs> | null
      media: Prisma.$MediaPayload<ExtArgs> | null
      liked_users: Prisma.$LikedPayload<ExtArgs>[]
      given_likes: Prisma.$LikedPayload<ExtArgs>[]
      matches1: Prisma.$MatchesPayload<ExtArgs>[]
      matches2: Prisma.$MatchesPayload<ExtArgs>[]
      message_from_user: Prisma.$MessagePayload<ExtArgs>[]
      message_to_user: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      created_at: Date
      updated_at: Date | null
      last_seen: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_details<T extends User$user_detailsArgs<ExtArgs> = {}>(args?: Subset<T, User$user_detailsArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    media<T extends User$mediaArgs<ExtArgs> = {}>(args?: Subset<T, User$mediaArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    liked_users<T extends User$liked_usersArgs<ExtArgs> = {}>(args?: Subset<T, User$liked_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    given_likes<T extends User$given_likesArgs<ExtArgs> = {}>(args?: Subset<T, User$given_likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches1<T extends User$matches1Args<ExtArgs> = {}>(args?: Subset<T, User$matches1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches2<T extends User$matches2Args<ExtArgs> = {}>(args?: Subset<T, User$matches2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    message_from_user<T extends User$message_from_userArgs<ExtArgs> = {}>(args?: Subset<T, User$message_from_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    message_to_user<T extends User$message_to_userArgs<ExtArgs> = {}>(args?: Subset<T, User$message_to_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly last_seen: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.user_details
   */
  export type User$user_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    where?: UserDetailWhereInput
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    where?: UserPreferencesWhereInput
  }

  /**
   * User.media
   */
  export type User$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
  }

  /**
   * User.liked_users
   */
  export type User$liked_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liked
     */
    select?: LikedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liked
     */
    omit?: LikedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedInclude<ExtArgs> | null
    where?: LikedWhereInput
    orderBy?: LikedOrderByWithRelationInput | LikedOrderByWithRelationInput[]
    cursor?: LikedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedScalarFieldEnum | LikedScalarFieldEnum[]
  }

  /**
   * User.given_likes
   */
  export type User$given_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liked
     */
    select?: LikedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liked
     */
    omit?: LikedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedInclude<ExtArgs> | null
    where?: LikedWhereInput
    orderBy?: LikedOrderByWithRelationInput | LikedOrderByWithRelationInput[]
    cursor?: LikedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedScalarFieldEnum | LikedScalarFieldEnum[]
  }

  /**
   * User.matches1
   */
  export type User$matches1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    where?: MatchesWhereInput
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    cursor?: MatchesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * User.matches2
   */
  export type User$matches2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    where?: MatchesWhereInput
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    cursor?: MatchesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * User.message_from_user
   */
  export type User$message_from_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.message_to_user
   */
  export type User$message_to_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Matches
   */

  export type AggregateMatches = {
    _count: MatchesCountAggregateOutputType | null
    _min: MatchesMinAggregateOutputType | null
    _max: MatchesMaxAggregateOutputType | null
  }

  export type MatchesMinAggregateOutputType = {
    id: string | null
    user1_id: string | null
    user2_id: string | null
    is_matched_at: Date | null
    is_blocked: boolean | null
    unmatched_at: Date | null
  }

  export type MatchesMaxAggregateOutputType = {
    id: string | null
    user1_id: string | null
    user2_id: string | null
    is_matched_at: Date | null
    is_blocked: boolean | null
    unmatched_at: Date | null
  }

  export type MatchesCountAggregateOutputType = {
    id: number
    user1_id: number
    user2_id: number
    is_matched_at: number
    is_blocked: number
    unmatched_at: number
    _all: number
  }


  export type MatchesMinAggregateInputType = {
    id?: true
    user1_id?: true
    user2_id?: true
    is_matched_at?: true
    is_blocked?: true
    unmatched_at?: true
  }

  export type MatchesMaxAggregateInputType = {
    id?: true
    user1_id?: true
    user2_id?: true
    is_matched_at?: true
    is_blocked?: true
    unmatched_at?: true
  }

  export type MatchesCountAggregateInputType = {
    id?: true
    user1_id?: true
    user2_id?: true
    is_matched_at?: true
    is_blocked?: true
    unmatched_at?: true
    _all?: true
  }

  export type MatchesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to aggregate.
     */
    where?: MatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchesMaxAggregateInputType
  }

  export type GetMatchesAggregateType<T extends MatchesAggregateArgs> = {
        [P in keyof T & keyof AggregateMatches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatches[P]>
      : GetScalarType<T[P], AggregateMatches[P]>
  }




  export type MatchesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchesWhereInput
    orderBy?: MatchesOrderByWithAggregationInput | MatchesOrderByWithAggregationInput[]
    by: MatchesScalarFieldEnum[] | MatchesScalarFieldEnum
    having?: MatchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchesCountAggregateInputType | true
    _min?: MatchesMinAggregateInputType
    _max?: MatchesMaxAggregateInputType
  }

  export type MatchesGroupByOutputType = {
    id: string
    user1_id: string
    user2_id: string
    is_matched_at: Date
    is_blocked: boolean
    unmatched_at: Date | null
    _count: MatchesCountAggregateOutputType | null
    _min: MatchesMinAggregateOutputType | null
    _max: MatchesMaxAggregateOutputType | null
  }

  type GetMatchesGroupByPayload<T extends MatchesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchesGroupByOutputType[P]>
            : GetScalarType<T[P], MatchesGroupByOutputType[P]>
        }
      >
    >


  export type MatchesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1_id?: boolean
    user2_id?: boolean
    is_matched_at?: boolean
    is_blocked?: boolean
    unmatched_at?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matches"]>

  export type MatchesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1_id?: boolean
    user2_id?: boolean
    is_matched_at?: boolean
    is_blocked?: boolean
    unmatched_at?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matches"]>

  export type MatchesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1_id?: boolean
    user2_id?: boolean
    is_matched_at?: boolean
    is_blocked?: boolean
    unmatched_at?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matches"]>

  export type MatchesSelectScalar = {
    id?: boolean
    user1_id?: boolean
    user2_id?: boolean
    is_matched_at?: boolean
    is_blocked?: boolean
    unmatched_at?: boolean
  }

  export type MatchesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user1_id" | "user2_id" | "is_matched_at" | "is_blocked" | "unmatched_at", ExtArgs["result"]["matches"]>
  export type MatchesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matches"
    objects: {
      user1: Prisma.$UserPayload<ExtArgs>
      user2: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user1_id: string
      user2_id: string
      is_matched_at: Date
      is_blocked: boolean
      unmatched_at: Date | null
    }, ExtArgs["result"]["matches"]>
    composites: {}
  }

  type MatchesGetPayload<S extends boolean | null | undefined | MatchesDefaultArgs> = $Result.GetResult<Prisma.$MatchesPayload, S>

  type MatchesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchesCountAggregateInputType | true
    }

  export interface MatchesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matches'], meta: { name: 'Matches' } }
    /**
     * Find zero or one Matches that matches the filter.
     * @param {MatchesFindUniqueArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchesFindUniqueArgs>(args: SelectSubset<T, MatchesFindUniqueArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matches that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchesFindUniqueOrThrowArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchesFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesFindFirstArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchesFindFirstArgs>(args?: SelectSubset<T, MatchesFindFirstArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesFindFirstOrThrowArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchesFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.matches.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.matches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchesWithIdOnly = await prisma.matches.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchesFindManyArgs>(args?: SelectSubset<T, MatchesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matches.
     * @param {MatchesCreateArgs} args - Arguments to create a Matches.
     * @example
     * // Create one Matches
     * const Matches = await prisma.matches.create({
     *   data: {
     *     // ... data to create a Matches
     *   }
     * })
     * 
     */
    create<T extends MatchesCreateArgs>(args: SelectSubset<T, MatchesCreateArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchesCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const matches = await prisma.matches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchesCreateManyArgs>(args?: SelectSubset<T, MatchesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchesCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const matches = await prisma.matches.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchesWithIdOnly = await prisma.matches.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchesCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Matches.
     * @param {MatchesDeleteArgs} args - Arguments to delete one Matches.
     * @example
     * // Delete one Matches
     * const Matches = await prisma.matches.delete({
     *   where: {
     *     // ... filter to delete one Matches
     *   }
     * })
     * 
     */
    delete<T extends MatchesDeleteArgs>(args: SelectSubset<T, MatchesDeleteArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matches.
     * @param {MatchesUpdateArgs} args - Arguments to update one Matches.
     * @example
     * // Update one Matches
     * const matches = await prisma.matches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchesUpdateArgs>(args: SelectSubset<T, MatchesUpdateArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchesDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.matches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchesDeleteManyArgs>(args?: SelectSubset<T, MatchesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const matches = await prisma.matches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchesUpdateManyArgs>(args: SelectSubset<T, MatchesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchesUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const matches = await prisma.matches.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchesWithIdOnly = await prisma.matches.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchesUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Matches.
     * @param {MatchesUpsertArgs} args - Arguments to update or create a Matches.
     * @example
     * // Update or create a Matches
     * const matches = await prisma.matches.upsert({
     *   create: {
     *     // ... data to create a Matches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matches we want to update
     *   }
     * })
     */
    upsert<T extends MatchesUpsertArgs>(args: SelectSubset<T, MatchesUpsertArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.matches.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchesCountArgs>(
      args?: Subset<T, MatchesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchesAggregateArgs>(args: Subset<T, MatchesAggregateArgs>): Prisma.PrismaPromise<GetMatchesAggregateType<T>>

    /**
     * Group by Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchesGroupByArgs['orderBy'] }
        : { orderBy?: MatchesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matches model
   */
  readonly fields: MatchesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Matches model
   */
  interface MatchesFieldRefs {
    readonly id: FieldRef<"Matches", 'String'>
    readonly user1_id: FieldRef<"Matches", 'String'>
    readonly user2_id: FieldRef<"Matches", 'String'>
    readonly is_matched_at: FieldRef<"Matches", 'DateTime'>
    readonly is_blocked: FieldRef<"Matches", 'Boolean'>
    readonly unmatched_at: FieldRef<"Matches", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Matches findUnique
   */
  export type MatchesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where: MatchesWhereUniqueInput
  }

  /**
   * Matches findUniqueOrThrow
   */
  export type MatchesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where: MatchesWhereUniqueInput
  }

  /**
   * Matches findFirst
   */
  export type MatchesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * Matches findFirstOrThrow
   */
  export type MatchesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * Matches findMany
   */
  export type MatchesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * Matches create
   */
  export type MatchesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * The data needed to create a Matches.
     */
    data: XOR<MatchesCreateInput, MatchesUncheckedCreateInput>
  }

  /**
   * Matches createMany
   */
  export type MatchesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchesCreateManyInput | MatchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matches createManyAndReturn
   */
  export type MatchesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchesCreateManyInput | MatchesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Matches update
   */
  export type MatchesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * The data needed to update a Matches.
     */
    data: XOR<MatchesUpdateInput, MatchesUncheckedUpdateInput>
    /**
     * Choose, which Matches to update.
     */
    where: MatchesWhereUniqueInput
  }

  /**
   * Matches updateMany
   */
  export type MatchesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchesUpdateManyMutationInput, MatchesUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchesWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Matches updateManyAndReturn
   */
  export type MatchesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchesUpdateManyMutationInput, MatchesUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchesWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Matches upsert
   */
  export type MatchesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * The filter to search for the Matches to update in case it exists.
     */
    where: MatchesWhereUniqueInput
    /**
     * In case the Matches found by the `where` argument doesn't exist, create a new Matches with this data.
     */
    create: XOR<MatchesCreateInput, MatchesUncheckedCreateInput>
    /**
     * In case the Matches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchesUpdateInput, MatchesUncheckedUpdateInput>
  }

  /**
   * Matches delete
   */
  export type MatchesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter which Matches to delete.
     */
    where: MatchesWhereUniqueInput
  }

  /**
   * Matches deleteMany
   */
  export type MatchesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchesWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Matches without action
   */
  export type MatchesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
  }


  /**
   * Model UserDetail
   */

  export type AggregateUserDetail = {
    _count: UserDetailCountAggregateOutputType | null
    _avg: UserDetailAvgAggregateOutputType | null
    _sum: UserDetailSumAggregateOutputType | null
    _min: UserDetailMinAggregateOutputType | null
    _max: UserDetailMaxAggregateOutputType | null
  }

  export type UserDetailAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserDetailSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserDetailMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    gender: string | null
    date_of_birth: Date | null
    age: string | null
    bio: string | null
    height: string | null
    education: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    last_active: Date | null
    profile_pic: string | null
    howyoudie: string | null
    sexuality: string | null
    interested_in_gender: string | null
    user_id: string | null
  }

  export type UserDetailMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    gender: string | null
    date_of_birth: Date | null
    age: string | null
    bio: string | null
    height: string | null
    education: string | null
    location: string | null
    latitude: number | null
    longitude: number | null
    last_active: Date | null
    profile_pic: string | null
    howyoudie: string | null
    sexuality: string | null
    interested_in_gender: string | null
    user_id: string | null
  }

  export type UserDetailCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    pronounce: number
    gender: number
    date_of_birth: number
    age: number
    bio: number
    height: number
    education: number
    location: number
    latitude: number
    longitude: number
    last_active: number
    profile_pic: number
    howyoudie: number
    sexuality: number
    interested_in_gender: number
    user_id: number
    _all: number
  }


  export type UserDetailAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserDetailSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserDetailMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    gender?: true
    date_of_birth?: true
    age?: true
    bio?: true
    height?: true
    education?: true
    location?: true
    latitude?: true
    longitude?: true
    last_active?: true
    profile_pic?: true
    howyoudie?: true
    sexuality?: true
    interested_in_gender?: true
    user_id?: true
  }

  export type UserDetailMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    gender?: true
    date_of_birth?: true
    age?: true
    bio?: true
    height?: true
    education?: true
    location?: true
    latitude?: true
    longitude?: true
    last_active?: true
    profile_pic?: true
    howyoudie?: true
    sexuality?: true
    interested_in_gender?: true
    user_id?: true
  }

  export type UserDetailCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    pronounce?: true
    gender?: true
    date_of_birth?: true
    age?: true
    bio?: true
    height?: true
    education?: true
    location?: true
    latitude?: true
    longitude?: true
    last_active?: true
    profile_pic?: true
    howyoudie?: true
    sexuality?: true
    interested_in_gender?: true
    user_id?: true
    _all?: true
  }

  export type UserDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetail to aggregate.
     */
    where?: UserDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailOrderByWithRelationInput | UserDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDetails
    **/
    _count?: true | UserDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDetailMaxAggregateInputType
  }

  export type GetUserDetailAggregateType<T extends UserDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDetail[P]>
      : GetScalarType<T[P], AggregateUserDetail[P]>
  }




  export type UserDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDetailWhereInput
    orderBy?: UserDetailOrderByWithAggregationInput | UserDetailOrderByWithAggregationInput[]
    by: UserDetailScalarFieldEnum[] | UserDetailScalarFieldEnum
    having?: UserDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDetailCountAggregateInputType | true
    _avg?: UserDetailAvgAggregateInputType
    _sum?: UserDetailSumAggregateInputType
    _min?: UserDetailMinAggregateInputType
    _max?: UserDetailMaxAggregateInputType
  }

  export type UserDetailGroupByOutputType = {
    id: string
    first_name: string
    last_name: string
    pronounce: string[]
    gender: string
    date_of_birth: Date
    age: string
    bio: string
    height: string
    education: string
    location: string
    latitude: number | null
    longitude: number | null
    last_active: Date
    profile_pic: string
    howyoudie: string
    sexuality: string
    interested_in_gender: string
    user_id: string
    _count: UserDetailCountAggregateOutputType | null
    _avg: UserDetailAvgAggregateOutputType | null
    _sum: UserDetailSumAggregateOutputType | null
    _min: UserDetailMinAggregateOutputType | null
    _max: UserDetailMaxAggregateOutputType | null
  }

  type GetUserDetailGroupByPayload<T extends UserDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDetailGroupByOutputType[P]>
            : GetScalarType<T[P], UserDetailGroupByOutputType[P]>
        }
      >
    >


  export type UserDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    pronounce?: boolean
    gender?: boolean
    date_of_birth?: boolean
    age?: boolean
    bio?: boolean
    height?: boolean
    education?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    last_active?: boolean
    profile_pic?: boolean
    howyoudie?: boolean
    sexuality?: boolean
    interested_in_gender?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetail"]>

  export type UserDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    pronounce?: boolean
    gender?: boolean
    date_of_birth?: boolean
    age?: boolean
    bio?: boolean
    height?: boolean
    education?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    last_active?: boolean
    profile_pic?: boolean
    howyoudie?: boolean
    sexuality?: boolean
    interested_in_gender?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetail"]>

  export type UserDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    pronounce?: boolean
    gender?: boolean
    date_of_birth?: boolean
    age?: boolean
    bio?: boolean
    height?: boolean
    education?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    last_active?: boolean
    profile_pic?: boolean
    howyoudie?: boolean
    sexuality?: boolean
    interested_in_gender?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetail"]>

  export type UserDetailSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    pronounce?: boolean
    gender?: boolean
    date_of_birth?: boolean
    age?: boolean
    bio?: boolean
    height?: boolean
    education?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    last_active?: boolean
    profile_pic?: boolean
    howyoudie?: boolean
    sexuality?: boolean
    interested_in_gender?: boolean
    user_id?: boolean
  }

  export type UserDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "pronounce" | "gender" | "date_of_birth" | "age" | "bio" | "height" | "education" | "location" | "latitude" | "longitude" | "last_active" | "profile_pic" | "howyoudie" | "sexuality" | "interested_in_gender" | "user_id", ExtArgs["result"]["userDetail"]>
  export type UserDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDetail"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      first_name: string
      last_name: string
      pronounce: string[]
      gender: string
      date_of_birth: Date
      age: string
      bio: string
      height: string
      education: string
      location: string
      latitude: number | null
      longitude: number | null
      last_active: Date
      profile_pic: string
      howyoudie: string
      sexuality: string
      interested_in_gender: string
      user_id: string
    }, ExtArgs["result"]["userDetail"]>
    composites: {}
  }

  type UserDetailGetPayload<S extends boolean | null | undefined | UserDetailDefaultArgs> = $Result.GetResult<Prisma.$UserDetailPayload, S>

  type UserDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDetailCountAggregateInputType | true
    }

  export interface UserDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDetail'], meta: { name: 'UserDetail' } }
    /**
     * Find zero or one UserDetail that matches the filter.
     * @param {UserDetailFindUniqueArgs} args - Arguments to find a UserDetail
     * @example
     * // Get one UserDetail
     * const userDetail = await prisma.userDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDetailFindUniqueArgs>(args: SelectSubset<T, UserDetailFindUniqueArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDetailFindUniqueOrThrowArgs} args - Arguments to find a UserDetail
     * @example
     * // Get one UserDetail
     * const userDetail = await prisma.userDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailFindFirstArgs} args - Arguments to find a UserDetail
     * @example
     * // Get one UserDetail
     * const userDetail = await prisma.userDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDetailFindFirstArgs>(args?: SelectSubset<T, UserDetailFindFirstArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailFindFirstOrThrowArgs} args - Arguments to find a UserDetail
     * @example
     * // Get one UserDetail
     * const userDetail = await prisma.userDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDetails
     * const userDetails = await prisma.userDetail.findMany()
     * 
     * // Get first 10 UserDetails
     * const userDetails = await prisma.userDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDetailWithIdOnly = await prisma.userDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDetailFindManyArgs>(args?: SelectSubset<T, UserDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDetail.
     * @param {UserDetailCreateArgs} args - Arguments to create a UserDetail.
     * @example
     * // Create one UserDetail
     * const UserDetail = await prisma.userDetail.create({
     *   data: {
     *     // ... data to create a UserDetail
     *   }
     * })
     * 
     */
    create<T extends UserDetailCreateArgs>(args: SelectSubset<T, UserDetailCreateArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDetails.
     * @param {UserDetailCreateManyArgs} args - Arguments to create many UserDetails.
     * @example
     * // Create many UserDetails
     * const userDetail = await prisma.userDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDetailCreateManyArgs>(args?: SelectSubset<T, UserDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDetails and returns the data saved in the database.
     * @param {UserDetailCreateManyAndReturnArgs} args - Arguments to create many UserDetails.
     * @example
     * // Create many UserDetails
     * const userDetail = await prisma.userDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDetails and only return the `id`
     * const userDetailWithIdOnly = await prisma.userDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDetail.
     * @param {UserDetailDeleteArgs} args - Arguments to delete one UserDetail.
     * @example
     * // Delete one UserDetail
     * const UserDetail = await prisma.userDetail.delete({
     *   where: {
     *     // ... filter to delete one UserDetail
     *   }
     * })
     * 
     */
    delete<T extends UserDetailDeleteArgs>(args: SelectSubset<T, UserDetailDeleteArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDetail.
     * @param {UserDetailUpdateArgs} args - Arguments to update one UserDetail.
     * @example
     * // Update one UserDetail
     * const userDetail = await prisma.userDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDetailUpdateArgs>(args: SelectSubset<T, UserDetailUpdateArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDetails.
     * @param {UserDetailDeleteManyArgs} args - Arguments to filter UserDetails to delete.
     * @example
     * // Delete a few UserDetails
     * const { count } = await prisma.userDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDetailDeleteManyArgs>(args?: SelectSubset<T, UserDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDetails
     * const userDetail = await prisma.userDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDetailUpdateManyArgs>(args: SelectSubset<T, UserDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDetails and returns the data updated in the database.
     * @param {UserDetailUpdateManyAndReturnArgs} args - Arguments to update many UserDetails.
     * @example
     * // Update many UserDetails
     * const userDetail = await prisma.userDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDetails and only return the `id`
     * const userDetailWithIdOnly = await prisma.userDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDetail.
     * @param {UserDetailUpsertArgs} args - Arguments to update or create a UserDetail.
     * @example
     * // Update or create a UserDetail
     * const userDetail = await prisma.userDetail.upsert({
     *   create: {
     *     // ... data to create a UserDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDetail we want to update
     *   }
     * })
     */
    upsert<T extends UserDetailUpsertArgs>(args: SelectSubset<T, UserDetailUpsertArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailCountArgs} args - Arguments to filter UserDetails to count.
     * @example
     * // Count the number of UserDetails
     * const count = await prisma.userDetail.count({
     *   where: {
     *     // ... the filter for the UserDetails we want to count
     *   }
     * })
    **/
    count<T extends UserDetailCountArgs>(
      args?: Subset<T, UserDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserDetailAggregateArgs>(args: Subset<T, UserDetailAggregateArgs>): Prisma.PrismaPromise<GetUserDetailAggregateType<T>>

    /**
     * Group by UserDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDetailGroupByArgs['orderBy'] }
        : { orderBy?: UserDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDetail model
   */
  readonly fields: UserDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserDetail model
   */
  interface UserDetailFieldRefs {
    readonly id: FieldRef<"UserDetail", 'String'>
    readonly first_name: FieldRef<"UserDetail", 'String'>
    readonly last_name: FieldRef<"UserDetail", 'String'>
    readonly pronounce: FieldRef<"UserDetail", 'String[]'>
    readonly gender: FieldRef<"UserDetail", 'String'>
    readonly date_of_birth: FieldRef<"UserDetail", 'DateTime'>
    readonly age: FieldRef<"UserDetail", 'String'>
    readonly bio: FieldRef<"UserDetail", 'String'>
    readonly height: FieldRef<"UserDetail", 'String'>
    readonly education: FieldRef<"UserDetail", 'String'>
    readonly location: FieldRef<"UserDetail", 'String'>
    readonly latitude: FieldRef<"UserDetail", 'Float'>
    readonly longitude: FieldRef<"UserDetail", 'Float'>
    readonly last_active: FieldRef<"UserDetail", 'DateTime'>
    readonly profile_pic: FieldRef<"UserDetail", 'String'>
    readonly howyoudie: FieldRef<"UserDetail", 'String'>
    readonly sexuality: FieldRef<"UserDetail", 'String'>
    readonly interested_in_gender: FieldRef<"UserDetail", 'String'>
    readonly user_id: FieldRef<"UserDetail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserDetail findUnique
   */
  export type UserDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * Filter, which UserDetail to fetch.
     */
    where: UserDetailWhereUniqueInput
  }

  /**
   * UserDetail findUniqueOrThrow
   */
  export type UserDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * Filter, which UserDetail to fetch.
     */
    where: UserDetailWhereUniqueInput
  }

  /**
   * UserDetail findFirst
   */
  export type UserDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * Filter, which UserDetail to fetch.
     */
    where?: UserDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailOrderByWithRelationInput | UserDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetails.
     */
    cursor?: UserDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetails.
     */
    distinct?: UserDetailScalarFieldEnum | UserDetailScalarFieldEnum[]
  }

  /**
   * UserDetail findFirstOrThrow
   */
  export type UserDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * Filter, which UserDetail to fetch.
     */
    where?: UserDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailOrderByWithRelationInput | UserDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetails.
     */
    cursor?: UserDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetails.
     */
    distinct?: UserDetailScalarFieldEnum | UserDetailScalarFieldEnum[]
  }

  /**
   * UserDetail findMany
   */
  export type UserDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailOrderByWithRelationInput | UserDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDetails.
     */
    cursor?: UserDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    distinct?: UserDetailScalarFieldEnum | UserDetailScalarFieldEnum[]
  }

  /**
   * UserDetail create
   */
  export type UserDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDetail.
     */
    data: XOR<UserDetailCreateInput, UserDetailUncheckedCreateInput>
  }

  /**
   * UserDetail createMany
   */
  export type UserDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDetails.
     */
    data: UserDetailCreateManyInput | UserDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDetail createManyAndReturn
   */
  export type UserDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * The data used to create many UserDetails.
     */
    data: UserDetailCreateManyInput | UserDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDetail update
   */
  export type UserDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDetail.
     */
    data: XOR<UserDetailUpdateInput, UserDetailUncheckedUpdateInput>
    /**
     * Choose, which UserDetail to update.
     */
    where: UserDetailWhereUniqueInput
  }

  /**
   * UserDetail updateMany
   */
  export type UserDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDetails.
     */
    data: XOR<UserDetailUpdateManyMutationInput, UserDetailUncheckedUpdateManyInput>
    /**
     * Filter which UserDetails to update
     */
    where?: UserDetailWhereInput
    /**
     * Limit how many UserDetails to update.
     */
    limit?: number
  }

  /**
   * UserDetail updateManyAndReturn
   */
  export type UserDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * The data used to update UserDetails.
     */
    data: XOR<UserDetailUpdateManyMutationInput, UserDetailUncheckedUpdateManyInput>
    /**
     * Filter which UserDetails to update
     */
    where?: UserDetailWhereInput
    /**
     * Limit how many UserDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDetail upsert
   */
  export type UserDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDetail to update in case it exists.
     */
    where: UserDetailWhereUniqueInput
    /**
     * In case the UserDetail found by the `where` argument doesn't exist, create a new UserDetail with this data.
     */
    create: XOR<UserDetailCreateInput, UserDetailUncheckedCreateInput>
    /**
     * In case the UserDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDetailUpdateInput, UserDetailUncheckedUpdateInput>
  }

  /**
   * UserDetail delete
   */
  export type UserDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * Filter which UserDetail to delete.
     */
    where: UserDetailWhereUniqueInput
  }

  /**
   * UserDetail deleteMany
   */
  export type UserDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetails to delete
     */
    where?: UserDetailWhereInput
    /**
     * Limit how many UserDetails to delete.
     */
    limit?: number
  }

  /**
   * UserDetail without action
   */
  export type UserDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
  }


  /**
   * Model UserPreferences
   */

  export type AggregateUserPreferences = {
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  export type UserPreferencesAvgAggregateOutputType = {
    prefered_min_age: number | null
    prefered_max_age: number | null
    max_distance: number | null
  }

  export type UserPreferencesSumAggregateOutputType = {
    prefered_min_age: number | null
    prefered_max_age: number | null
    max_distance: number | null
  }

  export type UserPreferencesMinAggregateOutputType = {
    id: string | null
    prefered_min_age: number | null
    prefered_max_age: number | null
    max_distance: number | null
    show_on_feed: boolean | null
    is_ghost_mode: boolean | null
    verified: boolean | null
    user_id: string | null
  }

  export type UserPreferencesMaxAggregateOutputType = {
    id: string | null
    prefered_min_age: number | null
    prefered_max_age: number | null
    max_distance: number | null
    show_on_feed: boolean | null
    is_ghost_mode: boolean | null
    verified: boolean | null
    user_id: string | null
  }

  export type UserPreferencesCountAggregateOutputType = {
    id: number
    intensions: number
    prefered_min_age: number
    prefered_max_age: number
    max_distance: number
    show_on_feed: number
    is_ghost_mode: number
    verified: number
    user_id: number
    _all: number
  }


  export type UserPreferencesAvgAggregateInputType = {
    prefered_min_age?: true
    prefered_max_age?: true
    max_distance?: true
  }

  export type UserPreferencesSumAggregateInputType = {
    prefered_min_age?: true
    prefered_max_age?: true
    max_distance?: true
  }

  export type UserPreferencesMinAggregateInputType = {
    id?: true
    prefered_min_age?: true
    prefered_max_age?: true
    max_distance?: true
    show_on_feed?: true
    is_ghost_mode?: true
    verified?: true
    user_id?: true
  }

  export type UserPreferencesMaxAggregateInputType = {
    id?: true
    prefered_min_age?: true
    prefered_max_age?: true
    max_distance?: true
    show_on_feed?: true
    is_ghost_mode?: true
    verified?: true
    user_id?: true
  }

  export type UserPreferencesCountAggregateInputType = {
    id?: true
    intensions?: true
    prefered_min_age?: true
    prefered_max_age?: true
    max_distance?: true
    show_on_feed?: true
    is_ghost_mode?: true
    verified?: true
    user_id?: true
    _all?: true
  }

  export type UserPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to aggregate.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type GetUserPreferencesAggregateType<T extends UserPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreferences[P]>
      : GetScalarType<T[P], AggregateUserPreferences[P]>
  }




  export type UserPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithAggregationInput | UserPreferencesOrderByWithAggregationInput[]
    by: UserPreferencesScalarFieldEnum[] | UserPreferencesScalarFieldEnum
    having?: UserPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferencesCountAggregateInputType | true
    _avg?: UserPreferencesAvgAggregateInputType
    _sum?: UserPreferencesSumAggregateInputType
    _min?: UserPreferencesMinAggregateInputType
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type UserPreferencesGroupByOutputType = {
    id: string
    intensions: string[]
    prefered_min_age: number | null
    prefered_max_age: number | null
    max_distance: number | null
    show_on_feed: boolean
    is_ghost_mode: boolean
    verified: boolean
    user_id: string
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  type GetUserPreferencesGroupByPayload<T extends UserPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intensions?: boolean
    prefered_min_age?: boolean
    prefered_max_age?: boolean
    max_distance?: boolean
    show_on_feed?: boolean
    is_ghost_mode?: boolean
    verified?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intensions?: boolean
    prefered_min_age?: boolean
    prefered_max_age?: boolean
    max_distance?: boolean
    show_on_feed?: boolean
    is_ghost_mode?: boolean
    verified?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    intensions?: boolean
    prefered_min_age?: boolean
    prefered_max_age?: boolean
    max_distance?: boolean
    show_on_feed?: boolean
    is_ghost_mode?: boolean
    verified?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectScalar = {
    id?: boolean
    intensions?: boolean
    prefered_min_age?: boolean
    prefered_max_age?: boolean
    max_distance?: boolean
    show_on_feed?: boolean
    is_ghost_mode?: boolean
    verified?: boolean
    user_id?: boolean
  }

  export type UserPreferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "intensions" | "prefered_min_age" | "prefered_max_age" | "max_distance" | "show_on_feed" | "is_ghost_mode" | "verified" | "user_id", ExtArgs["result"]["userPreferences"]>
  export type UserPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreferences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      intensions: string[]
      prefered_min_age: number | null
      prefered_max_age: number | null
      max_distance: number | null
      show_on_feed: boolean
      is_ghost_mode: boolean
      verified: boolean
      user_id: string
    }, ExtArgs["result"]["userPreferences"]>
    composites: {}
  }

  type UserPreferencesGetPayload<S extends boolean | null | undefined | UserPreferencesDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencesPayload, S>

  type UserPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferencesCountAggregateInputType | true
    }

  export interface UserPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreferences'], meta: { name: 'UserPreferences' } }
    /**
     * Find zero or one UserPreferences that matches the filter.
     * @param {UserPreferencesFindUniqueArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferencesFindUniqueArgs>(args: SelectSubset<T, UserPreferencesFindUniqueArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferencesFindUniqueOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferencesFindFirstArgs>(args?: SelectSubset<T, UserPreferencesFindFirstArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferencesFindManyArgs>(args?: SelectSubset<T, UserPreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreferences.
     * @param {UserPreferencesCreateArgs} args - Arguments to create a UserPreferences.
     * @example
     * // Create one UserPreferences
     * const UserPreferences = await prisma.userPreferences.create({
     *   data: {
     *     // ... data to create a UserPreferences
     *   }
     * })
     * 
     */
    create<T extends UserPreferencesCreateArgs>(args: SelectSubset<T, UserPreferencesCreateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferencesCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferencesCreateManyArgs>(args?: SelectSubset<T, UserPreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferencesCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreferences.
     * @param {UserPreferencesDeleteArgs} args - Arguments to delete one UserPreferences.
     * @example
     * // Delete one UserPreferences
     * const UserPreferences = await prisma.userPreferences.delete({
     *   where: {
     *     // ... filter to delete one UserPreferences
     *   }
     * })
     * 
     */
    delete<T extends UserPreferencesDeleteArgs>(args: SelectSubset<T, UserPreferencesDeleteArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreferences.
     * @param {UserPreferencesUpdateArgs} args - Arguments to update one UserPreferences.
     * @example
     * // Update one UserPreferences
     * const userPreferences = await prisma.userPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferencesUpdateArgs>(args: SelectSubset<T, UserPreferencesUpdateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferencesDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferencesDeleteManyArgs>(args?: SelectSubset<T, UserPreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferencesUpdateManyArgs>(args: SelectSubset<T, UserPreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferencesUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPreferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreferences.
     * @param {UserPreferencesUpsertArgs} args - Arguments to update or create a UserPreferences.
     * @example
     * // Update or create a UserPreferences
     * const userPreferences = await prisma.userPreferences.upsert({
     *   create: {
     *     // ... data to create a UserPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreferences we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferencesUpsertArgs>(args: SelectSubset<T, UserPreferencesUpsertArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreferences.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferencesCountArgs>(
      args?: Subset<T, UserPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPreferencesAggregateArgs>(args: Subset<T, UserPreferencesAggregateArgs>): Prisma.PrismaPromise<GetUserPreferencesAggregateType<T>>

    /**
     * Group by UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreferences model
   */
  readonly fields: UserPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPreferences model
   */
  interface UserPreferencesFieldRefs {
    readonly id: FieldRef<"UserPreferences", 'String'>
    readonly intensions: FieldRef<"UserPreferences", 'String[]'>
    readonly prefered_min_age: FieldRef<"UserPreferences", 'Int'>
    readonly prefered_max_age: FieldRef<"UserPreferences", 'Int'>
    readonly max_distance: FieldRef<"UserPreferences", 'Int'>
    readonly show_on_feed: FieldRef<"UserPreferences", 'Boolean'>
    readonly is_ghost_mode: FieldRef<"UserPreferences", 'Boolean'>
    readonly verified: FieldRef<"UserPreferences", 'Boolean'>
    readonly user_id: FieldRef<"UserPreferences", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserPreferences findUnique
   */
  export type UserPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findUniqueOrThrow
   */
  export type UserPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findFirst
   */
  export type UserPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findFirstOrThrow
   */
  export type UserPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findMany
   */
  export type UserPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences create
   */
  export type UserPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreferences.
     */
    data: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
  }

  /**
   * UserPreferences createMany
   */
  export type UserPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreferences createManyAndReturn
   */
  export type UserPreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences update
   */
  export type UserPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreferences.
     */
    data: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
    /**
     * Choose, which UserPreferences to update.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences updateMany
   */
  export type UserPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreferences updateManyAndReturn
   */
  export type UserPreferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences upsert
   */
  export type UserPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreferences to update in case it exists.
     */
    where: UserPreferencesWhereUniqueInput
    /**
     * In case the UserPreferences found by the `where` argument doesn't exist, create a new UserPreferences with this data.
     */
    create: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
    /**
     * In case the UserPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
  }

  /**
   * UserPreferences delete
   */
  export type UserPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter which UserPreferences to delete.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences deleteMany
   */
  export type UserPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreferences without action
   */
  export type UserPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    user_id: string | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    gallery: number
    user_id: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    gallery?: true
    user_id?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    gallery: string[]
    user_id: string
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gallery?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gallery?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gallery?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    gallery?: boolean
    user_id?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gallery" | "user_id", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gallery: string[]
      user_id: string
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly gallery: FieldRef<"Media", 'String[]'>
    readonly user_id: FieldRef<"Media", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model Liked
   */

  export type AggregateLiked = {
    _count: LikedCountAggregateOutputType | null
    _min: LikedMinAggregateOutputType | null
    _max: LikedMaxAggregateOutputType | null
  }

  export type LikedMinAggregateOutputType = {
    id: string | null
    liked_to_id: string | null
    liked_by_id: string | null
  }

  export type LikedMaxAggregateOutputType = {
    id: string | null
    liked_to_id: string | null
    liked_by_id: string | null
  }

  export type LikedCountAggregateOutputType = {
    id: number
    liked_to_id: number
    liked_by_id: number
    _all: number
  }


  export type LikedMinAggregateInputType = {
    id?: true
    liked_to_id?: true
    liked_by_id?: true
  }

  export type LikedMaxAggregateInputType = {
    id?: true
    liked_to_id?: true
    liked_by_id?: true
  }

  export type LikedCountAggregateInputType = {
    id?: true
    liked_to_id?: true
    liked_by_id?: true
    _all?: true
  }

  export type LikedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Liked to aggregate.
     */
    where?: LikedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likeds to fetch.
     */
    orderBy?: LikedOrderByWithRelationInput | LikedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likeds
    **/
    _count?: true | LikedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedMaxAggregateInputType
  }

  export type GetLikedAggregateType<T extends LikedAggregateArgs> = {
        [P in keyof T & keyof AggregateLiked]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLiked[P]>
      : GetScalarType<T[P], AggregateLiked[P]>
  }




  export type LikedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedWhereInput
    orderBy?: LikedOrderByWithAggregationInput | LikedOrderByWithAggregationInput[]
    by: LikedScalarFieldEnum[] | LikedScalarFieldEnum
    having?: LikedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedCountAggregateInputType | true
    _min?: LikedMinAggregateInputType
    _max?: LikedMaxAggregateInputType
  }

  export type LikedGroupByOutputType = {
    id: string
    liked_to_id: string
    liked_by_id: string
    _count: LikedCountAggregateOutputType | null
    _min: LikedMinAggregateOutputType | null
    _max: LikedMaxAggregateOutputType | null
  }

  type GetLikedGroupByPayload<T extends LikedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedGroupByOutputType[P]>
            : GetScalarType<T[P], LikedGroupByOutputType[P]>
        }
      >
    >


  export type LikedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liked_to_id?: boolean
    liked_by_id?: boolean
    liked_to?: boolean | UserDefaultArgs<ExtArgs>
    liked_by?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["liked"]>

  export type LikedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liked_to_id?: boolean
    liked_by_id?: boolean
    liked_to?: boolean | UserDefaultArgs<ExtArgs>
    liked_by?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["liked"]>

  export type LikedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liked_to_id?: boolean
    liked_by_id?: boolean
    liked_to?: boolean | UserDefaultArgs<ExtArgs>
    liked_by?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["liked"]>

  export type LikedSelectScalar = {
    id?: boolean
    liked_to_id?: boolean
    liked_by_id?: boolean
  }

  export type LikedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "liked_to_id" | "liked_by_id", ExtArgs["result"]["liked"]>
  export type LikedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liked_to?: boolean | UserDefaultArgs<ExtArgs>
    liked_by?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LikedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liked_to?: boolean | UserDefaultArgs<ExtArgs>
    liked_by?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LikedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    liked_to?: boolean | UserDefaultArgs<ExtArgs>
    liked_by?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LikedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Liked"
    objects: {
      liked_to: Prisma.$UserPayload<ExtArgs>
      liked_by: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      liked_to_id: string
      liked_by_id: string
    }, ExtArgs["result"]["liked"]>
    composites: {}
  }

  type LikedGetPayload<S extends boolean | null | undefined | LikedDefaultArgs> = $Result.GetResult<Prisma.$LikedPayload, S>

  type LikedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikedCountAggregateInputType | true
    }

  export interface LikedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Liked'], meta: { name: 'Liked' } }
    /**
     * Find zero or one Liked that matches the filter.
     * @param {LikedFindUniqueArgs} args - Arguments to find a Liked
     * @example
     * // Get one Liked
     * const liked = await prisma.liked.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikedFindUniqueArgs>(args: SelectSubset<T, LikedFindUniqueArgs<ExtArgs>>): Prisma__LikedClient<$Result.GetResult<Prisma.$LikedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Liked that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikedFindUniqueOrThrowArgs} args - Arguments to find a Liked
     * @example
     * // Get one Liked
     * const liked = await prisma.liked.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikedFindUniqueOrThrowArgs>(args: SelectSubset<T, LikedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikedClient<$Result.GetResult<Prisma.$LikedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Liked that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedFindFirstArgs} args - Arguments to find a Liked
     * @example
     * // Get one Liked
     * const liked = await prisma.liked.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikedFindFirstArgs>(args?: SelectSubset<T, LikedFindFirstArgs<ExtArgs>>): Prisma__LikedClient<$Result.GetResult<Prisma.$LikedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Liked that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedFindFirstOrThrowArgs} args - Arguments to find a Liked
     * @example
     * // Get one Liked
     * const liked = await prisma.liked.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikedFindFirstOrThrowArgs>(args?: SelectSubset<T, LikedFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikedClient<$Result.GetResult<Prisma.$LikedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likeds
     * const likeds = await prisma.liked.findMany()
     * 
     * // Get first 10 Likeds
     * const likeds = await prisma.liked.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedWithIdOnly = await prisma.liked.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikedFindManyArgs>(args?: SelectSubset<T, LikedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Liked.
     * @param {LikedCreateArgs} args - Arguments to create a Liked.
     * @example
     * // Create one Liked
     * const Liked = await prisma.liked.create({
     *   data: {
     *     // ... data to create a Liked
     *   }
     * })
     * 
     */
    create<T extends LikedCreateArgs>(args: SelectSubset<T, LikedCreateArgs<ExtArgs>>): Prisma__LikedClient<$Result.GetResult<Prisma.$LikedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likeds.
     * @param {LikedCreateManyArgs} args - Arguments to create many Likeds.
     * @example
     * // Create many Likeds
     * const liked = await prisma.liked.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikedCreateManyArgs>(args?: SelectSubset<T, LikedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likeds and returns the data saved in the database.
     * @param {LikedCreateManyAndReturnArgs} args - Arguments to create many Likeds.
     * @example
     * // Create many Likeds
     * const liked = await prisma.liked.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likeds and only return the `id`
     * const likedWithIdOnly = await prisma.liked.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikedCreateManyAndReturnArgs>(args?: SelectSubset<T, LikedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Liked.
     * @param {LikedDeleteArgs} args - Arguments to delete one Liked.
     * @example
     * // Delete one Liked
     * const Liked = await prisma.liked.delete({
     *   where: {
     *     // ... filter to delete one Liked
     *   }
     * })
     * 
     */
    delete<T extends LikedDeleteArgs>(args: SelectSubset<T, LikedDeleteArgs<ExtArgs>>): Prisma__LikedClient<$Result.GetResult<Prisma.$LikedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Liked.
     * @param {LikedUpdateArgs} args - Arguments to update one Liked.
     * @example
     * // Update one Liked
     * const liked = await prisma.liked.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikedUpdateArgs>(args: SelectSubset<T, LikedUpdateArgs<ExtArgs>>): Prisma__LikedClient<$Result.GetResult<Prisma.$LikedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likeds.
     * @param {LikedDeleteManyArgs} args - Arguments to filter Likeds to delete.
     * @example
     * // Delete a few Likeds
     * const { count } = await prisma.liked.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikedDeleteManyArgs>(args?: SelectSubset<T, LikedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likeds
     * const liked = await prisma.liked.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikedUpdateManyArgs>(args: SelectSubset<T, LikedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likeds and returns the data updated in the database.
     * @param {LikedUpdateManyAndReturnArgs} args - Arguments to update many Likeds.
     * @example
     * // Update many Likeds
     * const liked = await prisma.liked.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likeds and only return the `id`
     * const likedWithIdOnly = await prisma.liked.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikedUpdateManyAndReturnArgs>(args: SelectSubset<T, LikedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Liked.
     * @param {LikedUpsertArgs} args - Arguments to update or create a Liked.
     * @example
     * // Update or create a Liked
     * const liked = await prisma.liked.upsert({
     *   create: {
     *     // ... data to create a Liked
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Liked we want to update
     *   }
     * })
     */
    upsert<T extends LikedUpsertArgs>(args: SelectSubset<T, LikedUpsertArgs<ExtArgs>>): Prisma__LikedClient<$Result.GetResult<Prisma.$LikedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedCountArgs} args - Arguments to filter Likeds to count.
     * @example
     * // Count the number of Likeds
     * const count = await prisma.liked.count({
     *   where: {
     *     // ... the filter for the Likeds we want to count
     *   }
     * })
    **/
    count<T extends LikedCountArgs>(
      args?: Subset<T, LikedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Liked.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikedAggregateArgs>(args: Subset<T, LikedAggregateArgs>): Prisma.PrismaPromise<GetLikedAggregateType<T>>

    /**
     * Group by Liked.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedGroupByArgs['orderBy'] }
        : { orderBy?: LikedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Liked model
   */
  readonly fields: LikedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Liked.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    liked_to<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    liked_by<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Liked model
   */
  interface LikedFieldRefs {
    readonly id: FieldRef<"Liked", 'String'>
    readonly liked_to_id: FieldRef<"Liked", 'String'>
    readonly liked_by_id: FieldRef<"Liked", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Liked findUnique
   */
  export type LikedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liked
     */
    select?: LikedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liked
     */
    omit?: LikedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedInclude<ExtArgs> | null
    /**
     * Filter, which Liked to fetch.
     */
    where: LikedWhereUniqueInput
  }

  /**
   * Liked findUniqueOrThrow
   */
  export type LikedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liked
     */
    select?: LikedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liked
     */
    omit?: LikedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedInclude<ExtArgs> | null
    /**
     * Filter, which Liked to fetch.
     */
    where: LikedWhereUniqueInput
  }

  /**
   * Liked findFirst
   */
  export type LikedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liked
     */
    select?: LikedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liked
     */
    omit?: LikedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedInclude<ExtArgs> | null
    /**
     * Filter, which Liked to fetch.
     */
    where?: LikedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likeds to fetch.
     */
    orderBy?: LikedOrderByWithRelationInput | LikedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likeds.
     */
    cursor?: LikedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likeds.
     */
    distinct?: LikedScalarFieldEnum | LikedScalarFieldEnum[]
  }

  /**
   * Liked findFirstOrThrow
   */
  export type LikedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liked
     */
    select?: LikedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liked
     */
    omit?: LikedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedInclude<ExtArgs> | null
    /**
     * Filter, which Liked to fetch.
     */
    where?: LikedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likeds to fetch.
     */
    orderBy?: LikedOrderByWithRelationInput | LikedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likeds.
     */
    cursor?: LikedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likeds.
     */
    distinct?: LikedScalarFieldEnum | LikedScalarFieldEnum[]
  }

  /**
   * Liked findMany
   */
  export type LikedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liked
     */
    select?: LikedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liked
     */
    omit?: LikedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedInclude<ExtArgs> | null
    /**
     * Filter, which Likeds to fetch.
     */
    where?: LikedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likeds to fetch.
     */
    orderBy?: LikedOrderByWithRelationInput | LikedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likeds.
     */
    cursor?: LikedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likeds.
     */
    skip?: number
    distinct?: LikedScalarFieldEnum | LikedScalarFieldEnum[]
  }

  /**
   * Liked create
   */
  export type LikedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liked
     */
    select?: LikedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liked
     */
    omit?: LikedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedInclude<ExtArgs> | null
    /**
     * The data needed to create a Liked.
     */
    data: XOR<LikedCreateInput, LikedUncheckedCreateInput>
  }

  /**
   * Liked createMany
   */
  export type LikedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likeds.
     */
    data: LikedCreateManyInput | LikedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Liked createManyAndReturn
   */
  export type LikedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liked
     */
    select?: LikedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Liked
     */
    omit?: LikedOmit<ExtArgs> | null
    /**
     * The data used to create many Likeds.
     */
    data: LikedCreateManyInput | LikedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Liked update
   */
  export type LikedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liked
     */
    select?: LikedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liked
     */
    omit?: LikedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedInclude<ExtArgs> | null
    /**
     * The data needed to update a Liked.
     */
    data: XOR<LikedUpdateInput, LikedUncheckedUpdateInput>
    /**
     * Choose, which Liked to update.
     */
    where: LikedWhereUniqueInput
  }

  /**
   * Liked updateMany
   */
  export type LikedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likeds.
     */
    data: XOR<LikedUpdateManyMutationInput, LikedUncheckedUpdateManyInput>
    /**
     * Filter which Likeds to update
     */
    where?: LikedWhereInput
    /**
     * Limit how many Likeds to update.
     */
    limit?: number
  }

  /**
   * Liked updateManyAndReturn
   */
  export type LikedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liked
     */
    select?: LikedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Liked
     */
    omit?: LikedOmit<ExtArgs> | null
    /**
     * The data used to update Likeds.
     */
    data: XOR<LikedUpdateManyMutationInput, LikedUncheckedUpdateManyInput>
    /**
     * Filter which Likeds to update
     */
    where?: LikedWhereInput
    /**
     * Limit how many Likeds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Liked upsert
   */
  export type LikedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liked
     */
    select?: LikedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liked
     */
    omit?: LikedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedInclude<ExtArgs> | null
    /**
     * The filter to search for the Liked to update in case it exists.
     */
    where: LikedWhereUniqueInput
    /**
     * In case the Liked found by the `where` argument doesn't exist, create a new Liked with this data.
     */
    create: XOR<LikedCreateInput, LikedUncheckedCreateInput>
    /**
     * In case the Liked was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedUpdateInput, LikedUncheckedUpdateInput>
  }

  /**
   * Liked delete
   */
  export type LikedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liked
     */
    select?: LikedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liked
     */
    omit?: LikedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedInclude<ExtArgs> | null
    /**
     * Filter which Liked to delete.
     */
    where: LikedWhereUniqueInput
  }

  /**
   * Liked deleteMany
   */
  export type LikedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likeds to delete
     */
    where?: LikedWhereInput
    /**
     * Limit how many Likeds to delete.
     */
    limit?: number
  }

  /**
   * Liked without action
   */
  export type LikedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Liked
     */
    select?: LikedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Liked
     */
    omit?: LikedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    message: string | null
    message_from_user: string | null
    message_to_user: string | null
    created_at: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    message: string | null
    message_from_user: string | null
    message_to_user: string | null
    created_at: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    message: number
    message_from_user: number
    message_to_user: number
    created_at: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    message?: true
    message_from_user?: true
    message_to_user?: true
    created_at?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    message?: true
    message_from_user?: true
    message_to_user?: true
    created_at?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    message?: true
    message_from_user?: true
    message_to_user?: true
    created_at?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    message: string
    message_from_user: string
    message_to_user: string
    created_at: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    message_from_user?: boolean
    message_to_user?: boolean
    created_at?: boolean
    from_user?: boolean | UserDefaultArgs<ExtArgs>
    to_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    message_from_user?: boolean
    message_to_user?: boolean
    created_at?: boolean
    from_user?: boolean | UserDefaultArgs<ExtArgs>
    to_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    message_from_user?: boolean
    message_to_user?: boolean
    created_at?: boolean
    from_user?: boolean | UserDefaultArgs<ExtArgs>
    to_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    message?: boolean
    message_from_user?: boolean
    message_to_user?: boolean
    created_at?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "message_from_user" | "message_to_user" | "created_at", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from_user?: boolean | UserDefaultArgs<ExtArgs>
    to_user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from_user?: boolean | UserDefaultArgs<ExtArgs>
    to_user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from_user?: boolean | UserDefaultArgs<ExtArgs>
    to_user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      from_user: Prisma.$UserPayload<ExtArgs>
      to_user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      message_from_user: string
      message_to_user: string
      created_at: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    from_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    to_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly message: FieldRef<"Message", 'String'>
    readonly message_from_user: FieldRef<"Message", 'String'>
    readonly message_to_user: FieldRef<"Message", 'String'>
    readonly created_at: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at',
    last_seen: 'last_seen'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MatchesScalarFieldEnum: {
    id: 'id',
    user1_id: 'user1_id',
    user2_id: 'user2_id',
    is_matched_at: 'is_matched_at',
    is_blocked: 'is_blocked',
    unmatched_at: 'unmatched_at'
  };

  export type MatchesScalarFieldEnum = (typeof MatchesScalarFieldEnum)[keyof typeof MatchesScalarFieldEnum]


  export const UserDetailScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    pronounce: 'pronounce',
    gender: 'gender',
    date_of_birth: 'date_of_birth',
    age: 'age',
    bio: 'bio',
    height: 'height',
    education: 'education',
    location: 'location',
    latitude: 'latitude',
    longitude: 'longitude',
    last_active: 'last_active',
    profile_pic: 'profile_pic',
    howyoudie: 'howyoudie',
    sexuality: 'sexuality',
    interested_in_gender: 'interested_in_gender',
    user_id: 'user_id'
  };

  export type UserDetailScalarFieldEnum = (typeof UserDetailScalarFieldEnum)[keyof typeof UserDetailScalarFieldEnum]


  export const UserPreferencesScalarFieldEnum: {
    id: 'id',
    intensions: 'intensions',
    prefered_min_age: 'prefered_min_age',
    prefered_max_age: 'prefered_max_age',
    max_distance: 'max_distance',
    show_on_feed: 'show_on_feed',
    is_ghost_mode: 'is_ghost_mode',
    verified: 'verified',
    user_id: 'user_id'
  };

  export type UserPreferencesScalarFieldEnum = (typeof UserPreferencesScalarFieldEnum)[keyof typeof UserPreferencesScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    gallery: 'gallery',
    user_id: 'user_id'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const LikedScalarFieldEnum: {
    id: 'id',
    liked_to_id: 'liked_to_id',
    liked_by_id: 'liked_by_id'
  };

  export type LikedScalarFieldEnum = (typeof LikedScalarFieldEnum)[keyof typeof LikedScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    message: 'message',
    message_from_user: 'message_from_user',
    message_to_user: 'message_to_user',
    created_at: 'created_at'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    last_seen?: DateTimeNullableFilter<"User"> | Date | string | null
    user_details?: XOR<UserDetailNullableScalarRelationFilter, UserDetailWhereInput> | null
    preferences?: XOR<UserPreferencesNullableScalarRelationFilter, UserPreferencesWhereInput> | null
    media?: XOR<MediaNullableScalarRelationFilter, MediaWhereInput> | null
    liked_users?: LikedListRelationFilter
    given_likes?: LikedListRelationFilter
    matches1?: MatchesListRelationFilter
    matches2?: MatchesListRelationFilter
    message_from_user?: MessageListRelationFilter
    message_to_user?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    last_seen?: SortOrderInput | SortOrder
    user_details?: UserDetailOrderByWithRelationInput
    preferences?: UserPreferencesOrderByWithRelationInput
    media?: MediaOrderByWithRelationInput
    liked_users?: LikedOrderByRelationAggregateInput
    given_likes?: LikedOrderByRelationAggregateInput
    matches1?: MatchesOrderByRelationAggregateInput
    matches2?: MatchesOrderByRelationAggregateInput
    message_from_user?: MessageOrderByRelationAggregateInput
    message_to_user?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    last_seen?: DateTimeNullableFilter<"User"> | Date | string | null
    user_details?: XOR<UserDetailNullableScalarRelationFilter, UserDetailWhereInput> | null
    preferences?: XOR<UserPreferencesNullableScalarRelationFilter, UserPreferencesWhereInput> | null
    media?: XOR<MediaNullableScalarRelationFilter, MediaWhereInput> | null
    liked_users?: LikedListRelationFilter
    given_likes?: LikedListRelationFilter
    matches1?: MatchesListRelationFilter
    matches2?: MatchesListRelationFilter
    message_from_user?: MessageListRelationFilter
    message_to_user?: MessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    last_seen?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    last_seen?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type MatchesWhereInput = {
    AND?: MatchesWhereInput | MatchesWhereInput[]
    OR?: MatchesWhereInput[]
    NOT?: MatchesWhereInput | MatchesWhereInput[]
    id?: StringFilter<"Matches"> | string
    user1_id?: StringFilter<"Matches"> | string
    user2_id?: StringFilter<"Matches"> | string
    is_matched_at?: DateTimeFilter<"Matches"> | Date | string
    is_blocked?: BoolFilter<"Matches"> | boolean
    unmatched_at?: DateTimeNullableFilter<"Matches"> | Date | string | null
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchesOrderByWithRelationInput = {
    id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    is_matched_at?: SortOrder
    is_blocked?: SortOrder
    unmatched_at?: SortOrderInput | SortOrder
    user1?: UserOrderByWithRelationInput
    user2?: UserOrderByWithRelationInput
  }

  export type MatchesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user1_id_user2_id?: MatchesUser1_idUser2_idCompoundUniqueInput
    AND?: MatchesWhereInput | MatchesWhereInput[]
    OR?: MatchesWhereInput[]
    NOT?: MatchesWhereInput | MatchesWhereInput[]
    user1_id?: StringFilter<"Matches"> | string
    user2_id?: StringFilter<"Matches"> | string
    is_matched_at?: DateTimeFilter<"Matches"> | Date | string
    is_blocked?: BoolFilter<"Matches"> | boolean
    unmatched_at?: DateTimeNullableFilter<"Matches"> | Date | string | null
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user1_id_user2_id">

  export type MatchesOrderByWithAggregationInput = {
    id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    is_matched_at?: SortOrder
    is_blocked?: SortOrder
    unmatched_at?: SortOrderInput | SortOrder
    _count?: MatchesCountOrderByAggregateInput
    _max?: MatchesMaxOrderByAggregateInput
    _min?: MatchesMinOrderByAggregateInput
  }

  export type MatchesScalarWhereWithAggregatesInput = {
    AND?: MatchesScalarWhereWithAggregatesInput | MatchesScalarWhereWithAggregatesInput[]
    OR?: MatchesScalarWhereWithAggregatesInput[]
    NOT?: MatchesScalarWhereWithAggregatesInput | MatchesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Matches"> | string
    user1_id?: StringWithAggregatesFilter<"Matches"> | string
    user2_id?: StringWithAggregatesFilter<"Matches"> | string
    is_matched_at?: DateTimeWithAggregatesFilter<"Matches"> | Date | string
    is_blocked?: BoolWithAggregatesFilter<"Matches"> | boolean
    unmatched_at?: DateTimeNullableWithAggregatesFilter<"Matches"> | Date | string | null
  }

  export type UserDetailWhereInput = {
    AND?: UserDetailWhereInput | UserDetailWhereInput[]
    OR?: UserDetailWhereInput[]
    NOT?: UserDetailWhereInput | UserDetailWhereInput[]
    id?: StringFilter<"UserDetail"> | string
    first_name?: StringFilter<"UserDetail"> | string
    last_name?: StringFilter<"UserDetail"> | string
    pronounce?: StringNullableListFilter<"UserDetail">
    gender?: StringFilter<"UserDetail"> | string
    date_of_birth?: DateTimeFilter<"UserDetail"> | Date | string
    age?: StringFilter<"UserDetail"> | string
    bio?: StringFilter<"UserDetail"> | string
    height?: StringFilter<"UserDetail"> | string
    education?: StringFilter<"UserDetail"> | string
    location?: StringFilter<"UserDetail"> | string
    latitude?: FloatNullableFilter<"UserDetail"> | number | null
    longitude?: FloatNullableFilter<"UserDetail"> | number | null
    last_active?: DateTimeFilter<"UserDetail"> | Date | string
    profile_pic?: StringFilter<"UserDetail"> | string
    howyoudie?: StringFilter<"UserDetail"> | string
    sexuality?: StringFilter<"UserDetail"> | string
    interested_in_gender?: StringFilter<"UserDetail"> | string
    user_id?: StringFilter<"UserDetail"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserDetailOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    pronounce?: SortOrder
    gender?: SortOrder
    date_of_birth?: SortOrder
    age?: SortOrder
    bio?: SortOrder
    height?: SortOrder
    education?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    last_active?: SortOrder
    profile_pic?: SortOrder
    howyoudie?: SortOrder
    sexuality?: SortOrder
    interested_in_gender?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: UserDetailWhereInput | UserDetailWhereInput[]
    OR?: UserDetailWhereInput[]
    NOT?: UserDetailWhereInput | UserDetailWhereInput[]
    first_name?: StringFilter<"UserDetail"> | string
    last_name?: StringFilter<"UserDetail"> | string
    pronounce?: StringNullableListFilter<"UserDetail">
    gender?: StringFilter<"UserDetail"> | string
    date_of_birth?: DateTimeFilter<"UserDetail"> | Date | string
    age?: StringFilter<"UserDetail"> | string
    bio?: StringFilter<"UserDetail"> | string
    height?: StringFilter<"UserDetail"> | string
    education?: StringFilter<"UserDetail"> | string
    location?: StringFilter<"UserDetail"> | string
    latitude?: FloatNullableFilter<"UserDetail"> | number | null
    longitude?: FloatNullableFilter<"UserDetail"> | number | null
    last_active?: DateTimeFilter<"UserDetail"> | Date | string
    profile_pic?: StringFilter<"UserDetail"> | string
    howyoudie?: StringFilter<"UserDetail"> | string
    sexuality?: StringFilter<"UserDetail"> | string
    interested_in_gender?: StringFilter<"UserDetail"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type UserDetailOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    pronounce?: SortOrder
    gender?: SortOrder
    date_of_birth?: SortOrder
    age?: SortOrder
    bio?: SortOrder
    height?: SortOrder
    education?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    last_active?: SortOrder
    profile_pic?: SortOrder
    howyoudie?: SortOrder
    sexuality?: SortOrder
    interested_in_gender?: SortOrder
    user_id?: SortOrder
    _count?: UserDetailCountOrderByAggregateInput
    _avg?: UserDetailAvgOrderByAggregateInput
    _max?: UserDetailMaxOrderByAggregateInput
    _min?: UserDetailMinOrderByAggregateInput
    _sum?: UserDetailSumOrderByAggregateInput
  }

  export type UserDetailScalarWhereWithAggregatesInput = {
    AND?: UserDetailScalarWhereWithAggregatesInput | UserDetailScalarWhereWithAggregatesInput[]
    OR?: UserDetailScalarWhereWithAggregatesInput[]
    NOT?: UserDetailScalarWhereWithAggregatesInput | UserDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserDetail"> | string
    first_name?: StringWithAggregatesFilter<"UserDetail"> | string
    last_name?: StringWithAggregatesFilter<"UserDetail"> | string
    pronounce?: StringNullableListFilter<"UserDetail">
    gender?: StringWithAggregatesFilter<"UserDetail"> | string
    date_of_birth?: DateTimeWithAggregatesFilter<"UserDetail"> | Date | string
    age?: StringWithAggregatesFilter<"UserDetail"> | string
    bio?: StringWithAggregatesFilter<"UserDetail"> | string
    height?: StringWithAggregatesFilter<"UserDetail"> | string
    education?: StringWithAggregatesFilter<"UserDetail"> | string
    location?: StringWithAggregatesFilter<"UserDetail"> | string
    latitude?: FloatNullableWithAggregatesFilter<"UserDetail"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"UserDetail"> | number | null
    last_active?: DateTimeWithAggregatesFilter<"UserDetail"> | Date | string
    profile_pic?: StringWithAggregatesFilter<"UserDetail"> | string
    howyoudie?: StringWithAggregatesFilter<"UserDetail"> | string
    sexuality?: StringWithAggregatesFilter<"UserDetail"> | string
    interested_in_gender?: StringWithAggregatesFilter<"UserDetail"> | string
    user_id?: StringWithAggregatesFilter<"UserDetail"> | string
  }

  export type UserPreferencesWhereInput = {
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    id?: StringFilter<"UserPreferences"> | string
    intensions?: StringNullableListFilter<"UserPreferences">
    prefered_min_age?: IntNullableFilter<"UserPreferences"> | number | null
    prefered_max_age?: IntNullableFilter<"UserPreferences"> | number | null
    max_distance?: IntNullableFilter<"UserPreferences"> | number | null
    show_on_feed?: BoolFilter<"UserPreferences"> | boolean
    is_ghost_mode?: BoolFilter<"UserPreferences"> | boolean
    verified?: BoolFilter<"UserPreferences"> | boolean
    user_id?: StringFilter<"UserPreferences"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPreferencesOrderByWithRelationInput = {
    id?: SortOrder
    intensions?: SortOrder
    prefered_min_age?: SortOrderInput | SortOrder
    prefered_max_age?: SortOrderInput | SortOrder
    max_distance?: SortOrderInput | SortOrder
    show_on_feed?: SortOrder
    is_ghost_mode?: SortOrder
    verified?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    intensions?: StringNullableListFilter<"UserPreferences">
    prefered_min_age?: IntNullableFilter<"UserPreferences"> | number | null
    prefered_max_age?: IntNullableFilter<"UserPreferences"> | number | null
    max_distance?: IntNullableFilter<"UserPreferences"> | number | null
    show_on_feed?: BoolFilter<"UserPreferences"> | boolean
    is_ghost_mode?: BoolFilter<"UserPreferences"> | boolean
    verified?: BoolFilter<"UserPreferences"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type UserPreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    intensions?: SortOrder
    prefered_min_age?: SortOrderInput | SortOrder
    prefered_max_age?: SortOrderInput | SortOrder
    max_distance?: SortOrderInput | SortOrder
    show_on_feed?: SortOrder
    is_ghost_mode?: SortOrder
    verified?: SortOrder
    user_id?: SortOrder
    _count?: UserPreferencesCountOrderByAggregateInput
    _avg?: UserPreferencesAvgOrderByAggregateInput
    _max?: UserPreferencesMaxOrderByAggregateInput
    _min?: UserPreferencesMinOrderByAggregateInput
    _sum?: UserPreferencesSumOrderByAggregateInput
  }

  export type UserPreferencesScalarWhereWithAggregatesInput = {
    AND?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    OR?: UserPreferencesScalarWhereWithAggregatesInput[]
    NOT?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPreferences"> | string
    intensions?: StringNullableListFilter<"UserPreferences">
    prefered_min_age?: IntNullableWithAggregatesFilter<"UserPreferences"> | number | null
    prefered_max_age?: IntNullableWithAggregatesFilter<"UserPreferences"> | number | null
    max_distance?: IntNullableWithAggregatesFilter<"UserPreferences"> | number | null
    show_on_feed?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    is_ghost_mode?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    verified?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    user_id?: StringWithAggregatesFilter<"UserPreferences"> | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    gallery?: StringNullableListFilter<"Media">
    user_id?: StringFilter<"Media"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    gallery?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    gallery?: StringNullableListFilter<"Media">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    gallery?: SortOrder
    user_id?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    gallery?: StringNullableListFilter<"Media">
    user_id?: StringWithAggregatesFilter<"Media"> | string
  }

  export type LikedWhereInput = {
    AND?: LikedWhereInput | LikedWhereInput[]
    OR?: LikedWhereInput[]
    NOT?: LikedWhereInput | LikedWhereInput[]
    id?: StringFilter<"Liked"> | string
    liked_to_id?: StringFilter<"Liked"> | string
    liked_by_id?: StringFilter<"Liked"> | string
    liked_to?: XOR<UserScalarRelationFilter, UserWhereInput>
    liked_by?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LikedOrderByWithRelationInput = {
    id?: SortOrder
    liked_to_id?: SortOrder
    liked_by_id?: SortOrder
    liked_to?: UserOrderByWithRelationInput
    liked_by?: UserOrderByWithRelationInput
  }

  export type LikedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    liked_to_id_liked_by_id?: LikedLiked_to_idLiked_by_idCompoundUniqueInput
    AND?: LikedWhereInput | LikedWhereInput[]
    OR?: LikedWhereInput[]
    NOT?: LikedWhereInput | LikedWhereInput[]
    liked_to_id?: StringFilter<"Liked"> | string
    liked_by_id?: StringFilter<"Liked"> | string
    liked_to?: XOR<UserScalarRelationFilter, UserWhereInput>
    liked_by?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "liked_to_id_liked_by_id">

  export type LikedOrderByWithAggregationInput = {
    id?: SortOrder
    liked_to_id?: SortOrder
    liked_by_id?: SortOrder
    _count?: LikedCountOrderByAggregateInput
    _max?: LikedMaxOrderByAggregateInput
    _min?: LikedMinOrderByAggregateInput
  }

  export type LikedScalarWhereWithAggregatesInput = {
    AND?: LikedScalarWhereWithAggregatesInput | LikedScalarWhereWithAggregatesInput[]
    OR?: LikedScalarWhereWithAggregatesInput[]
    NOT?: LikedScalarWhereWithAggregatesInput | LikedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Liked"> | string
    liked_to_id?: StringWithAggregatesFilter<"Liked"> | string
    liked_by_id?: StringWithAggregatesFilter<"Liked"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    message_from_user?: StringFilter<"Message"> | string
    message_to_user?: StringFilter<"Message"> | string
    created_at?: DateTimeFilter<"Message"> | Date | string
    from_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    to_user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    message_from_user?: SortOrder
    message_to_user?: SortOrder
    created_at?: SortOrder
    from_user?: UserOrderByWithRelationInput
    to_user?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    message?: StringFilter<"Message"> | string
    message_from_user?: StringFilter<"Message"> | string
    message_to_user?: StringFilter<"Message"> | string
    created_at?: DateTimeFilter<"Message"> | Date | string
    from_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    to_user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    message_from_user?: SortOrder
    message_to_user?: SortOrder
    created_at?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    message?: StringWithAggregatesFilter<"Message"> | string
    message_from_user?: StringWithAggregatesFilter<"Message"> | string
    message_to_user?: StringWithAggregatesFilter<"Message"> | string
    created_at?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    media?: MediaCreateNestedOneWithoutUserInput
    liked_users?: LikedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesCreateNestedManyWithoutUser1Input
    matches2?: MatchesCreateNestedManyWithoutUser2Input
    message_from_user?: MessageCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageCreateNestedManyWithoutTo_userInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    media?: MediaUncheckedCreateNestedOneWithoutUserInput
    liked_users?: LikedUncheckedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedUncheckedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesUncheckedCreateNestedManyWithoutUser1Input
    matches2?: MatchesUncheckedCreateNestedManyWithoutUser2Input
    message_from_user?: MessageUncheckedCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageUncheckedCreateNestedManyWithoutTo_userInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    media?: MediaUpdateOneWithoutUserNestedInput
    liked_users?: LikedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUpdateManyWithoutTo_userNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    media?: MediaUncheckedUpdateOneWithoutUserNestedInput
    liked_users?: LikedUncheckedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUncheckedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUncheckedUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUncheckedUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUncheckedUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUncheckedUpdateManyWithoutTo_userNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchesCreateInput = {
    id?: string
    is_matched_at: Date | string
    is_blocked: boolean
    unmatched_at?: Date | string | null
    user1: UserCreateNestedOneWithoutMatches1Input
    user2: UserCreateNestedOneWithoutMatches2Input
  }

  export type MatchesUncheckedCreateInput = {
    id?: string
    user1_id: string
    user2_id: string
    is_matched_at: Date | string
    is_blocked: boolean
    unmatched_at?: Date | string | null
  }

  export type MatchesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_matched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_blocked?: BoolFieldUpdateOperationsInput | boolean
    unmatched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1?: UserUpdateOneRequiredWithoutMatches1NestedInput
    user2?: UserUpdateOneRequiredWithoutMatches2NestedInput
  }

  export type MatchesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    is_matched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_blocked?: BoolFieldUpdateOperationsInput | boolean
    unmatched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchesCreateManyInput = {
    id?: string
    user1_id: string
    user2_id: string
    is_matched_at: Date | string
    is_blocked: boolean
    unmatched_at?: Date | string | null
  }

  export type MatchesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_matched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_blocked?: BoolFieldUpdateOperationsInput | boolean
    unmatched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    is_matched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_blocked?: BoolFieldUpdateOperationsInput | boolean
    unmatched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserDetailCreateInput = {
    id?: string
    first_name: string
    last_name: string
    pronounce?: UserDetailCreatepronounceInput | string[]
    gender: string
    date_of_birth: Date | string
    age: string
    bio: string
    height: string
    education: string
    location: string
    latitude?: number | null
    longitude?: number | null
    last_active: Date | string
    profile_pic: string
    howyoudie: string
    sexuality: string
    interested_in_gender: string
    user: UserCreateNestedOneWithoutUser_detailsInput
  }

  export type UserDetailUncheckedCreateInput = {
    id?: string
    first_name: string
    last_name: string
    pronounce?: UserDetailCreatepronounceInput | string[]
    gender: string
    date_of_birth: Date | string
    age: string
    bio: string
    height: string
    education: string
    location: string
    latitude?: number | null
    longitude?: number | null
    last_active: Date | string
    profile_pic: string
    howyoudie: string
    sexuality: string
    interested_in_gender: string
    user_id: string
  }

  export type UserDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    pronounce?: UserDetailUpdatepronounceInput | string[]
    gender?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    last_active?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_pic?: StringFieldUpdateOperationsInput | string
    howyoudie?: StringFieldUpdateOperationsInput | string
    sexuality?: StringFieldUpdateOperationsInput | string
    interested_in_gender?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUser_detailsNestedInput
  }

  export type UserDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    pronounce?: UserDetailUpdatepronounceInput | string[]
    gender?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    last_active?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_pic?: StringFieldUpdateOperationsInput | string
    howyoudie?: StringFieldUpdateOperationsInput | string
    sexuality?: StringFieldUpdateOperationsInput | string
    interested_in_gender?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserDetailCreateManyInput = {
    id?: string
    first_name: string
    last_name: string
    pronounce?: UserDetailCreatepronounceInput | string[]
    gender: string
    date_of_birth: Date | string
    age: string
    bio: string
    height: string
    education: string
    location: string
    latitude?: number | null
    longitude?: number | null
    last_active: Date | string
    profile_pic: string
    howyoudie: string
    sexuality: string
    interested_in_gender: string
    user_id: string
  }

  export type UserDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    pronounce?: UserDetailUpdatepronounceInput | string[]
    gender?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    last_active?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_pic?: StringFieldUpdateOperationsInput | string
    howyoudie?: StringFieldUpdateOperationsInput | string
    sexuality?: StringFieldUpdateOperationsInput | string
    interested_in_gender?: StringFieldUpdateOperationsInput | string
  }

  export type UserDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    pronounce?: UserDetailUpdatepronounceInput | string[]
    gender?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    last_active?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_pic?: StringFieldUpdateOperationsInput | string
    howyoudie?: StringFieldUpdateOperationsInput | string
    sexuality?: StringFieldUpdateOperationsInput | string
    interested_in_gender?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferencesCreateInput = {
    id?: string
    intensions?: UserPreferencesCreateintensionsInput | string[]
    prefered_min_age?: number | null
    prefered_max_age?: number | null
    max_distance?: number | null
    show_on_feed: boolean
    is_ghost_mode: boolean
    verified: boolean
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferencesUncheckedCreateInput = {
    id?: string
    intensions?: UserPreferencesCreateintensionsInput | string[]
    prefered_min_age?: number | null
    prefered_max_age?: number | null
    max_distance?: number | null
    show_on_feed: boolean
    is_ghost_mode: boolean
    verified: boolean
    user_id: string
  }

  export type UserPreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensions?: UserPreferencesUpdateintensionsInput | string[]
    prefered_min_age?: NullableIntFieldUpdateOperationsInput | number | null
    prefered_max_age?: NullableIntFieldUpdateOperationsInput | number | null
    max_distance?: NullableIntFieldUpdateOperationsInput | number | null
    show_on_feed?: BoolFieldUpdateOperationsInput | boolean
    is_ghost_mode?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensions?: UserPreferencesUpdateintensionsInput | string[]
    prefered_min_age?: NullableIntFieldUpdateOperationsInput | number | null
    prefered_max_age?: NullableIntFieldUpdateOperationsInput | number | null
    max_distance?: NullableIntFieldUpdateOperationsInput | number | null
    show_on_feed?: BoolFieldUpdateOperationsInput | boolean
    is_ghost_mode?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferencesCreateManyInput = {
    id?: string
    intensions?: UserPreferencesCreateintensionsInput | string[]
    prefered_min_age?: number | null
    prefered_max_age?: number | null
    max_distance?: number | null
    show_on_feed: boolean
    is_ghost_mode: boolean
    verified: boolean
    user_id: string
  }

  export type UserPreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensions?: UserPreferencesUpdateintensionsInput | string[]
    prefered_min_age?: NullableIntFieldUpdateOperationsInput | number | null
    prefered_max_age?: NullableIntFieldUpdateOperationsInput | number | null
    max_distance?: NullableIntFieldUpdateOperationsInput | number | null
    show_on_feed?: BoolFieldUpdateOperationsInput | boolean
    is_ghost_mode?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensions?: UserPreferencesUpdateintensionsInput | string[]
    prefered_min_age?: NullableIntFieldUpdateOperationsInput | number | null
    prefered_max_age?: NullableIntFieldUpdateOperationsInput | number | null
    max_distance?: NullableIntFieldUpdateOperationsInput | number | null
    show_on_feed?: BoolFieldUpdateOperationsInput | boolean
    is_ghost_mode?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type MediaCreateInput = {
    id?: string
    gallery?: MediaCreategalleryInput | string[]
    user: UserCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    gallery?: MediaCreategalleryInput | string[]
    user_id: string
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gallery?: MediaUpdategalleryInput | string[]
    user?: UserUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gallery?: MediaUpdategalleryInput | string[]
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type MediaCreateManyInput = {
    id?: string
    gallery?: MediaCreategalleryInput | string[]
    user_id: string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gallery?: MediaUpdategalleryInput | string[]
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gallery?: MediaUpdategalleryInput | string[]
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type LikedCreateInput = {
    id?: string
    liked_to: UserCreateNestedOneWithoutLiked_usersInput
    liked_by: UserCreateNestedOneWithoutGiven_likesInput
  }

  export type LikedUncheckedCreateInput = {
    id?: string
    liked_to_id: string
    liked_by_id: string
  }

  export type LikedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    liked_to?: UserUpdateOneRequiredWithoutLiked_usersNestedInput
    liked_by?: UserUpdateOneRequiredWithoutGiven_likesNestedInput
  }

  export type LikedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    liked_to_id?: StringFieldUpdateOperationsInput | string
    liked_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type LikedCreateManyInput = {
    id?: string
    liked_to_id: string
    liked_by_id: string
  }

  export type LikedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type LikedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    liked_to_id?: StringFieldUpdateOperationsInput | string
    liked_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    message: string
    created_at: Date | string
    from_user: UserCreateNestedOneWithoutMessage_from_userInput
    to_user: UserCreateNestedOneWithoutMessage_to_userInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    message: string
    message_from_user: string
    message_to_user: string
    created_at: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    from_user?: UserUpdateOneRequiredWithoutMessage_from_userNestedInput
    to_user?: UserUpdateOneRequiredWithoutMessage_to_userNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    message_from_user?: StringFieldUpdateOperationsInput | string
    message_to_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    message: string
    message_from_user: string
    message_to_user: string
    created_at: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    message_from_user?: StringFieldUpdateOperationsInput | string
    message_to_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserDetailNullableScalarRelationFilter = {
    is?: UserDetailWhereInput | null
    isNot?: UserDetailWhereInput | null
  }

  export type UserPreferencesNullableScalarRelationFilter = {
    is?: UserPreferencesWhereInput | null
    isNot?: UserPreferencesWhereInput | null
  }

  export type MediaNullableScalarRelationFilter = {
    is?: MediaWhereInput | null
    isNot?: MediaWhereInput | null
  }

  export type LikedListRelationFilter = {
    every?: LikedWhereInput
    some?: LikedWhereInput
    none?: LikedWhereInput
  }

  export type MatchesListRelationFilter = {
    every?: MatchesWhereInput
    some?: MatchesWhereInput
    none?: MatchesWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LikedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_seen?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_seen?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_seen?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MatchesUser1_idUser2_idCompoundUniqueInput = {
    user1_id: string
    user2_id: string
  }

  export type MatchesCountOrderByAggregateInput = {
    id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    is_matched_at?: SortOrder
    is_blocked?: SortOrder
    unmatched_at?: SortOrder
  }

  export type MatchesMaxOrderByAggregateInput = {
    id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    is_matched_at?: SortOrder
    is_blocked?: SortOrder
    unmatched_at?: SortOrder
  }

  export type MatchesMinOrderByAggregateInput = {
    id?: SortOrder
    user1_id?: SortOrder
    user2_id?: SortOrder
    is_matched_at?: SortOrder
    is_blocked?: SortOrder
    unmatched_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserDetailCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    pronounce?: SortOrder
    gender?: SortOrder
    date_of_birth?: SortOrder
    age?: SortOrder
    bio?: SortOrder
    height?: SortOrder
    education?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    last_active?: SortOrder
    profile_pic?: SortOrder
    howyoudie?: SortOrder
    sexuality?: SortOrder
    interested_in_gender?: SortOrder
    user_id?: SortOrder
  }

  export type UserDetailAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    date_of_birth?: SortOrder
    age?: SortOrder
    bio?: SortOrder
    height?: SortOrder
    education?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    last_active?: SortOrder
    profile_pic?: SortOrder
    howyoudie?: SortOrder
    sexuality?: SortOrder
    interested_in_gender?: SortOrder
    user_id?: SortOrder
  }

  export type UserDetailMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    gender?: SortOrder
    date_of_birth?: SortOrder
    age?: SortOrder
    bio?: SortOrder
    height?: SortOrder
    education?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    last_active?: SortOrder
    profile_pic?: SortOrder
    howyoudie?: SortOrder
    sexuality?: SortOrder
    interested_in_gender?: SortOrder
    user_id?: SortOrder
  }

  export type UserDetailSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserPreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    intensions?: SortOrder
    prefered_min_age?: SortOrder
    prefered_max_age?: SortOrder
    max_distance?: SortOrder
    show_on_feed?: SortOrder
    is_ghost_mode?: SortOrder
    verified?: SortOrder
    user_id?: SortOrder
  }

  export type UserPreferencesAvgOrderByAggregateInput = {
    prefered_min_age?: SortOrder
    prefered_max_age?: SortOrder
    max_distance?: SortOrder
  }

  export type UserPreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    prefered_min_age?: SortOrder
    prefered_max_age?: SortOrder
    max_distance?: SortOrder
    show_on_feed?: SortOrder
    is_ghost_mode?: SortOrder
    verified?: SortOrder
    user_id?: SortOrder
  }

  export type UserPreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    prefered_min_age?: SortOrder
    prefered_max_age?: SortOrder
    max_distance?: SortOrder
    show_on_feed?: SortOrder
    is_ghost_mode?: SortOrder
    verified?: SortOrder
    user_id?: SortOrder
  }

  export type UserPreferencesSumOrderByAggregateInput = {
    prefered_min_age?: SortOrder
    prefered_max_age?: SortOrder
    max_distance?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    gallery?: SortOrder
    user_id?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type LikedLiked_to_idLiked_by_idCompoundUniqueInput = {
    liked_to_id: string
    liked_by_id: string
  }

  export type LikedCountOrderByAggregateInput = {
    id?: SortOrder
    liked_to_id?: SortOrder
    liked_by_id?: SortOrder
  }

  export type LikedMaxOrderByAggregateInput = {
    id?: SortOrder
    liked_to_id?: SortOrder
    liked_by_id?: SortOrder
  }

  export type LikedMinOrderByAggregateInput = {
    id?: SortOrder
    liked_to_id?: SortOrder
    liked_by_id?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    message_from_user?: SortOrder
    message_to_user?: SortOrder
    created_at?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    message_from_user?: SortOrder
    message_to_user?: SortOrder
    created_at?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    message_from_user?: SortOrder
    message_to_user?: SortOrder
    created_at?: SortOrder
  }

  export type UserDetailCreateNestedOneWithoutUserInput = {
    create?: XOR<UserDetailCreateWithoutUserInput, UserDetailUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDetailCreateOrConnectWithoutUserInput
    connect?: UserDetailWhereUniqueInput
  }

  export type UserPreferencesCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type MediaCreateNestedOneWithoutUserInput = {
    create?: XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput>
    connectOrCreate?: MediaCreateOrConnectWithoutUserInput
    connect?: MediaWhereUniqueInput
  }

  export type LikedCreateNestedManyWithoutLiked_toInput = {
    create?: XOR<LikedCreateWithoutLiked_toInput, LikedUncheckedCreateWithoutLiked_toInput> | LikedCreateWithoutLiked_toInput[] | LikedUncheckedCreateWithoutLiked_toInput[]
    connectOrCreate?: LikedCreateOrConnectWithoutLiked_toInput | LikedCreateOrConnectWithoutLiked_toInput[]
    createMany?: LikedCreateManyLiked_toInputEnvelope
    connect?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
  }

  export type LikedCreateNestedManyWithoutLiked_byInput = {
    create?: XOR<LikedCreateWithoutLiked_byInput, LikedUncheckedCreateWithoutLiked_byInput> | LikedCreateWithoutLiked_byInput[] | LikedUncheckedCreateWithoutLiked_byInput[]
    connectOrCreate?: LikedCreateOrConnectWithoutLiked_byInput | LikedCreateOrConnectWithoutLiked_byInput[]
    createMany?: LikedCreateManyLiked_byInputEnvelope
    connect?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
  }

  export type MatchesCreateNestedManyWithoutUser1Input = {
    create?: XOR<MatchesCreateWithoutUser1Input, MatchesUncheckedCreateWithoutUser1Input> | MatchesCreateWithoutUser1Input[] | MatchesUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchesCreateOrConnectWithoutUser1Input | MatchesCreateOrConnectWithoutUser1Input[]
    createMany?: MatchesCreateManyUser1InputEnvelope
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
  }

  export type MatchesCreateNestedManyWithoutUser2Input = {
    create?: XOR<MatchesCreateWithoutUser2Input, MatchesUncheckedCreateWithoutUser2Input> | MatchesCreateWithoutUser2Input[] | MatchesUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchesCreateOrConnectWithoutUser2Input | MatchesCreateOrConnectWithoutUser2Input[]
    createMany?: MatchesCreateManyUser2InputEnvelope
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutFrom_userInput = {
    create?: XOR<MessageCreateWithoutFrom_userInput, MessageUncheckedCreateWithoutFrom_userInput> | MessageCreateWithoutFrom_userInput[] | MessageUncheckedCreateWithoutFrom_userInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFrom_userInput | MessageCreateOrConnectWithoutFrom_userInput[]
    createMany?: MessageCreateManyFrom_userInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutTo_userInput = {
    create?: XOR<MessageCreateWithoutTo_userInput, MessageUncheckedCreateWithoutTo_userInput> | MessageCreateWithoutTo_userInput[] | MessageUncheckedCreateWithoutTo_userInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTo_userInput | MessageCreateOrConnectWithoutTo_userInput[]
    createMany?: MessageCreateManyTo_userInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserDetailUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserDetailCreateWithoutUserInput, UserDetailUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDetailCreateOrConnectWithoutUserInput
    connect?: UserDetailWhereUniqueInput
  }

  export type UserPreferencesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type MediaUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput>
    connectOrCreate?: MediaCreateOrConnectWithoutUserInput
    connect?: MediaWhereUniqueInput
  }

  export type LikedUncheckedCreateNestedManyWithoutLiked_toInput = {
    create?: XOR<LikedCreateWithoutLiked_toInput, LikedUncheckedCreateWithoutLiked_toInput> | LikedCreateWithoutLiked_toInput[] | LikedUncheckedCreateWithoutLiked_toInput[]
    connectOrCreate?: LikedCreateOrConnectWithoutLiked_toInput | LikedCreateOrConnectWithoutLiked_toInput[]
    createMany?: LikedCreateManyLiked_toInputEnvelope
    connect?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
  }

  export type LikedUncheckedCreateNestedManyWithoutLiked_byInput = {
    create?: XOR<LikedCreateWithoutLiked_byInput, LikedUncheckedCreateWithoutLiked_byInput> | LikedCreateWithoutLiked_byInput[] | LikedUncheckedCreateWithoutLiked_byInput[]
    connectOrCreate?: LikedCreateOrConnectWithoutLiked_byInput | LikedCreateOrConnectWithoutLiked_byInput[]
    createMany?: LikedCreateManyLiked_byInputEnvelope
    connect?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
  }

  export type MatchesUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<MatchesCreateWithoutUser1Input, MatchesUncheckedCreateWithoutUser1Input> | MatchesCreateWithoutUser1Input[] | MatchesUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchesCreateOrConnectWithoutUser1Input | MatchesCreateOrConnectWithoutUser1Input[]
    createMany?: MatchesCreateManyUser1InputEnvelope
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
  }

  export type MatchesUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<MatchesCreateWithoutUser2Input, MatchesUncheckedCreateWithoutUser2Input> | MatchesCreateWithoutUser2Input[] | MatchesUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchesCreateOrConnectWithoutUser2Input | MatchesCreateOrConnectWithoutUser2Input[]
    createMany?: MatchesCreateManyUser2InputEnvelope
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutFrom_userInput = {
    create?: XOR<MessageCreateWithoutFrom_userInput, MessageUncheckedCreateWithoutFrom_userInput> | MessageCreateWithoutFrom_userInput[] | MessageUncheckedCreateWithoutFrom_userInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFrom_userInput | MessageCreateOrConnectWithoutFrom_userInput[]
    createMany?: MessageCreateManyFrom_userInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutTo_userInput = {
    create?: XOR<MessageCreateWithoutTo_userInput, MessageUncheckedCreateWithoutTo_userInput> | MessageCreateWithoutTo_userInput[] | MessageUncheckedCreateWithoutTo_userInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTo_userInput | MessageCreateOrConnectWithoutTo_userInput[]
    createMany?: MessageCreateManyTo_userInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserDetailUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserDetailCreateWithoutUserInput, UserDetailUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDetailCreateOrConnectWithoutUserInput
    upsert?: UserDetailUpsertWithoutUserInput
    disconnect?: UserDetailWhereInput | boolean
    delete?: UserDetailWhereInput | boolean
    connect?: UserDetailWhereUniqueInput
    update?: XOR<XOR<UserDetailUpdateToOneWithWhereWithoutUserInput, UserDetailUpdateWithoutUserInput>, UserDetailUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type MediaUpdateOneWithoutUserNestedInput = {
    create?: XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput>
    connectOrCreate?: MediaCreateOrConnectWithoutUserInput
    upsert?: MediaUpsertWithoutUserInput
    disconnect?: MediaWhereInput | boolean
    delete?: MediaWhereInput | boolean
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutUserInput, MediaUpdateWithoutUserInput>, MediaUncheckedUpdateWithoutUserInput>
  }

  export type LikedUpdateManyWithoutLiked_toNestedInput = {
    create?: XOR<LikedCreateWithoutLiked_toInput, LikedUncheckedCreateWithoutLiked_toInput> | LikedCreateWithoutLiked_toInput[] | LikedUncheckedCreateWithoutLiked_toInput[]
    connectOrCreate?: LikedCreateOrConnectWithoutLiked_toInput | LikedCreateOrConnectWithoutLiked_toInput[]
    upsert?: LikedUpsertWithWhereUniqueWithoutLiked_toInput | LikedUpsertWithWhereUniqueWithoutLiked_toInput[]
    createMany?: LikedCreateManyLiked_toInputEnvelope
    set?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    disconnect?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    delete?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    connect?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    update?: LikedUpdateWithWhereUniqueWithoutLiked_toInput | LikedUpdateWithWhereUniqueWithoutLiked_toInput[]
    updateMany?: LikedUpdateManyWithWhereWithoutLiked_toInput | LikedUpdateManyWithWhereWithoutLiked_toInput[]
    deleteMany?: LikedScalarWhereInput | LikedScalarWhereInput[]
  }

  export type LikedUpdateManyWithoutLiked_byNestedInput = {
    create?: XOR<LikedCreateWithoutLiked_byInput, LikedUncheckedCreateWithoutLiked_byInput> | LikedCreateWithoutLiked_byInput[] | LikedUncheckedCreateWithoutLiked_byInput[]
    connectOrCreate?: LikedCreateOrConnectWithoutLiked_byInput | LikedCreateOrConnectWithoutLiked_byInput[]
    upsert?: LikedUpsertWithWhereUniqueWithoutLiked_byInput | LikedUpsertWithWhereUniqueWithoutLiked_byInput[]
    createMany?: LikedCreateManyLiked_byInputEnvelope
    set?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    disconnect?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    delete?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    connect?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    update?: LikedUpdateWithWhereUniqueWithoutLiked_byInput | LikedUpdateWithWhereUniqueWithoutLiked_byInput[]
    updateMany?: LikedUpdateManyWithWhereWithoutLiked_byInput | LikedUpdateManyWithWhereWithoutLiked_byInput[]
    deleteMany?: LikedScalarWhereInput | LikedScalarWhereInput[]
  }

  export type MatchesUpdateManyWithoutUser1NestedInput = {
    create?: XOR<MatchesCreateWithoutUser1Input, MatchesUncheckedCreateWithoutUser1Input> | MatchesCreateWithoutUser1Input[] | MatchesUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchesCreateOrConnectWithoutUser1Input | MatchesCreateOrConnectWithoutUser1Input[]
    upsert?: MatchesUpsertWithWhereUniqueWithoutUser1Input | MatchesUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: MatchesCreateManyUser1InputEnvelope
    set?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    disconnect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    delete?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    update?: MatchesUpdateWithWhereUniqueWithoutUser1Input | MatchesUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: MatchesUpdateManyWithWhereWithoutUser1Input | MatchesUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: MatchesScalarWhereInput | MatchesScalarWhereInput[]
  }

  export type MatchesUpdateManyWithoutUser2NestedInput = {
    create?: XOR<MatchesCreateWithoutUser2Input, MatchesUncheckedCreateWithoutUser2Input> | MatchesCreateWithoutUser2Input[] | MatchesUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchesCreateOrConnectWithoutUser2Input | MatchesCreateOrConnectWithoutUser2Input[]
    upsert?: MatchesUpsertWithWhereUniqueWithoutUser2Input | MatchesUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: MatchesCreateManyUser2InputEnvelope
    set?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    disconnect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    delete?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    update?: MatchesUpdateWithWhereUniqueWithoutUser2Input | MatchesUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: MatchesUpdateManyWithWhereWithoutUser2Input | MatchesUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: MatchesScalarWhereInput | MatchesScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutFrom_userNestedInput = {
    create?: XOR<MessageCreateWithoutFrom_userInput, MessageUncheckedCreateWithoutFrom_userInput> | MessageCreateWithoutFrom_userInput[] | MessageUncheckedCreateWithoutFrom_userInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFrom_userInput | MessageCreateOrConnectWithoutFrom_userInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutFrom_userInput | MessageUpsertWithWhereUniqueWithoutFrom_userInput[]
    createMany?: MessageCreateManyFrom_userInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutFrom_userInput | MessageUpdateWithWhereUniqueWithoutFrom_userInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutFrom_userInput | MessageUpdateManyWithWhereWithoutFrom_userInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutTo_userNestedInput = {
    create?: XOR<MessageCreateWithoutTo_userInput, MessageUncheckedCreateWithoutTo_userInput> | MessageCreateWithoutTo_userInput[] | MessageUncheckedCreateWithoutTo_userInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTo_userInput | MessageCreateOrConnectWithoutTo_userInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutTo_userInput | MessageUpsertWithWhereUniqueWithoutTo_userInput[]
    createMany?: MessageCreateManyTo_userInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutTo_userInput | MessageUpdateWithWhereUniqueWithoutTo_userInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutTo_userInput | MessageUpdateManyWithWhereWithoutTo_userInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserDetailUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserDetailCreateWithoutUserInput, UserDetailUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDetailCreateOrConnectWithoutUserInput
    upsert?: UserDetailUpsertWithoutUserInput
    disconnect?: UserDetailWhereInput | boolean
    delete?: UserDetailWhereInput | boolean
    connect?: UserDetailWhereUniqueInput
    update?: XOR<XOR<UserDetailUpdateToOneWithWhereWithoutUserInput, UserDetailUpdateWithoutUserInput>, UserDetailUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type MediaUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput>
    connectOrCreate?: MediaCreateOrConnectWithoutUserInput
    upsert?: MediaUpsertWithoutUserInput
    disconnect?: MediaWhereInput | boolean
    delete?: MediaWhereInput | boolean
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutUserInput, MediaUpdateWithoutUserInput>, MediaUncheckedUpdateWithoutUserInput>
  }

  export type LikedUncheckedUpdateManyWithoutLiked_toNestedInput = {
    create?: XOR<LikedCreateWithoutLiked_toInput, LikedUncheckedCreateWithoutLiked_toInput> | LikedCreateWithoutLiked_toInput[] | LikedUncheckedCreateWithoutLiked_toInput[]
    connectOrCreate?: LikedCreateOrConnectWithoutLiked_toInput | LikedCreateOrConnectWithoutLiked_toInput[]
    upsert?: LikedUpsertWithWhereUniqueWithoutLiked_toInput | LikedUpsertWithWhereUniqueWithoutLiked_toInput[]
    createMany?: LikedCreateManyLiked_toInputEnvelope
    set?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    disconnect?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    delete?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    connect?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    update?: LikedUpdateWithWhereUniqueWithoutLiked_toInput | LikedUpdateWithWhereUniqueWithoutLiked_toInput[]
    updateMany?: LikedUpdateManyWithWhereWithoutLiked_toInput | LikedUpdateManyWithWhereWithoutLiked_toInput[]
    deleteMany?: LikedScalarWhereInput | LikedScalarWhereInput[]
  }

  export type LikedUncheckedUpdateManyWithoutLiked_byNestedInput = {
    create?: XOR<LikedCreateWithoutLiked_byInput, LikedUncheckedCreateWithoutLiked_byInput> | LikedCreateWithoutLiked_byInput[] | LikedUncheckedCreateWithoutLiked_byInput[]
    connectOrCreate?: LikedCreateOrConnectWithoutLiked_byInput | LikedCreateOrConnectWithoutLiked_byInput[]
    upsert?: LikedUpsertWithWhereUniqueWithoutLiked_byInput | LikedUpsertWithWhereUniqueWithoutLiked_byInput[]
    createMany?: LikedCreateManyLiked_byInputEnvelope
    set?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    disconnect?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    delete?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    connect?: LikedWhereUniqueInput | LikedWhereUniqueInput[]
    update?: LikedUpdateWithWhereUniqueWithoutLiked_byInput | LikedUpdateWithWhereUniqueWithoutLiked_byInput[]
    updateMany?: LikedUpdateManyWithWhereWithoutLiked_byInput | LikedUpdateManyWithWhereWithoutLiked_byInput[]
    deleteMany?: LikedScalarWhereInput | LikedScalarWhereInput[]
  }

  export type MatchesUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<MatchesCreateWithoutUser1Input, MatchesUncheckedCreateWithoutUser1Input> | MatchesCreateWithoutUser1Input[] | MatchesUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: MatchesCreateOrConnectWithoutUser1Input | MatchesCreateOrConnectWithoutUser1Input[]
    upsert?: MatchesUpsertWithWhereUniqueWithoutUser1Input | MatchesUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: MatchesCreateManyUser1InputEnvelope
    set?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    disconnect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    delete?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    update?: MatchesUpdateWithWhereUniqueWithoutUser1Input | MatchesUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: MatchesUpdateManyWithWhereWithoutUser1Input | MatchesUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: MatchesScalarWhereInput | MatchesScalarWhereInput[]
  }

  export type MatchesUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<MatchesCreateWithoutUser2Input, MatchesUncheckedCreateWithoutUser2Input> | MatchesCreateWithoutUser2Input[] | MatchesUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: MatchesCreateOrConnectWithoutUser2Input | MatchesCreateOrConnectWithoutUser2Input[]
    upsert?: MatchesUpsertWithWhereUniqueWithoutUser2Input | MatchesUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: MatchesCreateManyUser2InputEnvelope
    set?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    disconnect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    delete?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    update?: MatchesUpdateWithWhereUniqueWithoutUser2Input | MatchesUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: MatchesUpdateManyWithWhereWithoutUser2Input | MatchesUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: MatchesScalarWhereInput | MatchesScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutFrom_userNestedInput = {
    create?: XOR<MessageCreateWithoutFrom_userInput, MessageUncheckedCreateWithoutFrom_userInput> | MessageCreateWithoutFrom_userInput[] | MessageUncheckedCreateWithoutFrom_userInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutFrom_userInput | MessageCreateOrConnectWithoutFrom_userInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutFrom_userInput | MessageUpsertWithWhereUniqueWithoutFrom_userInput[]
    createMany?: MessageCreateManyFrom_userInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutFrom_userInput | MessageUpdateWithWhereUniqueWithoutFrom_userInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutFrom_userInput | MessageUpdateManyWithWhereWithoutFrom_userInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutTo_userNestedInput = {
    create?: XOR<MessageCreateWithoutTo_userInput, MessageUncheckedCreateWithoutTo_userInput> | MessageCreateWithoutTo_userInput[] | MessageUncheckedCreateWithoutTo_userInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTo_userInput | MessageCreateOrConnectWithoutTo_userInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutTo_userInput | MessageUpsertWithWhereUniqueWithoutTo_userInput[]
    createMany?: MessageCreateManyTo_userInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutTo_userInput | MessageUpdateWithWhereUniqueWithoutTo_userInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutTo_userInput | MessageUpdateManyWithWhereWithoutTo_userInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMatches1Input = {
    create?: XOR<UserCreateWithoutMatches1Input, UserUncheckedCreateWithoutMatches1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatches1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatches2Input = {
    create?: XOR<UserCreateWithoutMatches2Input, UserUncheckedCreateWithoutMatches2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatches2Input
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutMatches1NestedInput = {
    create?: XOR<UserCreateWithoutMatches1Input, UserUncheckedCreateWithoutMatches1Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatches1Input
    upsert?: UserUpsertWithoutMatches1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatches1Input, UserUpdateWithoutMatches1Input>, UserUncheckedUpdateWithoutMatches1Input>
  }

  export type UserUpdateOneRequiredWithoutMatches2NestedInput = {
    create?: XOR<UserCreateWithoutMatches2Input, UserUncheckedCreateWithoutMatches2Input>
    connectOrCreate?: UserCreateOrConnectWithoutMatches2Input
    upsert?: UserUpsertWithoutMatches2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatches2Input, UserUpdateWithoutMatches2Input>, UserUncheckedUpdateWithoutMatches2Input>
  }

  export type UserDetailCreatepronounceInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutUser_detailsInput = {
    create?: XOR<UserCreateWithoutUser_detailsInput, UserUncheckedCreateWithoutUser_detailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_detailsInput
    connect?: UserWhereUniqueInput
  }

  export type UserDetailUpdatepronounceInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUser_detailsNestedInput = {
    create?: XOR<UserCreateWithoutUser_detailsInput, UserUncheckedCreateWithoutUser_detailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_detailsInput
    upsert?: UserUpsertWithoutUser_detailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_detailsInput, UserUpdateWithoutUser_detailsInput>, UserUncheckedUpdateWithoutUser_detailsInput>
  }

  export type UserPreferencesCreateintensionsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type UserPreferencesUpdateintensionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type MediaCreategalleryInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutMediaInput = {
    create?: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediaInput
    connect?: UserWhereUniqueInput
  }

  export type MediaUpdategalleryInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediaInput
    upsert?: UserUpsertWithoutMediaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMediaInput, UserUpdateWithoutMediaInput>, UserUncheckedUpdateWithoutMediaInput>
  }

  export type UserCreateNestedOneWithoutLiked_usersInput = {
    create?: XOR<UserCreateWithoutLiked_usersInput, UserUncheckedCreateWithoutLiked_usersInput>
    connectOrCreate?: UserCreateOrConnectWithoutLiked_usersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGiven_likesInput = {
    create?: XOR<UserCreateWithoutGiven_likesInput, UserUncheckedCreateWithoutGiven_likesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGiven_likesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLiked_usersNestedInput = {
    create?: XOR<UserCreateWithoutLiked_usersInput, UserUncheckedCreateWithoutLiked_usersInput>
    connectOrCreate?: UserCreateOrConnectWithoutLiked_usersInput
    upsert?: UserUpsertWithoutLiked_usersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLiked_usersInput, UserUpdateWithoutLiked_usersInput>, UserUncheckedUpdateWithoutLiked_usersInput>
  }

  export type UserUpdateOneRequiredWithoutGiven_likesNestedInput = {
    create?: XOR<UserCreateWithoutGiven_likesInput, UserUncheckedCreateWithoutGiven_likesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGiven_likesInput
    upsert?: UserUpsertWithoutGiven_likesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGiven_likesInput, UserUpdateWithoutGiven_likesInput>, UserUncheckedUpdateWithoutGiven_likesInput>
  }

  export type UserCreateNestedOneWithoutMessage_from_userInput = {
    create?: XOR<UserCreateWithoutMessage_from_userInput, UserUncheckedCreateWithoutMessage_from_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessage_from_userInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessage_to_userInput = {
    create?: XOR<UserCreateWithoutMessage_to_userInput, UserUncheckedCreateWithoutMessage_to_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessage_to_userInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessage_from_userNestedInput = {
    create?: XOR<UserCreateWithoutMessage_from_userInput, UserUncheckedCreateWithoutMessage_from_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessage_from_userInput
    upsert?: UserUpsertWithoutMessage_from_userInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessage_from_userInput, UserUpdateWithoutMessage_from_userInput>, UserUncheckedUpdateWithoutMessage_from_userInput>
  }

  export type UserUpdateOneRequiredWithoutMessage_to_userNestedInput = {
    create?: XOR<UserCreateWithoutMessage_to_userInput, UserUncheckedCreateWithoutMessage_to_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessage_to_userInput
    upsert?: UserUpsertWithoutMessage_to_userInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessage_to_userInput, UserUpdateWithoutMessage_to_userInput>, UserUncheckedUpdateWithoutMessage_to_userInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserDetailCreateWithoutUserInput = {
    id?: string
    first_name: string
    last_name: string
    pronounce?: UserDetailCreatepronounceInput | string[]
    gender: string
    date_of_birth: Date | string
    age: string
    bio: string
    height: string
    education: string
    location: string
    latitude?: number | null
    longitude?: number | null
    last_active: Date | string
    profile_pic: string
    howyoudie: string
    sexuality: string
    interested_in_gender: string
  }

  export type UserDetailUncheckedCreateWithoutUserInput = {
    id?: string
    first_name: string
    last_name: string
    pronounce?: UserDetailCreatepronounceInput | string[]
    gender: string
    date_of_birth: Date | string
    age: string
    bio: string
    height: string
    education: string
    location: string
    latitude?: number | null
    longitude?: number | null
    last_active: Date | string
    profile_pic: string
    howyoudie: string
    sexuality: string
    interested_in_gender: string
  }

  export type UserDetailCreateOrConnectWithoutUserInput = {
    where: UserDetailWhereUniqueInput
    create: XOR<UserDetailCreateWithoutUserInput, UserDetailUncheckedCreateWithoutUserInput>
  }

  export type UserPreferencesCreateWithoutUserInput = {
    id?: string
    intensions?: UserPreferencesCreateintensionsInput | string[]
    prefered_min_age?: number | null
    prefered_max_age?: number | null
    max_distance?: number | null
    show_on_feed: boolean
    is_ghost_mode: boolean
    verified: boolean
  }

  export type UserPreferencesUncheckedCreateWithoutUserInput = {
    id?: string
    intensions?: UserPreferencesCreateintensionsInput | string[]
    prefered_min_age?: number | null
    prefered_max_age?: number | null
    max_distance?: number | null
    show_on_feed: boolean
    is_ghost_mode: boolean
    verified: boolean
  }

  export type UserPreferencesCreateOrConnectWithoutUserInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
  }

  export type MediaCreateWithoutUserInput = {
    id?: string
    gallery?: MediaCreategalleryInput | string[]
  }

  export type MediaUncheckedCreateWithoutUserInput = {
    id?: string
    gallery?: MediaCreategalleryInput | string[]
  }

  export type MediaCreateOrConnectWithoutUserInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput>
  }

  export type LikedCreateWithoutLiked_toInput = {
    id?: string
    liked_by: UserCreateNestedOneWithoutGiven_likesInput
  }

  export type LikedUncheckedCreateWithoutLiked_toInput = {
    id?: string
    liked_by_id: string
  }

  export type LikedCreateOrConnectWithoutLiked_toInput = {
    where: LikedWhereUniqueInput
    create: XOR<LikedCreateWithoutLiked_toInput, LikedUncheckedCreateWithoutLiked_toInput>
  }

  export type LikedCreateManyLiked_toInputEnvelope = {
    data: LikedCreateManyLiked_toInput | LikedCreateManyLiked_toInput[]
    skipDuplicates?: boolean
  }

  export type LikedCreateWithoutLiked_byInput = {
    id?: string
    liked_to: UserCreateNestedOneWithoutLiked_usersInput
  }

  export type LikedUncheckedCreateWithoutLiked_byInput = {
    id?: string
    liked_to_id: string
  }

  export type LikedCreateOrConnectWithoutLiked_byInput = {
    where: LikedWhereUniqueInput
    create: XOR<LikedCreateWithoutLiked_byInput, LikedUncheckedCreateWithoutLiked_byInput>
  }

  export type LikedCreateManyLiked_byInputEnvelope = {
    data: LikedCreateManyLiked_byInput | LikedCreateManyLiked_byInput[]
    skipDuplicates?: boolean
  }

  export type MatchesCreateWithoutUser1Input = {
    id?: string
    is_matched_at: Date | string
    is_blocked: boolean
    unmatched_at?: Date | string | null
    user2: UserCreateNestedOneWithoutMatches2Input
  }

  export type MatchesUncheckedCreateWithoutUser1Input = {
    id?: string
    user2_id: string
    is_matched_at: Date | string
    is_blocked: boolean
    unmatched_at?: Date | string | null
  }

  export type MatchesCreateOrConnectWithoutUser1Input = {
    where: MatchesWhereUniqueInput
    create: XOR<MatchesCreateWithoutUser1Input, MatchesUncheckedCreateWithoutUser1Input>
  }

  export type MatchesCreateManyUser1InputEnvelope = {
    data: MatchesCreateManyUser1Input | MatchesCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type MatchesCreateWithoutUser2Input = {
    id?: string
    is_matched_at: Date | string
    is_blocked: boolean
    unmatched_at?: Date | string | null
    user1: UserCreateNestedOneWithoutMatches1Input
  }

  export type MatchesUncheckedCreateWithoutUser2Input = {
    id?: string
    user1_id: string
    is_matched_at: Date | string
    is_blocked: boolean
    unmatched_at?: Date | string | null
  }

  export type MatchesCreateOrConnectWithoutUser2Input = {
    where: MatchesWhereUniqueInput
    create: XOR<MatchesCreateWithoutUser2Input, MatchesUncheckedCreateWithoutUser2Input>
  }

  export type MatchesCreateManyUser2InputEnvelope = {
    data: MatchesCreateManyUser2Input | MatchesCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutFrom_userInput = {
    id?: string
    message: string
    created_at: Date | string
    to_user: UserCreateNestedOneWithoutMessage_to_userInput
  }

  export type MessageUncheckedCreateWithoutFrom_userInput = {
    id?: string
    message: string
    message_to_user: string
    created_at: Date | string
  }

  export type MessageCreateOrConnectWithoutFrom_userInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutFrom_userInput, MessageUncheckedCreateWithoutFrom_userInput>
  }

  export type MessageCreateManyFrom_userInputEnvelope = {
    data: MessageCreateManyFrom_userInput | MessageCreateManyFrom_userInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutTo_userInput = {
    id?: string
    message: string
    created_at: Date | string
    from_user: UserCreateNestedOneWithoutMessage_from_userInput
  }

  export type MessageUncheckedCreateWithoutTo_userInput = {
    id?: string
    message: string
    message_from_user: string
    created_at: Date | string
  }

  export type MessageCreateOrConnectWithoutTo_userInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutTo_userInput, MessageUncheckedCreateWithoutTo_userInput>
  }

  export type MessageCreateManyTo_userInputEnvelope = {
    data: MessageCreateManyTo_userInput | MessageCreateManyTo_userInput[]
    skipDuplicates?: boolean
  }

  export type UserDetailUpsertWithoutUserInput = {
    update: XOR<UserDetailUpdateWithoutUserInput, UserDetailUncheckedUpdateWithoutUserInput>
    create: XOR<UserDetailCreateWithoutUserInput, UserDetailUncheckedCreateWithoutUserInput>
    where?: UserDetailWhereInput
  }

  export type UserDetailUpdateToOneWithWhereWithoutUserInput = {
    where?: UserDetailWhereInput
    data: XOR<UserDetailUpdateWithoutUserInput, UserDetailUncheckedUpdateWithoutUserInput>
  }

  export type UserDetailUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    pronounce?: UserDetailUpdatepronounceInput | string[]
    gender?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    last_active?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_pic?: StringFieldUpdateOperationsInput | string
    howyoudie?: StringFieldUpdateOperationsInput | string
    sexuality?: StringFieldUpdateOperationsInput | string
    interested_in_gender?: StringFieldUpdateOperationsInput | string
  }

  export type UserDetailUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    pronounce?: UserDetailUpdatepronounceInput | string[]
    gender?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    last_active?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_pic?: StringFieldUpdateOperationsInput | string
    howyoudie?: StringFieldUpdateOperationsInput | string
    sexuality?: StringFieldUpdateOperationsInput | string
    interested_in_gender?: StringFieldUpdateOperationsInput | string
  }

  export type UserPreferencesUpsertWithoutUserInput = {
    update: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    where?: UserPreferencesWhereInput
  }

  export type UserPreferencesUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPreferencesWhereInput
    data: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensions?: UserPreferencesUpdateintensionsInput | string[]
    prefered_min_age?: NullableIntFieldUpdateOperationsInput | number | null
    prefered_max_age?: NullableIntFieldUpdateOperationsInput | number | null
    max_distance?: NullableIntFieldUpdateOperationsInput | number | null
    show_on_feed?: BoolFieldUpdateOperationsInput | boolean
    is_ghost_mode?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPreferencesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    intensions?: UserPreferencesUpdateintensionsInput | string[]
    prefered_min_age?: NullableIntFieldUpdateOperationsInput | number | null
    prefered_max_age?: NullableIntFieldUpdateOperationsInput | number | null
    max_distance?: NullableIntFieldUpdateOperationsInput | number | null
    show_on_feed?: BoolFieldUpdateOperationsInput | boolean
    is_ghost_mode?: BoolFieldUpdateOperationsInput | boolean
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MediaUpsertWithoutUserInput = {
    update: XOR<MediaUpdateWithoutUserInput, MediaUncheckedUpdateWithoutUserInput>
    create: XOR<MediaCreateWithoutUserInput, MediaUncheckedCreateWithoutUserInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutUserInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutUserInput, MediaUncheckedUpdateWithoutUserInput>
  }

  export type MediaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gallery?: MediaUpdategalleryInput | string[]
  }

  export type MediaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gallery?: MediaUpdategalleryInput | string[]
  }

  export type LikedUpsertWithWhereUniqueWithoutLiked_toInput = {
    where: LikedWhereUniqueInput
    update: XOR<LikedUpdateWithoutLiked_toInput, LikedUncheckedUpdateWithoutLiked_toInput>
    create: XOR<LikedCreateWithoutLiked_toInput, LikedUncheckedCreateWithoutLiked_toInput>
  }

  export type LikedUpdateWithWhereUniqueWithoutLiked_toInput = {
    where: LikedWhereUniqueInput
    data: XOR<LikedUpdateWithoutLiked_toInput, LikedUncheckedUpdateWithoutLiked_toInput>
  }

  export type LikedUpdateManyWithWhereWithoutLiked_toInput = {
    where: LikedScalarWhereInput
    data: XOR<LikedUpdateManyMutationInput, LikedUncheckedUpdateManyWithoutLiked_toInput>
  }

  export type LikedScalarWhereInput = {
    AND?: LikedScalarWhereInput | LikedScalarWhereInput[]
    OR?: LikedScalarWhereInput[]
    NOT?: LikedScalarWhereInput | LikedScalarWhereInput[]
    id?: StringFilter<"Liked"> | string
    liked_to_id?: StringFilter<"Liked"> | string
    liked_by_id?: StringFilter<"Liked"> | string
  }

  export type LikedUpsertWithWhereUniqueWithoutLiked_byInput = {
    where: LikedWhereUniqueInput
    update: XOR<LikedUpdateWithoutLiked_byInput, LikedUncheckedUpdateWithoutLiked_byInput>
    create: XOR<LikedCreateWithoutLiked_byInput, LikedUncheckedCreateWithoutLiked_byInput>
  }

  export type LikedUpdateWithWhereUniqueWithoutLiked_byInput = {
    where: LikedWhereUniqueInput
    data: XOR<LikedUpdateWithoutLiked_byInput, LikedUncheckedUpdateWithoutLiked_byInput>
  }

  export type LikedUpdateManyWithWhereWithoutLiked_byInput = {
    where: LikedScalarWhereInput
    data: XOR<LikedUpdateManyMutationInput, LikedUncheckedUpdateManyWithoutLiked_byInput>
  }

  export type MatchesUpsertWithWhereUniqueWithoutUser1Input = {
    where: MatchesWhereUniqueInput
    update: XOR<MatchesUpdateWithoutUser1Input, MatchesUncheckedUpdateWithoutUser1Input>
    create: XOR<MatchesCreateWithoutUser1Input, MatchesUncheckedCreateWithoutUser1Input>
  }

  export type MatchesUpdateWithWhereUniqueWithoutUser1Input = {
    where: MatchesWhereUniqueInput
    data: XOR<MatchesUpdateWithoutUser1Input, MatchesUncheckedUpdateWithoutUser1Input>
  }

  export type MatchesUpdateManyWithWhereWithoutUser1Input = {
    where: MatchesScalarWhereInput
    data: XOR<MatchesUpdateManyMutationInput, MatchesUncheckedUpdateManyWithoutUser1Input>
  }

  export type MatchesScalarWhereInput = {
    AND?: MatchesScalarWhereInput | MatchesScalarWhereInput[]
    OR?: MatchesScalarWhereInput[]
    NOT?: MatchesScalarWhereInput | MatchesScalarWhereInput[]
    id?: StringFilter<"Matches"> | string
    user1_id?: StringFilter<"Matches"> | string
    user2_id?: StringFilter<"Matches"> | string
    is_matched_at?: DateTimeFilter<"Matches"> | Date | string
    is_blocked?: BoolFilter<"Matches"> | boolean
    unmatched_at?: DateTimeNullableFilter<"Matches"> | Date | string | null
  }

  export type MatchesUpsertWithWhereUniqueWithoutUser2Input = {
    where: MatchesWhereUniqueInput
    update: XOR<MatchesUpdateWithoutUser2Input, MatchesUncheckedUpdateWithoutUser2Input>
    create: XOR<MatchesCreateWithoutUser2Input, MatchesUncheckedCreateWithoutUser2Input>
  }

  export type MatchesUpdateWithWhereUniqueWithoutUser2Input = {
    where: MatchesWhereUniqueInput
    data: XOR<MatchesUpdateWithoutUser2Input, MatchesUncheckedUpdateWithoutUser2Input>
  }

  export type MatchesUpdateManyWithWhereWithoutUser2Input = {
    where: MatchesScalarWhereInput
    data: XOR<MatchesUpdateManyMutationInput, MatchesUncheckedUpdateManyWithoutUser2Input>
  }

  export type MessageUpsertWithWhereUniqueWithoutFrom_userInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutFrom_userInput, MessageUncheckedUpdateWithoutFrom_userInput>
    create: XOR<MessageCreateWithoutFrom_userInput, MessageUncheckedCreateWithoutFrom_userInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutFrom_userInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutFrom_userInput, MessageUncheckedUpdateWithoutFrom_userInput>
  }

  export type MessageUpdateManyWithWhereWithoutFrom_userInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutFrom_userInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    message?: StringFilter<"Message"> | string
    message_from_user?: StringFilter<"Message"> | string
    message_to_user?: StringFilter<"Message"> | string
    created_at?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutTo_userInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutTo_userInput, MessageUncheckedUpdateWithoutTo_userInput>
    create: XOR<MessageCreateWithoutTo_userInput, MessageUncheckedCreateWithoutTo_userInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutTo_userInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutTo_userInput, MessageUncheckedUpdateWithoutTo_userInput>
  }

  export type MessageUpdateManyWithWhereWithoutTo_userInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutTo_userInput>
  }

  export type UserCreateWithoutMatches1Input = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    media?: MediaCreateNestedOneWithoutUserInput
    liked_users?: LikedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedCreateNestedManyWithoutLiked_byInput
    matches2?: MatchesCreateNestedManyWithoutUser2Input
    message_from_user?: MessageCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageCreateNestedManyWithoutTo_userInput
  }

  export type UserUncheckedCreateWithoutMatches1Input = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    media?: MediaUncheckedCreateNestedOneWithoutUserInput
    liked_users?: LikedUncheckedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedUncheckedCreateNestedManyWithoutLiked_byInput
    matches2?: MatchesUncheckedCreateNestedManyWithoutUser2Input
    message_from_user?: MessageUncheckedCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageUncheckedCreateNestedManyWithoutTo_userInput
  }

  export type UserCreateOrConnectWithoutMatches1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatches1Input, UserUncheckedCreateWithoutMatches1Input>
  }

  export type UserCreateWithoutMatches2Input = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    media?: MediaCreateNestedOneWithoutUserInput
    liked_users?: LikedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesCreateNestedManyWithoutUser1Input
    message_from_user?: MessageCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageCreateNestedManyWithoutTo_userInput
  }

  export type UserUncheckedCreateWithoutMatches2Input = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    media?: MediaUncheckedCreateNestedOneWithoutUserInput
    liked_users?: LikedUncheckedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedUncheckedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesUncheckedCreateNestedManyWithoutUser1Input
    message_from_user?: MessageUncheckedCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageUncheckedCreateNestedManyWithoutTo_userInput
  }

  export type UserCreateOrConnectWithoutMatches2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatches2Input, UserUncheckedCreateWithoutMatches2Input>
  }

  export type UserUpsertWithoutMatches1Input = {
    update: XOR<UserUpdateWithoutMatches1Input, UserUncheckedUpdateWithoutMatches1Input>
    create: XOR<UserCreateWithoutMatches1Input, UserUncheckedCreateWithoutMatches1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatches1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatches1Input, UserUncheckedUpdateWithoutMatches1Input>
  }

  export type UserUpdateWithoutMatches1Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    media?: MediaUpdateOneWithoutUserNestedInput
    liked_users?: LikedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUpdateManyWithoutLiked_byNestedInput
    matches2?: MatchesUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUpdateManyWithoutTo_userNestedInput
  }

  export type UserUncheckedUpdateWithoutMatches1Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    media?: MediaUncheckedUpdateOneWithoutUserNestedInput
    liked_users?: LikedUncheckedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUncheckedUpdateManyWithoutLiked_byNestedInput
    matches2?: MatchesUncheckedUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUncheckedUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUncheckedUpdateManyWithoutTo_userNestedInput
  }

  export type UserUpsertWithoutMatches2Input = {
    update: XOR<UserUpdateWithoutMatches2Input, UserUncheckedUpdateWithoutMatches2Input>
    create: XOR<UserCreateWithoutMatches2Input, UserUncheckedCreateWithoutMatches2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatches2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatches2Input, UserUncheckedUpdateWithoutMatches2Input>
  }

  export type UserUpdateWithoutMatches2Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    media?: MediaUpdateOneWithoutUserNestedInput
    liked_users?: LikedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUpdateManyWithoutUser1NestedInput
    message_from_user?: MessageUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUpdateManyWithoutTo_userNestedInput
  }

  export type UserUncheckedUpdateWithoutMatches2Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    media?: MediaUncheckedUpdateOneWithoutUserNestedInput
    liked_users?: LikedUncheckedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUncheckedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUncheckedUpdateManyWithoutUser1NestedInput
    message_from_user?: MessageUncheckedUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUncheckedUpdateManyWithoutTo_userNestedInput
  }

  export type UserCreateWithoutUser_detailsInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    media?: MediaCreateNestedOneWithoutUserInput
    liked_users?: LikedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesCreateNestedManyWithoutUser1Input
    matches2?: MatchesCreateNestedManyWithoutUser2Input
    message_from_user?: MessageCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageCreateNestedManyWithoutTo_userInput
  }

  export type UserUncheckedCreateWithoutUser_detailsInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    media?: MediaUncheckedCreateNestedOneWithoutUserInput
    liked_users?: LikedUncheckedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedUncheckedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesUncheckedCreateNestedManyWithoutUser1Input
    matches2?: MatchesUncheckedCreateNestedManyWithoutUser2Input
    message_from_user?: MessageUncheckedCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageUncheckedCreateNestedManyWithoutTo_userInput
  }

  export type UserCreateOrConnectWithoutUser_detailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_detailsInput, UserUncheckedCreateWithoutUser_detailsInput>
  }

  export type UserUpsertWithoutUser_detailsInput = {
    update: XOR<UserUpdateWithoutUser_detailsInput, UserUncheckedUpdateWithoutUser_detailsInput>
    create: XOR<UserCreateWithoutUser_detailsInput, UserUncheckedCreateWithoutUser_detailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_detailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_detailsInput, UserUncheckedUpdateWithoutUser_detailsInput>
  }

  export type UserUpdateWithoutUser_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    media?: MediaUpdateOneWithoutUserNestedInput
    liked_users?: LikedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUpdateManyWithoutTo_userNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    media?: MediaUncheckedUpdateOneWithoutUserNestedInput
    liked_users?: LikedUncheckedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUncheckedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUncheckedUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUncheckedUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUncheckedUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUncheckedUpdateManyWithoutTo_userNestedInput
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailCreateNestedOneWithoutUserInput
    media?: MediaCreateNestedOneWithoutUserInput
    liked_users?: LikedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesCreateNestedManyWithoutUser1Input
    matches2?: MatchesCreateNestedManyWithoutUser2Input
    message_from_user?: MessageCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageCreateNestedManyWithoutTo_userInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailUncheckedCreateNestedOneWithoutUserInput
    media?: MediaUncheckedCreateNestedOneWithoutUserInput
    liked_users?: LikedUncheckedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedUncheckedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesUncheckedCreateNestedManyWithoutUser1Input
    matches2?: MatchesUncheckedCreateNestedManyWithoutUser2Input
    message_from_user?: MessageUncheckedCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageUncheckedCreateNestedManyWithoutTo_userInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUpdateOneWithoutUserNestedInput
    media?: MediaUpdateOneWithoutUserNestedInput
    liked_users?: LikedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUpdateManyWithoutTo_userNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUncheckedUpdateOneWithoutUserNestedInput
    media?: MediaUncheckedUpdateOneWithoutUserNestedInput
    liked_users?: LikedUncheckedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUncheckedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUncheckedUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUncheckedUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUncheckedUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUncheckedUpdateManyWithoutTo_userNestedInput
  }

  export type UserCreateWithoutMediaInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    liked_users?: LikedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesCreateNestedManyWithoutUser1Input
    matches2?: MatchesCreateNestedManyWithoutUser2Input
    message_from_user?: MessageCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageCreateNestedManyWithoutTo_userInput
  }

  export type UserUncheckedCreateWithoutMediaInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    liked_users?: LikedUncheckedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedUncheckedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesUncheckedCreateNestedManyWithoutUser1Input
    matches2?: MatchesUncheckedCreateNestedManyWithoutUser2Input
    message_from_user?: MessageUncheckedCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageUncheckedCreateNestedManyWithoutTo_userInput
  }

  export type UserCreateOrConnectWithoutMediaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
  }

  export type UserUpsertWithoutMediaInput = {
    update: XOR<UserUpdateWithoutMediaInput, UserUncheckedUpdateWithoutMediaInput>
    create: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMediaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMediaInput, UserUncheckedUpdateWithoutMediaInput>
  }

  export type UserUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    liked_users?: LikedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUpdateManyWithoutTo_userNestedInput
  }

  export type UserUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    liked_users?: LikedUncheckedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUncheckedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUncheckedUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUncheckedUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUncheckedUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUncheckedUpdateManyWithoutTo_userNestedInput
  }

  export type UserCreateWithoutLiked_usersInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    media?: MediaCreateNestedOneWithoutUserInput
    given_likes?: LikedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesCreateNestedManyWithoutUser1Input
    matches2?: MatchesCreateNestedManyWithoutUser2Input
    message_from_user?: MessageCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageCreateNestedManyWithoutTo_userInput
  }

  export type UserUncheckedCreateWithoutLiked_usersInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    media?: MediaUncheckedCreateNestedOneWithoutUserInput
    given_likes?: LikedUncheckedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesUncheckedCreateNestedManyWithoutUser1Input
    matches2?: MatchesUncheckedCreateNestedManyWithoutUser2Input
    message_from_user?: MessageUncheckedCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageUncheckedCreateNestedManyWithoutTo_userInput
  }

  export type UserCreateOrConnectWithoutLiked_usersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLiked_usersInput, UserUncheckedCreateWithoutLiked_usersInput>
  }

  export type UserCreateWithoutGiven_likesInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    media?: MediaCreateNestedOneWithoutUserInput
    liked_users?: LikedCreateNestedManyWithoutLiked_toInput
    matches1?: MatchesCreateNestedManyWithoutUser1Input
    matches2?: MatchesCreateNestedManyWithoutUser2Input
    message_from_user?: MessageCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageCreateNestedManyWithoutTo_userInput
  }

  export type UserUncheckedCreateWithoutGiven_likesInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    media?: MediaUncheckedCreateNestedOneWithoutUserInput
    liked_users?: LikedUncheckedCreateNestedManyWithoutLiked_toInput
    matches1?: MatchesUncheckedCreateNestedManyWithoutUser1Input
    matches2?: MatchesUncheckedCreateNestedManyWithoutUser2Input
    message_from_user?: MessageUncheckedCreateNestedManyWithoutFrom_userInput
    message_to_user?: MessageUncheckedCreateNestedManyWithoutTo_userInput
  }

  export type UserCreateOrConnectWithoutGiven_likesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGiven_likesInput, UserUncheckedCreateWithoutGiven_likesInput>
  }

  export type UserUpsertWithoutLiked_usersInput = {
    update: XOR<UserUpdateWithoutLiked_usersInput, UserUncheckedUpdateWithoutLiked_usersInput>
    create: XOR<UserCreateWithoutLiked_usersInput, UserUncheckedCreateWithoutLiked_usersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLiked_usersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLiked_usersInput, UserUncheckedUpdateWithoutLiked_usersInput>
  }

  export type UserUpdateWithoutLiked_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    media?: MediaUpdateOneWithoutUserNestedInput
    given_likes?: LikedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUpdateManyWithoutTo_userNestedInput
  }

  export type UserUncheckedUpdateWithoutLiked_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    media?: MediaUncheckedUpdateOneWithoutUserNestedInput
    given_likes?: LikedUncheckedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUncheckedUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUncheckedUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUncheckedUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUncheckedUpdateManyWithoutTo_userNestedInput
  }

  export type UserUpsertWithoutGiven_likesInput = {
    update: XOR<UserUpdateWithoutGiven_likesInput, UserUncheckedUpdateWithoutGiven_likesInput>
    create: XOR<UserCreateWithoutGiven_likesInput, UserUncheckedCreateWithoutGiven_likesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGiven_likesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGiven_likesInput, UserUncheckedUpdateWithoutGiven_likesInput>
  }

  export type UserUpdateWithoutGiven_likesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    media?: MediaUpdateOneWithoutUserNestedInput
    liked_users?: LikedUpdateManyWithoutLiked_toNestedInput
    matches1?: MatchesUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUpdateManyWithoutTo_userNestedInput
  }

  export type UserUncheckedUpdateWithoutGiven_likesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    media?: MediaUncheckedUpdateOneWithoutUserNestedInput
    liked_users?: LikedUncheckedUpdateManyWithoutLiked_toNestedInput
    matches1?: MatchesUncheckedUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUncheckedUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUncheckedUpdateManyWithoutFrom_userNestedInput
    message_to_user?: MessageUncheckedUpdateManyWithoutTo_userNestedInput
  }

  export type UserCreateWithoutMessage_from_userInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    media?: MediaCreateNestedOneWithoutUserInput
    liked_users?: LikedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesCreateNestedManyWithoutUser1Input
    matches2?: MatchesCreateNestedManyWithoutUser2Input
    message_to_user?: MessageCreateNestedManyWithoutTo_userInput
  }

  export type UserUncheckedCreateWithoutMessage_from_userInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    media?: MediaUncheckedCreateNestedOneWithoutUserInput
    liked_users?: LikedUncheckedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedUncheckedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesUncheckedCreateNestedManyWithoutUser1Input
    matches2?: MatchesUncheckedCreateNestedManyWithoutUser2Input
    message_to_user?: MessageUncheckedCreateNestedManyWithoutTo_userInput
  }

  export type UserCreateOrConnectWithoutMessage_from_userInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessage_from_userInput, UserUncheckedCreateWithoutMessage_from_userInput>
  }

  export type UserCreateWithoutMessage_to_userInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    media?: MediaCreateNestedOneWithoutUserInput
    liked_users?: LikedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesCreateNestedManyWithoutUser1Input
    matches2?: MatchesCreateNestedManyWithoutUser2Input
    message_from_user?: MessageCreateNestedManyWithoutFrom_userInput
  }

  export type UserUncheckedCreateWithoutMessage_to_userInput = {
    id?: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string | null
    last_seen?: Date | string | null
    user_details?: UserDetailUncheckedCreateNestedOneWithoutUserInput
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    media?: MediaUncheckedCreateNestedOneWithoutUserInput
    liked_users?: LikedUncheckedCreateNestedManyWithoutLiked_toInput
    given_likes?: LikedUncheckedCreateNestedManyWithoutLiked_byInput
    matches1?: MatchesUncheckedCreateNestedManyWithoutUser1Input
    matches2?: MatchesUncheckedCreateNestedManyWithoutUser2Input
    message_from_user?: MessageUncheckedCreateNestedManyWithoutFrom_userInput
  }

  export type UserCreateOrConnectWithoutMessage_to_userInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessage_to_userInput, UserUncheckedCreateWithoutMessage_to_userInput>
  }

  export type UserUpsertWithoutMessage_from_userInput = {
    update: XOR<UserUpdateWithoutMessage_from_userInput, UserUncheckedUpdateWithoutMessage_from_userInput>
    create: XOR<UserCreateWithoutMessage_from_userInput, UserUncheckedCreateWithoutMessage_from_userInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessage_from_userInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessage_from_userInput, UserUncheckedUpdateWithoutMessage_from_userInput>
  }

  export type UserUpdateWithoutMessage_from_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    media?: MediaUpdateOneWithoutUserNestedInput
    liked_users?: LikedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUpdateManyWithoutUser2NestedInput
    message_to_user?: MessageUpdateManyWithoutTo_userNestedInput
  }

  export type UserUncheckedUpdateWithoutMessage_from_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    media?: MediaUncheckedUpdateOneWithoutUserNestedInput
    liked_users?: LikedUncheckedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUncheckedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUncheckedUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUncheckedUpdateManyWithoutUser2NestedInput
    message_to_user?: MessageUncheckedUpdateManyWithoutTo_userNestedInput
  }

  export type UserUpsertWithoutMessage_to_userInput = {
    update: XOR<UserUpdateWithoutMessage_to_userInput, UserUncheckedUpdateWithoutMessage_to_userInput>
    create: XOR<UserCreateWithoutMessage_to_userInput, UserUncheckedCreateWithoutMessage_to_userInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessage_to_userInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessage_to_userInput, UserUncheckedUpdateWithoutMessage_to_userInput>
  }

  export type UserUpdateWithoutMessage_to_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    media?: MediaUpdateOneWithoutUserNestedInput
    liked_users?: LikedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUpdateManyWithoutFrom_userNestedInput
  }

  export type UserUncheckedUpdateWithoutMessage_to_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_details?: UserDetailUncheckedUpdateOneWithoutUserNestedInput
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    media?: MediaUncheckedUpdateOneWithoutUserNestedInput
    liked_users?: LikedUncheckedUpdateManyWithoutLiked_toNestedInput
    given_likes?: LikedUncheckedUpdateManyWithoutLiked_byNestedInput
    matches1?: MatchesUncheckedUpdateManyWithoutUser1NestedInput
    matches2?: MatchesUncheckedUpdateManyWithoutUser2NestedInput
    message_from_user?: MessageUncheckedUpdateManyWithoutFrom_userNestedInput
  }

  export type LikedCreateManyLiked_toInput = {
    id?: string
    liked_by_id: string
  }

  export type LikedCreateManyLiked_byInput = {
    id?: string
    liked_to_id: string
  }

  export type MatchesCreateManyUser1Input = {
    id?: string
    user2_id: string
    is_matched_at: Date | string
    is_blocked: boolean
    unmatched_at?: Date | string | null
  }

  export type MatchesCreateManyUser2Input = {
    id?: string
    user1_id: string
    is_matched_at: Date | string
    is_blocked: boolean
    unmatched_at?: Date | string | null
  }

  export type MessageCreateManyFrom_userInput = {
    id?: string
    message: string
    message_to_user: string
    created_at: Date | string
  }

  export type MessageCreateManyTo_userInput = {
    id?: string
    message: string
    message_from_user: string
    created_at: Date | string
  }

  export type LikedUpdateWithoutLiked_toInput = {
    id?: StringFieldUpdateOperationsInput | string
    liked_by?: UserUpdateOneRequiredWithoutGiven_likesNestedInput
  }

  export type LikedUncheckedUpdateWithoutLiked_toInput = {
    id?: StringFieldUpdateOperationsInput | string
    liked_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type LikedUncheckedUpdateManyWithoutLiked_toInput = {
    id?: StringFieldUpdateOperationsInput | string
    liked_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type LikedUpdateWithoutLiked_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    liked_to?: UserUpdateOneRequiredWithoutLiked_usersNestedInput
  }

  export type LikedUncheckedUpdateWithoutLiked_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    liked_to_id?: StringFieldUpdateOperationsInput | string
  }

  export type LikedUncheckedUpdateManyWithoutLiked_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    liked_to_id?: StringFieldUpdateOperationsInput | string
  }

  export type MatchesUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    is_matched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_blocked?: BoolFieldUpdateOperationsInput | boolean
    unmatched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user2?: UserUpdateOneRequiredWithoutMatches2NestedInput
  }

  export type MatchesUncheckedUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    is_matched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_blocked?: BoolFieldUpdateOperationsInput | boolean
    unmatched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchesUncheckedUpdateManyWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2_id?: StringFieldUpdateOperationsInput | string
    is_matched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_blocked?: BoolFieldUpdateOperationsInput | boolean
    unmatched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchesUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    is_matched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_blocked?: BoolFieldUpdateOperationsInput | boolean
    unmatched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1?: UserUpdateOneRequiredWithoutMatches1NestedInput
  }

  export type MatchesUncheckedUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    is_matched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_blocked?: BoolFieldUpdateOperationsInput | boolean
    unmatched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchesUncheckedUpdateManyWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1_id?: StringFieldUpdateOperationsInput | string
    is_matched_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_blocked?: BoolFieldUpdateOperationsInput | boolean
    unmatched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUpdateWithoutFrom_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    to_user?: UserUpdateOneRequiredWithoutMessage_to_userNestedInput
  }

  export type MessageUncheckedUpdateWithoutFrom_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    message_to_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutFrom_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    message_to_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutTo_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    from_user?: UserUpdateOneRequiredWithoutMessage_from_userNestedInput
  }

  export type MessageUncheckedUpdateWithoutTo_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    message_from_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutTo_userInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    message_from_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}