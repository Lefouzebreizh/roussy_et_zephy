import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  HeartHandshake,
  Moon,
  Palette,
  BookOpen,
  ChevronDown,
  ShoppingBag,
  Download,
  CheckCircle2,
  X,
  ExternalLink,
  Star,
  Sliders,
  Feather
} from 'lucide-react';

export const BOOK_CONFIG = {
  meta: {
    title: "Roussy & Zéphy dans la forêt des Mille-Couleurs",
    subtitle: "L'album illustré plein de tendresse et d'humour pour apprivoiser ses émotions dès 4 ans",
    targetAge: "4 à 8 ans (Maternelle & Primaire)",
    pageCount: "40 pages illustrées grand format",
    isbn: "978-2-9584120-0-4",
    releaseYear: "2026",
    author: "Erwann Chevallier",
    amazonUrl: "https://amazon.fr",
  },
  hero: {
    badge: "✨ NOUVEAUTÉ JEUNESSE & INTELLIGENCE ÉMOTIONNELLE",
    headlineMain: "Apprivoiser ses émotions,",
    headlineAccent: "un mot d'esprit à la fois.",
    pitch:
      "Pourquoi dit-on que l'on est 'têtu comme une mule' ? Que signifie avoir 'le cœur sur la main' ou 'la moutarde qui monte au nez' ? Accompagnez Roussy le petit renard passionné et Zéphy le zèbre ailé bienveillant au cœur de la forêt des Mille-Couleurs.",
    guarantees: [
      "Recommandé par les enseignants & pédopsychologues",
      "Format cartonné durable & encres végétales",
      "Cahier pédagogique d'activités offert (PDF)",
    ],
  },
  heroes: [
    {
      id: "roussy",
      name: "Roussy le Renardeau",
      role: "Le curieux impulsif au grand cœur",
      trait: "Déborde d'énergie, s'impatiente vite, apprend à canaliser ses colères et son obstination.",
      color: "from-amber-500/20 to-orange-500/30 border-orange-200 text-orange-900",
      avatar: "🦊",
      quote: "« Mais pourquoi mon nez fume quand je suis fâché ?! »",
    },
    {
      id: "zephy",
      name: "Zéphy le Zèbre Ailé",
      role: "Le guide calme et rassurant",
      trait: "Écoute avec tendresse, prend de la hauteur pour expliquer le sens des mots et apaiser les tempêtes intérieures.",
      color: "from-sky-500/20 to-indigo-500/30 border-sky-200 text-sky-900",
      avatar: "🦓",
      quote: "« Respire, Roussy... Les mots ont des ailes pour libérer le cœur. »",
    },
  ],
  benefits: [
    {
      icon: HeartHandshake,
      title: "Intelligence Émotionnelle",
      desc: "Identifier les colères soudaines, dépasser la frustration et comprendre ce qui bouillonne dans sa tête.",
      color: "text-rose-500 bg-rose-50 border-rose-100",
    },
    {
      icon: Sparkles,
      title: "Éveil aux Expressions",
      desc: "Découvrir avec humour les métaphores du quotidien pour enrichir son vocabulaire dès la maternelle.",
      color: "text-amber-500 bg-amber-50 border-amber-100",
    },
    {
      icon: Moon,
      title: "Rituel du Soir Apaisant",
      desc: "Des aventures structurées pour instaurer le calme, propices à la confidence parent-enfant.",
      color: "text-indigo-500 bg-indigo-50 border-indigo-100",
    },
    {
      icon: Palette,
      title: "Illustrations Immersives",
      desc: "Des planches féeriques aux couleurs soignées pour stimuler l'imaginaire et la sensibilité graphique.",
      color: "text-emerald-500 bg-emerald-50 border-emerald-100",
    },
  ],
  interactiveComparison: {
    title: "Le Décodeur d'Expressions de la Forêt",
    subtitle: "Glissez le curseur interactif pour voir comment l'expression imagée se transforme en solution émotionnelle apaisante.",
    beforeLabel: "Au Pied de la Lettre : 'La moutarde monte au nez !'",
    afterLabel: "Sens Émotionnel : 'Je respire comme Zéphy et la colère passe.'",
    beforeText: "Roussy sent un piquant chaud qui lui brûle les narines, ses moustaches s'enflamment et il a envie de tout casser.",
    afterText: "Zéphy lui apprend à poser la patte sur son cœur, à nommer sa frustration et à expirer la vapeur pour retrouver son sourire.",
    beforeImg: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=80",
    afterImg: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
  },
  previewPages: [
    {
      id: "pl1",
      title: "La dispute des galets dorés",
      expression: "Têtu comme une mule",
      previewText: "Quand Roussy refuse de prêter son cerf-volant, le sol tremble sous ses petites pattes... Être têtu, ce n'est pas être fort, c'est oublier qu'un tout petit pas d'écoute peut tout débloquer.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "pl2",
      title: "L'envol au-dessus du grand ruisseau",
      expression: "Avoir le cœur sur la main",
      previewText: "Zéphy déploie ses ailes rayées pour offrir son goûter aux oisillons égarés. Donner sans rien attendre en retour, c'est semer de la lumière partout autour de soi.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "pl3",
      title: "L'orage des groseilles rouges",
      expression: "La moutarde qui monte au nez",
      previewText: "Une vapeur chaude s'échappe des oreilles de Roussy avant la grande leçon d'apaisement : souffler doucement comme le vent d'automne.",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80",
    },
  ],
  pricingPackages: [
    {
      id: "album_standard",
      name: "Édition Découverte",
      price: 14.90,
      description: "L'album broché grand format pour la maison ou la classe",
      features: ["Livre 40 pages haute qualité", "Accès QR-Code aux histoires audio", "Marque-page illustré offert"],
      recommended: false,
    },
    {
      id: "pack_emotions",
      name: "Pack Famille Complice",
      price: 21.90,
      description: "L'album relié cartonné prestige + le cahier d'activités ludo-pédagogiques",
      features: [
        "Album cartonné couverture rigide",
        "Cahier d'activités 24 pages (jeux & coloriages)",
        "Guide parent 'Les mots pour en parler'",
        "Livraison offerte en point relais",
      ],
      recommended: true,
    },
    {
      id: "pack_ecole",
      name: "Offre Écoles & Enseignants",
      price: 69.00,
      description: "Lot de 5 exemplaires + Fiches pédagogiques conformes aux programmes",
      features: [
        "5 albums pour la bibliothèque de classe",
        "Dossier pédagogique GS / CP / CE1 imprimé",
        "Planches cartonnées des personnages",
        "Facture administrative Chorus Pro",
      ],
      recommended: false,
    },
  ],
  testimonials: [
    {
      author: "Émilie V.",
      role: "Professeure des écoles (Grande Section)",
      text: "Un support formidable pour nos ateliers de langage et de gestion des conflits en classe. Les élèves adorent répéter les expressions !",
    },
    {
      author: "Marc & Sarah",
      role: "Parents de Léa (5 ans) et Tom (7 ans)",
      text: "C'est devenu le rituel incontournable du soir. Roussy a permis à notre fils de mettre des mots sur ses colères sans culpabiliser.",
    },
  ],
  faqs: [
    {
      q: "À partir de quel âge ce livre est-il adapté ?",
      a: "Idéal dès 4 ans en lecture accompagnée grâce aux grandes illustrations et aux dialogues vivants. Les enfants de 6 à 8 ans peuvent le lire en autonomie.",
    },
    {
      q: "Le cahier d'activités est-il adapté aux collectivités ?",
      a: "Oui, les exercices et planches à colorier sont conçus pour être facilement photocopiés et animés en atelier.",
    },
  ]
};

