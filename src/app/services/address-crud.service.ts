import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../domain/address';

@Injectable({
  providedIn: 'root'
})
export class AddressCrudService {

  private baseURL:string="http://localhost:8080/addressapi/address";
  constructor(private httpClient : HttpClient) { }
  getAllAddresses(): Observable<Address[]>{
    console.log("in getAllAddresses");
    
    return this.httpClient.get<Address[]>(this.baseURL+"/all");
  }
  addNewAddress(address:Address):Observable<boolean>{
    console.log("in addNewAddress");
    console.log(address);
    return this.httpClient.post<boolean>(this.baseURL,address);
  }
  deleteAddressByAddressId(addressId:number):Observable<boolean>{
    console.log("in delete address");
    console.log(addressId);
    return this.httpClient.delete<boolean>(this.baseURL+"/"+addressId); 
  }
  getSingleAddress(addressId:number):Observable<Address>{
    console.log("in getSingleAddress()");
    return this.httpClient.get<Address>(this.baseURL+"/"+addressId);
    
  }
  updateAddress(address:Address): Observable<boolean>{
    return this.httpClient.put<boolean>(this.baseURL,address);
  }
  
}
