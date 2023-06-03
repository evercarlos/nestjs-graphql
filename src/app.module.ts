import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ResolversMdoule } from './resolvers/resolvers.module';
// import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Module({
  imports: [
    /**importante para uso de grapql***/
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      /*playground: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault
      ]*/
    }),
    /**importante para uso de grapql***/
    ResolversMdoule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}