export function applyMiddleware(actionFn, middlewares) {
  middlewares = middlewares.slice();
  middlewares.reverse();

  let dispatchAction = actionFn;
  middlewares.forEach(middleware =>
    dispatchAction = middleware(dispatchAction)
  );

  return dispatchAction;
}