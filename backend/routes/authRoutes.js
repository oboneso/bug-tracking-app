import passport from 'passport'

const googleRoutes = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  app.get('/auth/google/callback', passport.authenticate('google'))
}

export default googleRoutes