import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class ABOUTUSComponent implements OnInit {
  name:string="musicschool";
  fee:number=20000;
  today=new Date();
  test:number=200;
  images:any[]=[];



  constructor(private img : ImagesService) { }

  ngOnInit(): void {
    this.img.getimages().subscribe((result)=>
  {
    this.images=result['data']
    })
  }

}
