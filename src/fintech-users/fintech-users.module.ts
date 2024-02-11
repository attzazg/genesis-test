import { Module } from '@nestjs/common';
import { FintechUsersService } from './fintech-users.service';
import { FintechUsersController } from './fintech-users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FintechUser, FintechUserSchema } from './entities/fintech-user.entity';

@Module({
  imports:[MongooseModule.forFeature([
    { name: FintechUser.name, schema: FintechUserSchema },   
  ]),  ],
  controllers: [FintechUsersController],
  providers: [FintechUsersService],
})
export class FintechUsersModule {}
