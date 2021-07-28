
import { MongooseModule } from '@nestjs/mongoose';
import { carSchema } from './schemas/car.schema';
import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Car', schema: carSchema }])
  ],
  controllers: [CarController],
  providers: [CarService]
})
export class CarModule { }
