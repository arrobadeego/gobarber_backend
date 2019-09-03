const Bee = require('bee-queue');

const CancellationMail = require('../jobs/CancellationMail');

const jobs = [CancellationMail];

class Queue {
    constructor() {
        this.queues = {};

        this.init();
    }

    init() {
        jobs.forEach(({ key, handle }) => {
            this.queues[key] = new Bee(key, {
                redis: {
                    
                }
            })
        });
    }
}

module.exports = new Queue();
