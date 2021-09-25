import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../model/User.js';

export const signin = async (req, res) => {
  const { email, password } = await req.body;

  try {
    const existingUser = await User.findOne({
      email,
    });

    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    /* slice document only for ._doc field */
    const { password: existingPassword, ...slicedUser } = existingUser._doc;

    const isPasswordCorrect = await bcrypt.compare(password, existingPassword);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    const token = jwt.sign(
      { email: slicedUser.email, id: slicedUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.status(200).json({ result: slicedUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const register = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } =
    await req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already registered' });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password does't match" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign(
      {
        email: newUser.email,
        id: newUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    /* slice document only for ._doc field */
    const { password: savedPassword, ...slicedUser } = newUser._doc;
    res.status(201).json({ result: slicedUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
