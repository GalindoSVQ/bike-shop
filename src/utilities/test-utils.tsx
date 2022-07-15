import { ComponentType, PropsWithChildren } from "react";
import { afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

afterEach(() => {
  cleanup();
});

const AllTheProviders = ({ children }: PropsWithChildren<{}>) => (
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
);

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: AllTheProviders as ComponentType,
    ...options,
  });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
