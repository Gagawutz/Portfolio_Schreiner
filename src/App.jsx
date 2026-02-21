import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, X, ChevronLeft, ChevronRight, PlayCircle, FileText, Download } from 'lucide-react';

const Portfolio = () => {
  
  // ==========================================
  // TEIL 2: HIER TEXTE UND PERSÖNLICHE DATEN ÄNDERN
  // ==========================================
  const personalInfo = {
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
  const projects = [
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
      id: 1,
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
      id: 2,
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
      id: 3,
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

  // --- STATE MANAGEMENT ---
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCV, setShowCV] = useState(false);

  const isVideo = (url) => {
    if (!url) return false;
    return url.match(/\.(mp4|webm|ogg|mov)$/i);
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; 
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const closeCV = () => {
    setShowCV(false);
    document.body.style.overflow = 'unset';
  }

  const openCV = () => {
    setShowCV(true);
    document.body.style.overflow = 'hidden';
  }

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  // --- UI COMPONENTS ---

  // Helper für Kontaktinformationen (wiederverwendbar)
  const ContactInfoList = () => (
    // ABSTAND ÄNDERN (2): 'gap-4' bestimmt den Abstand ZWISCHEN E-Mail, Telefon und Ort
    // 'mt-2' ist ein kleiner Zusatzabstand nach oben zur Trennlinie
    <div className="flex flex-col gap-1 mt-2 w-full">
      <div className="flex items-center gap-1 group">
        <div className="p-2 bg-stone-100 rounded-full text-stone-600 group-hover:text-blue-900 group-hover:bg-blue-50 transition-colors">
          <Mail size={18} />
        </div>
        <a href={`mailto:${personalInfo.email}`} className="text-stone-700 font-medium hover:text-blue-900 transition-colors break-all text-sm">
          {personalInfo.email}
        </a>
      </div>

      <div className="flex items-center gap-3 group">
        <div className="p-2 bg-stone-100 rounded-full text-stone-600 group-hover:text-blue-900 group-hover:bg-blue-50 transition-colors">
          <Phone size={18} />
        </div>
        <a href={`tel:${personalInfo.phone}`} className="text-stone-700 font-medium hover:text-blue-900 transition-colors text-sm">
          {personalInfo.phone}
        </a>
      </div>

      {/* UPDATE: Hier wurde 'group' hinzugefügt, damit Hover funktioniert */}
      <div className="flex items-center gap-3 group">
        {/* UPDATE: Hover-Klassen hinzugefügt */}
        <div className="p-2 bg-stone-100 rounded-full text-stone-600 group-hover:text-blue-900 group-hover:bg-blue-50 transition-colors">
          <MapPin size={18} />
        </div>
        {/* UPDATE: Textfarbe ändert sich jetzt auch bei Hover */}
        <span className="text-stone-700 font-medium hover:text-blue-900 transition-colors text-sm">{personalInfo.location}</span>
      </div>
    </div>
  );

  // Helper Component für Bild + Button + Kontakt
  const ProfileMedia = ({ mobile }) => (
    // ABSTAND ÄNDERN (1): 'gap-6' bestimmt den Abstand zwischen Bild, Button und Kontaktbereich
    // Ändern Sie 'gap-6' zu 'gap-8' oder 'gap-10' für mehr Platz
    <div className={`${mobile ? 'flex md:hidden flex-col items-center gap-6 my-8' : 'hidden md:flex flex-col items-start mt-24 gap-6'}`}>
      <div className="relative w-56 h-56 md:w-72 md:h-72">
        <div className="absolute inset-0 bg-blue-200 rounded-2xl blur-xl opacity-30 transform -rotate-3"></div>
        <img 
          src={personalInfo.profileImage} 
          alt="Profilbild" 
          className="relative w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>

      <button 
        onClick={openCV}
        className="w-56 md:w-72 flex items-center justify-center gap-2 px-6 py-3 bg-stone-100 text-stone-700 font-medium rounded-xl hover:bg-blue-50 hover:text-blue-900 transition-all border border-stone-200 group shadow-sm"
      >
        <FileText size={20} className="text-stone-400 group-hover:text-blue-900 transition-colors"/>
        Lebenslauf öffnen
      </button>

      {/* Kontaktinformationen Bereich */}
      {/* 'pt-4' ist der Innenabstand nach oben zur Trennlinie */}
      <div className="w-56 md:w-72 pt-4 border-t border-stone-100">
        <ContactInfoList />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-blue-200">
      
      {/* HEADER / HERO SECTION */}
      {/* UPDATE: 
          - 'min-h-[85vh]': Der Header ist jetzt mindestens 85% der Bildschirmhöhe hoch.
          - 'flex items-center': Das zentriert den Inhalt vertikal.
      */}
      <header className="relative bg-white shadow-sm min-h-[85vh] flex items-center">
        {/* UPDATE: 'max-w-7xl' statt '6xl' für mehr Breite auf großen Screens */}
        <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
          
          {/* 1. Text Bereich (LINKS) */}
          <div className="flex-1 space-y-5 text-center md:text-left order-1 flex flex-col justify-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-900 mb-2">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-stone-500 font-medium">
                {personalInfo.title}
              </p>
            </div>

            {/* MOBILE VERSION: Bild + Button + Kontakt kommen HIER */}
            <ProfileMedia mobile={true} />

            {/* UPDATE: 'lg:max-w-xl' erlaubt dem Text auf großen Screens etwas breiter zu laufen */}
            <p className="text-stone-600 leading-relaxed max-w-lg lg:max-w-xl mx-auto md:mx-0">
              {personalInfo.intro}
            </p>
          </div>

          {/* 2. Vertikaler Strich (Mitte - Nur Desktop) */}
          <div className="hidden md:block w-0.5 bg-blue-900 mx-2 order-2 mt-24 mb-2 opacity-80 rounded-full"></div>

          {/* 3. Bild Bereich (RECHTS - Nur Desktop) */}
          <div className="flex-shrink-0 order-3">
             <ProfileMedia mobile={false} />
          </div>

        </div>
      </header>

      {/* PROJEKTE GRID */}
      {/* UPDATE: Auch hier 'max-w-7xl' für mehr Breite */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center md:text-left border-l-4 border-blue-900 pl-4">
          Ausgewählte Arbeiten
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => openProject(project)}
              className="
                relative 
                bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden cursor-pointer
                transition-all duration-700 ease-out
                transform
                group-hover:opacity-40     
                group-hover:scale-95       
                hover:!opacity-100         
                hover:!scale-105           
                hover:shadow-2xl           
                hover:z-10                 
              "
            >
              <div className="relative h-64 overflow-hidden bg-stone-100">
                {isVideo(project.images[0]) ? (
                  <video 
                    src={project.images[0]} 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700"
                    muted 
                    playsInline
                    loop
                    autoPlay
                  />
                ) : (
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                )}
                
                {isVideo(project.images[0]) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <PlayCircle className="text-white opacity-80" size={48} />
                  </div>
                )}

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold rounded-full text-stone-800 shadow-sm">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-stone-900 transition-colors">
                  {project.title}
                </h3>
                <p className="text-stone-500 text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 text-blue-900 text-sm font-medium flex items-center gap-1 opacity-100">
                  Details ansehen <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-12 text-center">
        <p className="mb-2">Digitale Bewerbungsmappe</p>
        <p className="text-stone-600 text-sm">&copy; {new Date().getFullYear()} {personalInfo.name}</p>
      </footer>

      {/* MODAL / LIGHTBOX (Für Projekte) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm transition-opacity"
            onClick={closeProject}
          ></div>

          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in duration-200">
            <button 
              onClick={closeProject}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-stone-100 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="w-full md:w-2/3 bg-stone-100 relative h-64 md:h-auto min-h-[300px] flex items-center justify-center bg-black">
              {isVideo(selectedProject.images[currentImageIndex]) ? (
                <video 
                  src={selectedProject.images[currentImageIndex]}
                  className="w-full h-full object-contain max-h-[60vh] md:max-h-full"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
              ) : (
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={`Ansicht ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
              
              {selectedProject.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white text-stone-800"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white text-stone-800"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, idx) => (
                      <div 
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="w-full md:w-1/3 p-8 bg-white flex flex-col">
              <div className="mb-auto">
                <span className="text-blue-900 text-sm font-bold tracking-wider uppercase mb-2 block">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">
                  {selectedProject.title}
                </h3>
                <div className="w-12 h-1 bg-blue-900 mb-6"></div>
                <p className="text-stone-600 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-stone-100">
                <p className="text-xs text-stone-400">
                  Medium {currentImageIndex + 1} von {selectedProject.images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL / OVERLAY (Für Lebenslauf PDF) */}
      {showCV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm transition-opacity"
            onClick={closeCV}
          ></div>

          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Header des CV Modals */}
            <div className="flex justify-between items-center p-4 border-b border-stone-200 bg-white z-10">
              <h3 className="text-lg font-bold text-stone-800">Lebenslauf</h3>
              <div className="flex gap-2">
                <a 
                  href={personalInfo.cvPdf} 
                  download 
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  <Download size={16} /> Download
                </a>
                <button 
                  onClick={closeCV}
                  className="p-2 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* PDF Inhalt */}
            <div className="flex-1 bg-stone-100 p-0 md:p-4 overflow-hidden">
              <iframe 
                src={personalInfo.cvPdf} 
                className="w-full h-full rounded-lg shadow-sm bg-white"
                title="Lebenslauf"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Portfolio;