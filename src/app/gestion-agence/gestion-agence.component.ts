import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HotelClass } from '../hotel-class';
import { PricesCatering } from '../pricesCatering';
import { PricesRoom } from '../pricesRoom';
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
  i:number|undefined=0;
  pricesRoom:PricesRoom | undefined
  pricesCatering:PricesRoom|undefined;


  productForm: FormGroup = new FormGroup({
    name:new FormControl(''),
    image: new FormControl(''),
    ville: new FormControl(''),
    categorie: new FormControl(''),
    avis : new FormControl(''),
    rate: new FormControl(),
    etoile : new FormControl(),
  });
  productForm1:FormGroup=new FormGroup({
    single:new FormControl(),
    double:new FormControl(),
    triple:new FormControl(),
    quadruple:new FormControl(),
  });
  productForm2:FormGroup=new FormGroup({
    petitDej:new FormControl(),
    demiPension:new FormControl(),
    pensionComplete:new FormControl(),
    allIn:new FormControl(),
  });
    
  constructor(private ressourcesevice : RessourceService) { }
  valider1(f1:NgForm){
    console.log(f1.value);
    this.pricesRoom=f1.value as PricesRoom;

  }
  valider2(f2:NgForm){
    this.pricesCatering=f2.value as PricesCatering;


  }
  onSubmit(form:NgForm){
    this.hotel=form.value as HotelClass;
    this.hotel.pricesRoom=this.pricesRoom;
    this.hotel.pricesCatering=this.pricesCatering;
    console.log(this.hotel);

    this.ressourcesevice.addHotelToRessource(this.hotel) 
    .subscribe (data => console.log(data));
    ;
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
        console.log('i am here');
        this.i=this.hotelSelected.id;
        console.log(this.hotelSelected);
        this.ngOnInit();

        this.hotelSelected=new HotelClass;

    }
    // ENVOIE DES MODIFICATIONS
    onChange(){
      this.hotel=this.productForm.value;
      console.log('--------changed---------');
      this.hotel.pricesRoom=this.productForm1.value as PricesRoom;
      this.hotel.pricesCatering=this.productForm2.value as PricesCatering;
      console.log(this.hotel);
       
      this.ressourcesevice.modifyHotel(this.hotel,this.i)
      .subscribe(data => console.log(data)
      )

    }
    
    deleteHotel(){
      this.hotelSelected=this.leshotels.find(x=>x.name==this.hotelDel) as HotelClass;

      this.ressourcesevice.delHotel(this.hotelSelected.id)
      .subscribe()
      ;
    }
    
  ngOnInit(): void {

    this.ressourcesevice.getHotels()
    .subscribe (data => {
      this.leshotels = data as HotelClass[]
      console.log(this.leshotels);
      
    }); 
      
    this.lesvilles=this.ressourcesevice.getvilles();
    
    this.productForm.get('name')?.setValue(this.hotelSelected.name);
    this.productForm.get('image')?.setValue(this.hotelSelected.image);
    this.productForm.get('ville')?.setValue(this.hotelSelected.ville);
    this.productForm.get('categorie')?.setValue(this.hotelSelected.categorie);
    this.productForm.get('avis')?.setValue(this.hotelSelected.avis);
    this.productForm.get('rate')?.setValue(this.hotelSelected.rate);
    this.productForm.get('etoile')?.setValue(this.hotelSelected.etoile);
    this.productForm1.get('single')?.setValue(this.hotelSelected.pricesRoom?.single);
    this.productForm1.get('double')?.setValue(this.hotelSelected.pricesRoom?.double);
    this.productForm1.get('triple')?.setValue(this.hotelSelected.pricesRoom?.triple);
    this.productForm1.get('quadruple')?.setValue(this.hotelSelected.pricesRoom?.quadruple);
    this.productForm2.get('petitDej')?.setValue(this.hotelSelected.pricesCatering?.petitDej);
    this.productForm2.get('demiPension')?.setValue(this.hotelSelected.pricesCatering?.demiPension);
    this.productForm2.get('pensionComplete')?.setValue(this.hotelSelected.pricesCatering?.pensionComplete);
    this.productForm2.get('allIn')?.setValue(this.hotelSelected.pricesCatering?.allIn);


    console.log('i am down');

    
    
    


    
    


  }

}
