import * as mongoose from 'mongoose'

export const ProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  price: Number,
})