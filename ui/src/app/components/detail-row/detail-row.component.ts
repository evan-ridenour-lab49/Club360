import { Component, Input } from '@angular/core';
import { LabelTransform } from 'src/app/lib/label-transform';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-detail-row',
  templateUrl: './detail-row.component.html',
  styleUrls: ['./detail-row.component.scss']
})
export class DetailRowComponent extends BaseComponent{
  @Input() data:any;

}
