import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

export const DatabaseConfig = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
    synchronize: configService.get<boolean>('DB_SYNC'),
    ...(process.env.NODE_ENV === 'production' && {
      ssl: { rejectUnauthorized: false },
    }),
  }),
  inject: [ConfigService],
});
