import React from "react";
import { Link } from "react-router-dom";

function userMenu() {
  return (
    <div className="w-full flex flex-col gap-8 text-white justify-center items-center text-center">
      <Link
        to="/user/profile"
        className="py-2.5 md:py-2 hover:bg-[#cda154] w-full"
      >
        Hồ sơ
      </Link>
      <Link
        to="/user/orders"
        className="py-2.5 md:py-2 hover:bg-[#cda154] w-full"
      >
        Đơn đặt hàng của tôi
      </Link>
      <Link
        to="/user/edit"
        className="py-2.5 md:py-2 hover:bg-[#cda154] w-full"
      >
        Chỉnh sửa thông tin
      </Link>
    </div>
  );
}

export default userMenu;
