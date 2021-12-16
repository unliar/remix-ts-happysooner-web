import { Link } from "remix";
import { UsePerformance } from "~/uitls";
import { useState, useEffect } from "react";

export const Footer = () => {
  const timing = UsePerformance();
  const [Year, SetYear] = useState("2020");
  const [TimeShow, SetTimeShow] = useState({
    day: 0,
    hour: 0,
    min: 0,
    sec: 0,
  });
  useEffect(() => {
    let id = setInterval(() => {
      const Y = new Date().getFullYear();
      const start = 1567180800000;
      const now = Date.now();
      const leftTime = Math.floor((now - start) / 1000);
      const day = Math.floor(leftTime / 60 / 60 / 24);
      const hour = Math.floor(leftTime / 60 / 60) % 24;
      const min = Math.floor(leftTime / 60) % 60;
      const sec = Math.floor(leftTime % 60);
      SetTimeShow({
        day,
        hour,
        min,
        sec,
      });
      SetYear(`${Y}`);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <footer className="footer-container">
      <div className="footer-info content-limit-three">
        <div>
          © 2019 - {Year} 远浅{" "}
          <a
            href="//www.beian.miit.gov.cn/"
            target="_blank"
            className="icp-link"
            rel="nofollow"
          >
            粤ICP备20013375号-1
          </a>
        </div>
        <div>本网站不保证网站内容更新完全跟得上时代潮流，请自行求证。</div>
        <div className="site-status">
          本网站已坚持用<span className="my-shake">❤️</span>发
          <span className="my-shake">⚡</span>运行了
          {TimeShow.day}天{TimeShow.hour}小时
          {TimeShow.min}分{TimeShow.sec}秒。
        </div>
        <div>本网站的作者头发还剩下挺多的。</div>
        <div className="site-timing">
          <span>
            可用率:
            <img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Funliar%2Fhappy-upptime%2Fmaster%2Fapi%2Fhappysooner-com%2Fuptime.json" />
          </span>
          {timing.tsp > 1 && <span>服务端渲染耗时: {timing.tsp}毫秒</span>}
        </div>
      </div>
      <div className="footer-info">
        <div className="site-link">
          <span>
            <Link to="/about">
              <>关于本站</>
            </Link>
          </span>
          <span>
            <Link to="/daily-articles">
              <>随机阅读</>
            </Link>
          </span>
          <span>
            <Link to="/tools">
              <>本站工具</>
            </Link>
          </span>
          <span>
            <Link to="/idle">
              <>身外之物</>
            </Link>
          </span>
        </div>

        <div className="friend-link">
          友情链接:{" "}
          <a href="//www.tuccuay.com/" target="_blank">
            Tuccuay
          </a>
          {/* <a href="//orx.me/" target="_blank">
        Orvice
      </a> */}
          <a href="//www.oylz.site" target="_blank">
            Oylz
          </a>
          <a href="//nuomi1.github.io" target="_blank">
            nuomi1
          </a>
        </div>
      </div>
    </footer>
  );
};
