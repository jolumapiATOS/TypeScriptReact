import {  render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CreateEntry from "../components/Entry";
import Navbar from "../components/Navbar";


const MockNavbar = () => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
        </BrowserRouter>
    )
}

test("testing the existence of the navbar", () => {
    render( <MockNavbar />);
    const element = screen.getByTestId('testing-navbar');
    expect(element).toBeInTheDocument();
});
