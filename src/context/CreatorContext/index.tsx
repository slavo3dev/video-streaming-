import { createContext } from 'react';

type CreatorContextType = "string" | any;

const CreatorContext = createContext<CreatorContextType >("");

export default CreatorContext;