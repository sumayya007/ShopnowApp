
import { Component, OnInit, Renderer2 } from "@angular/core";
import { ScriptserviceService } from "src/app/services/scriptservice.service";

const SCRIPT_PATH = 'src/assets/js/slider.js';
declare let gapi: any;
declare const slide: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptserviceService
  ) { }
 
  ngOnInit() {
    
    // const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH);
    // scriptElement.onload = () => {
    // alert("loaded");
    //   // console.log(gapi);

    //   // // Load the JavaScript client library.
    //   // // (the init() method has been omitted for brevity)
    //   // gapi.load('client', this.init);
    // }
    // scriptElement.onerror = () => {
    //   console.log('Could not load the Google API Script!');
    // }
  }
  move() {
   slide();
    }
//    url = './src/assets/js/slider.js';
//   // constructor(private renderer: Renderer2){}
//    ngOnInit() {
//   //   const script = this.renderer.createElement('script');
//   //   this.renderer.setAttribute(script, 'src', 'frontend/src/assets/js/slider.js');
//   //   this.renderer.appendChild(document.head, script);
//   this.loadScript();
//    }
//   public loadScript() {
//     console.log('preparing to load...')
//     let node = document.createElement('script');
//     node.src = this.url;
//     node.type = 'text/javascript';
//     node.async = true;
//     node.charset = 'utf-8';
//     // document.getElementsByTagName('head')[0].appendChild(node);
//     document.getElementById('container')?.appendChild(node);
// }
}
