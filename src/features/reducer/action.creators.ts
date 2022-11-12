import { createAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/product";
import { actionTypes } from "./action.types";

export const loadActionCreator = createAction<Array<IProduct>>(
    actionTypes.load
);
export const addActionCreator = createAction<IProduct>(actionTypes.add);
export const updateActionCreator = createAction<IProduct>(actionTypes.update);
export const deleteActionCreator = createAction<IProduct>(actionTypes.delete);
