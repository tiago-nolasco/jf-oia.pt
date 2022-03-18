import { ImageAlignEnum } from "../../../model/ImageAlignEnum";

export interface IContentMedia {
  title: string;
  file: string;
  showFullImage?: boolean;
  align?: ImageAlignEnum;
  main?: boolean;
}
