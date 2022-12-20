import React from "react";
import MainLayout from "../../layouts/MainLayout";
import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <MainLayout>
      <div className="h-full pt-2 pb-8 px-6 md:px-8 flex justify-center">
        <div className="text-white flex flex-col items-center md:w-3/6 px-6">
          <span className="text-sm md:text-base text-center">
            Caffeine Cao Với Cà Phê Mạnh Nhất Thế Giới Quán Cà Phê
            Liên hệ với chúng tôi để nhận thông tin về cà phê, sự kiện và tin tức
            Bạn có thể giao tiếp.
          </span>

          <div className="flex flex-col text-sm md:text-base">
            <span className="mt-4">
              <span className="text-[#cda154]">Email: </span>&nbsp;
              kiemtienonline2357@gmail.com
            </span>
            <span className="mt-2">
              <span className="text-[#cda154]">Điện thoại: </span>&nbsp; 0850 888
              2626
            </span>
          </div>
          <h1 className="text-lg md:text-2xl mt-4">
            The Coffee Shop <span className="text-[#cda154]">ở đâu?</span>
          </h1>
          <span className="mt-3">
            <address className="text-sm md:text-base text-center md:text-start">
              Quận 1, TP. HCM, Việt Nam
            </address>
          </span>
          <ContactForm />
        </div>
      </div>
    </MainLayout>
  );
}

export default Contact;
