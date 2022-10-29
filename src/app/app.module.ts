import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxI24ProgressBarModule } from 'ngx-i24-progress-bar';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxI24ProgressBarModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
