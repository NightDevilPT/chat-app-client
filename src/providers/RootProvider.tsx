import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ChildProps } from "@/types/children";
import ReduxProvider from "./ReduxProvider";

export const RootProvider = ({ children }: ChildProps) => {
	return (
		<ReduxProvider>
			<NextUIProvider>{children}</NextUIProvider>
		</ReduxProvider>
	);
};
