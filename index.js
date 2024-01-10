class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, cb) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(cb);
  }

  emit(event, data) {
    const eventListeners = this.listeners[event];
    if (eventListeners) {
      eventListeners.forEach((cb) => {
        cb(data);
      });
    }
  }

  off(event, removed) {
    const eventListeners = this.listeners[event];
    if (eventListeners) {
      this.listeners[event] = eventListeners.filter((cb) => cb !== removed);
    }
  }

  removeEvent(event) {
    delete this.listeners[event];
  }

  reset() {
    this.listeners = {};
  }
}

module.exports.EventBus = EventBus;
