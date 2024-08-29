console.log('Promise.all base example:-\n');

console.log('Promise.all returns a resolved promise ONLY if ALL promises get resolved. If any promise gets rejected, the full Promise object is rejected.');

console.log('Promise.all Eg:-\n');

const resolvedPromises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
].map(promise => Promise.resolve(promise));

Promise.all(resolvedPromises).then(promise =>
  console.log('Resolved Promises->', promise)
); //resolved promises


const rejectedPromises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.reject(3),
].map(promise => Promise.resolve(promise));

Promise.all(rejectedPromises)
  .then(promise => console.log(promise))
  .catch(err => console.log(`Rejected Promise-> ${err}`)); //rejected promises
