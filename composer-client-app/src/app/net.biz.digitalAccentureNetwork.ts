// export namespace net.biz.digitalAccentureNetwork{
export class BaseAsset {
  $class?: string;
}
export class LandTitle extends BaseAsset {
  titleId: string;
  owner: Person;
  information: string;
  forSale: boolean;
}
export class SalesAgreement extends BaseAsset {
  salesId: string;
  buyer: Person;
  seller: Person;
  title: LandTitle;
}
export class Person {
  personId: string;
  firstName: string;
  lastName: string;
}
export class RegisterPropertyForSale {
  transactionId: string;
  seller: Person;
  title: LandTitle;
  timestamp: Date;
}
// }
