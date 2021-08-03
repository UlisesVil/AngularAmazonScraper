import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../../services/getproducts.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ GetProductsService ]
})
export class ProductsComponent implements OnInit {

  public products:any[];

  constructor(
    private _getProductsService : GetProductsService,

  ) {
    this.products = new Array;

    this.products =[
    {title: "Gafas de luz azul AHT, lentes antirayos azules, le…visual, reducen el dolor de cabeza, duermen mejor", price: "US$ 14.99", priceAlt: "US$ 14.99", priceAlt2: "US$ 14.99US$ 13.99US$ 28.99(US$ 28.99/Count)", seller: "AHTDirect", url:'https://www.amazon.com/Fit-Over-Blue-Light-Glasses/dp/B08T14RV4M', image:'https://m.media-amazon.com/images/I/61-olHqiLcL._AC_SL1500_.jpg'},
    {title: "Pro System Audiotek Tablero Arcade Videojuegos Con… Jugadores Tablero Arcade Multijuegos Pandora Box", price: "", priceAlt: "", priceAlt2: "$$3,087.79$3,199.00", seller: "Mercadazo",  url:'https://www.amazon.com.mx/Tablero-Videojuegos-Joystick-Jugadores-Divertido/dp/B07KKNRMNF?ref_=Oct_DLandingS_D_5f90baa1_60&smid=A23GI8CCKENGEP', image:'https://m.media-amazon.com/images/I/814HedSxgWS._AC_SL1500_.jpg'},
    {title: "Lekesky Mochila para perros extensible para gatos …able con correa de seguridad interior, color gris", price: "$769.00", priceAlt: "$769.00", priceAlt2: "$$769.00$359.00$1,119.50", seller: "Fashionsi", url:'https://www.amazon.com.mx/Lekesky-extensible-pequeños-plegable-seguridad/dp/B08XY1SC8Q/ref=sr_1_5?__mk_es_MX=ÅMÅŽÕÑ&dchild=1&keywords=perros&qid=1627823096&sr=8-5', image:'https://m.media-amazon.com/images/I/71m5hy9xPFS._AC_SL1000_.jpg'},
    {title: "Redragon M602 RGB con cable Gaming Mouse RGB Spect… de hasta 7200 DPI para Windows PC Gamers (negro)", price: "", priceAlt: "US$ 11.89", priceAlt2: "US$ 89.99US$ 178.88US$ 27.99US$ 24.29 US$ 11.89 US$ 11.89US$ 27.99US$ 14.95", seller: "ChallengerUSA", 'url':'https://www.amazon.com/-/es/M602-retroiluminado-ergonómico-programable-retroiluminación/dp/B011HMDZ0Q/ref=sr_1_13?dchild=1&keywords=gaming+mouse&pd_rd_r=ec701e90-6536-4075-9d5e-f4b7526ef07d&pd_rd_w=wiTKY&pd_rd_wg=3v42V&pf_rd_p=0876ea35-294d-4c10-b82b-ef77adfac50a&pf_rd_r=E4PQTQ0Y45NA0AWS2G31&qid=1627894143&sr=8-13', image:'https://m.media-amazon.com/images/I/61MI2KPnKgL._AC_SL1500_.jpg'},
    {title: "Máscara JURASSIC WORLD CHOMP 'N ROAR Velociraptor \"Azul\"", price: "", priceAlt: "", priceAlt2: "US$ 48.00", seller: null,  url:'https://www.amazon.com/-/es/Máscara-JURASSIC-WORLD-CHOMP-Velociraptor/dp/B076FTFYTL/?_encoding=UTF8&pd_rd_w=1INpp&pf_rd_p=e6466728-468b-41bb-b5c0-ae48471ad212&pf_rd_r=5VBZ26R95CFK003M340B&pd_rd_r=86985fbd-06cd-4d91-b005-31638082d793&pd_rd_wg=YmgcE&ref_=pd_gw_unk', image:'https://m.media-amazon.com/images/I/91sa28PArlS._AC_SL1500_.jpg'}
    ];
  }

  ngOnInit(): void {

    let urlFirstProduct=[
      {'url':'https://www.amazon.com.mx/Lekesky-extensible-pequeños-plegable-seguridad/dp/B08XY1SC8Q/ref=sr_1_5?__mk_es_MX=ÅMÅŽÕÑ&dchild=1&keywords=perros&qid=1627823096&sr=8-5'},
      {'url':'https://www.amazon.com/-/es/Máscara-JURASSIC-WORLD-CHOMP-Velociraptor/dp/B076FTFYTL/?_encoding=UTF8&pd_rd_w=1INpp&pf_rd_p=e6466728-468b-41bb-b5c0-ae48471ad212&pf_rd_r=5VBZ26R95CFK003M340B&pd_rd_r=86985fbd-06cd-4d91-b005-31638082d793&pd_rd_wg=YmgcE&ref_=pd_gw_unk'},
      {'url':'https://www.amazon.com/Fit-Over-Blue-Light-Glasses/dp/B08T14RV4M'},
      {'url':'https://www.amazon.com.mx/Tablero-Videojuegos-Joystick-Jugadores-Divertido/dp/B07KKNRMNF?ref_=Oct_DLandingS_D_5f90baa1_60&smid=A23GI8CCKENGEP'},
      {'url':'https://www.amazon.com/-/es/M602-retroiluminado-ergonómico-programable-retroiluminación/dp/B011HMDZ0Q/ref=sr_1_13?dchild=1&keywords=gaming+mouse&pd_rd_r=ec701e90-6536-4075-9d5e-f4b7526ef07d&pd_rd_w=wiTKY&pd_rd_wg=3v42V&pf_rd_p=0876ea35-294d-4c10-b82b-ef77adfac50a&pf_rd_r=E4PQTQ0Y45NA0AWS2G31&qid=1627894143&sr=8-13'}

    ];

/*
    urlFirstProduct.forEach(element => {
      this.callProducts(element);
    });
*/
  }

  callProducts(url){
    console.log(url);

    this._getProductsService.getProducts(url).subscribe(
      res=>{
        if(res){
          console.log(res);

          this.products.push(res);
          console.log(this.products);

        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
