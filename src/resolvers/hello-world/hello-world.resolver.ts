import { Resolver, Query, Float } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query(()=> String, {name:'hello',description: 'Hola mundo desde grapql' })
    helloWorld():string {
         return 'Hola Mundo';
    }

    @Query(() => Float, {name: 'randomNumber'})
    getRandomNumber(): number {
        return Math.random()*100;
    }

}
