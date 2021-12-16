import { useEffect, useState } from "react";

type Performance = {
  tsp: number | string;
  tts: number | string;
};
const UsePerformance = () => {
  const [Data, SetData] = useState<Performance>({
    tts: "", // 连接到服务器时间
    tsp: "", // 服务器处理时间
  });
  useEffect(() => {
    const performance = window.performance;
    const timing = performance.timing;
    const tts = timing.requestStart - timing.fetchStart;
    const tsp = timing.responseStart - timing.requestStart;
    SetData({ tts, tsp });
  }, []);
  return Data;
};

export { UsePerformance };
