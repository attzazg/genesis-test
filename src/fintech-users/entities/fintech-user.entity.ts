import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  { Document } from 'mongoose';
import { ERoles } from 'src/common/enum';

@Schema({ versionKey: false, timestamps: true })
export class FintechUser extends Document {

  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: false })
  lastName: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;
  
  @Prop({ type: String, required: true })
  password: string;

  @Prop({
    type: String,
    required: true,
    enum: ERoles,
    default: ERoles.CUSTOMER
  })
  role: string;

  @Prop({ type: Boolean, required: true, default: false })
  isDeleted: boolean;
}
export const FintechUserSchema = SchemaFactory.createForClass(FintechUser);
