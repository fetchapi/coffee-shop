const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    const token = jwt.sign(
      { user_id: user._id, email: user.email },
      process.env.TOKEN_KEY,
      { expiresIn: "2h" }
    );

    user.token = token;

    res.status(201).json({
      status: "success",
      message: "Đăng ký của bạn đã được tạo thành công.",
      token: user.token,
    });
  } catch (err) {
    let error = err;
    if (err.code === 11000) {
      error = "Địa chỉ e-mail này đã được đăng ký trong hệ thống.";
    }
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          const token = jwt.sign(
            { user_id: user._id, email: user.email },
            process.env.TOKEN_KEY,
            { expiresIn: "2h" }
          );

          user.token = token;

          res.status(200).json({ status: "success", user });
        } else {
          res.status(400).json({ status: "fail", message: "Mật khẩu không hợp lệ." });
        }
      });
    } else {
      res
        .status(400)
        .json({ status: "fail", message: "Địa chỉ email không hợp lệ." });
    }
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.user_id });

    if (user) {
      res.status(200).json({
        status: "success",
        user: {
          name: user.name,
          surname: user.surname,
          email: user.email,
          address: user.address,
        },
      });
    } else {
      res
        .status(400)
        .json({ status: "fail", message: "Không tìm thấy người dùng." });
    }
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

exports.changePassword = async (req, res) => {
  const userId = req.user.user_id;
  const user = await User.findOne({ _id: userId });
  const { password, newPassword } = req.body;

  if (user) {
    bcrypt.compare(password, user.password, async (err, same) => {
      if (same) {
        bcrypt.compare(newPassword, user.password, async (err, same) => {
          if (same) {
            res.status(400).json({
              status: "fail",
              message: "Bạn đang sử dụng mật khẩu này.",
            });
          } else {
            user.password = newPassword;
            await user.save();

            res.status(200).json({
              status: "success",
              message: "Mật khẩu của bạn đã được thay đổi thành công.",
            });
          }
        });
      } else {
        res
          .status(400)
          .json({ status: "fail", message: "Mật khẩu hiện tại của bạn không chính xác." });
      }
    });
  } else {
    res.status(400).json({ status: "fail", message: "Không tìm thấy người dùng." });
  }
};

exports.changeMail = async (req, res) => {
  const user = await User.findOne({ _id: req.user.user_id });
  const { email } = req.body;

  await User.findOne({ email: email }).then((mailExists) => {
    if (user.email === email) {
      res.status(400).json({
        status: "fail",
        message: "Bạn đang sử dụng địa chỉ email này.",
      });
    } else if (mailExists) {
      res.status(400).json({
        status: "fail",
        message: "Địa chỉ e-mail này đã được đăng ký trong hệ thống.",
      });
    } else {
      if (user) {
        user.email = email;
        user.save();

        res.status(200).json({
          status: "success",
          message: "Email đã thay đổi thành công.",
        });
      } else {
        res
          .status(400)
          .json({ status: "fail", message: "Không tìm thấy người dùng." });
      }
    }
  });
};

exports.setAddress = async (req, res) => {
  const user = await User.findOne({ _id: req.user.user_id });
  const { address } = req.body;

  if (user) {
    if (user.address === address) {
      res.status(400).json({
        status: "fail",
        message: "Bạn đang sử dụng địa chỉ này.",
      });
    } else {
      if (!user.address) {
        await user.updateOne({ address: address });
        res.status(200).json({
          status: "success",
          message: "Đã thêm địa chỉ thành công.",
        });
      } else {
        await user.updateOne({ address: address });
        res.status(200).json({
          status: "success",
          message: "Địa chỉ đã được thay đổi thành công.",
        });
      }
    }
  } else {
    res.status(400).json({ status: "fail", message: "Không tìm thấy người dùng." });
  }
};
