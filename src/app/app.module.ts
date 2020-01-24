import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { basicHighlightDirective } from './basicHighlight/basic-highlight.directive';
import { betterHighlightDirective } from './better-highlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    basicHighlightDirective,
    betterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
