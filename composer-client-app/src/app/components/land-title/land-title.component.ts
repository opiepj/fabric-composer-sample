import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LandTitleService } from './services/land-title.service';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-land-title',
  templateUrl: './land-title.component.html',
  styleUrls: ['./land-title.component.scss'],
  providers: [LandTitleService]
})
export class LandTitleComponent implements OnInit {
  
  public myForm: FormGroup;
  public addAssetModal: boolean = false;
  public updateAssetModal: boolean = false;
  public deleteAssetModal: boolean = false;
  public allAssets;
  public display: boolean;
  private asset;
  private currentId;
  private titleId = new FormControl("", Validators.required);
  private owner = new FormControl("", Validators.required);
  private information = new FormControl("", Validators.required);
  private forSale = new FormControl("", Validators.required);
  
  constructor(private serviceLandTitle: LandTitleService, fb: FormBuilder) {
    this.display = false;
    this.myForm = fb.group({
      titleId: this.titleId,
      owner: this.owner,
      information: this.information,
      forSale: this.forSale
    });
  };
  
  ngOnInit(): void {
    this.loadAll();
  }
  
  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceLandTitle.getAll()
      .toPromise()
      .then((result) => {
        result.forEach(asset => {
          tempList.push(asset);
        });
        this.allAssets = tempList;
      });
  }
  
  addAsset(form: any): Promise<any> {
    console.log('Adding Asset');
    this.display = true;
    this.asset = {
      $class: "net.biz.digitalAccentureNetwork.LandTitle",
      "titleId": this.titleId.value,
      "owner": this.owner.value,
      "information": this.information.value,
      "forSale": this.forSale.value
    };
    
    this.myForm.setValue({
      "titleId": null,
      "owner": null,
      "information": null,
      "forSale": null
    });
    
    return this.serviceLandTitle.addAsset(this.asset)
      .toPromise()
      .then(() => {
        this.myForm.setValue({
          "titleId": null,
          "owner": null,
          "information": null,
          "forSale": null
        });
      });
  }
  
  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "net.biz.digitalAccentureNetwork.LandTitle",
      "titleId": this.titleId.value,
      "owner": this.owner.value,
      "information": this.information.value,
      "forSale": this.forSale.value
    };
    return this.serviceLandTitle.updateAsset(this.asset.titleId, this.asset).toPromise();
  }
  
  deleteAsset(): Promise<any> {
    this.deleteAssetModal = true;
    return this.serviceLandTitle.deleteAsset(this.currentId).toPromise();
  }
  
  setId(id: any): void {
    this.currentId = id;
  }
  
  getForm(id: any): Promise<any> {
    this.updateAssetModal = true;
    return this.serviceLandTitle.getAsset(id)
      .toPromise()
      .then((result) => {
        let formObject = {
          "titleId": null,
          "owner": null,
          "information": null,
          "forSale": null
        };
        if (result.titleId) {
          formObject.titleId = result.titleId;
        } else {
          formObject.titleId = null;
        }
        
        if (result.owner) {
          formObject.owner = result.owner;
        } else {
          formObject.owner = null;
        }
        
        if (result.information) {
          formObject.information = result.information;
        } else {
          formObject.information = null;
        }
        
        if (result.forSale) {
          formObject.forSale = result.forSale;
        } else {
          formObject.forSale = null;
        }
        
        this.myForm.setValue(formObject);
        
      });
    
  }
  
  resetForm(): void {
    this.addAssetModal = true;
    this.myForm.setValue({
      "titleId": null,
      "owner": null,
      "information": null,
      "forSale": null
    });
  }
  
}
