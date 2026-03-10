import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });

    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    alert("Não foi possivel cancelar o agendamento");
  }
}
