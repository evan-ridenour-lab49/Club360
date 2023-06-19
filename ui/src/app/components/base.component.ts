import { LabelTransform } from 'src/app/lib/label-transform';

export class BaseComponent {
  matchType(value:any, type:string):boolean{
    return typeof value === type;
  }
  isArray(value: any): boolean{
    return Array.isArray(value);
  }
  transformLabel = LabelTransform.transformLabel;
}