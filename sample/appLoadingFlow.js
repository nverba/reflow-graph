export const appLoadingFlow = (action, state) => {
  return [
    { action: 'wait', on: 'componentsLoaded', async: true },
    { reflow: () => true ? this.true : this.false, true: 'appReadyOptions', false: 'skipFlow' }
  ]
}