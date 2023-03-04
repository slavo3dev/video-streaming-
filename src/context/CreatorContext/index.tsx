import { createContext } from 'react';


interface CreatorContextType {
  creator: string;
  setCreator: (creator: string) => void;
  state: string;
  setState: (state: string) => void;
  payment: string;
  setPayment: (payment: string) => void;
  image: string;
  setImage: (image: string) => void;
}


const CreatorContext = createContext<CreatorContextType >({
    creator: '',
    setCreator: function (creator: string): void {
        throw new Error('Error');
    },
    state: '',
    setState: function (state: string): void {
        throw new Error('Error');
    },
    payment: '',
    setPayment: function (payment: string): void {
        throw new Error('Error');
    },
    image: '',
    setImage: function (image: string): void {
        throw new Error('error');
    }
});

export default CreatorContext;
