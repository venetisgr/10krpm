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

  /* ---------- Logo: back to the home page / top of the home page ---------- */
  var isHome = document.body.dataset.page === "home";
  document.querySelector(".brand").addEventListener("click", function (e) {
    if (!isHome) return; // normal link to index.html
    e.preventDefault();
    setMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  });

  /* ---------- Parts page: highlight the category in view ---------- */
  var chips = document.querySelectorAll(".cat-nav a");
  if (chips.length && "IntersectionObserver" in window) {
    var byId = {};
    chips.forEach(function (c) { byId[c.getAttribute("href").slice(1)] = c; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        chips.forEach(function (c) { c.classList.remove("active"); });
        var chip = byId[entry.target.id];
        if (chip) {
          chip.classList.add("active");
          var row = chip.parentNode;
          row.scrollTo({ left: chip.offsetLeft - row.clientWidth / 2 + chip.clientWidth / 2, behavior: "smooth" });
        }
      });
    }, { rootMargin: "-30% 0px -65% 0px" });
    document.querySelectorAll(".cat").forEach(function (s) { io.observe(s); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Language (English / Greek) ---------- */
  var en = {
    "skip": "Skip to content",
    "nav.services": "Services",
    "nav.rotary": "Rotary",
    "nav.parts": "Parts &amp; Brands",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.eyebrow": "Chalandri · Athens",
    "hero.title": "Rotary &amp; Mazda specialists in Athens",
    "hero.lead": "Servicing, rotary engine rebuilds, ECU remapping and performance parts, for daily drivers and track builds alike.",
    "hero.book": "Book your car in",
    "hero.services": "See our services",
    "hero.f1": "Rotary engines",
    "hero.f2": "NB · NC · ND",
    "hero.f3": "Remapping &amp; tuning",
    "services.eyebrow": "What we do",
    "services.title": "Workshop services",
    "services.lead": "Everything under one roof, from a routine service to a full engine build.",
    "s1.t": "Rotary engine rebuilds",
    "s1.d": "Rebuilds and repairs for 13B, 13B-REW twin turbo and RENESIS engines in the RX-7 and RX-8.",
    "s2.t": "ECU remapping",
    "s2.d": "Custom tuning and engine management with EcuTek, FuelTech, AEM and MoTeC systems.",
    "s3.t": "Servicing &amp; tune-ups",
    "s3.d": "Plugs, leads, coils, filters and oil for MX-5 NB, NC and ND, RX-7 and RX-8, using NGK, K&amp;N and Idemitsu parts.",
    "s4.t": "Ceramic exhaust coating",
    "s4.d": "HVOF zirconia thermal barrier coating for manifolds and exhausts. It cuts exhaust surface temperature by up to a third, so cooler air reaches the intake.",
    "s5.t": "Power exhaust systems",
    "s5.d": "10k RPM manifolds and complete exhaust systems, including Akrapovič.",
    "s6.t": "Transmission",
    "s6.d": "Gearbox and clutch work, Alcon clutches and Idemitsu Racing gear oil.",
    "s7.t": "Brakes &amp; suspension",
    "s7.d": "EBC and Alcon brakes, plus Whiteline and Ultra Racing chassis parts for sharper handling.",
    "s8.t": "Cooling &amp; fuel",
    "s8.d": "Mishimoto radiators and intercoolers, and FuelTech fuel and ignition upgrades.",
    "rotary.eyebrow": "Our speciality",
    "rotary.title": "Rotary engines are what we know best",
    "rotary.p1": "Rotary engines need specialist knowledge, the right parts and the right oil. We service, tune and rebuild them every day.",
    "rotary.p2": "We also work on Mazda MX-5s and other performance cars. Give us a call and tell us what you drive.",
    "rotary.cta": "Ask about your car",
    "oil.eyebrow": "New in store",
    "oil.title": "Idemitsu Racing Black Series",
    "oil.lead": "Racing and Pro Racing oils from Japan, made for rotary engines. Feel the difference in your rotary.",
    "oil.cta": "Check availability",
    "about.title": "About 10k RPM",
    "about.p1": "10k RPM is an independent performance workshop in Chalandri, Athens. We look after rotary Mazdas, MX-5s and modified cars, from routine servicing to complete builds.",
    "about.p2": "We work to three words: Power, Torque, Drag. That means quality parts, careful work and clear advice before we touch your car.",
    "contact.eyebrow": "Get in touch",
    "contact.title": "Book your car in",
    "contact.lead": "Call us, or send the form and we'll get back to you.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.addr": "92 Iraklitou St., Chalandri 152 35, Athens",
    "contact.directions": "Get directions →",
    "form.name": "Your name",
    "form.phone": "Phone",
    "form.car": "Car (model &amp; year)",
    "form.service": "What do you need?",
    "form.o1": "Service / tune-up",
    "form.o2": "Rotary engine rebuild",
    "form.o3": "ECU remapping",
    "form.o4": "Ceramic exhaust coating",
    "form.o5": "Parts / oil",
    "form.o6": "Something else",
    "form.msg": "Message",
    "form.err": "Please add your name and phone number.",
    "form.send": "Send enquiry",
    "form.note": "This opens your email app with your details filled in.",
    "footer.addr": "92 Iraklitou St., Chalandri 152 35, Athens, Greece",
    "qb.call": "Call",
    "qb.dir": "Directions",
    "qb.book": "Book",
    "hero.alt": "The 10k RPM workshop front in Chalandri with an RX-8 and RX-7 inside",
    "oil.alt": "Idemitsu Racing engine oil bottles",
    "form.carph": "e.g. RX-8 2005",
    "pc.oil": "Oils &amp; lubricants",
    "pc.ecu": "Engine management &amp; tuning",
    "pc.engine": "Engine internals &amp; turbo",
    "pc.cooling": "Cooling",
    "pc.service": "Service parts",
    "pc.exhaust": "Exhaust",
    "pc.brakes": "Brakes &amp; clutches",
    "pc.chassis": "Suspension &amp; chassis",
    "pc.tyres": "Tyres",
    "pc.more": "Tools &amp; more brands",
    "hp.eyebrow": "Parts",
    "hp.lead": "We fit and stock parts from 27 brands, from Idemitsu oils to MoTeC ECUs and Alcon brakes.",
    "hp.title": "Parts &amp; brands",
    "hp.cta": "See all parts &amp; brands",
    "b.fueltech": "Standalone ECUs, fuel and ignition control, and digital dashes.",
    "b.haltech": "Programmable engine management systems.",
    "b.motec": "Engine management, data logging and motorsport displays.",
    "b.link": "Programmable plug-in and wire-in ECUs.",
    "b.aem": "Performance electronics: wideband gauges, sensors and engine management.",
    "b.ecutek": "Tuning by reflashing the factory ECU.",
    "b.cobb": "Accessport handheld tuning.",
    "b.hptuners": "Tuning and diagnostic software.",
    "b.k1": "Forged connecting rods and crankshafts.",
    "b.wiseco": "Forged pistons and engine internals.",
    "b.je": "Forged racing pistons.",
    "b.kuro": "Ball-bearing turbochargers.",
    "b.mishimoto": "Aluminium radiators, intercoolers, oil coolers and silicone hoses.",
    "b.ngk": "Spark plugs and ignition leads.",
    "b.kn": "High-flow air and oil filters.",
    "b.mazda": "Genuine coils, filters and service parts for MX-5, RX-7 and RX-8.",
    "b.akrapovic": "Titanium and stainless performance exhausts.",
    "b.10krpm": "Our own manifolds, with optional HVOF ceramic coating.",
    "b.alcon": "Specialist brakes and clutches.",
    "b.ebc": "Brake pads and discs for road and track.",
    "b.whiteline": "Anti-roll bars, bushes and suspension upgrades.",
    "b.ultraracing": "Strut bars and chassis bracing.",
    "b.toyo": "Performance tyres for road and track.",
    "b.nitto": "Extreme performance tyres.",
    "b.beta": "Professional hand tools.",
    "b.rptools": "Workshop tools and equipment.",
    "b.arashi": "Ask us about the Arashi range we stock.",
    "pp.eyebrow": "Parts &amp; brands",
    "pp.title": "Parts from brands we trust",
    "pp.lead": "We fit and stock them at our workshop in Chalandri. Call us for availability and prices.",
    "pp.call": "Call 210 600 5435",
    "pp.cta.title": "Can't see what you need?",
    "pp.cta.text": "We can order most performance parts. Tell us what you're looking for.",
    "pp.ask": "Send a question",
    "pp.cats": "Categories"
  };

  var nodes = document.querySelectorAll("[data-i18n]");
  var altNodes = document.querySelectorAll("[data-i18n-alt]");
  var phNodes = document.querySelectorAll("[data-i18n-ph]");
  var ariaNodes = document.querySelectorAll("[data-i18n-aria]");

  // The page is written in Greek; keep a copy so we can switch back.
  var el = {};
  nodes.forEach(function (n) { el[n.dataset.i18n] = n.innerHTML; });
  altNodes.forEach(function (n) { el[n.dataset.i18nAlt] = n.alt; });
  phNodes.forEach(function (n) { el[n.dataset.i18nPh] = n.placeholder; });
  ariaNodes.forEach(function (n) { el[n.dataset.i18nAria] = n.getAttribute("aria-label"); });
  var elTitle = document.title;
  var enTitle = document.body.dataset.titleEn || elTitle;

  var langBtn = document.getElementById("lang");
  var current = "el";

  function apply(lang) {
    var dict = lang === "en" ? en : el;
    nodes.forEach(function (n) { var v = dict[n.dataset.i18n]; if (v != null) n.innerHTML = v; });
    altNodes.forEach(function (n) { var v = dict[n.dataset.i18nAlt]; if (v != null) n.alt = v; });
    phNodes.forEach(function (n) { var v = dict[n.dataset.i18nPh]; if (v != null) n.placeholder = v; });
    ariaNodes.forEach(function (n) { var v = dict[n.dataset.i18nAria]; if (v != null) n.setAttribute("aria-label", v); });
    document.documentElement.lang = lang;
    document.title = lang === "en" ? enTitle : elTitle;
    langBtn.textContent = lang === "en" ? "ΕΛ" : "EN";
    langBtn.setAttribute("aria-label", lang === "en" ? "Αλλαγή γλώσσας σε Ελληνικά" : "Switch language to English");
    current = lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  langBtn.addEventListener("click", function () { apply(current === "el" ? "en" : "el"); });

  // Greek is the default; English only if the visitor chose it before.
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  if (saved === "en") apply("en");

  /* ---------- Enquiry form -> pre-filled email ---------- */
  var form = document.getElementById("enquiry");
  var err = document.getElementById("formError");
  if (form) form.addEventListener("submit", function (e) {
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
