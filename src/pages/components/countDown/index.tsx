import { useMemo } from "react";
import CountDownText from "./countText";
import styles from "./index.less";
import { useTime } from "./time";

const CountDown = () => {
  const { mintStartCountDown } = useTime();

  const countDownFormat = useMemo(() => {
    // 计算出天数
    const days = `${Math.floor(mintStartCountDown / (24 * 3600 * 1000))}`;

    // 计算出小时数
    const leave1 = mintStartCountDown % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    const hours = `${Math.floor(leave1 / (3600 * 1000)) < 10 ? `0${Math.floor(leave1 / (3600 * 1000))}` : Math.floor(leave1 / (3600 * 1000))}`;
    //计算相差分钟数
    const leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    const minutes = `${Math.floor(leave2 / (60 * 1000)) < 10 ? `0${Math.floor(leave2 / (60 * 1000))}` : Math.floor(leave2 / (60 * 1000))}`;
    //计算相差秒数
    const leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
    const seconds = `${Math.round(leave3 / 1000) < 10 ? `0${Math.round(leave3 / 1000)}` : Math.round(leave3 / 1000)}`;
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, [mintStartCountDown]);

  return (
    <div className={styles.countDown}>
      <div className={styles.title}>-- 报名结束倒计时 --</div>
      <div className={styles.timeWrap}>
        <div className={styles.item}>
          {countDownFormat.days}
          <div className={styles.units}>天</div>
        </div>
        <span className={styles.colon}>:</span>
        <div className={styles.item}>
          {countDownFormat.hours}
          <div className={styles.units}>时</div>
        </div>
        <span className={styles.colon}>:</span>
        <div className={styles.item}>
          {countDownFormat.minutes}
          <div className={styles.units}>分</div>
        </div>
        <span className={styles.colon}>:</span>
        <div className={styles.item}>
          {countDownFormat.seconds}
          <div className={styles.units}>秒</div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
