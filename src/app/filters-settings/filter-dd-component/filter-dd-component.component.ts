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

  @Input() dropDownStatus = false;
  @Input() name = 'Undefined';
  @Input() rangeValues;
  @Output() updateValue =  new EventEmitter<any>();

  @ViewChild('slider', {read: ElementRef}) slider: ElementRef;

  constructor(
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {}

  public openDropdown() {
    this.dropDownStatus = !this.dropDownStatus;
    this.ref.markForCheck();
  }

  public updateValueModel(value) {
    this.rangeValues = value.value;
    this.emitNewValue(this.rangeValues);
    this.ref.markForCheck();
  }

  private changeValue() {
    this.rangeValues = [0, 100];
    this.emitNewValue(this.rangeValues);
    this.ref.markForCheck();
  }

  private emitNewValue(value) {
    this.updateValue.emit(value);
  }

  public clearAll() {
    this.changeValue();
    this.dropDownStatus = false;
    this.ref.markForCheck();
  }

}
