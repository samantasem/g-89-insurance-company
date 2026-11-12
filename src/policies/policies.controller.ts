import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Policy } from './policy.entity';

@Controller('policies')
export class PoliciesController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() policy: Policy): Policy {
    return new Policy();
  }

  @Get()
  getAll(): Policy[] {
    return [];
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number): Policy {
    return new Policy();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteById(@Param('id', ParseIntPipe) id: number): void {
    console.log();
  }
}
