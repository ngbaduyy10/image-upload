import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { ImageEntity } from '@/entities/image.entity';

@Module({
  controllers: [ImageController],
  providers: [ImageService],
  imports: [CloudinaryModule, TypeOrmModule.forFeature([ImageEntity])],
})
export class ImageModule {}
