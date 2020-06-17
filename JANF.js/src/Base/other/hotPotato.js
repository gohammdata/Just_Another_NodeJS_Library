import Queue from '../data-structures/queue_deque/queue';

function hotPotato(elementsList, num) {
    const queue = new Queue();
    const eliminatedList = [];

    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminatedList.push(queue.dequeue());
    }

    return {
        eliminated: eliminatedList,
        winner: queue.dequeue()
    };
}

//  Implemention hotPotato algorithm
const name = ['John', 'Jack', 'Jill', 'Jenny', 'Joan'];
const result = hotPotato(name, 7);

result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game. `);
});

console.log(`The winnder is: ${result.winner}`);
