import dayjs from "dayjs";
import { scheduleFetchDay } from "../../services/schedule-fetch-day";

export async function updateAvailableHours(selectedDateValue) {
  const hourSelect = document.querySelector("#time");
  const options = hourSelect.querySelectorAll("option");

  const now = dayjs();
  const currentHour = now.hour();
  const isToday = dayjs(selectedDateValue).isSame(now, "day");

  const schedulesDayRes = await scheduleFetchDay({ date: selectedDateValue });

  const unavailableHours = schedulesDayRes.map((schedule) =>
    dayjs(schedule.when).format("HH:mm"),
  );

  options.forEach((option) => {
    if (option.value === "") return;

    const optionHour = option.value.split(":")[0];
    const optionHourNumber = Number(optionHour);
    const isScheduledTime = unavailableHours.some((unavailable) =>
      unavailable.includes(optionHour),
    );

    if (isToday && optionHourNumber <= currentHour) {
      option.disabled = true;
      option.classList.add("option-disabled");
    } else if (isScheduledTime) {
      option.disabled = true;
      option.classList.add("option-disabled");
    } else {
      option.disabled = false;
      option.classList.remove("option-disabled");
    }
  });

  const selectedOption = hourSelect.selectedOptions[0];
  if (selectedOption && selectedOption.disabled) {
    hourSelect.value = "";
  }
}
