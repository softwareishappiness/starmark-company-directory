import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StarmarkEmployeeComponent } from './starmark-employee/starmark-employee.component';
import { StarmarkDirectoryComponent } from './starmark-directory/starmark-directory.component';
import { StarmarkEmployeeService } from './starmark-employee.service';
import { PairsPipe } from './pairs.pipe';
import { AlphaPipe } from './alpha.pipe';
import { CityPipe } from './city.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StarmarkEmployeeComponent,
    StarmarkDirectoryComponent,
    PairsPipe,
    AlphaPipe,
    CityPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StarmarkEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
