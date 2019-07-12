import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExcelService } from './services/excel.service';
// import { GrdFilterPipe } from './grid-filter.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {DataTableModule} from "angular-6-datatable";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // GrdFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
    DataTableModule
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
