import formatDistanceStrict from "date-fns/formatDistanceStrict";
import { random } from "./utils";

const time = document.querySelector(".countdown .time") as HTMLDivElement;

const INTERVAL = 1879.69219;
const estimated = new Date(2023, 0, 1);
const start = new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0).getTime();
const color = (rnd: number) =>
  "#" + Math.floor((rnd / 4294967294) * 16777215).toString(16);

const render = (color: string, now: number) => {
  time.style.color = color;
  time.innerText = formatDistanceStrict(now, estimated, {
    unit: "day"
  });
};

const h = () => {
  const now = new Date().getTime();
  const seed = Math.floor((now - start) / INTERVAL);
  const r = random(seed).next();
  const c = color(r);

  render(c, now);
};

setInterval(h, INTERVAL);

h();
