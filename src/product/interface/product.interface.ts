import { Document } from "mongoose";

export interface IProduct extends Document {
    readonly id: number
    readonly name: string
    readonly category: string
    readonly price: number
}
