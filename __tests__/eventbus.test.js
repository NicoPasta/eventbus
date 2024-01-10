const { EventBus } = require("../index.js");

describe("EventBus", () => {
  let eventBus;

  beforeEach(() => {
    eventBus = new EventBus();
  });

  // 添加事件监听
  it("add event listener", () => {
    const eventName = "testEvent";
    const eventHandler = jest.fn();

    eventBus.on(eventName, eventHandler);

    expect(eventBus.listeners[eventName]).toContain(eventHandler);
  });

  // 移除事件监听
  it("remove event listener", () => {
    const eventName = "testEvent";
    const eventHandler = jest.fn();

    eventBus.on(eventName, eventHandler);
    eventBus.off(eventName, eventHandler);

    expect(eventBus.listeners[eventName]).not.toContain(eventHandler);
  });

  // 触发事件
  it("emit event", () => {
    const eventName = "testEvent";
    const eventHandler = jest.fn();

    eventBus.on(eventName, eventHandler);
    eventBus.emit(eventName);

    expect(eventHandler).toHaveBeenCalled();
  });

  // 移除事件
  it("remove event", () => {
    const eventName = "testEvent";
    const eventHandler1 = jest.fn();
    const eventHandler2 = jest.fn();

    eventBus.on(eventName, eventHandler1);
    eventBus.on(eventName, eventHandler2);

    eventBus.removeEvent(eventName);

    expect(eventBus.listeners).not.toHaveProperty(eventName);
  });

  // 重置
  it("reset eventbus", () => {
    const eventName = "testEvent";
    const eventHandler = jest.fn();
    eventBus.on(eventName, eventHandler);

    eventBus.reset();

    expect(eventBus.listeners).toEqual({});
  });
});
