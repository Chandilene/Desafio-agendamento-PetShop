import { apiConfig } from "./api-config";
import dayjs from "dayjs";

export async function scheduleFetchDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    const data = await response.json();

    const dailySchedules = data.filter((schedule) => {
      return dayjs(date).isSame(schedule.when, "day");
    });

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possivel buscar os agendamentos do dia selecionado");
  }
}
