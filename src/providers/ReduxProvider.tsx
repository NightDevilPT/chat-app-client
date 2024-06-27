'use client'

import React from "react";
import { ChildProps } from "@/types/children";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const ReduxProvider = ({ children }: ChildProps) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
