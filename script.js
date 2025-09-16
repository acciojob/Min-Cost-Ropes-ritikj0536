function mincost(arr) {
    // Min heap using priority queue
    const minHeap = [];
    
    // Build the heap
    for (let num of arr) {
        minHeap.push(num);
    }
    minHeap.sort((a, b) => a - b); // sort ascending

    let cost = 0;

    while (minHeap.length > 1) {
        // Take two smallest ropes
        let first = minHeap.shift();
        let second = minHeap.shift();

        let newRope = first + second;
        cost += newRope;

        // Insert new rope in sorted order
        let i = 0;
        while (i < minHeap.length && minHeap[i] < newRope) {
            i++;
        }
        minHeap.splice(i, 0, newRope);
    }

    return cost;
}

module.exports = mincost;
