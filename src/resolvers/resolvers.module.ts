import { Module } from "@nestjs/common";
import { HelloWorldModule } from "./hello-world/hello-world.module";
import { RandomModule } from "./random/random.module";

@Module({
    imports: [
        HelloWorldModule,
        RandomModule,
    ],
    exports: [
        HelloWorldModule,
        RandomModule,
    ]
})
export class ResolversMdoule {}