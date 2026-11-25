// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");

accordeon.querySelectorAll("details > summary").forEach((summary) => {
  summary.addEventListener("click", () => {
    const detailsClique = summary.parentElement;

    // Referme tous les autres details
    accordeon.querySelectorAll("details").forEach((det) => {
      if (det !== detailsClique) {
        det.open = false;
      }
    });
    // Le details cliqué s'ouvre / se ferme tout seul (comportement par défaut)
  });
});
