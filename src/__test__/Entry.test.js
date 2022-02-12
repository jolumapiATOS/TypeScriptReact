import {  render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CreateEntry from "../components/Entry";

const MockEntry = () => {
    return (
        <BrowserRouter>
            <CreateEntry/>
        </BrowserRouter>
    )
}

test("Testing the input", () => {
    render( <MockEntry/> )
    const inputfor = screen.getByTestId( "testing-input-1" )
    fireEvent.change(inputfor, {target: { value: "Entering a value" }})
    expect(inputfor.value).toBe("Entering a value")
});

test("Testing the input", () => {
    render( <MockEntry/> )
    const input2 = screen.getByTestId( "testing-input-1" )
    fireEvent.change(input2, {target: { value: "Entering a value for content" }})
    expect(input2.value).toBe("Entering a value for content")
});

test("Testing the database", () => {
    render( <MockEntry/> )
    window.alert = () => {};
    const inputfor = screen.getByTestId( "testing-input-1" )
    const input2 = screen.getByTestId( "testing-input-1" )
    const btn = screen.getByText(/submit/i);
    fireEvent.change(inputfor, {target: { value: "Entering a value" }})
    fireEvent.change(input2, {target: { value: "Entering a value for content" }})
    fireEvent.click(btn)
}); 
