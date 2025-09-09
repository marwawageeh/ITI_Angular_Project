import { Component } from '@angular/core';
import { LatestModel } from '../../Models/latest-model';
import { Auther } from '../../Models/auther';
import { LatestService } from '../../Service/latest-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-latest',
  imports: [RouterLink],
  templateUrl: './latest.html',
  styleUrl: './latest.css'
})
export class Latest {
  latestlist: LatestModel[]
  // auther : Auther[]

  constructor(private latestService:LatestService ) {
    this.latestlist = this.latestService.getAll();
  }
  // constructor(){
  //   this.latestlist =
  //   [
  //     {id:1,img:"L01.png", title:"Illustration", body:"Japan House opens in mountainside to foster peak creativity.", Auther:"Reta Torphy"},
  //     {id:2,img:"L02.png", title:"Photography", body:"Helmut Lang celebrates taxi drivers worldwide in latest campaign", Auther:"Alessandra Ortiz"},
  //     {id:3,img:"L03.png", title:"Photography", body:"Bowlcut launch a new summer collection that pays homage to “UK legends”", Auther:"Rosanna Ondricka"},
  //     {id:4,img:"L04.png", title:"Photography", body:"Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn", Auther:"Annie Lueilwitz"},
  //     {id:5,img:"L05.png", title:"Interactive Design", body:"London-based Yinka Ilori’s storytelling furniture", Auther:"Annie Lueilwitz"},
  //     {id:6,img:"L06.png", title:"Graphic Design", body:"Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck", Auther:"Simeon Brekke"},
  //     {id:7,img:"L07.png", title:"Architecture", body:"Suzanne Saroff’s meticulously arranged photographs alter perceptions", Auther:" Reta Torphy"},
  //     {id:8,img:"L08.png", title:"Graphic Design", body:"Anu Ambasna’s playful illustrations celebrate club culture, brown bodies and perfect paunches", Auther:"Leo Bartell"},
  //     {id:9,img:"L09.png", title:"Interactive Design", body:"Rudy Guedj’s design work sits between “figurative motives and their abstracted representations”", Auther:"Simeon Brekke"},
  //     {id:10,img:"L10.png", title:"Interactive Design", body:"How Alex Prager made the world stop and stare", Auther:"Michal Legros"},
  //     {id:11,img:"L11.png", title:"Animation", body:"New platform Holdframe offers animators’ full project files for others to download and explore", Auther:"Simeon Brekke"},
  //     {id:12,img:"L12.png", title:"Illustration", body:"Japan House opens in mountainside to foster peak creativity.", Auther:"Rosanna Ondricka"},
  //     {id:13,img:"L13.png", title:"Illustration", body:"M&C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas", Auther:"Annie Lueilwitz"},
  //     {id:14,img:"L14.png", title:"Photography", body:"Fred Rowson directs film for Years and Years", Auther:"Coby Gottlieb"},
  //     {id:15,img:"L15.png", title:"Graphic Design", body:"Need a guide to LA’s graphic design scene? Shoplifters’ new issue has got your back", Auther:"Alessandra Ortiz"},
  //     {id:16,img:"L16.png", title:"Graphic Design", body:"A Brief History of the FIFA World Cup Logo", Auther:"Clem Onojeghuo"}
  //   ]
    // this.auther = [
    //   {id:1, name:"Reta Torphy"},
    //   {id:2, name:"Alessandra Ortiz"},
    //   {id:3, name:"Rosanna Ondricka"},
    //   {id:4, name:"Annie Lueilwitz"},
    //   {id:5, name:"Clem Onojeghuo"},
    //   {id:6, name:"Simeon Brekke"},
    //   {id:7, name:"Leo Bartell"},
    //   {id:8, name:"Michal Legros"},
    //   {id:9, name:"Coby Gottlieb"}
    // ]
  // }

}
