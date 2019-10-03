import { Component, OnInit } from "@angular/core";
import { ElectronService } from "../core/services";

@Component({
  selector: "app-frame",
  templateUrl: "./frame.component.html",
  styleUrls: ["./frame.component.scss"]
})
export class FrameComponent implements OnInit {
  constructor(private electronService: ElectronService) {}

  ngOnInit() {}

  minimizeWindow() {
    this.electronService.window.minimize();
  }

  closeWindow() {
    this.electronService.window.close();
  }
}
