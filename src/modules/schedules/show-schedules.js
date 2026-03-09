import dayjs from "dayjs";

const card_morning = document.querySelector(".period-morning");
const card_afternoon = document.querySelector(".period-afternoon");
const card_night = document.querySelector(".period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    card_morning.innerHTML = "";
    card_afternoon.innerHTML = "";
    card_night.innerHTML = "";

    dailySchedules.forEach((schedule) => {
      const div_card = document.createElement("div");
      div_card.classList.add("card-info-row");

      const timeStrong = document.createElement("strong");
      timeStrong.textContent = dayjs(schedule.when).format("HH:mm");

      const p = document.createElement("p");
      p.innerHTML = `<strong>${schedule.petName}</strong>/ ${schedule.guardianName}`;

      div_card.append(timeStrong, p);

      const serviceP = document.createElement("p");
      serviceP.textContent = schedule.serviceDescription;

      const removeBtn = document.createElement("button");
      removeBtn.classList.add("btn-remove");
      removeBtn.type = "button";
      removeBtn.textContent = "Remover agendamento";

      const divContainer = document.createElement("div");
      divContainer.setAttribute("data-id", schedule.id);
      divContainer.classList.add("card-info");
      divContainer.append(div_card, serviceP, removeBtn);

      const hour = dayjs(schedule.when).hour();
      console.log(hour);
      console.log(schedule.when);

      if (hour <= 12) {
        card_morning.appendChild(divContainer);
      } else if (hour > 12 && hour <= 18) {
        card_afternoon.appendChild(divContainer);
      } else {
        card_night.appendChild(divContainer);
      }
    });
  } catch (error) {
    alert("Não foi possivel exibir agendamentos");
    console.log(error);
  }
}
