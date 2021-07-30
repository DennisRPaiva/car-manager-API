import { CarService } from './car.service';
import { Controller, Get, Post, Delete, Put, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { carDto } from './car.dto'
import { query } from 'express';
import { ApiBody } from '@nestjs/swagger';

@Controller('cars')
export class CarController {
    constructor(private carService: CarService) { }

    @Get('/search/info')
    async getCars() {
        return this.carService.getCars();
    }

    @Post('/create')
    async postCar(@Body() car: carDto) {
        return this.carService.postCar(car)
    }

    @Get('/search/:id')
    async getCarById(@Param('id') id: string) {
        return this.carService.getCarById(id);
    }

    @Delete('/delete/:id')
    async deleteCar(@Param('id') id: string) {
        return this.carService.deleteCar(id);
    }

    @Put('/update/:id')
    @ApiBody({ type: carDto })
    async putCarById(@Param('id') id: string, @Body() body: carDto) {
        return this.carService.putCarById(id, body)
    }
}
