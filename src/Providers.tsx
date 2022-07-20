import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { ShoppingCartProvider } from "context";
import { Layout } from "components/Layout";
import theme from "styles/theme";

export const Providers = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    <ShoppingCartProvider>
      <Layout>{children}</Layout>
    </ShoppingCartProvider>
  </ThemeProvider>
);
