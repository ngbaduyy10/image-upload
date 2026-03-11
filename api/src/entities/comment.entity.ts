import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ImageEntity } from "./image.entity";

@Entity("comments")
export class CommentEntity extends BaseEntity {
  @Column("uuid")
  image_id: string;

  @ManyToOne(() => ImageEntity, (image) => image.comments)
  @JoinColumn({ name: "image_id" })
  image: ImageEntity;

  @Column("text")
  content: string;
}
