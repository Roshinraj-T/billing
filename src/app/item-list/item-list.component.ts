import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
@Component({
//   imports:{
//     CommonModule
// },
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
// interface itemList{
//   itemName:string;
//   category:string;
//   Rs:number;
// }
export class ItemListComponent  {
// itemName: string;
// category: string;
// Rs: number;
// constructor(){
// cardItemList:itemList[]=[
  // {
  //   itemName:"burger",
  //   category:"veg",
  //   Rs:250
  // },
  // {
  //   itemName:"burger",
  //   category:"veg",
  //   Rs:250
  // },
  // {
  //   itemName:"burger",
  //   category:"veg",
  //   Rs:250
  // },
  // {
  //   itemName:"burger",
  //   category:"veg",
  //   Rs:250
  // },
  // {
  //   itemName:"burger",
  //   category:"veg",
  //   Rs:250
  // }

// ]
// }
cartItems:any=[
  {
    id:1,
    Img:"../../assets/vector-hamburger-icon.webp",
    itemName:"burger",
    category:"veg",
    count:5,
    Rs:250
  },
  {
    id:2,
    Img:"../../assets/vector-hamburger-icon.webp",
    itemName:"burger",
    category:"veg",
    count:3,
    Rs:250
  },
  {
    id:3,
    Img:"../../assets/vector-hamburger-icon.webp",
    itemName:"burger",
    category:"veg",
    count:6,
    Rs:250
  },
  {
    id:4,
    Img:"../../assets/vector-hamburger-icon.webp",
    itemName:"burger",
    category:"veg",
    count:7,
    Rs:250
  },
  {
    id:5,
    Img:"../../assets/vector-hamburger-icon.webp",
    itemName:"burger",
    category:"veg",
    count:7,
    Rs:250
  }
]

Delete(num:number){
  console.log(num);
  var items:any;
  // items=this.cartItems.filter((e:any)=>e.id===num)
  items=this.cartItems.map((e:any)=>{
    if(e.id===num){
      e.count=e.count-1
    }
  })

  
// this.count=this.cartItems.filter((e:number)=>{
//   if(e===this.cartItems.id){
//     // this.cartItems.count-=1

//     console.log(this.cartItems.id);
    
//   }

// })

// this.items=this.cartItems.map((e:any)=>e)
// console.log(this.items);
//  var counts:number=0
 
//  var cartitem:any
// // items=function (cartItems:any){return cartItems.filter((e:any)=>e.id==num)}
// // console.log(items);


// cartitem=items(this.cartItems)
// console.log(cartitemng );

// this.cartItems.id=this.items.id
// console.log(items.count);
// counts =items.count
// console.log(counts);
// console.log(items.itemName);
// this.count=this.items.count-1
// console.log(this.count);

}
}
