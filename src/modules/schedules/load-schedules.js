import { scheduleFetchDay } from "../../services/schedule-fetch-day.js";
import { schedulesShow } from "./show-schedules.js";

export async function schedulesDay() {
  const selected_date = document.querySelector("#date");

  const date = selected_date.value;

  const dailySchedules = await scheduleFetchDay({ date });
  schedulesShow({ dailySchedules });
}
