import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent implements OnInit {
  constructor(private metaTagService: Meta) {}

  title = 'angular-quickstart';

  ngOnInit() {
    this.metaTagService.addTags([
      {property: 'og:type', content: 'website'},
      { property: 'og:title', content: 'Angular Quickstart'},
      { property: 'og:description', content: 'Angular Quickstart Test'},
      { property: 'og:image', content: 'https://user-images.githubusercontent.com/43764894/223549637-2715c89d-a44e-42e0-8f6c-fa6246279658.png'},
     ]);
  }
}
