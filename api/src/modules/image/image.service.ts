import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { ImageEntity } from '@/entities/image.entity';

@Injectable()
export class ImageService {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    @InjectRepository(ImageEntity)
    private readonly imageRepository: Repository<ImageEntity>,
  ) {}

  async findAllImages() {
    return this.imageRepository.find({
      order: {
        created_at: 'DESC',
        comments: {
          created_at: 'ASC',
        },
      },
      relations: ['comments'],
    });
  }

  async uploadImage(file: Express.Multer.File) {
    const uploadedImage = await this.cloudinaryService.uploadImage(file);
    const savedImage = await this.imageRepository.save({
      url: uploadedImage.secure_url,
    });

    return {
      id: savedImage.id,
      url: savedImage.url,
      publicId: uploadedImage.public_id,
    };
  }
}
