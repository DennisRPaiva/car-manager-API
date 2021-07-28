import { carDto } from './car.dto';
import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CarService {
    constructor(@InjectModel('Car') private readonly carModel: Model<carDto>) { }

    public async getCars(): Promise<carDto[]> {
        const cars = await this.carModel.find().exec();
        if (!cars || !cars[0]) {
            throw new HttpException('Not Found', 404);
        }
        return cars
    }

    public async postCar(newCar: carDto) {
        const car = await new this.carModel(newCar);
        return car.save();
    }

    public async getCarById(id: string): Promise<carDto> {
        const car = await this.carModel.findById({ _id: id }).exec();
        if (!car) {
            throw new HttpException('Not Found', 404);
        }
        return car
    }

    public async deleteCar(id: string): Promise<carDto> {
        const car = await this.carModel.findOneAndDelete({ _id: id }).exec();
        if (!car) {
            throw new HttpException('Not Found', 404);
        }
        return car
    }

    public async putCarById(id: string, body: carDto): Promise<any> {
        await this.carModel.updateOne({ _id: id }, body)
        return this.getCarById(id);
    }
}
