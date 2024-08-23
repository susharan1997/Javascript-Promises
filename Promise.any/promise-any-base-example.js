console.log('Promise.any base example:-\n');
console.log('Promise.any returns the 1st resolved promise. If all promises get rejected, it returns a rejected promise.\n');

const resolvedPromises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject(3),
  ].map(promise => Promise.resolve(promise));

  const rejectedPromises = [
    Promise.reject(1),
    Promise.reject(2),
    Promise.reject(3),
  ].map(promise => Promise.resolve(promise));

  Promise.any(resolvedPromises).then(promise =>
    console.log('Resolved Promises->', promise)
  ); //resolved promises

  Promise.any(rejectedPromises).catch(err =>
    console.log('Rejected Promises->', err)
  ); //rejected promises