export default function App() {
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [selectedPreview, setSelectedPreview] = useState<typeof BOOK_CONFIG.previewPages[0] | null>(null);
  const [selectedPkg, setSelectedPkg] = useState("pack_emotions");
  const [withDedication, setWithDedication] = useState(true);

  const [childName, setChildName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [isKitDownloaded, setIsKitDownloaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const launchConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#EA580C', '#38BDF8', '#10B981']
    });
  };

  const handlePointerDown = () => { isDragging.current = true; };
  const handlePointerUp = () => { isDragging.current = false; };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  useEffect(() => {
    const handleGlobalUp = () => { isDragging.current = false; };
    window.addEventListener('pointerup', handleGlobalUp);
    return () => window.removeEventListener('pointerup', handleGlobalUp);
  }, []);

  const activePackage = BOOK_CONFIG.pricingPackages.find(p => p.id === selectedPkg) || BOOK_CONFIG.pricingPackages[1];
  const totalPrice = (activePackage.price + (withDedication ? 4.00 : 0)).toFixed(2);

  const handleDownloadKit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentEmail) return;
    setIsKitDownloaded(true);
    launchConfetti();
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 antialiased selection:bg-amber-200">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦊 🦓</span>
            <span className="font-extrabold text-stone-900 text-lg sm:text-xl tracking-tight">
              Roussy & Zéphy
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href="#histoire" className="hover:text-orange-600 transition-colors">L'Histoire</a>
            <a href="#heros" className="hover:text-orange-600 transition-colors">Les Héros</a>
            <a href="#decodeur" className="hover:text-orange-600 transition-colors">Le Décodeur</a>
            <a href="#feuilleter" className="hover:text-orange-600 transition-colors">Feuilleter</a>
            <a href="#commander" className="hover:text-orange-600 transition-colors">Commander</a>
          </nav>

          <a
            href="#commander"
            onClick={launchConfetti}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Commander</span>
          </a>
        </div>
      </header>

      <section id="histoire" className="pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold">
                {BOOK_CONFIG.hero.badge}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-tight">
                {BOOK_CONFIG.hero.headlineMain}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-emerald-600">
                  {BOOK_CONFIG.hero.headlineAccent}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {BOOK_CONFIG.hero.pitch}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={BOOK_CONFIG.meta.amazonUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={launchConfetti}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm sm:text-base shadow-xl transition-all"
                >
                  <ExternalLink className="w-5 h-5 text-amber-400" />
                  <span>Voir sur Amazon KDP</span>
                </a>
                <a
                  href="#feuilleter"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 font-bold text-sm sm:text-base shadow-sm transition-all"
                >
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  <span>Feuilleter des extraits</span>
                </a>
              </div>

              <div className="pt-6 border-t border-amber-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                {BOOK_CONFIG.hero.guarantees.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-72 sm:w-80 h-96 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-100 p-6 border border-amber-200 shadow-2xl flex flex-col justify-between text-center">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-white/90 rounded-full text-[11px] font-bold text-orange-800 border border-orange-200">
                    {BOOK_CONFIG.meta.targetAge}
                  </span>
                  <span>✨</span>
                </div>
                <div>
                  <div className="text-6xl mb-3">🦊 🦓</div>
                  <h3 className="text-2xl font-black text-stone-900">Roussy & Zéphy</h3>
                  <p className="text-xs text-stone-600 mt-1">Apprivoiser ses émotions en s'amusant</p>
                </div>
                <div className="bg-white/90 p-3 rounded-2xl border border-amber-100">
                  <p className="text-xs font-bold text-stone-700">{BOOK_CONFIG.meta.author}</p>
                  <p className="text-[10px] text-stone-500 font-mono mt-0.5">ISBN {BOOK_CONFIG.meta.isbn}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="heros" className="py-16 bg-white/70 border-y border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900">Faites connaissance avec vos guides</h2>
            <p className="text-stone-600 mt-2 text-sm sm:text-base">Deux tempéraments unis pour apprendre à grandir avec bienveillance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BOOK_CONFIG.heroes.map((hero) => (
              <div key={hero.id} className={`p-8 rounded-3xl border bg-gradient-to-br ${hero.color} shadow-lg`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl">
                    {hero.avatar}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-stone-900">{hero.name}</h3>
                    <p className="text-sm font-semibold opacity-80">{hero.role}</p>
                  </div>
                </div>
                <p className="text-stone-700 text-sm leading-relaxed mb-6 font-medium">{hero.trait}</p>
                <div className="bg-white/80 p-4 rounded-2xl border border-white text-xs italic text-stone-800">
                  {hero.quote}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOOK_CONFIG.benefits.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-amber-100 shadow-sm">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${b.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-stone-900 mb-2">{b.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="decodeur" className="py-16 bg-gradient-to-b from-amber-50/60 to-orange-50/40 border-y border-amber-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900">{BOOK_CONFIG.interactiveComparison.title}</h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">{BOOK_CONFIG.interactiveComparison.subtitle}</p>
          </div>

          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize touch-none"
          >
            <div
              className="absolute inset-0 bg-cover bg-center flex items-end p-6 sm:p-8"
              style={{ backgroundImage: `url(${BOOK_CONFIG.interactiveComparison.afterImg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/85 via-sky-900/40 to-transparent" />
              <div className="relative z-10 max-w-md text-white text-left ml-auto">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold mb-2 uppercase">
                  {BOOK_CONFIG.interactiveComparison.afterLabel}
                </span>
                <p className="text-xs sm:text-sm font-medium text-sky-100 leading-relaxed">
                  {BOOK_CONFIG.interactiveComparison.afterText}
                </p>
              </div>
            </div>

            <div
              className="absolute inset-0 bg-cover bg-center flex items-end p-6 sm:p-8"
              style={{
                backgroundImage: `url(${BOOK_CONFIG.interactiveComparison.beforeImg})`,
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/85 via-orange-900/40 to-transparent" />
              <div className="relative z-10 max-w-md text-white text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-orange-600 text-white text-[11px] font-bold mb-2 uppercase">
                  {BOOK_CONFIG.interactiveComparison.beforeLabel}
                </span>
                <p className="text-xs sm:text-sm font-medium text-orange-100 leading-relaxed">
                  {BOOK_CONFIG.interactiveComparison.beforeText}
                </p>
              </div>
            </div>

            <div className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-orange-500 font-bold text-xs">
                ↔
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feuilleter" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900">Feuilletez des planches de l'album</h2>
            <p className="text-stone-600 mt-2 text-sm sm:text-base">Cliquez sur une illustration pour la contempler en grand format.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BOOK_CONFIG.previewPages.map((page) => (
              <div
                key={page.id}
                onClick={() => setSelectedPreview(page)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={page.image} alt={page.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-stone-900/75 text-white text-[10px] font-bold">
                    {page.expression}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-extrabold text-lg text-stone-900 group-hover:text-orange-600 transition-colors">{page.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-2 line-clamp-3 leading-relaxed">{page.previewText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPreview && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-amber-200">
            <button
              onClick={() => setSelectedPreview(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white text-stone-800 flex items-center justify-center shadow"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selectedPreview.image} alt={selectedPreview.title} className="w-full h-72 object-cover" />
            <div className="p-6 sm:p-8 space-y-4">
              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">{selectedPreview.expression}</span>
              <h3 className="text-2xl font-black text-stone-900">{selectedPreview.title}</h3>
              <p className="text-stone-700 text-sm leading-relaxed">{selectedPreview.previewText}</p>
            </div>
          </div>
        </div>
      )}

      <section id="commander" className="py-20 bg-gradient-to-b from-white to-amber-50/60 border-t border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900">Choisissez votre formule d'éveil</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {BOOK_CONFIG.pricingPackages.map((pkg) => {
              const isSelected = selectedPkg === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPkg(pkg.id)}
                  className={`cursor-pointer rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                    pkg.recommended
                      ? 'bg-gradient-to-b from-amber-500/10 via-white to-orange-500/10 border-2 border-orange-500 shadow-xl scale-105'
                      : isSelected
                      ? 'bg-white border-2 border-stone-800 shadow-md'
                      : 'bg-white/90 border border-stone-200'
                  }`}
                >
                  {pkg.recommended && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange-600 text-white text-[11px] font-bold uppercase">
                      ⭐ Choix Préféré
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-black text-stone-900">{pkg.name}</h3>
                    <p className="text-xs text-stone-500 mt-1">{pkg.description}</p>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-stone-900">{pkg.price.toFixed(2)}</span>
                      <span className="text-lg font-bold text-stone-600">€</span>
                    </div>
                    <div className="mt-6 space-y-3 pt-6 border-t border-stone-100">
                      {pkg.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 pt-4">
                    <button
                      type="button"
                      className={`w-full py-3 rounded-2xl font-bold text-sm ${
                        isSelected ? 'bg-orange-600 text-white shadow-md' : 'bg-stone-100 text-stone-800'
                      }`}
                    >
                      {isSelected ? 'Sélectionné' : 'Choisir'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-lg">
            <label className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 cursor-pointer">
              <input
                type="checkbox"
                checked={withDedication}
                onChange={(e) => setWithDedication(e.target.checked)}
                className="w-5 h-5 rounded text-orange-600"
              />
              <div className="flex-1">
                <span className="text-sm font-bold text-stone-900 flex items-center gap-1.5">
                  <Feather className="w-4 h-4 text-orange-600" />
                  <span>Dédicace personnalisée (+4.00 €)</span>
                </span>
                <span className="text-xs text-stone-500 block">Un mot manuscrit au prénom de votre enfant.</span>
              </div>
            </label>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-stone-500 block">Total</span>
                <span className="text-3xl font-black text-stone-900">{totalPrice} €</span>
              </div>
              <a
                href={BOOK_CONFIG.meta.amazonUrl}
                target="_blank"
                rel="noreferrer"
                onClick={launchConfetti}
                className="px-8 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-xl transition-all"
              >
                Commander sur Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-amber-50/60 border border-amber-200 text-center">
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900">Recevez le Mini-Kit de Coloriages Gratuit</h3>
            <p className="text-stone-600 text-sm mt-2 max-w-xl mx-auto">5 planches à imprimer avec les expressions illustrées et le guide émotionnel.</p>
            {isKitDownloaded ? (
              <div className="mt-6 p-4 rounded-2xl bg-emerald-100 text-emerald-900 font-bold text-sm">
                Merci ! Le kit a été envoyé à {parentEmail} !
              </div>
            ) : (
              <form onSubmit={handleDownloadKit} className="mt-8 max-w-md mx-auto space-y-3">
                <input
                  type="text"
                  placeholder="Prénom de l'enfant"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full px-5 py-3 rounded-2xl border border-stone-200 text-sm bg-white"
                />
                <input
                  type="email"
                  required
                  placeholder="Adresse email"
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  className="w-full px-5 py-3 rounded-2xl border border-stone-200 text-sm bg-white"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Télécharger le Kit Gratuit (PDF)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-stone-900 text-stone-400 text-xs border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦊 🦓</span>
            <div>
              <p className="font-bold text-white text-sm">Roussy & Zéphy dans la forêt des Mille-Couleurs</p>
              <p className="text-stone-500 text-[11px]">Écrit et illustré par {BOOK_CONFIG.meta.author}</p>
            </div>
          </div>
          <p>ISBN : {BOOK_CONFIG.meta.isbn} • Tous droits réservés © {BOOK_CONFIG.meta.releaseYear}</p>
        </div>
      </footer>
    </div>
  );
}
