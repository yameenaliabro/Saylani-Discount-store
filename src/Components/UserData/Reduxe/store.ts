import { configureStore } from  "@reduxjs/toolkit"
import { DiscountStoreSlice } from "./Slice"
export const store = configureStore(DiscountStoreSlice) 