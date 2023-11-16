import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icon, LatLng, LatLngExpression, LatLngTuple, LeafletMouseEvent, Map, Marker, map, marker, tileLayer } from 'leaflet';
import { LocationService } from 'src/app/services/location.service';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
 private readonly MARKER_ZOOM_LEVEL=16;
 private readonly MARKER_ICON=new Icon({
   iconUrl: 'https://res.cloudinary.com/foodmine/image/upload/v1638842791/map/marker_kbua9q.png',
   iconSize: [42, 42],
   iconAnchor: [21, 42],
 })
  private readonly DEFAULT_LATLNG:LatLngTuple=[13.75,21.62]; 
  @ViewChild('map', {static:true})
  mapRef!:ElementRef;
  map!:Map;
  currentMarker!:Marker;
  users: any;
  constructor(private locationService:LocationService,private userService:UserServiceService ) {}
  ngOnInit(): void {
    this.initializeMap();
  }
  initializeMap(){
    if(this.map) return;
    this.map=map(this.mapRef.nativeElement,{
      attributionControl:false
    }).setView(this.DEFAULT_LATLNG,1);
 tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map)
  this.map.on('click',(e:LeafletMouseEvent)=>{
    this.setMarker(e.latlng);
  })
}
  findMyLocation(){
     this.locationService.getCurrentLocation().subscribe({
      next:(latlng)=>{
        this.map.setView(latlng,this.MARKER_ZOOM_LEVEL)
        this.setMarker(latlng)
     
      }
     })
  }
setMarker(latlng:LatLngExpression){
  this.addressLatLng=latlng as LatLng;
  if(this.currentMarker){
    this.currentMarker.setLatLng(latlng);
    return;
  }
  this.currentMarker=marker(latlng,{
    draggable:true,
    icon:this.MARKER_ICON
  }).addTo(this.map);

  this.currentMarker.on('dragend',()=>{
    this.addressLatLng=this.currentMarker.getLatLng();
  })
}
set addressLatLng(latlng:LatLng){
  latlng.lat=parseFloat(latlng.lat.toFixed(8));
  latlng.lng=parseFloat(latlng.lng.toFixed(8));
  //save this latlng value to addressLatLng
console.log(latlng);
var locdata=JSON.stringify(latlng);
localStorage.setItem("location",locdata.toString());
}
}
