import LogoSrc from "@/assets/logo.jpg";
import ClothSrc from "@/assets/cloth.jpg";
import EnvSrc from "@/assets/huanjing_1.jpg";
import "./index.css";
import Button from "./components/button";
import { CommentOutlined, BarcodeOutlined } from "@ant-design/icons";
import CountDown from "./components/countDown";
import ImgSwiper from "./components/swiper/Swiper";
import Logo from "./components/logo";

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
        {/* <ImgSwiper /> */}
        <ImgSwiper isBottom={true} />

        <div className="secondPage">
          <div className="pageLogo">
            <Logo />
          </div>
          <div className="title">定制西服可享</div>
          <div className="partOneDetail">
            <div className="depositCount">99</div>
            <div className="partOneText">翻</div>
            <div className="multiple">60</div>
            <div className="multipleText">倍</div>
          </div>
          <div className="desc">获取6980元超值礼包</div>
          <div className="clothImg">
            <img src={ClothSrc} alt="" />
          </div>
          <div className="descText">数量有限，订完截止</div>
        </div>

        <div className="thirdPage">
          <div className="title">1</div>
          <div className="title">定制衬衣</div>
          <div className="price">
            价值<span>1280</span>元
          </div>
          <div className="clothImg">
            <img src={ClothSrc} alt="" />
          </div>
        </div>

        <div className="thirdPage">
          <div className="title">2</div>
          <div className="title">定制皮鞋</div>
          <div className="price">
            价值<span>1280</span>元
          </div>
          <div className="clothImg">
            <img src={ClothSrc} alt="" />
          </div>
        </div>

        <div className="thirdPage">
          <div className="title">3</div>
          <div className="title">配饰礼盒</div>
          <div className="price">
            价值<span>1280</span>元
          </div>
          <div className="clothImg">
            <img src={ClothSrc} alt="" />
          </div>
        </div>

        <div className="thirdPage">
          <div className="title">4</div>
          <div className="title">消费卡</div>
          <div className="price">
            价值<span>1280</span>元
          </div>
          <div className="clothImg">
            <img src={ClothSrc} alt="" />
          </div>
        </div>

        <div className="thirdPage">
          <div className="title">5</div>
          <div className="title">酒水券</div>
          <div className="price">
            价值<span>1280</span>元
          </div>
          <div className="clothImg">
            <img src={ClothSrc} alt="" />
          </div>
        </div>

        <div className="fourthPage">
          <div className="pageLogo">
            <Logo />
          </div>
          <div className="title">推荐有礼</div>
          <div className="huanjing">
            <img src={EnvSrc} alt="" />
          </div>
          <div className="partOne">
            <div className="line">1、点赞58位，赠送价值580元 ViCHI 酒水券 </div>
            <div className="line">
              2、点赞88位，赠送价值2000元 VICHI 消费卡{" "}
            </div>
          </div>
        </div>

        <div className="fourthPage fivePage">
          <div className="pageLogo">
            <Logo />
          </div>
          <div className="title">转发点赞</div>
          <div className="huanjing">
            <img src={EnvSrc} alt="" />
          </div>
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
