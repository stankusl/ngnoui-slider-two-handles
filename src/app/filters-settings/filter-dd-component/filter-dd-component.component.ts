import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-filter-dd-component',
  styleUrls: ['./filter-dd-component.component.scss'],
  templateUrl: './filter-dd-component.component.html'
})

export class FilterDdComponentComponent implements OnInit {

  @Input() resetAllClose = false;
  @Input() dropDownStatus = false;
  @Input() name = 'Undefined';
  @Input() rangeValues;
  @Output() updateValue = new EventEmitter<any>();

  @ViewChild('slider', {read: ElementRef}) slider: ElementRef;

  constructor() { }

  ngOnInit() {}

  public openDropdown() {
    this.dropDownStatus = !this.dropDownStatus;
  }

  public updateValueModel(value) {
    this.rangeValues = value.value;
    this.emitNewValue(this.rangeValues);
  }

  private changeValue() {
    this.rangeValues = [0, 100];
    this.emitNewValue(this.rangeValues);
  }

  private emitNewValue(value) {
    this.updateValue.emit(value);
  }

  public clearAll() {
    this.changeValue();
    this.dropDownStatus = false;
  }

}
