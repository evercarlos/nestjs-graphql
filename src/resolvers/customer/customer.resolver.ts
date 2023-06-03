import { Query, Resolver } from "@nestjs/graphql";
import { Customer, ICustumer } from "src/models/customer";

/**
 * @((_)=> Customer): estás indicando explícitamente que la clase de resolvers está relacionada con el tipo de objeto Customer.
*/
@Resolver((_)=> Customer)
export class CustomerResolver {
    
    @Query(()=> Customer, { nullable:true, name: 'findCustomer', description: 'Muestra un cliente' })
    public findCustomer():Customer {
        

        let costumer: ICustumer = {
            documentNumber: '34834834',
            names: 'Ever',
            lastName: 'Carlos Rojas'
        };

        return Customer.create(costumer);
    }
    
    
}