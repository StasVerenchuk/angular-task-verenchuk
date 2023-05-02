import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  public productList : any;
  public filterCatgory: any;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList = res;
      this.filterCatgory = res;

      this.productList.forEach((a:any)=>{
        if(a.category ==="men's clothing" || a.category ==="women's clothing"){
          a.category = 'fashion';
        }
      });
      console.log(this.productList);
    });
    
  }
  filter(category:string){
    this.filterCatgory = this.productList.filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
}
