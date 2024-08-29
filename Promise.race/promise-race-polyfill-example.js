console.log('Promise.race polyfill Example:-\n');
console.log('The promises race against each other. As a result, 1st promise to get resolved/rejected will be returned.')

const createDelay = (value, delay, shouldReject = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(shouldReject){
                reject(value);
            }
            else{
                resolve(value);
            }
        }, delay);
    })
}

const resolvedPromises = [
    createDelay(1, 3000, true),
    createDelay(2, 2000),
    createDelay(3, 1000),
].map(promise => Promise.resolve(promise));

const rejectedPromises = [
    createDelay(1, 1000, true),
    createDelay(2, 2000),
    createDelay(3, 3000),
].map(promise => Promise.resolve(promise));

const race = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise).then(resolve, reject);
        });
    })
}

race(resolvedPromises).then(res => console.log('Resolved promises:-', res));

race(rejectedPromises).then(res => console.log('Resolved promises:-', res))
.catch(err => console.log('Rejected promise->', err));