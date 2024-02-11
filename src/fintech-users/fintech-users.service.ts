import { Injectable } from '@nestjs/common';
import { CreateFintechUserDto, SignInUserDto, UpdateFintechUserDto } from './dto/create-fintech-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FintechUser } from './entities/fintech-user.entity';
import { Model } from 'mongoose';

@Injectable()
export class FintechUsersService {
  constructor(
    @InjectModel(FintechUser.name) private readonly usersModel: Model<FintechUser>
  ) { }

  async create(payload: CreateFintechUserDto) {
    try {
      const result = await this.usersModel.create(payload)
      return result;
    } catch (error) {
      return error.message
    }
  }

  async findAll() {
    try {
      return await this.usersModel.find({ isDeleted: false });
    } catch (error) {
      return error
    }
  }

  async findByEmail(payload: any) {
    try {
      const user = await this.usersModel.findOne({ email: payload });
      return user
    } catch (error) {
      return error
    }
  }

  async update(id: string, payload: UpdateFintechUserDto) {
    try {
      const updatedUser = await this.usersModel.findOneAndUpdate({ _id: id }, payload, { new: true })
      return updatedUser
    } catch (error) {
      return error
    }

  }

  async remove(id: string) {
    try {
      await this.usersModel.findOneAndUpdate({ _id: id }, { isDeleted: true }, { new: true })
      return 'user has been deleted'
    } catch (error) {
      return error
    }
  }
}
