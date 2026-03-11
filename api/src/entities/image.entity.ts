import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { CommentEntity } from "./comment.entity";

@Entity("images")
export class ImageEntity extends BaseEntity {
  @Column()
  url: string;

  @OneToMany(() => CommentEntity, (comment) => comment.image)
  comments: CommentEntity[];
}
