import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateCommentDto {
  @IsUUID()
  @IsNotEmpty()
  image_id: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  content: string;
}
