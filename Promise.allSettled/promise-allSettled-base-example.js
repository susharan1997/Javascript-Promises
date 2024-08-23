console.log('Promise.allSettled base example:-\n');

const resolvedAndRejectedPromises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject(3),
].map(promise => Promise.resolve(promise));

Promise.allSettled(resolvedAndRejectedPromises)
.then(res => console.log( 'Resolved/Rejected promises->', res));