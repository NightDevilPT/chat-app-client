import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import { ChildProps } from "@/types/children";

export const RootProvider=({children}:ChildProps)=>{
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}