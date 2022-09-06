import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/domain/address';
import { AddressCrudService } from 'src/app/services/address-crud.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  addressId:number=0;
  address:Address=new Address();
  constructor(private activatedRout:ActivatedRoute,
    private addressCrudService:AddressCrudService) { }

  ngOnInit(): void {
    console.log("in AddressDetailsComponent");
    this.addressId=this.activatedRout.snapshot.params['addressId'];
    console.log(this.addressId); 
    this.addressCrudService.getSingleAddress(this.addressId).subscribe(
      data =>{
        this.address=data;
        console.log(this.address);
        
      }
    );
  }

}
