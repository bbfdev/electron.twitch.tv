import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public urlBase: string = undefined;
  public rForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rForm = this.fb.group({
      channel: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //this.urlBase = "https://player.twitch.tv/?channel=monstercat"
  }

  Url() {
    this.urlBase = 'https://player.twitch.tv/?channel=' + this.rForm.value.channel;
  }
}
