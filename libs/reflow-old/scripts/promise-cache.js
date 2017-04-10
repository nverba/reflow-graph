import { required, Reflow_MissingPromise } from './errors.js'

const PromisesCache         = new Map();
export const hasPromise     = (id=(required('id'))) => PromisesCache.has(id);
export const getPromise     = (id=(required('id'))) => _getPromiseCacheObject(id).promise;
export const resolvePromise = (id=(required('id')), response) => _getPromiseCacheObject(id).resolve(response);

export const createPromise  = (id=(required('id'))) => {
  let res, rej;
  let promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  PromisesCache.set(id, { resolve: res, reject: rej, promise: promise });
  return promise;
}

function _getPromiseCacheObject(id) {
  try {
    return PromisesCache.get(id);
  } catch (error) {
    if (!PromisesCache.has(id)) { throw new Reflow_MissingPromise(`!!! Promise id ${ id } not found !!!`); return }
    throw error;
  }
}