export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface IBenefit {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface IClass {
  id: string;
  name: string;
  description?: string;
  image: string;
}
