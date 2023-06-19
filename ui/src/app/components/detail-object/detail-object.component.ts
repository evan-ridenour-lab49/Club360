import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { LabelTransform } from 'src/app/lib/label-transform';
import { BaseComponent } from '../base.component';


@Component({
  selector: 'app-detail-object',
  templateUrl: './detail-object.component.html',
  styleUrls: ['./detail-object.component.scss']
})
export class DetailObjectComponent extends BaseComponent{
  @Input() data:any;
  @Input() configuration:Record<string, any> = {};
  public objectData:Record<string, any> = {};
  constructor(){
    super();
    if (Array.isArray(this.data)) {
    } else if (typeof this.data === 'object') {
      this.objectData = this.data;
    }
  }
  ngOnChanges(curr:SimpleChanges) {
    if (Array.isArray(this.data)) {
    } else if (typeof this.data === 'object') {
      this.objectData = this.data;
    }
  }
}
