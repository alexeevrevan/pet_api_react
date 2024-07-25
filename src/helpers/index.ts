import {ActionType} from "../types/reducer";
import {Dispatch} from "@reduxjs/toolkit";

export const renderBreed = (value: string, dispatch: Dispatch<any>) => {
    dispatch({
        type: ActionType.BREED,
        payload: value
    });
    dispatch({
        type: ActionType.SUB_BREED,
        payload: "all"
    });
    dispatch({
        type: ActionType.ERROR,
        payload: false
    })
};

export const renderSubBreed = (value: string, dispatch: Dispatch<any>) => {
    dispatch({
        type: ActionType.SUB_BREED,
        payload:value
    })
};

export const renderNumber = (value: string, dispatch: Dispatch<any>) => {
    dispatch({
        type: ActionType.NUMBER,
        payload: value
    })
};