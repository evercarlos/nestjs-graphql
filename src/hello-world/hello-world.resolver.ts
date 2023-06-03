import { Resolver, Query, Float, Int, Args } from '@nestjs/graphql';

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

    @Query(() => Int, {name: 'randomZeroTo', description: 'From zero to argument TO'})
    /**
     * @type: para evitar otros valores qu no sean int
     * @nullable: para aceptar valores null: No es necesario enviar desde el query
     **/
    getRandomZeroTo(
        @Args('to', {nullable: true,type: () => Int}) to: number= 6 
        ):number {

        return Math.floor(Math.random()*to);
    }



}
