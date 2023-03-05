import { StaticImageData } from "next/image";

export type propsType ={ 
  name: string,
  photo:string  | StaticImageData,
  link:string
}
export type creatorContextType ={

  creator: string;
  setCreator: (creator: string) => void;
  state: string;
  setState: (state: string) => void;
  payment: string;
  setPayment: (payment: string) => void;
  image: string;
  setImage: (image: string) => void;
}