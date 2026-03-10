import { scheduleCancel } from "../../services/scheduleCancel";
import { schedulesDay } from "./load-schedules";

const periods = document.querySelectorAll(".card-info");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    console.log("Clique detectado no container:", event.target);
    if (event.target.classList.contains("btn-remove")) {
      console.log("Botão de remover clicado!");
      const item = event.target.closest("[data-id]");
      const id = item.getAttribute("data-id");

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?",
        );

        if (isConfirm) {
          await scheduleCancel({ id });
          schedulesDay();
        }
      }
    }
  });
});
