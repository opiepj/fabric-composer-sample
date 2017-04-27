'use strict';

/**
 * Process a property that is held for sale
 * @param {net.biz.digitalAccentureNetwork.RegisterPropertyForSale} propertyForSale the property to be sold
 * @transaction
 */
function onRegisterPropertyForSale(propertyForSale) {
  console.log('### onRegisterPropertyForSale ' + propertyForSale.toString());
  propertyForSale.title.forSale = true;
  
  returAssetRegistry('net.biz.digitalAccentureNetwork.LandTitle').then(function(result) {
      return result.update(propertyForSale.title);
    }
  );
}
