import { render } from "@testing-library/react";

import { OrderStatus } from "@/components/order-status";

describe("Order Status Pending", () => {
  it("should display the right text Pendente based on order status", () => {
    const wrapper = render(<OrderStatus status="pending" />);

    //   wrapper.debug();

    const statusText = wrapper.getByText("Pendente");
    const badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-400");
  });
});

describe("Order Status Canceled", () => {
  it("should display the right text Cancelado based on order status", () => {
    const wrapper = render(<OrderStatus status="canceled" />);

    //   wrapper.debug();

    const statusText = wrapper.getByText("Cancelado");
    const badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-rose-500");
  });
});

describe("Order Status Delivering", () => {
  it("should display the right text Delivering based on order status", () => {
    const wrapper = render(<OrderStatus status="delivering" />);

    //   wrapper.debug();

    const statusText = wrapper.getByText("Em entrega");
    const badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });
});

describe("Order Status Processing", () => {
  it("should display the right text Delivering based on order status", () => {
    const wrapper = render(<OrderStatus status="processing" />);

    //   wrapper.debug();

    const statusText = wrapper.getByText("Em preparo");
    const badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });
});

describe("Order Status Delivered", () => {
  it("should display the right text Delivering based on order status", () => {
    const wrapper = render(<OrderStatus status="delivered" />);

    //   wrapper.debug();

    const statusText = wrapper.getByText("Entregue");
    const badgeElement = wrapper.getByTestId("badge");
    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-emerald-500");
  });
});
