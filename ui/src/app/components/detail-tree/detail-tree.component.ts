import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LabelTransform } from 'src/app/lib/label-transform';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-detail-tree',
  templateUrl: './detail-tree.component.html',
  styleUrls: ['./detail-tree.component.scss']
})
export class DetailTreeComponent extends BaseComponent implements OnChanges{
  @Input() data!:any;
  @Input() configuration!:Record<string, any>;
  public arrayData?:Array<any>;
  public objectData?:Record<string, any>;
  constructor(){
    super();
  }
  ngOnChanges(curr:SimpleChanges) {
    if (Array.isArray(this.data)) {
      this.arrayData = this.data;
    } else if (typeof this.data === 'object') {
      this.objectData = this.data;
    }
  }
}
