import { Component, Input } from '@angular/core';
import { LabelTransform } from 'src/app/lib/label-transform';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss']
})
export class DetailListComponent extends BaseComponent{
  @Input() data:any;
  @Input() configuration:Record<string, any> = {};
  constructor(){
    super();
    console.log(this.data);
  }
}