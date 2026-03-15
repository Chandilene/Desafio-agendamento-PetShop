import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

import { scheduleNew } from "../../services/schedule-new.js";
import { updateAvailableHours } from "./load-hour.js";
import { schedulesDay } from "../schedules/load-schedules.js";
import { closeModal } from "../modal.js";

const form = document.querySelector("form");
const guardian_pet = document.querySelector("#guardian");
const pet_name = document.querySelector("#pet");
const guardian_phone = document.querySelector("#phone");
const service = document.querySelector("#service");
const service_date = document.querySelector("#modal-date");

const today = dayjs(new Date()).format("YYYY-MM-DD");

service_date.value = today;
service_date.min = today;

updateAvailableHours(service_date.value);

service_date.onchange = () => {
  updateAvailableHours(service_date.value);
};

form.onsubmit = async (e) => {
  e.preventDefault();

  try {
    const name_guardian = guardian_pet.value.trim();
    if (!name_guardian) {
      alert("Por favor preencha o campo com o nome do tutor do pet");
    }

    const hourSelected = document.querySelector("#time");
    const hourValue = hourSelected.value;

    if (!hourValue) {
      return alert("Selecione a hora.");
    }

    const [hour] = hourValue.split(":");
    const hourNumber = Number(hour);

    const when = dayjs(service_date.value).add(hourNumber, "hour");

    const selectedDate = dayjs(service_date.value).startOf("day");
    const dayNow = dayjs().startOf("day");

    if (selectedDate.isBefore(dayNow)) {
      return alert("A data selecionada não pode ser anterior a hoje!");
    }

    const schedule = {
      id: uuidv4(),
      guardianName: name_guardian,
      petName: pet_name.value.trim(),
      phone: guardian_phone.value.replace(/\D/g, ""),
      serviceDescription: service.value,
      when: when.toISOString(),
    };

    await scheduleNew(schedule);

    form.reset();

    await schedulesDay();

    closeModal();
  } catch (error) {
    alert("Não foi possivel fazer o agendamento!");
  }
};
