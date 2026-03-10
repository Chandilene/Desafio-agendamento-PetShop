import { apiConfig } from "./api-config.js";

export async function scheduleNew({
  id,
  guardianName,
  petName,
  phone,
  serviceDescription,
  when,
}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id,
        guardianName,
        petName,
        phone,
        serviceDescription,
        when,
      }),
    });
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    alert("Não foi possivel agendar, tente mais tarde");
  }
}
