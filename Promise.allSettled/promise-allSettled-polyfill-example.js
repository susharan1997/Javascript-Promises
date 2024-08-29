console.log('Promise.allSettled polyfill example:-\n');

console.log('Returns all the rejected & resolved promises along with their status.\n');

const resolvedAndRejectedPromises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject(3),
].map(promise => Promise.resolve(promise));

allSettled = (promises) => {
    return new Promise((resolve) => {
        const result = [];
        let count = 0;

        const handleResult = (value, index, status) => {
            result[index] = {value, status};
            count++;
            if(count === promises.length){
                resolve(result);
            }
        }

        for(let i = 0; i < promises.length; i++){
            Promise.resolve(promises[i]).then(
                (res) => handleResult(res, i, 'resolved'),
                (err) => handleResult(err, i, 'rejected'),
            )
        }
    })
}

allSettled(resolvedAndRejectedPromises)
.then(res => console.log('Resolved/Rejected promises->', res));