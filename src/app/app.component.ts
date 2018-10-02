import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-playground';

  public ngOnInit(): void {
    setTimeout(() => {
      this.title = "My playground!";
    }, 2500);
  }
}
