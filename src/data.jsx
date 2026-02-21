import React from 'react';

// ==========================================
// TEIL 2: HIER TEXTE UND PERSÖNLICHE DATEN ÄNDERN
// ==========================================
export const personalInfo = {
  name: "Gabriel Wiedemann Utz", 
  title: "Bewerbung zur Ausbildung als Schreiner",
  intro: (
    <>
      Wenn sie das hier lesen, dann war ich wahrscheinlich heute bei ihnen im Betrieb. Danke, dass sie sich die Zeit genommen haben!
      <br />
      Ich würde gerne in ihrem Betrieb zum Ausbildungsjahr 2026 eine Ausbildung beginnen und wenn möglich im Februar oder März ein Praktikum absolvieren.
      <br /><br />
      Handwerklich begeistert war ich schon immer, egal ob in der Grundschule im WTG Unterricht, bei Renovierungsarbeiten in der Bruchbude meines Vaters oder in eigenen kleinen Projekten.
      <br /><br />
      Es ist nichts besonderes aber es hat mir viel Spaß gemacht und war mit einer Erfüllung und Selbstwirksamkeit verbunden, die mir bisher keine Aufgabe in meinem Studium, verschiedenen Praktika und Werkstudentenjobs geben konnte.
      Und es hat mir gezeigt wie unglaublich viel ich hier lernen kann!
      <br /><br />
      Ich bin jetzt 25 und fühle mich an manchen Tagen schon zu alt um das hier nochmal zu versuchen. Aber seit knapp 1 1/2 Jahren geht mir der Gedanke eine Ausbildung als Schreiner machen zu wollen nicht mehr aus dem Kopf. Und wenn ich es jetzt nicht mache, dann wahrscheinlich nie mehr.
      <br /><br />
      Ich will Schreiner werden um Ideen, die in meinem Kopf entstehen (oder in dem anderer Leute) Wirklichkeit werden lassen zu können. Dabei mein Bestes geben und mich über das Ergebnis freuen können!
    </>
  ),
  email: "g.wiedemannutz@proton.me",
  phone: "015204918995",
  location: "München, Deutschland",
  profileImage: "/profilbild.jpeg",
  
  cvPdf: "/01.09.2025_DE.pdf" 
};

// ==========================================
// TEIL 1: HIER PROJEKTE UND BILDER EINFÜGEN
// ==========================================
export const projects = [
   {
    id: 1,
    title: "Schublade mit Asanoha Kumiko",
    category: "Eigenprojekt",
    description: (
      <>
        Über die Jahre habe ich verschiedene kleine Modifikationen an diesem alten Tisch durchgeführt. Jetzt war die Schublade dran.
        <br /><br />
        Das Kumiko hat mich vor einige Herausforderunen gestellt! Ich freue mich aber schon auf das Nächste.
        <br /><br />
        Beim Anfertigen der Deckel für die einzelnen Fächer ist mir leider ein gravierender Fehler unterlaufen, da ich beim Verleimen der Bretter nicht auf die Wuchrichtung der Jahresringe geachtet habe. Auch die unterstützenden Querverstrebungen konnten leider nicht verhindern, dass sich das Holz gebogen hat. 
      </>     
    ),
    images: [
      "/Schublade_prefin.jpeg",
      "/Kumiko_fenster.jpeg",
      "/Kumiko_1.jpeg",
      "/Kumiko_2.jpeg"
    ]
  },
  {
    id: 2,
    title: "Umgebauter Beistelltisch",
    category: "Eigenprojekt",
    description: (
      <>
        Die Idee für den Tisch kam mir durch die getrocknete Irisblume, die ich aus Portugal mitgebracht habe.
        <br /><br />
        Sie ruht auf einem, mit Magneten befestigten Holzbrett, sodass man theoretisch verschiedene dekorelemente unter der Plexiglasscheibe platzieren kann.
        <br /><br />
        Verbesserungswürdig sind hier sicher einige Dinge aber was mir immer wieder ins Auge fällt ist die unsaubere Passung des Holzrings auf dem die Plexiglasscheibe ruht.
      </>     
    ),
    images: [
      "/Tisch_donedone.jpeg",
      "/Tisch_Pre.jpeg",
      "/Tisch_glueup.jpeg",
      "/Tisch_done.jpeg",
      "/Tisch_donedoneclose.jpeg"
    ]
  },
  {
    id: 3,
    title: "Regal & Deckplatte",
    category: "Eigenprojekt",
    description:  (
      <>
        Wichtiger und vielleicht offensichtlicher Hinweis: Die Schubkästen habe ich nicht selbst gemacht!
        <br /><br />
        Um das Hirnholz der Regalbretter zu verstecken habe ich jeweils eine kleine Holzleiste an die Enden der Bretter geleimt.
        Das mittlere Brett ist außerdem von hinten in der Nut verdübelt.
        <br /><br />
        Die dünnen, asymmetrisch platzierten Holzstehlen waren eine nette Spielerei aber sind leider nicht ganz senkrecht platziert. Im nachhinein hätte ich einen der beiden gut hinter der Wandfließe verstecken können.
      </>     
    ),
    images: [
      "/Schrank_gesamt.jpeg",
      "/Regal_Bretter.jpeg",
      "/Regal_dryfit_front.jpeg",
      "/Regal_montiert.jpeg",
      "/Platte_Prozess – Mit Clipchamp erstellt.mp4"
    ]
  },
  {
    id: 4,
    title: "Deko-Kamm",
    category: "Eigenprojekt",
    description: (
      <>
        Diesen Kamm habe ich für meine Freundin gemacht. Er ist der brasilianischen Landkarte nachempfunden.
        <br /><br />
        Aus dem Entstehungsprozess habe ich leider nicht viel Bildmaterial aber ich habe einige Versuche gebraucht um die sowieso schon nicht allzu filigranen Zinken auszusägen.
        Das war viel Frust mit dabei aber am Ende finde ich ihn eigentlich sehr schön.
      </>     
    ),
    images: [
      "/Kamm_diggydidone.JPG",
      "/Kamm_rough.jpeg"
    ]
  },
];
