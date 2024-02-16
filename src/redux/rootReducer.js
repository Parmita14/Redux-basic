import { combineReducers } from "redux";
import cakeReducer  from "./cakes/cakeReducer";
import iceCreamReducer from "./Icecream/icecreamReducer";


const rootReducer = combineReducers({
     cake : cakeReducer,
    iceCream : iceCreamReducer
});

export default rootReducer;
