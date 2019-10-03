import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent, SafePipe } from "./app.component";
import { FrameComponent } from "./frame/frame.component";
import { ElectronService } from "./core/services";

@NgModule({
  declarations: [AppComponent, SafePipe, FrameComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [ElectronService],
  bootstrap: [AppComponent, FrameComponent]
})
export class AppModule {}
