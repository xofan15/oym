// profile.js
(function() {
  'use strict';

  if (window.location.href.includes("profile.php")) {
    chrome.storage.local.get("justLoggedIn", (data) => {
      if (!data.justLoggedIn) {
        return;
      }

      const correoElement = document.querySelector("h4:not([class])");
      const nombreElement = document.querySelector("h4.m-0");
      const sedeElement = document.querySelector("span.mt-1.mb-12.text-uppercase");
      const avatarElement = document.querySelector("#avatar");

      const correo = correoElement ? correoElement.innerText.trim() : "No capturado";
      const nombre = nombreElement ? nombreElement.innerText.trim() : "No capturado";
      const sede = sedeElement ? sedeElement.innerText.trim() : "No capturado";
      const avatar = avatarElement ? avatarElement.src : null;

      chrome.runtime.sendMessage({
        action: "profileAccess",
        nombre,
        correo,
        sede,
        avatar,
        url: window.location.href
      });

      chrome.storage.local.set({ justLoggedIn: false });
    });
  }
})();
