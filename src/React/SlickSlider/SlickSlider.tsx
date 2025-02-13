import Cards from "./Card/Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
  const settings = {
    dots: true, // ドットナビゲーションの表示
    infinite: true, // ループの有効化
    speed: 500, // スライドの切り替え速度 (ms)
    slidesToShow: 3, // 一度に表示するスライド数（中央を強調するため3に設定）
    slidesToScroll: 1, // スクロールするスライド数
    autoplay: true, // 自動再生
    autoplaySpeed: 3000, // 自動再生の速度 (ms)
    centerMode: true, // 中央のスライドを強調
    centerPadding: "10%", // 両端のスライドを半分隠す
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%", // タブレット時の調整
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-5" style={{ width: "100%" }}>
      <h1 className="fw-bold text-center">制作実績</h1>
      <Slider {...settings}>
        {Cards.map((item, index) => (
          <div className="px-2" key={index}>
            {item.card}
          </div>
        ))}
      </Slider>
    </section>
  );
};

// git config --global user.name "kengomasunari2025"
// git config --global user.email "kengomasunari2025@gmail.com"

export default SlickSlider;
