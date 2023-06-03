import { Query, Resolver } from "@nestjs/graphql";
import { Customer, ICostumer } from "src/models/customer";

/**
 * @((_)=> Customer): estás indicando explícitamente que la clase de resolvers está relacionada con el tipo de objeto Customer.
*/
@Resolver((_)=> Customer)
export class CustomerResolver {

    @Query(/* istanbul ignore next */()=> Customer, { nullable:true, description: 'Muestra un cliente' })
    public findCustomer():Customer {
        

        let costumer: Customer =   {
            documentNumber: '34834834',
            names: 'Ever Carlos',
            lastName: 'Carlos Rojas'
        };

        return Customer.create(costumer);
    }
    
    
}