(function () {
  "use strict";

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");
  function setMenu(open) {
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  }
  menuBtn.addEventListener("click", function () {
    setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Language (English / Greek) ---------- */
  var el = {
    "skip": "Μετάβαση στο περιεχόμενο",
    "nav.services": "Υπηρεσίες",
    "nav.rotary": "Rotary",
    "nav.parts": "Ανταλλακτικά",
    "nav.about": "Σχετικά",
    "nav.contact": "Επικοινωνία",
    "hero.eyebrow": "Χαλάνδρι · Αθήνα",
    "hero.title": "Εξειδίκευση σε Rotary &amp; Mazda στην Αθήνα",
    "hero.lead": "Service, ανακατασκευές περιστροφικών κινητήρων, επαναπρογραμματισμός ECU και ανταλλακτικά επιδόσεων, για καθημερινά αυτοκίνητα και αγωνιστικές κατασκευές.",
    "hero.book": "Κλείστε ραντεβού",
    "hero.services": "Δείτε τις υπηρεσίες",
    "hero.f1": "Περιστροφικοί κινητήρες",
    "hero.f2": "NB · NC · ND",
    "hero.f3": "Remap &amp; tuning",
    "hero.alt": "Η πρόσοψη του συνεργείου 10k RPM στο Χαλάνδρι με ένα RX-8 και ένα RX-7 μέσα",
    "services.eyebrow": "Τι κάνουμε",
    "services.title": "Υπηρεσίες συνεργείου",
    "services.lead": "Όλα κάτω από την ίδια στέγη, από ένα απλό service μέχρι πλήρη κατασκευή κινητήρα.",
    "s1.t": "Ανακατασκευή rotary κινητήρων",
    "s1.d": "Ανακατασκευές και επισκευές κινητήρων 13B, 13B-REW twin turbo και RENESIS για RX-7 και RX-8.",
    "s2.t": "Επαναπρογραμματισμός ECU",
    "s2.d": "Προσαρμοσμένο tuning και διαχείριση κινητήρα με συστήματα EcuTek, FuelTech, AEM και MoTeC.",
    "s3.t": "Service &amp; tune-up",
    "s3.d": "Μπουζί, μπουζοκαλώδια, πολλαπλασιαστές, φίλτρα και λάδια για MX-5 NB, NC και ND, RX-7 και RX-8, με ανταλλακτικά NGK, K&amp;N και Idemitsu.",
    "s4.t": "Κεραμική επίστρωση εξάτμισης",
    "s4.d": "Θερμομονωτική επίστρωση ζιρκονίας HVOF για πολλαπλές και εξατμίσεις. Μειώνει τη θερμοκρασία επιφάνειας έως και κατά ένα τρίτο, ώστε πιο δροσερός αέρας να φτάνει στην εισαγωγή.",
    "s5.t": "Συστήματα εξάτμισης",
    "s5.d": "Πολλαπλές 10k RPM και ολοκληρωμένα συστήματα εξάτμισης, μεταξύ αυτών και Akrapovič.",
    "s6.t": "Μετάδοση κίνησης",
    "s6.d": "Εργασίες σε κιβώτιο και συμπλέκτη, συμπλέκτες Alcon και βαλβολίνες Idemitsu Racing.",
    "s7.t": "Φρένα &amp; ανάρτηση",
    "s7.d": "Φρένα EBC και Alcon, καθώς και εξαρτήματα πλαισίου Whiteline και Ultra Racing για πιο σφιχτό κράτημα.",
    "s8.t": "Ψύξη &amp; καύσιμο",
    "s8.d": "Ψυγεία και intercooler Mishimoto, και αναβαθμίσεις καυσίμου και ανάφλεξης FuelTech.",
    "rotary.eyebrow": "Η ειδικότητά μας",
    "rotary.title": "Οι περιστροφικοί κινητήρες είναι αυτό που ξέρουμε καλύτερα",
    "rotary.p1": "Οι rotary κινητήρες θέλουν εξειδικευμένη γνώση, σωστά ανταλλακτικά και σωστό λάδι. Τους συντηρούμε, τους ρυθμίζουμε και τους ανακατασκευάζουμε καθημερινά.",
    "rotary.p2": "Δουλεύουμε επίσης Mazda MX-5 και άλλα αυτοκίνητα επιδόσεων. Πάρτε μας τηλέφωνο και πείτε μας τι οδηγείτε.",
    "rotary.cta": "Ρωτήστε για το αυτοκίνητό σας",
    "oil.eyebrow": "Νέο στο κατάστημα",
    "oil.title": "Idemitsu Racing Black Series",
    "oil.lead": "Λάδια Racing και Pro Racing από την Ιαπωνία, φτιαγμένα για περιστροφικούς κινητήρες. Νιώστε τη διαφορά στον rotary σας.",
    "oil.cta": "Ρωτήστε για διαθεσιμότητα",
    "oil.alt": "Φιάλες λαδιού Idemitsu Racing",
    "brands.title": "Μάρκες που τοποθετούμε και διαθέτουμε",
    "about.title": "Σχετικά με την 10k RPM",
    "about.p1": "Η 10k RPM είναι ανεξάρτητο συνεργείο επιδόσεων στο Χαλάνδρι. Φροντίζουμε rotary Mazda, MX-5 και τροποποιημένα αυτοκίνητα, από το απλό service μέχρι ολοκληρωμένες κατασκευές.",
    "about.p2": "Δουλεύουμε με τρεις λέξεις: Power, Torque, Drag. Δηλαδή ποιοτικά ανταλλακτικά, προσεκτική δουλειά και ξεκάθαρη συμβουλή πριν αγγίξουμε το αυτοκίνητό σας.",
    "contact.eyebrow": "Επικοινωνία",
    "contact.title": "Κλείστε ραντεβού",
    "contact.lead": "Πάρτε μας τηλέφωνο ή στείλτε τη φόρμα και θα σας απαντήσουμε.",
    "contact.phone": "Τηλέφωνο",
    "contact.email": "Email",
    "contact.address": "Διεύθυνση",
    "contact.addr": "Ηρακλείτου 92, Χαλάνδρι 152 35, Αθήνα",
    "contact.directions": "Οδηγίες χάρτη →",
    "form.name": "Ονοματεπώνυμο",
    "form.phone": "Τηλέφωνο",
    "form.car": "Αυτοκίνητο (μοντέλο &amp; έτος)",
    "form.carph": "π.χ. RX-8 2005",
    "form.service": "Τι χρειάζεστε;",
    "form.o1": "Service / tune-up",
    "form.o2": "Ανακατασκευή rotary κινητήρα",
    "form.o3": "Επαναπρογραμματισμός ECU",
    "form.o4": "Κεραμική επίστρωση εξάτμισης",
    "form.o5": "Ανταλλακτικά / λάδια",
    "form.o6": "Κάτι άλλο",
    "form.msg": "Μήνυμα",
    "form.err": "Συμπληρώστε το όνομα και το τηλέφωνό σας.",
    "form.send": "Αποστολή",
    "form.note": "Ανοίγει την εφαρμογή email σας με τα στοιχεία συμπληρωμένα.",
    "footer.addr": "Ηρακλείτου 92, Χαλάνδρι 152 35, Αθήνα",
    "qb.call": "Κλήση",
    "qb.dir": "Οδηγίες",
    "qb.book": "Ραντεβού"
  };

  var nodes = document.querySelectorAll("[data-i18n]");
  var altNodes = document.querySelectorAll("[data-i18n-alt]");
  var phNodes = document.querySelectorAll("[data-i18n-ph]");
  var en = {};
  nodes.forEach(function (n) { en[n.dataset.i18n] = n.innerHTML; });
  altNodes.forEach(function (n) { en[n.dataset.i18nAlt] = n.alt; });
  phNodes.forEach(function (n) { en[n.dataset.i18nPh] = n.placeholder; });
  var enTitle = document.title;

  var langBtn = document.getElementById("lang");
  var current = "en";

  function apply(lang) {
    var dict = lang === "el" ? el : en;
    nodes.forEach(function (n) { var v = dict[n.dataset.i18n]; if (v != null) n.innerHTML = v; });
    altNodes.forEach(function (n) { var v = dict[n.dataset.i18nAlt]; if (v != null) n.alt = v; });
    phNodes.forEach(function (n) { var v = dict[n.dataset.i18nPh]; if (v != null) n.placeholder = v; });
    document.documentElement.lang = lang;
    document.title = lang === "el" ? "10k RPM | Εξειδίκευση σε Rotary & Mazda στην Αθήνα" : enTitle;
    langBtn.textContent = lang === "el" ? "EN" : "ΕΛ";
    langBtn.setAttribute("aria-label", lang === "el" ? "Switch language to English" : "Αλλαγή γλώσσας σε Ελληνικά");
    current = lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  langBtn.addEventListener("click", function () { apply(current === "en" ? "el" : "en"); });

  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  if (saved === "el" || (!saved && /^el\b/i.test(navigator.language || ""))) apply("el");

  /* ---------- Enquiry form -> pre-filled email ---------- */
  var form = document.getElementById("enquiry");
  var err = document.getElementById("formError");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.elements.name, phone = form.elements.phone;
    var ok = true;
    [name, phone].forEach(function (f) {
      var bad = !f.value.trim();
      f.setAttribute("aria-invalid", String(bad));
      if (bad) ok = false;
    });
    err.hidden = ok;
    if (!ok) { (name.value.trim() ? phone : name).focus(); return; }

    var service = form.elements.service.value;
    var subject = "Enquiry: " + service + (form.elements.car.value ? " (" + form.elements.car.value.trim() + ")" : "");
    var body = [
      "Name: " + name.value.trim(),
      "Phone: " + phone.value.trim(),
      "Car: " + form.elements.car.value.trim(),
      "Service: " + service,
      "",
      form.elements.message.value.trim()
    ].join("\n");
    window.location.href = "mailto:info@10k-rpm.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
})();
