import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoginState } from "../Recoil/User/useLoginState";
import { useToastState } from "../Recoil/Error/useToastState";

function LoginForm() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useLoginState();
  const { setToastMsg } = useToastState();

  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(254, "Email phải ít hơn 254 ký tự.")
        .email("Địa chỉ email không hợp lệ.")
        .required("Trường này là bắt buộc."),
      password: Yup.string()
        .max(128, "Mật khẩu phải ít hơn 128 ký tự.")
        .min(6, "Mật khẩu phải nhiều hơn 6 ký tự.")
        .required("Trường này là bắt buộc."),
    }),
    validateOnChange: validateAfterSubmit,
    onSubmit: async (values, { resetForm }) => {
      await axios
        .post("http://localhost:5000/user/login", values)
        .then((resp) => {
          localStorage.setItem("access-token", resp.data.user.token);
          resetForm();
          setIsLoggedIn(true);
          setToastMsg({
            isError: false,
            message: "Bạn đã đăng nhập thành công.",
          });
          navigate("/user");
        })
        .catch((err) => {
          setToastMsg({ isError: true, message: err.response.data.message });
        });
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      className={`flex flex-col ${
        Object.keys(formik.errors).length > 0 ? "gap-2.5" : "gap-4"
      }`}
      noValidate
    >
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
      <div className="w-full">
        <Button
          name="Đăng nhập"
          onClick={() => {
            setValidateAfterSubmit(true);
          }}
        />
      </div>
    </form>
  );
}

export default LoginForm;
