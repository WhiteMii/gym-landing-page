export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface IBenefitType {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
}
