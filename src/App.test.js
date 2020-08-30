import React from 'react';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App';
import Accordion from './components/Accordion'

let container = null;
beforeEach(() => {
  // sets a DOM element to render the app
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // removes the created elements after each test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders app title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Servicios disponibles/i);
  expect(titleElement).toBeInTheDocument();
});

describe ('Accordion', () => {
  const testCategories = [
    {"Id": "1", "Caption": "A"},
    {"Id": "2", "Caption": "B"},
    {"Id": "3", "Caption": "C"}
  ];
  const testServices = [
    {
      serviceCaption:"aaa", 
      serviceCategoryId: "1",
      serviceFree:false,
      serviceId: "1"
    },
    {
      serviceCaption:"bbb", 
      serviceCategoryId: "2",
      serviceFree:false,
      serviceId: "2"
    },
    {
      serviceCaption:"ccc", 
      serviceCategoryId: "3",
      serviceFree:false,
      serviceId: "3"
    }
  ];
  it("renders all available categories", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(testCategories, testServices)
      })
    );

    await act(async () => {
      const { getByText } = render(<Accordion allCategories = {testCategories} allServices = {testServices} />);
      const categoryTitleArr = testCategories.map(category => 
        getByText(category.Caption)
        );
      categoryTitleArr.map(caption => expect(caption).toBeInTheDocument()); 
    });
    global.fetch.mockRestore();
  });


  it('should display services filtered by category', async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(testCategories, testServices)
      })
    );

    await act(async () => {
      const { getByText } = render(<Accordion allCategories = {testCategories} allServices = {testServices} />);
      const serviceTitleArr = testServices.map(service => 
        getByText(service.serviceCaption)
        );
      serviceTitleArr.map(service => expect(service).toBeInTheDocument()); 
    });

    global.fetch.mockRestore();
})
});