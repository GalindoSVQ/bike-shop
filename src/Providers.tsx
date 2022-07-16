import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "components/Layout";
import theme from "styles/theme";
import { ShoppingCartProvider } from "context/ShoppingCart";

export const Providers = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    <ShoppingCartProvider>
      <Layout>{children}</Layout>
    </ShoppingCartProvider>
  </ThemeProvider>
);
