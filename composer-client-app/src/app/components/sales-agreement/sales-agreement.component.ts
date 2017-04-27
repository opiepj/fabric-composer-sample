import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { SalesAgreementService } from './services/sales-agreement.service';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-sales-agreement',
  templateUrl: './sales-agreement.component.html',
  styleUrls: ['./sales-agreement.component.scss'],
  providers: [SalesAgreementService]
})
export class SalesAgreementComponent implements OnInit {
  
  public myForm: FormGroup;
  public addAssetModal: boolean = false;
  public updateAssetModal: boolean = false;
  public deleteAssetModal: boolean = false;
  public allAssets;
  private asset;
  private currentId;
  private salesId = new FormControl("", Validators.required);
  private buyer = new FormControl("", Validators.required);
  private seller = new FormControl("", Validators.required);
  private title = new FormControl("", Validators.required);
  
  constructor(private serviceSalesAgreement: SalesAgreementService, fb: FormBuilder) {
    this.myForm = fb.group({
      
      salesId: this.salesId,
      
      buyer: this.buyer,
      
      seller: this.seller,
      
      title: this.title
      
    });
  };
  
  ngOnInit(): void {
    this.loadAll();
  }
  
  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceSalesAgreement.getAll()
      .toPromise()
      .then((result) => {
        result.forEach(asset => {
          tempList.push(asset);
        });
        return this.allAssets = tempList;
      });
  }
  
  addAsset(form: any): Promise<any> {
    
    this.asset = {
      $class: "net.biz.digitalAccentureNetwork.SalesAgreement",
      
      "salesId": this.salesId.value,
      
      "buyer": this.buyer.value,
      
      "seller": this.seller.value,
      
      "title": this.title.value
      
    };
    
    this.myForm.setValue({
      
      "salesId": null,
      
      "buyer": null,
      
      "seller": null,
      
      "title": null
      
    });
    
    return this.serviceSalesAgreement.addAsset(this.asset)
      .toPromise()
      .then(() => {
        this.myForm.setValue({
          
          "salesId": null,
          
          "buyer": null,
          
          "seller": null,
          
          "title": null
          
        });
      });
  }
  
  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "net.biz.digitalAccentureNetwork.SalesAgreement",
      
      "salesId": this.salesId.value,
      
      "buyer": this.buyer.value,
      
      "seller": this.seller.value,
      
      "title": this.title.value
      
    };
    
    return this.serviceSalesAgreement.updateAsset(this.asset.salesId, this.asset).toPromise();
  }
  
  deleteAsset(): Promise<any> {
    
    return this.serviceSalesAgreement.deleteAsset(this.currentId).toPromise();
  }
  
  setId(id: any): void {
    this.deleteAssetModal = true;
    this.currentId = id;
  }
  
  getForm(id: any): Promise<any> {
    this.updateAssetModal = true;
    return this.serviceSalesAgreement.getAsset(id)
      .toPromise()
      .then((result) => {
      
      let formObject = {
        
        "salesId": null,
        
        "buyer": null,
        
        "seller": null,
        
        "title": null
        
      };
      
      if (result.salesId) {
        formObject.salesId = result.salesId;
      } else {
        formObject.salesId = null;
      }
      
      if (result.buyer) {
        formObject.buyer = result.buyer;
      } else {
        formObject.buyer = null;
      }
      
      if (result.seller) {
        formObject.seller = result.seller;
      } else {
        formObject.seller = null;
      }
      
      if (result.title) {
        formObject.title = result.title;
      } else {
        formObject.title = null;
      }
      
      this.myForm.setValue(formObject);
      
    })
    
  }
  
  resetForm(): void {
    this.addAssetModal = true;
    this.myForm.setValue({
      
      "salesId": null,
      
      "buyer": null,
      
      "seller": null,
      
      "title": null
      
    });
  }
  
}
