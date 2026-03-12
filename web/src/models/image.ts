import Base from "./base";
import Comment from "./comment";

export default interface Image extends Base {
  url: string;
  comments: Comment[];
}