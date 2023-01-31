import User from "../../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Notification from "../../models/notification.js";
const saltRounds = 10;

const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // check if user exists
    const userExists = await User.exists({ email: email.toLowerCase() });

    if (userExists) {
      return res.status(409).send({ message: "User already exists" });
    }

    // encrypt password
    const encryptedPassword = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, encryptedPassword);

    // create user document and save in database
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: hash,
    });

    // create JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        email,
        username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    await new Notification({
      user: user._id,
      notifications: [],
    }).save();

    res.status(201).json({
      email: user.email,
      access_token: token,
      username: user.username,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
};

export default postRegister;
