import { schedulesDay } from "../schedules/load-schedules.js";

import dayjs from "dayjs";

const selectedDate = document.querySelector("#date");

selectedDate.value = dayjs().format("YYYY-MM-DD");

selectedDate.onchange = () => {
  schedulesDay();
};
