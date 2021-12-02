import { Injectable } from '@angular/core';
import { HotelClass } from './hotel-class';
import { PricesRoom } from './pricesRoom';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PricesCatering } from './pricesCatering';


const URL = 'http://localhost:3000/listHotel';
@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  listeville=['Tunis','Hammamet','Djerba','Bizerte','Nabeul'];
  getvilles(){
    return this.listeville;
  }
  leshotelsSearched:HotelClass[]=[];

  listHotel:HotelClass [] = []
   public addHotel(hotel: HotelClass){
    
       
      let h1 = Object.assign({},hotel);
      this.leshotelsSearched.push(h1);
     
    
  };
  addHotelToRessource(hotel:HotelClass):Observable<HotelClass>{
    return this.http.post<HotelClass>(URL, hotel);
  }
  // public addHotelToRessource(hotel:HotelClass){
  //   if(this.listHotel.findIndex(x=>x.name==hotel.name)==-1){
  //     console.log('do not enter');
  //     this.listHotel.push(hotel);}
  // }
  //******************************** */
  getHotels():Observable<HotelClass[]>{
    
    return this.http.get<HotelClass[]>(URL,);
    }
    modifyHotel(hotel:HotelClass,id:number|undefined):Observable<HotelClass>{
      return this.http.put<HotelClass>(URL+"/"+id,hotel);
    }


    delHotel(id:number|undefined):Observable<HotelClass>{
      return this.http.delete<HotelClass>(URL+"/"+id);
    }
    // delHotel(nomHotel:string){
    //   this.listHotel.forEach((element,index)=>{
    //     if(element.name==nomHotel) this.listHotel.splice(index,1);
    //  });
      
  
    // }
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
 

  constructor(private http:HttpClient) { }
}
