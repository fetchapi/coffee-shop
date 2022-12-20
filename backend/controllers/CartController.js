const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  try {
    const { user_id } = req.user;
    const { product_id, quantity } = req.body;

    const cart = await Cart.findOne({ user: user_id });
    let productIndex = -1;
    if (cart) {
      productIndex = cart.items.findIndex(
        (item) => item.product.toString() == product_id.toString()
      );
    }

    if (productIndex > -1) {
      cart.items[productIndex].quantity += quantity;
      await cart.save();
    } else {
      if (cart === null) {
        await Cart.create({
          user: user_id,
          items: [{ product: product_id, quantity }],
        });
      } else {
        cart.items.push({ product: product_id, quantity });
        await cart.save();
      }
    }
    res
      .status(201)
      .json({ status: "success", message: "Sản phẩm đã được thêm vào giỏ hàng." });
  } catch (err) {
    res
      .status(500)
      .json({ status: "fail", message: "Không thể thêm sản phẩm vào giỏ hàng.", error: err });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { user_id } = req.user;
    const { product_id } = req.body;

    const cart = await Cart.findOne({ user: user_id });

    const productIndex = cart.items.findIndex(
      (item) => item.product.toString() === product_id.toString()
    );

    if (productIndex > -1) {
      cart.items.splice(productIndex, 1);
      await cart.save();

      res
        .status(200)
        .json({ status: "success", message: "Sản phẩm đã bị xóa khỏi giỏ hàng." });
    } else {
      res.status(400).json({ status: "fail", message: "Sản phẩm không được tìm thấy." });
    }
  } catch (err) {
    res
      .status(400)
      .json({ status: "fail", message: "Không thể xóa sản phẩm.", error: err });
  }
};

exports.getCart = async (req, res) => {
  const { user_id } = req.user;
  const cart = await Cart.findOne({ user: user_id }).populate("items.product");

  if (cart) {
    res.status(200).json({ status: "success", cart: cart.items });
  } else {
    res
      .status(400)
      .json({ status: "fail", message: "Giỏ không tìm thấy.", err: "no-cart" });
  }
};
