import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';



test('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchBar></SearchBar>, div)
});

test('renders SearchBar correctly', () => {
    const { queryByTestId } = render(<SearchBar />)

    expect(queryByTestId("search-icon")).toBeTruthy()
    expect(queryByTestId("text-field")).toBeTruthy()
});

describe("Input Value", () => {
    test("updates on change", () => {
        const { queryByPlaceholderText } = render(<SearchBar />)
        const searchInput = queryByPlaceholderText("Make sure to put ' / ' in between");
        fireEvent.change(searchInput, { target: { value: "test" } })
        expect(searchInput.value).toBe("test")
    })
})