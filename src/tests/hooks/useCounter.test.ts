import { act, renderHook } from "@testing-library/react";
import { useCounter } from "hooks";

describe("useCounter Hook", () => {
  test("should returns default values", () => {
    const { result } = renderHook(() => useCounter());
    const { count, decrement, increment, reset } = result.current;

    expect(count).toBe(0);
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
  });

  test("should returns 10", () => {
    const { result } = renderHook(() => useCounter(10));
    const { count } = result.current;

    expect(count).toBe(10);
  });

  test("should increment the value by 1", () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.count).toBe(1);
  });

  test("should decrement the value by 1", () => {
    const { result } = renderHook(() => useCounter(10));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    expect(result.current.count).toBe(9);
  });

  test("should reset the value", () => {
    const { result } = renderHook(() => useCounter(10));
    const { decrement, increment, reset } = result.current;

    act(() => {
      decrement();
      increment();
      decrement();
      increment();
      reset();
    });

    expect(result.current.count).toBe(10);
  });
});
