import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-filters-settings',
  styleUrls: ['./filters-settings.component.scss'],
  templateUrl: './filters-settings.component.html',
})

export class FiltersSettingsComponent implements OnInit {

  public resetAll = false;

  public storageRange = [0, 100];
  public virtualCoreRange = [0, 100];
  public memoryRange = [0, 100];
  public fileCountRange = [0, 100];

  @ViewChild('slider', {read: ElementRef}) slider: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public clearAllFilters() {
    this.storageRange = [0, 100];
    this.fileCountRange = [0, 100];
    this.virtualCoreRange = [0, 100];
    this.memoryRange = [0, 100];
  }

  public updateFilterValueStorage(valueToUpdate) {
    this.storageRange = valueToUpdate;
  }

  public updateFilterValueVCount(valueToUpdate) {
    this.virtualCoreRange = valueToUpdate;
  }

  public updateFilterValueMemory(valueToUpdate) {
    this.memoryRange = valueToUpdate;
  }

  public updateFilterValueFileCount(valueToUpdate) {
    this.fileCountRange = valueToUpdate;
  }

  public resetSlider() {
    console.log(this.slider);
    this.slider.nativeElement.updateOptions({
      range: {
        'min': 20,
        'max': 50
      }
    });

    console.log('button clicked!');
  }

}
