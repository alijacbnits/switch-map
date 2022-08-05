import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, fromEvent, interval, switchMap, switchScan } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  counter = 0;
  searchControl: FormControl = new FormControl();

  ngOnInit() {
    // fromEvent(document, 'click').pipe(
    //   switchMap(() => interval(500))
    // ).subscribe((val) => (this.counter = val));

    this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      switchMap(() => interval(500))
    )
    .subscribe((val) => (this.counter = val));
  }
}
