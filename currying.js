function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  }
  
  function add(a, b, c) {
    return a + b + c;
  }
  
  let curriedAdd = curry(add);
  
  let add1 = curriedAdd(1);
  let add2 = add1(2);
  let result = add2(3);
  
  console.log(result); // 6


//   let add2 = curriedAdd(2);

// let result = add2(3);

// console.log(result); // 5