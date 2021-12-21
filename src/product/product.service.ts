import { HttpException, Injectable } from '@nestjs/common';
import { PRODUCT } from './product.mock';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IProduct } from './interface/product.interface';
import { ProductDto } from './product.dto';


@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<IProduct>) {
        
    }

    public  async getProducts(): Promise<any> {
        const products = await this.productModel.find().exec()
        if (!products || !products[0]){
            throw new HttpException('Not Found',404)
        }
        return products
    }

    public async postProduct(newproduct: ProductDto){
        const product = await new this.productModel(newproduct);
        return product.save();
    }
    public async getProductsById(id:number): Promise<any>{
        const product = await this.productModel.findOne({id}).exec()
        if (!product){
            throw new HttpException('Not Found',404)
        }
        return product
    }
    public async deleteProductById(id:number): Promise<any>{
        const product = await this.productModel.deleteOne().exec()
        if (product.deletedCount === 0){
            throw new HttpException('Not Found',404)
        }
        return product
    }
    public async putProducts(id: number,propertyName: string,propertyValue: string): Promise<any>{
        const product = await this.productModel.findOneAndUpdate({id},{[propertyName]: propertyValue}).exec()

        if (!product){
            throw new HttpException('Not Found',404)
        }
        return product
    }

}
