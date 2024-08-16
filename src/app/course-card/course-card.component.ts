import { Component, inject, InjectionToken, Input, OnInit } from '@angular/core';
import { pdf_byte_array } from '../pdf';
import { TestService } from '../test.service';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {

  @Input() course: any;
  private _window = inject(WINDOW); 
  constructor(private testService: TestService) { }
  ngOnInit(): void {
    this.getPdfData();
  }

  getPdfData() {
    this.testService.getData().subscribe(response => {
      console.log(response);
      let data = response.body
      let file = new Blob([data as BlobPart], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(file);
      if (typeof (window) !== undefined)
        window.open(fileURL);
    })
  }
}

export const WINDOW = new InjectionToken<Window>('WindowToken', {
  factory: () => {
    if(typeof window !== 'undefined') {
      return window
    }
    return new Window(); // does this work?
  }
});

