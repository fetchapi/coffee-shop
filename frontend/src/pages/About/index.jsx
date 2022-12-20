import React from "react";
import caffeineTable from "../../assets/caffeine-table.png";
import MainLayout from "../../layouts/MainLayout";

function About() {
  return (
    <MainLayout>
      <div className="h-full flex pt-6 pb-12 justify-center">
        <div className="w-5/6 md:w-3/6 text-white">
          <h1 className="text-2xl md:text-3xl text-center mb-4">
            The Coffee Shop
          </h1>
          <div className="flex flex-col">
            <span className="text-sm md:text-base">
              Như một phản ứng đối với những loại cà phê không thể thức dậy, Thổ Nhĩ Kỳ
              Thương hiệu cà phê có hàm lượng caffein cao đầu tiên, The Coffee Shop, được ra mắt vào năm 2017.
              chúng tôi thành lập.
            </span>
            <span className="text-sm md:text-base mt-4">
              Buổi sáng phải mất hàng giờ để tỉnh táo, đêm kết thúc trước khi ngủ
              và chứng nghiện cà phê của chúng ta là thứ sẽ khiến chúng ta tiếp tục hàng giờ.
              Trong việc tìm kiếm cà phê. Khi chúng tôi không thể tìm thấy nó, chúng tôi quyết định làm điều đó. nhưng ánh sáng
              với một thức uống. Chúng tôi đã đấu tranh trong nhiều tháng, chúng tôi đã luyện tập, chúng tôi đã cố gắng.
              Cuối cùng chúng tôi đã làm những gì chúng tôi đang tìm kiếm. Cà phê có hàm lượng caffein cao nhất thế giới
              Chúng tôi trình bày nó với một thức uống thoải mái.
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl text-center mt-8 mb-4">
            Cà phê mạnh nhất thế giới
          </h1>
          <div className="flex flex-col justify-center">
            <img
              className="my-6 md:px-36"
              src="https://cdn.shopify.com/s/files/1/2714/0802/files/coffeetowakethedead_42b46837-7978-4d7a-b2a6-d53e841b73c5_480x480.gif?v=1548072780"
              alt=""
            />

            <span className="text-sm md:text-base">
              Bộ Lương thực và Nông nghiệp Thụy Sĩ và có giá trị trên toàn thế giới.
              Là kết quả của các thử nghiệm được thực hiện bởi Phòng thí nghiệm SGS có trụ sở tại The Coffee,
              mỗi kilôgam <span className="font-bold">23,2 gam</span>{" "}
              hàm lượng caffein cao nhất thế giới, vượt xa các đối thủ cạnh tranh.
              Nó đứng đầu trong số các loại cà phê có hàm lượng caffein. bài kiểm tra này
              Bạn có thể nhấp vào liên kết để tìm hiểu quy trình chi tiết.
            </span>

            <span className="text-sm md:text-base mt-4">
              Hàm lượng caffeine cao này hoàn toàn được sử dụng.
              xuất phát từ đặc tính cấu tạo của hạt nhân. Không còn cách nào khác
              Cà phê{" "}
              <span className="font-bold">100% tự nhiên </span>
              trình bày cho bạn như là. Nước giải khát của nó và
              Với hương thơm của nó, nó đã giành được sự đánh giá cao của tất cả những người yêu thích cà phê và
              cung cấp năng lượng với nhau.
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl text-center mt-8 mb-4">
            Kafein Oranı
          </h1>
          <div className="flex flex-col justify-center">
            <span className="text-sm md:text-base">
              Chúng tôi cung cấp The Coffee, loại cà phê có hàm lượng caffein cao với thức uống thoải mái.
              trong số 25 loại hạt khác nhau sau một cuộc đua marathon dài
              Chúng tôi xác định sau khi pha trộn chúng tôi đã thử. Nam Mỹ - Thái Bình Dương
              hỗn hợp đã được quyết định. 5 triệu hút kể từ khi thành lập
              Hậu quả của ly The Coffee ảnh hưởng của lượng caffein cao đến người uống
              Và mặc dù hàm lượng caffein này, nó mang lại hương vị và sự thoải mái.
              Một phần lớn các ý kiến ​​​​làm cho kinh ngạc
              tạo.
            </span>

            <img className="my-6 md:px-36" src={caffeineTable} alt="" />

            <span className="text-sm md:text-base mt-4">
              Trong khi tỷ lệ caffein của cà phê phin tiêu chuẩn là 1%, The Coffee's
              tỷ lệ caffein là 2,32% theo kết quả thử nghiệm mới nhất. Một đoạn ngắn
              tính lượng caffein bạn sẽ nhận được từ một tách cà phê phin 150
              mg trong một tách cà phê phin của The Coffee.
              số tiền là gần 350 mg.
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;
