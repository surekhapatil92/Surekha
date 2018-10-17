import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { BtCrdComponent } from './bt-crd/bt-crd.component';
import { BtJumbComponent } from './bt-jumb/bt-jumb.component';
import { MyAlComponent } from './bt-crd/my-al.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { MxCrdComponent } from './mx-crd/mx-crd.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    BtCrdComponent,
    BtJumbComponent,
    MyAlComponent,
    DatabindingComponent,
    MxCrdComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
