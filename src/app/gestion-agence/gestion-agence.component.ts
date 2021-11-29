import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HotelClass } from '../hotel-class';
import { RessourceService } from '../ressource.service';

@Component({
  selector: 'app-gestion-agence',
  templateUrl: './gestion-agence.component.html',
  styleUrls: ['./gestion-agence.component.css']
})
export class GestionAgenceComponent implements OnInit {
  leshotels:HotelClass[]=[];
  hotel:HotelClass = new HotelClass();
  hotelSelected:HotelClass = new HotelClass();
  leshotelsSearched1:HotelClass[]=[];

  leshotelsSearched:HotelClass[]=[];
  chaine:string='';
  hotelDel:string='';
  lesvilles:string[]=[];
  modif:boolean=false;
  selectE: boolean=false;
  selectH: boolean=false;
  toDelete:boolean=false;
  supp:boolean=false;
  ville:string="";
  i:Number=0;


  productForm: FormGroup = new FormGroup({
    name:new FormControl(''),
    image: new FormControl(''),
    ville: new FormControl(''),
    categorie: new FormControl(''),
    avis : new FormControl(''),
    rate: new FormControl(),
    etoile : new FormControl(),
  });
    
  constructor(private ressourcesevice : RessourceService) { }
  onSubmit(form:NgForm){
    console.log(form.value);
    this.hotel=form.value as HotelClass;
    this.ressourcesevice.addHotelToRessource(this.hotel);
    this.ngOnInit();

  }
  modifier(){
    this.modif=true;}
    onSelectedE(){
      this.selectE=true;
      console.log(this.ville);
      this.leshotelsSearched=this.ressourcesevice.initializeHotelsSearched();
     
      for (let index = 0; index < this.leshotels.length; index++) {

        if (this.ville==this.leshotels[index].ville) {

          this.ressourcesevice.addHotel(this.leshotels[index]);
          
        }
        this.leshotelsSearched=this.ressourcesevice.gethotelsSearched();  
      }
    }
    onSelectedH(){
      this.selectH=true;
      console.log(this.chaine);
        this.hotelSelected=this.leshotels.find(x=>x.name==this.chaine) as HotelClass;
        console.log(this.hotelSelected);
        this.ngOnInit();
        this.hotelSelected=new HotelClass;
    }
    onChange(){
      console.log(this.productForm.value);
      this.ressourcesevice.setHotel(this.productForm.value)
      

    }
    deleteHotel(){
      this.ressourcesevice.delHotel(this.hotelDel);
    }
    
  ngOnInit(): void {
      this.leshotels=this.ressourcesevice.gethotels();
      console.log(this.leshotels=this.ressourcesevice.gethotels());
      
    this.lesvilles=this.ressourcesevice.getvilles();
    
      this.productForm.get('name')?.setValue(this.hotelSelected.name);
    this.productForm.get('image')?.setValue(this.hotelSelected.image);

    this.productForm.get('ville')?.setValue(this.hotelSelected.ville);

    this.productForm.get('categorie')?.setValue(this.hotelSelected.categorie);
    this.productForm.get('avis')?.setValue(this.hotelSelected.avis);
    this.productForm.get('rate')?.setValue(this.hotelSelected.rate);
    this.productForm.get('etoile')?.setValue(this.hotelSelected.etoile);
    console.log('i am down');

    
    
    


    
    


  }

}
