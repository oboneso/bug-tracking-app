/** @format */

import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import { googleClientID, googleClientSecret } from '../config/keys.js';
import User from '../models/userModel.js';

passport.use(
	new GoogleStrategy.Strategy(
		{
			clientID: googleClientID,
			clientSecret: googleClientSecret,
			callbackURL: '/auth/google/callback',
		},
		(accessToken, refreshToken, profile, done) => {
			console.log(`accessToken *********** ${JSON.stringify(accessToken)} *************`);
		},
	),
);
