import { Args, Int, Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class RandomResolver {


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