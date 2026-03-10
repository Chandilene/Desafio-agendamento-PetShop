import { apiConfig } from "./api-config";
import dayjs from "dayjs";

export async function scheduleFetchDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    const data = await response.json();

    const filterSchedules = data.filter((schedule) => {
      return dayjs(date).isSame(schedule.when, "day");
    });

    const dailySchedules = filterSchedules.sort((a, b) => {
      return dayjs(a.when).isAfter(dayjs(b.when)) ? 1 : -1;
    });

    return dailySchedules;
  } catch (error) {
    alert("Não foi possivel buscar os agendamentos do dia selecionado");
  }
}
