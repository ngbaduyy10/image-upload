import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from '@/entities/comment.entity';
import { ImageEntity } from '@/entities/image.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
    @InjectRepository(ImageEntity)
    private readonly imageRepository: Repository<ImageEntity>,
  ) {}

  async createComment(createCommentDto: CreateCommentDto) {
    const image = await this.imageRepository.findOne({
      where: { id: createCommentDto.image_id },
    });

    if (!image) {
      throw new NotFoundException('Image not found');
    }

    return this.commentRepository.save({
      image_id: createCommentDto.image_id,
      content: createCommentDto.content,
    });
  }
}
