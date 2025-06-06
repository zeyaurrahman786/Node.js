const EventEmitter = require('events');

const eventSystem = new EventEmitter();


// Order placed
eventSystem.on('orderPlaced', (order) => {
    console.log(`Order placed: ${order}`);
    eventSystem.emit('paymentDone', order);
});

// Payment processed
eventSystem.on('paymentDone', (order) => {
    console.log(`Payment done for order: ${order}`);
    eventSystem.emit('packagePrepared', order);
});

// Package ready
eventSystem.on('packagePrepared', (order) => {
    console.log(`Package prepared for order: ${order}`);
    eventSystem.emit('delivered', order);
});

// Order delivered
eventSystem.on('delivered', (order) => {
    console.log(`Order delivered: ${order}`);
});

// Trigger the process
eventSystem.emit('orderPlaced', 'Order #25875695211235');