import { Logger } from "@nestjs/common";
import { Field, ObjectType } from "@nestjs/graphql";
import { log } from "console";

/**
 * @ObjectType : para marcar una clase como un tipo de objeto GraphQL
*/
@ObjectType({description: 'Client data'})
export class Customer {

    @Field({nullable:true, description: 'client id'})
    public documentNumber: string;
    
    @Field({nullable:true, description: 'client name'})
    public names: string;

    @Field({nullable:true, description: 'client lastname'})
    public lastName: string;

    public static create(impl: ICustumer): Customer {
        if(impl) {
            const customer:Customer = new Customer();
            if(!impl.documentNumber || impl.documentNumber.length === 0) {
                customer.documentNumber = '00000000';
            } else {
                customer.documentNumber = impl.documentNumber;
            }

            customer.names    = impl.names;
            customer.lastName = impl.lastName;
            
            return customer;
        }

    }
}

export interface ICustumer {

    documentNumber: string;
    names: string;
    lastName: string;
}