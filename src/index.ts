import distanceInWordsStrict from "date-fns/distance_in_words_strict";
import { Random } from "./utils";

const time = document.querySelector(".countdown .time") as HTMLDivElement;

const estimated = new Date(2023, 0, 1); // I will update it as soon as Elon give me more info
const INTERVAL = 1879.69219;
const start = new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0).getTime();
const color = rnd =>
  "#" + Math.floor((rnd / 4294967294) * 16777215).toString(16);
const random = seed => new Random(seed).next();

const render = (c, now) => {
  time.style.color = c;
  time.innerText = distanceInWordsStrict(now, estimated, {
    unit: "d"
  });
};

const h = () => {
  const now = new Date().getTime();
  const seed = Math.floor((now - start) / INTERVAL);
  const r = random(seed);
  const c = color(r);

  render(c, now);
};

setInterval(h, INTERVAL);

h();
