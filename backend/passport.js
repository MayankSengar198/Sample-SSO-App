
var passport = require('passport')
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;


const GOOGLE_CLIENT_ID = "182941996698-jmvf58o51kp5k1kos5phnv50s03prim7.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";


GITHUB_CLIENT_ID = "9e8d6e0b6327287fc96e";
GITHUB_CLIENT_SECRET = "368f2e393676c174de5700fa492e8f6fd16ef571";

FACEBOOK_APP_ID = "291708256250423";
FACEBOOK_APP_SECRET = "3e223bd3dedf4f3c7ed805ec368713ff";

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    done(null,profile)
  }
));

passport.use(
    new GithubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );
  
  passport.use(
    new FacebookStrategy(
      {
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );


passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });