import { Module } from '@nestjs/common';
import { TransformInterceptor } from '@/interceptors/transform.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from '@/config/database';
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module';
import { ImageModule } from './modules/image/image.module';
import { CommentModule } from './modules/comment/comment.module';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseConfig,
    CloudinaryModule,
    ImageModule,
    CommentModule,
  ],
})
export class AppModule {}
