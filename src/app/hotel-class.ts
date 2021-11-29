import { Price } from "./price";

export class HotelClass {
    
    constructor(
        public name? :string,
        public image?:string,
        public ville?:string,
        public categorie?:string,
        public avis?:string,
        public rate?:number, 
        public etoile?:number,
        public price?:Price
    ){

    }
}
