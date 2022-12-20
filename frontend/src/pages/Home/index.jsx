import React from "react";
import coffeeVideo from "../../assets/coffee-video.mp4";
import coffeeCup from "../../assets/coffee-cup.jpg";
import shippingImg from "../../assets/shipping.jpg";
import coffeeRoast from "../../assets/coffee-roast.jpg";
import natureImg from "../../assets/nature.jpg";
import coffee1 from "../../assets/1kg.png";
import coffee2 from "../../assets/500g.png";
import coffee3 from "../../assets/250g.png";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Button from "../../components/Button";
import ShopItem from "../../components/ShopItem";

function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row h-[36rem] w-full px-4">
        <div className="text-white w-full flex flex-1 flex-col text-center justify-center ">
          <Fade top>
            <h1 className="text-3xl lg:text-5xl font-medium py-3">
              Cà phê mạnh nhất thế giới!
            </h1>
            <span className="text-xl md:text-4xl font-normal text-[#cda154] py-3">
              Caffeine CAO, UỐNG THOẢI MÁI
            </span>
          </Fade>
          <Fade left>
            <div className="flex justify-center pt-5">
              <Link
                to="/shop"
                className="w-full max-w-[180px] md:max-w-[200px] lg:max-w-[230px]"
              >
                <Button
                  name="Ürünleri İncele"
                  className="text-[#777] hover:text-white hover:border-[#cda154] focus:border-[#cda154] text-center text-lg"
                />
              </Link>
            </div>
          </Fade>
          <Fade left>
            <div className="py-8 px-24 hidden lg:block">
              <span className="text-center">
                Năm 2016, nước giải khát 100% cafein cao tự nhiên
                để pha một loại cà phê đặc biệt mà chúng tôi có thể phục vụ với đồ uống của tôi
                Chúng tôi bắt đầu công việc của mình. Công việc lâu dài và nhiều
                Sau khi thử, chúng tôi đã tìm thấy sự pha trộn cà phê độc đáo mà chúng tôi đang tìm kiếm.
                và caffein cho Phòng thí nghiệm kiểm soát thực phẩm SGS có trụ sở tại Thụy Sĩ.
                Chúng tôi đã gửi nó để thử nghiệm. Và kết quả đúng như chúng ta mong đợi: The Coffee,
                Cho đến nay cà phê mạnh nhất trên thế giới!
              </span>
            </div>
          </Fade>
        </div>
        <div className="relative select-none flex flex-1">
          <img
            src={coffeeCup}
            className="h-[17.5rem] w-[17.5rem] md:h-[24rem] md:w-[24rem] lg:h-[32rem] lg:w-[32rem] absolute object-cover z-10 mix-blend-multiply right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2"
            alt="coffee bean"
            draggable="false"
          />
          <video
            className="h-[17.4rem] w-[17.4rem] md:h-[23.9rem] md:w-[23.9rem] lg:h-[31.9rem] lg:w-[31.9rem]  position absolute object-cover right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2"
            autoPlay
            muted
            loop
          >
            <source src={coffeeVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="py-4 md:py-4 px-4 md:px-8">
        <h1 className="text-[#cda154] text-lg md:text-2xl text-center py-2">
          -Sản phẩm được mua nhiều nhất-
        </h1>
        <Fade right>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center py-6">
            <ShopItem
              img={coffee1}             
              name="The Coffee (1 kg)"
              price="249.99"
              button="false"
              className="h-52 w-52 md:h-64 md:w-64"
            />
            <ShopItem
              img={coffee2}             
              name="The Coffee (500 g)"
              price="149.99"
              button="false"
              className="h-52 w-52 md:h-64 md:w-64"
            />
            <ShopItem
              img={coffee3}             
              name="The Coffee (250 g)"
              price="74.99"
              button="false"
              className="h-52 w-52 md:h-64 md:w-64"
            />
          </div>
        </Fade>
      </div>
      <div className="py-4 md:py-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row py-2 md:py-6">
          <Fade left>
            <img
              src={natureImg}
              alt=""
              className="h-52 md:h-64 lg:h-96 rounded-xl"
            />
          </Fade>
          <Fade top>
            <div className="flex flex-col items-center w-full py-6 md:py-0">
              <h1 className="text-[#cda154] text-base md:text-xl">
                - Cà Phê Mạnh Nhất -
              </h1>
              <h1 className="text-white text-2xl md:text-3xl">100% tự nhiên</h1>
              <p className="text-white py-4 md:py-6 text-sm md:text-lg leading-7 md:leading-9 text-center max-w-xl">
                Cà phê có hàm lượng caffein cao, cà phê trong hỗn hợp của nó
                Nó đến từ các hạt nhân. Không thêm bất kỳ hóa chất nào vào cà phê của chúng tôi.
                Không có quy trình nào được áp dụng và không có chất phụ gia nào được thêm vào.
              </p>
            </div>
          </Fade>
        </div>
        <div className="flex flex-col md:flex-row py-2 md:py-6">
          <Fade top>
            <div className="flex flex-col items-center w-full py-6 md:py-0 order-2 md:order-1">
              <h1 className="text-[#cda154] text-base md:text-xl">
                - Cà Phê Tươi Ngon Nhất -
              </h1>
              <h1 className="text-white text-2xl md:text-3xl">
                Cà phê hàng tuần
              </h1>
              <p className="text-white py-4 md:py-6 text-sm md:text-lg leading-7 md:leading-9 text-center max-w-xl">
                Chúng tôi giao cà phê hàng tuần tại nhà máy cà phê của chúng tôi ở Eskişehir.
                Nó được rang, xay theo yêu cầu và ở dạng tươi nhất.
                chúng tôi gửi.
              </p>
            </div>
          </Fade>
          <Fade right>
            <img
              src={coffeeRoast}
              alt=""
              className="h-52 md:h-64 lg:h-96 rounded-xl order-1 md:order-2"
            />
          </Fade>
        </div>
        <div className="flex flex-col md:flex-row pt-2 pb-0 md:py-6">
          <Fade left>
            <img
              src={shippingImg}
              alt=""
              className="h-52 md:h-64 lg:h-96 rounded-xl"
            />
          </Fade>
          <Fade top>
            <div className="flex flex-col items-center w-full py-6 md:py-0">
              <h1 className="text-[#cda154] text-base md:text-xl">
                - Vận chuyển nhanh chóng và miễn phí -
              </h1>
              <h1 className="text-white text-2xl md:text-3xl">
                Giao hàng tận nơi miễn phí
              </h1>
              <p className="text-white py-4 md:py-6 text-sm md:text-lg leading-7 md:leading-9 text-center max-w-xl">
                Các đơn hàng đặt trước 14h các ngày trong tuần đều được tính trong ngày.
                Chúng tôi cung cấp cho hàng hóa. có thể xảy ra trong quá trình vận chuyển.
                Chúng tôi giải quyết vấn đề với đội ngũ hỗ trợ chuyên nghiệp của chúng tôi.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
