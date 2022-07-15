import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "components/Layout";
import theme from "styles/theme";

export const Providers = ({ children }: PropsWithChildren<{}>) => (
  <ThemeProvider theme={theme}>
    <Layout>{children}</Layout>
  </ThemeProvider>
);
