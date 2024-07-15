interface IProps {
  mintStartCountDown: number;
  // isMobile: boolean;
}

export default function CountDownText(props: IProps) {
  const { mintStartCountDown } = props;

  const countDownFormat = () => {
    // 计算出天数
    const days = Math.floor(mintStartCountDown / (24 * 3600 * 1000));

    // 计算出小时数
    const leave1 = mintStartCountDown % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    const hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    const leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    const minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数
    const leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
    const seconds = Math.round(leave3 / 1000);
    // if (isMobile) {
    //   return `(${(hours + days * 24).toString().padStart(2, "0")}:${minutes
    //     .toString()
    //     .padStart(2, "0")}:${seconds.toString().padStart(2, "0")})`;
    // }
    return {
      days,
      hours,
      minutes,
      seconds,
    };
    // return ` (${(hours + days * 24).toString().padStart(2, "0")}h:${minutes
    //   .toString()
    //   .padStart(2, "0")}m:${seconds.toString().padStart(2, "0")}s)`;
  };

  return countDownFormat();
}
