console.log('Promise.all polyfill example:-\n');

const resolvedPromises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
].map(promise => Promise.resolve(promise));

const rejectedPromises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject(3),
].map(promise => Promise.resolve(promise));

const all = (promises) => {
    return new Promise((resolve, reject) => {
        const result = [];
        let count = 0;
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(res => {
                result[i] = res;
                count++;
                if (count === promises.length) {
                    resolve(result);
                }
            }, reject);
        }
    })
}

all(resolvedPromises).then(res => console.log('Resolved promises->', res));
all(rejectedPromises).catch(err => console.log('Rejected Promise->', err));