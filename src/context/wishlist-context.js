import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer";

const initialState = {
    wishlist: []
}

const WishlistContext = createContext();

const WishlistProvider = ({children}) => {

    const [{wishlist}, wishlistDispatch] = useReducer(wishlistReducer, initialState)

    return (
        <WishlistContext.Provider value={{ wishlist, wishlistDispatch }}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider }