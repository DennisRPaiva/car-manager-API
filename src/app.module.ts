import { CarModule } from './car/car.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
//https://stackoverflow.com/questions/56870498/nest-cant-resolve-dependencies-of-the-itemsservice-please-make-sure-that-t

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://teste_user:malefico26@cluster0.y0cg4.mongodb.net/carDataBase?retryWrites=true&w=majority'),
    CarModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
