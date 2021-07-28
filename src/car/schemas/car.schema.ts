import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

@Schema({
    collection: 'Car',
})

export class Cars extends Document {
    @Prop()
    size: string
    @Prop()
    color: string
}

export const carSchema = SchemaFactory.createForClass(Cars)
// export const carSchema = new mongoose.Schema({
//     id: Number,
//     size: String,
//     color: String
// })