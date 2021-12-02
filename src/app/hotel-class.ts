import { PricesCatering } from "./pricesCatering";
import {PricesRoom } from "./pricesRoom";

export class HotelClass {


    constructor(
        public name? :string,
        public image?:string,
        public ville?:string,
        public categorie?:string,
        public avis?:string,
        public rate?:number, 
        public etoile?:number,
        public pricesRoom?:PricesRoom,
        public pricesCatering?:PricesCatering,
        public id?:number
    ){

    }
}
