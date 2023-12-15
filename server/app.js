require("dotenv").config();

const express = require("express");
const cors = require("cors");
require("./Database/db");
const PORT = 6010;
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userModel = require("./models/userModel");

const clientId = process.env.CLIENTID;

const clientsecret = process.env.CLIENTSECRET;
const origin = process.env.ORIGIN;
const session_secret = process.env.SESSION_SECRET;
const callback_url = process.env.CALLBACK_URL;
const success_url = process.env.SUCCESS_URL;
const failure_url = process.env.FAILURE_URL;

const app = express();

app.use(
  cors({
    origin: origin,
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use(express.json());

// Set Up Session
app.use(
  session({
    secret: session_secret,
    resave: false,
    saveUninitialized: true,
  })
);

// Set Up Passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy(
    {
      clientID: clientId,
      clientSecret: clientsecret,
      callbackURL: callback_url,
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await userModel.findOne({ googleId: profile.id });

        if (!user) {
          user = new userModel({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,

            image: profile.photos[0].value,
          });

          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Initialize google Oauth Login
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: success_url,
    failureRedirect: failure_url,
  })
);

app.get("/login/success", async (req, res) => {
  // console.log("Request", req.user);
  if (req.user) {
    res.status(200).json({
      message: "User Logged In",
      user: req.user,
    });
  } else {
    res.status(400).json({
      message: "User not Authorized",
    });
  }
});

app.get("/logout", (req, res, next) => {
  req.logout(function (error) {
    if (error) {
      return next(error);
    }
    res.redirect(origin);
  });
});

app.get("/", (req, res) => {
  res.status(200).json({
    Status: "Success",
    Message: "Server Started Successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
