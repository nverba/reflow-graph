export const appReadyOptions = (action, state) => {
  switch (state.appShell.mode) {

    case ('resetPassword'):
      return resetUserPasswordFlow(action, state);

    case ('verifyEmail'):
      return verifyUserEmailFlow(action, state);

    default:
      return authoriseUserFlow(action, state);
  }
}

export const resetUserPasswordFlow = (action, state) => {
  return [
    { action: 'validateResetPassCode', actionCode: state.appShell.oobCode },
    { reflow: 'changePageFlow', page: 'reset-password' },
    { action: 'wait', on: 'passwordReset' },
    { action: 'flushUrlReload' }
  ]
}

export const verifyUserEmailFlow = (action, state) => {
  return [
    { action: 'firebaseReceivedVerificationEmailCodeAction', actionCode: state.appShell.oobCode },
    { action: 'wait', on: 'emailVerified' },
    { reflow: 'changePageFlow', page: 'email-verified' },
    { action: 'wait', on: 'resume' },
    { action: 'flushUrlReload' }
  ]
}

export const authoriseUserFlow = (action, state) => {
  return [
    { action: 'wait', on: 'userAuthStatus', async: true, to: 'loggedIn' },
    { reflow: flowData => flowData.get('loggedIn') ? 'changePageFlow' : 'authFlow', page: 'change-verify-email-form' },
    { action: 'renderState' }
  ]
}