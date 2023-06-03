import { Module } from "@nestjs/common";
import { HelloWorldModule } from "./hello-world/hello-world.module";
import { RandomModule } from "./random/random.module";
import { CustomerModule } from "./customer/customer.module";

@Module({
    imports: [
        HelloWorldModule,
        RandomModule,
        CustomerModule,
    ],
    exports: [
        HelloWorldModule,
        RandomModule,
        CustomerModule,
    ]
})
export class ResolversModoule {}