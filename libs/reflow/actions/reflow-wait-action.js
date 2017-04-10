import { createPromise, resolvePromise, hasPromise, getPromise } from '../utilities/promise-cache.js'

/**
* @param   {String}  on - The key for referencing the generated promise in promise-cache.
* @param   {Boolean} async - An async wait returns an existing promise if already defined (by the resolver).
* @returns {Promise}
* @description Wait is an action creator that returns a new promise that can be used to hold a flow untill resolved.
*/

export function wait({ on, async }) {
  return (async && hasPromise(on)) ? getPromise(on) : createPromise(on);
}

/**
* @param   {String}  on - The key referencing the promise to resolve in promise-cache.
* @param   {Boolean} async - Resolving async waits before they are created, creates the wait.
*/

export function resolveWait({ on, async, response }) {

  // console.log(on, async, response)

  if (async && !hasPromise(on)) { createPromise(on) }
  return resolvePromise(on, response);
}