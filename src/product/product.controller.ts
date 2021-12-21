import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';
import { query } from 'express';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get()
    async getProducts(){
        return this.productService.getProducts()
    }
    @Post()
    public postProduct(@Body() product: ProductDto){
        return this.productService.postProduct(product)
    }
    @Get(':id')
    public getProductsById(@Param('id') id: number){
        return this.productService.getProductsById(id)
    }
    @Delete(':id')
    public deleteProductById(@Param('id') id: number){
        return this.productService.deleteProductById(id)
    }
    @Put(':id')
    public putProducts(@Param('id') id: number , @Query() query){
        const propetyName = query.property_name
        const propertyValue = query.property_value
        return this.productService.putProducts(id , propetyName , propetyName)
    }
}
