import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import InputField from "../../../../components/InputField";
import Button from "../../../../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToastState } from "../../../../Recoil/Error/useToastState";

function Password() {
  const navigate = useNavigate();
  const { setToastMsg } = useToastState();

  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      newPasswordConfirm: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(128, "Mật khẩu phải ít hơn 128 ký tự.")
        .min(6, "Mật khẩu phải nhiều hơn 6 ký tự.")
        .required("Trường này là bắt buộc."),
      newPassword: Yup.string()
        .max(128, "Mật khẩu phải ít hơn 128 ký tự.")
        .min(6, "Mật khẩu phải nhiều hơn 6 ký tự.")
        .required("Bu alan zorunludur."),
      newPasswordConfirm: Yup.string()
        .max(128, "Mật khẩu phải ít hơn 128 ký tự.")
        .min(6, "Mật khẩu phải nhiều hơn 6 ký tự.")
        .oneOf([Yup.ref("newPassword"), null], "Mật khẩu không hợp lệ.")
        .required("Trường này là bắt buộc."),
    }),
    validateOnChange: validateAfterSubmit,
    onSubmit: async (values, { resetForm }) => {
      await axios
        .post("http://localhost:5000/user/changepassword", values, {
          headers: {
            "x-access-token": `${localStorage.getItem("access-token")}`,
          },
        })
        .then((resp) => {
          resetForm();
          navigate("/user");
          setToastMsg({ isError: false, message: resp.data.message });
        })
        .catch((err) => {
          setToastMsg({ isError: true, message: err.response.data.message });
        });
    },
  });
  return (
    <div className="h-full w-full flex flex-col justify-center items-center px-4 py-16 text-white relative">
      <Link to="/user/edit" className="absolute top-4 left-6">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="text-3xl hover:text-[#cda154]"
        />
      </Link>
      <form
        onSubmit={formik.handleSubmit}
        noValidate
        autoComplete="off"
        className="flex flex-col gap-5 w-4/5 lg:w-3/5"
      >
        <div
          className={`flex flex-col ${
            Object.keys(formik.errors).length > 0 ? "gap-2.5 md:gap-3" : "gap-4"
          }`}
        >
          {formik.errors.password ? (
            <small className="text-xs text-red-500">
              {formik.errors.password}
            </small>
          ) : null}
          <InputField
            label="Mật khẩu hiện tại"
            name="password"
            value={formik.values.password}
            type="password"
            onChange={formik.handleChange}
            className={`${
              formik.errors.password
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : ""
            }`}
          />
          {formik.errors.newPassword ? (
            <small className="text-xs text-red-500">
              {formik.errors.newPassword}
            </small>
          ) : null}
          <InputField
            label="Mật khẩu mới"
            name="newPassword"
            value={formik.values.newPassword}
            type="password"
            onChange={formik.handleChange}
            className={`${
              formik.errors.newPassword
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : ""
            }`}
          />
          {formik.errors.newPasswordConfirm ? (
            <small className="text-xs text-red-500">
              {formik.errors.newPasswordConfirm}
            </small>
          ) : null}
          <InputField
            label="Mật khẩu mới một lần nữa"
            name="newPasswordConfirm"
            value={formik.values.newPasswordConfirm}
            type="password"
            onChange={formik.handleChange}
            className={`${
              formik.errors.newPasswordConfirm
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : ""
            }`}
          />
        </div>
        <div>
          <Button
            name="Biến đổi"
            onClick={() => {
              setValidateAfterSubmit(true);
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Password;
