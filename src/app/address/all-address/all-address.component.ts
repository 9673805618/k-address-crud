import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/domain/address';
import { AddressCrudService } from 'src/app/services/address-crud.service';

@Component({
  selector: 'app-all-address',
  templateUrl: './all-address.component.html',
  styleUrls: ['./all-address.component.css']
})
export class AllAddressComponent implements OnInit {

 allAddress: Address[]=[];
 result:boolean=false;
  constructor(private addressCrudService: AddressCrudService,
    private router:Router
    ) { }

  ngOnInit(): void {
    console.log("in AllAddressComponenet");
    this.reloadData();
  }
  reloadData(){
    this.addressCrudService.getAllAddresses().subscribe(
      data =>{
        this.allAddress=data;
        console.log(this.allAddress);
      }
    );
  }
  deleteAddress(addressId:number){
    console.log(addressId);
    this.addressCrudService.deleteAddressByAddressId(addressId).subscribe(
      data=>{
        this.result=data;
        this.reloadData();
      }
    );
    
    
  }
  showDetails(addressId:number){
    console.log(addressId);
    this.router.navigate(['addressdetails',addressId]);
    
  }
  updateAddress(addressId:number){
    console.log(addressId);
    this.router.navigate(['updateaddress',addressId]);
  }

}
