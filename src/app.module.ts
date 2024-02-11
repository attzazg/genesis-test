import { Module } from '@nestjs/common';
import { FintechUsersModule } from './fintech-users/fintech-users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FintechUser, FintechUserSchema } from './fintech-users/entities/fintech-user.entity';

@Module({
  imports: [FintechUsersModule,
    MongooseModule.forRoot('mongodb+srv://attzazg:PvkIOGjy8rxp78Re@cluster0.fwphwlz.mongodb.net/'),
    MongooseModule.forFeature([
      { name: FintechUser.name, schema: FintechUserSchema },   
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
