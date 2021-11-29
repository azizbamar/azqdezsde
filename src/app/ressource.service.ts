import { Injectable } from '@angular/core';
import { HotelClass } from './hotel-class';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  listeville=['Tunis','Hammamet','Djerba','Bizerte','Nabeul'];
  getvilles(){
    return this.listeville;
  }
  leshotelsSearched:HotelClass[]=[];

  listHotel:HotelClass [] = [ 
    new HotelClass('radisson blue','aaaa',this.listeville[2],"luxe","tres bien",9,5 ), 
    new HotelClass('Africa jade','../../assets/africajade2.jpg', this.listeville[1],"luxe","tres bien",8.7,4 ), 
    new HotelClass('El Mouradi','',this.listeville[1],"moyen"," bien",6.3,3), 
    new HotelClass('Beach Club','',this.listeville[1],"economique","pas mal",5.3,4 )
    
   ]
   public addHotel(hotel: HotelClass){
    
       
      let h1 = Object.assign({},hotel);
      this.leshotelsSearched.push(h1);
     
    
  };
  public addHotelToRessource(hotel:HotelClass){
    if(this.listHotel.findIndex(x=>x.name==hotel.name)==-1){
      console.log('do not enter');
      this.listHotel.push(hotel);}
  }
   
   gethotels(){
     return this.listHotel;
   }
  
   gethotelsSearched(){
    return this.leshotelsSearched;
  }
  initializeHotelsSearched(){
    return this.leshotelsSearched=[];
  }
  setHotel(hotel:HotelClass){
    let index= this.listHotel.findIndex(x=>x.name==hotel.name);
    this.listHotel[index]=hotel;
    return this.listHotel[index];
  }
  delHotel(nomHotel:string){
    this.listHotel.forEach((element,index)=>{
      if(element.name==nomHotel) this.listHotel.splice(index,1);
   });
    

  }

  constructor() { }
}
