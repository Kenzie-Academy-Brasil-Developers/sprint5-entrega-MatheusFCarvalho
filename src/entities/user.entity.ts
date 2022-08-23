import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    @Exclude()
    password:string

    @Column()
    age:number

    @Column()
    created_at:Date

    @Column()
    updated_at:Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}