"use client";

import { Provider } from "react-redux";
import sagaStore from "./sagaStore";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={sagaStore}>{children}</Provider>;
}
