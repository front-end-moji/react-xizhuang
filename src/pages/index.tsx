import LogoSrc from "@/assets/logo.jpg";
import "./index.css";
import Button from "./components/button";
import { CommentOutlined, BarcodeOutlined } from "@ant-design/icons";
import CountDown from "./components/countDown";
import ImgSwiper from "./components/swiper/Swiper";

export default function HomePage() {
  return (
    <div className="content">
      <div className="mainContent">
        <div className="firstPage">
          <div className="logo">
            <img src={LogoSrc} alt="" className="logoImg" />
          </div>
          <div className="mainTitle"> 超级活动大放送 </div>
          <div className="secondTitle"> 多重好礼享不停 </div>

          <div className="promotions">
            <div className="promotionItem promotionItem-1"> 定金好礼 </div>
            <div className="promotionItem promotionItem-2"> 推荐有礼 </div>
            <div className="promotionItem promotionItem-3"> 转发点赞 </div>
          </div>
        </div>

        <CountDown />
        <div className="countInfo">
          <div className="countLeft">
            已有<span className="countNum">200</span>人参与活动
          </div>
          <div className="countRight">
            <div>
              浏览量<span className="viewCount">4500</span>
            </div>
          </div>
        </div>
        <ImgSwiper />
        <ImgSwiper isBottom={true} />

        <div className="secondPage">
          <div className="title">一：99元定金好礼</div>
          <div className="partOne">
            <div className="line"> 1、价值 1680元定制衬衣 </div>
            <div className="line"> 2、价值 1280 元定制皮鞋 </div>
            <div className="line"> 3、价值 980 元配饰礼盒 </div>
            <div className="line"> 4、价值 2000 元 VICHI 消费卡 </div>
            <div className="line"> 5、价值 580 元 VICHI BAR 酒水券 </div>
          </div>
        </div>

        <div className="thirdPage">
          <div className="title">二：推荐有礼</div>
          <div className="partOne">
            <div className="line"> 1、推荐3人，赠送价值 1680 元定制衬衣 </div>
            <div className="line">2、推荐5人，赠送价值 2000 元VICHI消费卡 </div>
          </div>
        </div>

        <div className="fourthPage">
          <div className="title">三：转发点赞</div>
          <div className="partOne">
            <div className="line">1、点赞58位，赠送价值580元 ViCHI 酒水券 </div>
            <div className="line">
              2、点赞88位，赠送价值2000元 VICHI 消费卡{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="register">
        <div className="iconWrap">
          <CommentOutlined style={{ fontSize: 24 }} />
          客服
        </div>

        <div className="iconWrap color-[red]">
          <BarcodeOutlined style={{ fontSize: 24 }} />
          海报
        </div>

        <div className="submitBtn">
          <Button type="light">免费报名领取</Button>
        </div>
      </div>
    </div>
  );
}
