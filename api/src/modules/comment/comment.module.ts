import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { CommentEntity } from '@/entities/comment.entity';
import { ImageEntity } from '@/entities/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, ImageEntity])],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
