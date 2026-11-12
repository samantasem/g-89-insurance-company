import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Car } from './car.entity';

@Controller('cars')
export class CarsController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() car: Car): Car {
    return new Car();
  }

  @Get()
  getAll(): Car[] {
    return [];
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number): Car {
    return new Car();
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  update(@Param('id', ParseIntPipe) id: number, @Body() car: Car): void {
    console.log();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteById(@Param('id', ParseIntPipe) id: number): void {
    console.log();
  }

  @Patch(':carId/set-owner/:userId')
  @HttpCode(HttpStatus.NO_CONTENT)
  setOwner(
    @Param('carId', ParseIntPipe) carId: number,
    @Param('userId', ParseIntPipe) userId: number,
  ): void {
    console.log();
  }
}
