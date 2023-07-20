import {ReactNode} from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import { store } from "../stores/rootStore";
import { BrowserRouter as Router } from "react-router-dom";

const ErrorFallbackComponent = () => (
  <div>
    <span>Something went wrong</span>
  </div>
);

export const AppProvider = ({children}: {children: ReactNode}) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    </ErrorBoundary>
  )
}