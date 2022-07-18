import { PropsWithChildren } from "react";

import { ErrorBoundary } from "components/ErrorBoundary";
import { Content, Main, Wrapper } from "./Layout.style";
import { Sidebar } from "components/Sidebar";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ShoppingCart } from "components/ShoppingCart";

export function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <Content>
        <Header />
        <Main>
          <ErrorBoundary>{children}</ErrorBoundary>
        </Main>
        <Footer />
      </Content>
      <Sidebar />
      <ShoppingCart />
    </Wrapper>
  );
}
