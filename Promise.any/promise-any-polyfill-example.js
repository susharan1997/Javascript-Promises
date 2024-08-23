console.log('Promise.any polyfill example:-\n');
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

  const any = (promises) => {
    return new Promise((resolve, reject) => {
        const result = [];
        let count = 0;

        const handleResult = (value, index, status) => {
            result[index] = {value, status};
            count++;
            if(count === promises.length){
                reject(result);
            }
        }

        for(let i = 0; i < promises.length; i++){
            promises[i].then(resolve, (err) => handleResult(err, i, 'Rejected'));
        }
    })
  }

any(resolvedPromises).then(res => console.log('Resolved promise->', res));
any(rejectedPromises).catch(err => console.log('rejected promise->', err));