import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter, HostListener,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-filter-dd-component',
  styleUrls: ['./filter-dd-component.component.scss'],
  templateUrl: './filter-dd-component.component.html',
})

export class FilterDdComponentComponent implements OnInit {

  @Input() resetAllClose = false;
  @Input() dropDownStatus = false;
  @Input() name = 'Undefined';
  @Input() rangeValues;
  @Output() updateValue = new EventEmitter<any>();

  @ViewChild('slider', {read: ElementRef}) slider: ElementRef;
  @ViewChild('elem', {read: ElementRef}) elem: ElementRef;

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutsideClick(event) {
    console.log(event)
    console.log(this.elem.nativeElement)
    console.log(event.target)

    if (!this.elem.nativeElement.contains(event.target)) {
      this.dropDownStatus = false;
    }
  }

  constructor() { }

  ngOnInit() {}

  public openDropdown() {
    console.log('init dd')
    this.dropDownStatus = !this.dropDownStatus;
  }

  public specialOpenDropdown() {
    console.log('this is special dd')
    this.dropDownStatus = true;
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

  public reset() {
    this.changeValue();
    this.dropDownStatus = false;
  }

}
