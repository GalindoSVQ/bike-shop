import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

export const Providers = ({ children }: PropsWithChildren<{}>) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
