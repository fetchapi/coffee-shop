import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoginState } from "../Recoil/User/useLoginState";
import { useToastState } from "../Recoil/Error/useToastState";

function RegisterForm() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useLoginState();
  const { setToastMsg } = useToastState();

  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Tên phải ít hơn 20 ký tự.")
        .required("Trường này là bắt buộc."),
      surname: Yup.string()
        .max(20, "Họ phải ít hơn 20 ký tự.")
        .required("Trường này là bắt buộc."),
      email: Yup.string()
        .max(254, "Email phải ít hơn 254 ký tự.")
        .email("Địa chỉ email không hợp lệ.")
        .required("Trường này là bắt buộc."),
      password: Yup.string()
        .max(128, "Mật khẩu phải ít hơn 128 ký tự.")
        .min(6, "Mật khẩu phải nhiều hơn 6 ký tự.")
        .required("Trường này là bắt buộc."),
      confirmPassword: Yup.string()
        .max(128, "Mật khẩu phải ít hơn 128 ký tự.")
        .min(6, "Mật khẩu phải nhiều hơn 6 ký tự.")
        .oneOf([Yup.ref("password"), null], "Mật khẩu không hợp lệ.")
        .required("Trường này là bắt buộc."),
    }),
    validateOnChange: validateAfterSubmit,
    onSubmit: async (values, { resetForm }) => {
      await axios
        .post("http://localhost:5000/user/signup", values)
        .then((resp) => {
          localStorage.setItem("access-token", resp.data.token);
          resetForm();
          setIsLoggedIn(true);
          navigate("/user");
          setToastMsg({ isError: false, message: resp.data.message });
        })
        .catch((err) => {
          setToastMsg({isError: true, message: err.response.data.message});
        });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`flex flex-col ${
        Object.keys(formik.errors).length > 0 ? "gap-2.5" : "gap-4"
      }`}
      autoComplete="off"
      noValidate
    >
      {formik.errors.name ? (
        <small className="text-xs text-red-500">{formik.errors.name}</small>
      ) : null}
      <InputField
        label="Tên"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        className={`${
          formik.errors.name
            ? "border-red-500 hover:border-red-500 focus:border-red-500"
            : ""
        }`}
      />
      {formik.errors.surname ? (
        <small className="text-xs text-red-500">{formik.errors.surname}</small>
      ) : null}
      <InputField
        label="Họ"
        name="surname"
        value={formik.values.surname}
        onChange={formik.handleChange}
        className={`${
          formik.errors.surname
            ? "border-red-500 hover:border-red-500 focus:border-red-500"
            : ""
        }`}
      />
      {formik.errors.email ? (
        <small className="text-xs text-red-500">{formik.errors.email}</small>
      ) : null}
      <InputField
        label="E-mail"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        className={`${
          formik.errors.email
            ? "border-red-500 hover:border-red-500 focus:border-red-500"
            : ""
        }`}
      />
      {formik.errors.password ? (
        <small className="text-xs text-red-500">{formik.errors.password}</small>
      ) : null}
      <InputField
        label="Mật khẩu"
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
      {formik.errors.confirmPassword ? (
        <small className="text-xs text-red-500">
          {formik.errors.confirmPassword}
        </small>
      ) : null}
      <InputField
        label="Nhập lại mật khẩu"
        name="confirmPassword"
        value={formik.values.confirmPassword}
        type="password"
        onChange={formik.handleChange}
        className={`${
          formik.errors.confirmPassword
            ? "border-red-500 hover:border-red-500 focus:border-red-500"
            : ""
        }`}
      />
      <div className="w-full">
        <Button name="Đăng ký" onClick={() => {setValidateAfterSubmit(true)}} />
      </div>
    </form>
  );
}

export default RegisterForm;
