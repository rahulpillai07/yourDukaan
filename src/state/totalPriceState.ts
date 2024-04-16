import { atom } from "recoil";

export const totalPriceState = atom({
    key: 'totalPriceState',
    default: 0, // Provide an initial value here
});