import { createContext, useContext, useReducer } from "react";
import { reducer } from './reducers'

const GameContext = createContext();
const { Provider } = GameContext;

const GameProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        // Values to be stored here example:
        /*  products: [],
            cart: [],
            cartOpen: false,
            categories: [],
            currentCategory: '',  */
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
  };
  
  export { StoreProvider, useStoreContext };
  