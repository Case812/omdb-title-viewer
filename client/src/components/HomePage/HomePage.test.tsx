import { render } from "@testing-library/react";
import { HomePage } from "./HomePage";
import { Provider } from "react-redux";

describe('HomePage', () => {
  it('should render correctly', () => {
    const mockStore2 = {
      getState: jest.fn().mockReturnValue({reducer: {}}), 
      subscribe: jest.fn(), dispatch: jest.fn()} as any;
      const {container} = render(
    <Provider 
      store={mockStore2 as any}>
       <HomePage />
    </Provider>);
    expect(container).toBeTruthy();
  });
});