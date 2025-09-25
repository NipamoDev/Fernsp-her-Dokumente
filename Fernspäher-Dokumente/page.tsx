"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Shield,
  AlertTriangle,
  Users,
  BookOpen,
  Gavel,
  FileWarning,
  Scale,
  AlertCircle,
  Crosshair,
  Map,
  Radio,
  Eye,
  Target,
  Zap,
  Skull,
  Binary as Binoculars,
  Compass,
  Camera,
  Lock,
  Fingerprint,
  Wifi,
} from "lucide-react"
import { useState } from "react"

export default function FernspaeherDocs() {
  const [activeSection, setActiveSection] = useState<string>("all")

  const generalDocuments = [
    {
      title: "Dienstvorschriften",
      description: "Offizielle Dienstvorschriften und Regelungen der Fernspäher Division",
      icon: BookOpen,
      classification: "VERTRAULICH",
      lastUpdated: "15.01.2025",
    },
    {
      title: "Allgemeine Informationen",
      description: "Grundlegende Informationen über die Division und ihre Aufgaben",
      icon: FileText,
      classification: "INTERN",
      lastUpdated: "12.01.2025",
    },
    {
      title: "Geheimhaltungsvereinbarung",
      description: "Vertraulichkeitsvereinbarung für alle Divisionsmitglieder",
      icon: Shield,
      classification: "GEHEIM",
      lastUpdated: "08.01.2025",
    },
    {
      title: "Personalakte",
      description: "Personalverwaltung und Mitarbeiterdokumentation",
      icon: Users,
      classification: "VERTRAULICH",
      lastUpdated: "20.01.2025",
    },
    {
      title: "Ausbildungsplan",
      description: "Trainings- und Ausbildungspläne für alle Ränge",
      icon: FileText,
      classification: "INTERN",
      lastUpdated: "18.01.2025",
    },
  ]

  const disciplinaryDocuments = [
    {
      title: "Sanktionsbericht",
      description: "Berichte über verhängte Sanktionen und Disziplinarmaßnahmen",
      icon: FileWarning,
      classification: "VERTRAULICH",
      lastUpdated: "22.01.2025",
    },
    {
      title: "Strafkatalog",
      description: "Übersicht aller möglichen Strafen und deren Anwendung",
      icon: Scale,
      classification: "INTERN",
      lastUpdated: "10.01.2025",
    },
    {
      title: "Verwarnungsprotokoll",
      description: "Protokolle über ausgesprochene Verwarnungen",
      icon: AlertCircle,
      classification: "VERTRAULICH",
      lastUpdated: "25.01.2025",
    },
  ]

  const reconDocuments = [
    {
      title: "Aufklärungsberichte",
      description: "Geheime Berichte über feindliche Aktivitäten und Truppenbewegungen",
      icon: Eye,
      classification: "GEHEIM",
      lastUpdated: "26.01.2025",
    },
    {
      title: "Einsatzpläne",
      description: "Detaillierte Pläne für Aufklärungs- und Infiltrationsmissionen",
      icon: Map,
      classification: "STRENG GEHEIM",
      lastUpdated: "25.01.2025",
    },
    {
      title: "Zielbewertungen",
      description: "Analyse und Bewertung strategischer Ziele und Bedrohungen",
      icon: Target,
      classification: "GEHEIM",
      lastUpdated: "24.01.2025",
    },
    {
      title: "Infiltrationsrouten",
      description: "Geheime Routen für unentdeckte Geländebewegungen",
      icon: Compass,
      classification: "STRENG GEHEIM",
      lastUpdated: "23.01.2025",
    },
    {
      title: "Kommunikationsprotokolle",
      description: "Verschlüsselte Funkverkehrsregeln und Codewörter",
      icon: Radio,
      classification: "GEHEIM",
      lastUpdated: "22.01.2025",
    },
    {
      title: "Geländeanalysen",
      description: "Topographische Analysen und taktische Geländebewertungen",
      icon: Binoculars,
      classification: "VERTRAULICH",
      lastUpdated: "21.01.2025",
    },
  ]

  const tacticalDocuments = [
    {
      title: "Exfiltrationsverfahren",
      description: "Notfallpläne für Rückzug und Evakuierung aus feindlichem Gebiet",
      icon: Zap,
      classification: "STRENG GEHEIM",
      lastUpdated: "20.01.2025",
    },
    {
      title: "Tarnung und Täuschung",
      description: "Handbuch für Camouflage-Techniken und Täuschungsmanöver",
      icon: Skull,
      classification: "GEHEIM",
      lastUpdated: "19.01.2025",
    },
    {
      title: "Feindaufklärung",
      description: "Identifikation und Analyse feindlicher Einheiten und Ausrüstung",
      icon: Crosshair,
      classification: "STRENG GEHEIM",
      lastUpdated: "18.01.2025",
    },
    {
      title: "Bildaufklärung",
      description: "Auswertung von Luftbildern und Satellitenaufnahmen",
      icon: Camera,
      classification: "GEHEIM",
      lastUpdated: "17.01.2025",
    },
  ]

  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case "STRENG GEHEIM":
        return "bg-red-800 text-white animate-pulse"
      case "GEHEIM":
        return "bg-red-600 text-white"
      case "VERTRAULICH":
        return "bg-orange-600 text-white"
      case "INTERN":
        return "bg-blue-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  const renderDocuments = () => {
    switch (activeSection) {
      case "recon":
        return (
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Eye className="w-8 h-8 text-primary blood-glow animate-pulse" />
              <h2 className="text-2xl font-bold text-foreground title-glow">🎯 AUFKLÄRUNGS-OPERATIONEN 🎯</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-primary to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reconDocuments.map((doc, index) => (
                <Card
                  key={index}
                  className="document-card bg-card/80 border-primary/30 hover:bg-primary/10 cursor-pointer group backdrop-blur-sm hover:border-primary/70"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <doc.icon className="w-10 h-10 text-primary group-hover:text-primary/90 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(139,0,0,0.8)]" />
                      <Badge className={`text-xs font-bold ${getClassificationColor(doc.classification)} shadow-lg`}>
                        {doc.classification}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300 font-bold">
                      {doc.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {doc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-mono">Aktualisiert: {doc.lastUpdated}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary-foreground hover:bg-primary font-bold transition-all duration-300 hover:shadow-lg"
                      >
                        ZUGRIFF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )
      case "tactical":
        return (
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Skull className="w-8 h-8 text-destructive blood-glow animate-pulse" />
              <h2 className="text-2xl font-bold text-foreground title-glow">💀 TAKTISCHE OPERATIONEN 💀</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-destructive to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tacticalDocuments.map((doc, index) => (
                <Card
                  key={index}
                  className="document-card bg-card/80 border-destructive/30 hover:bg-destructive/10 cursor-pointer group backdrop-blur-sm hover:border-destructive/70"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <doc.icon className="w-10 h-10 text-destructive group-hover:text-destructive/90 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.9)]" />
                      <Badge className={`text-xs font-bold ${getClassificationColor(doc.classification)} shadow-lg`}>
                        {doc.classification}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-card-foreground group-hover:text-destructive transition-colors duration-300 font-bold">
                      {doc.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {doc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-mono">Aktualisiert: {doc.lastUpdated}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive-foreground hover:bg-destructive font-bold transition-all duration-300 hover:shadow-lg"
                      >
                        ZUGRIFF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )
      case "general":
        return (
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <FileText className="w-8 h-8 text-primary blood-glow" />
              <h2 className="text-2xl font-bold text-foreground title-glow">📋 ALLGEMEINE DOKUMENTE</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-primary to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {generalDocuments.map((doc, index) => (
                <Card
                  key={index}
                  className="document-card bg-card/80 border-border hover:bg-accent/30 cursor-pointer group backdrop-blur-sm"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <doc.icon className="w-10 h-10 text-primary group-hover:text-primary/90 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(139,0,0,0.6)]" />
                      <Badge className={`text-xs font-bold ${getClassificationColor(doc.classification)} shadow-lg`}>
                        {doc.classification}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300 font-bold">
                      {doc.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {doc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-mono">Aktualisiert: {doc.lastUpdated}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary-foreground hover:bg-primary font-bold transition-all duration-300 hover:shadow-lg"
                      >
                        ZUGRIFF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )
      case "disciplinary":
        return (
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Gavel className="w-8 h-8 text-destructive blood-glow animate-pulse" />
              <h2 className="text-2xl font-bold text-foreground title-glow">⚡ STRAF-DOKUMENTE ⚡</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-destructive to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {disciplinaryDocuments.map((doc, index) => (
                <Card
                  key={index}
                  className="document-card bg-card/80 border-destructive/20 hover:bg-destructive/5 cursor-pointer group backdrop-blur-sm hover:border-destructive/50"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <doc.icon className="w-10 h-10 text-destructive group-hover:text-destructive/90 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(220,38,38,0.8)]" />
                      <Badge className={`text-xs font-bold ${getClassificationColor(doc.classification)} shadow-lg`}>
                        {doc.classification}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-card-foreground group-hover:text-destructive transition-colors duration-300 font-bold">
                      {doc.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {doc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-mono">Aktualisiert: {doc.lastUpdated}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive-foreground hover:bg-destructive font-bold transition-all duration-300 hover:shadow-lg"
                      >
                        ZUGRIFF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )
      default:
        return (
          <>
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <Eye className="w-8 h-8 text-primary blood-glow animate-pulse" />
                <h2 className="text-2xl font-bold text-foreground title-glow">🎯 AUFKLÄRUNGS-OPERATIONEN 🎯</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-primary to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reconDocuments.slice(0, 3).map((doc, index) => (
                  <Card
                    key={index}
                    className="document-card bg-card/80 border-primary/30 hover:bg-primary/10 cursor-pointer group backdrop-blur-sm hover:border-primary/70"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <doc.icon className="w-10 h-10 text-primary group-hover:text-primary/90 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(139,0,0,0.8)]" />
                        <Badge className={`text-xs font-bold ${getClassificationColor(doc.classification)} shadow-lg`}>
                          {doc.classification}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300 font-bold">
                        {doc.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {doc.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground font-mono">Aktualisiert: {doc.lastUpdated}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary-foreground hover:bg-primary font-bold transition-all duration-300 hover:shadow-lg"
                        >
                          ZUGRIFF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <Skull className="w-8 h-8 text-destructive blood-glow animate-pulse" />
                <h2 className="text-2xl font-bold text-foreground title-glow">💀 TAKTISCHE OPERATIONEN 💀</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-destructive to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tacticalDocuments.slice(0, 3).map((doc, index) => (
                  <Card
                    key={index}
                    className="document-card bg-card/80 border-destructive/30 hover:bg-destructive/10 cursor-pointer group backdrop-blur-sm hover:border-destructive/70"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <doc.icon className="w-10 h-10 text-destructive group-hover:text-destructive/90 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.9)]" />
                        <Badge className={`text-xs font-bold ${getClassificationColor(doc.classification)} shadow-lg`}>
                          {doc.classification}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-card-foreground group-hover:text-destructive transition-colors duration-300 font-bold">
                        {doc.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {doc.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground font-mono">Aktualisiert: {doc.lastUpdated}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive-foreground hover:bg-destructive font-bold transition-all duration-300 hover:shadow-lg"
                        >
                          ZUGRIFF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <FileText className="w-8 h-8 text-primary blood-glow" />
                <h2 className="text-2xl font-bold text-foreground title-glow">📋 ALLGEMEINE DOKUMENTE</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-primary to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {generalDocuments.slice(0, 3).map((doc, index) => (
                  <Card
                    key={index}
                    className="document-card bg-card/80 border-border hover:bg-accent/30 cursor-pointer group backdrop-blur-sm"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <doc.icon className="w-10 h-10 text-primary group-hover:text-primary/90 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(139,0,0,0.6)]" />
                        <Badge className={`text-xs font-bold ${getClassificationColor(doc.classification)} shadow-lg`}>
                          {doc.classification}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300 font-bold">
                        {doc.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {doc.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground font-mono">Aktualisiert: {doc.lastUpdated}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary-foreground hover:bg-primary font-bold transition-all duration-300 hover:shadow-lg"
                        >
                          ZUGRIFF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <Gavel className="w-8 h-8 text-destructive blood-glow animate-pulse" />
                <h2 className="text-2xl font-bold text-foreground title-glow">⚡ STRAF-DOKUMENTE ⚡</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-destructive to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {disciplinaryDocuments.map((doc, index) => (
                  <Card
                    key={index}
                    className="document-card bg-card/80 border-destructive/20 hover:bg-destructive/5 cursor-pointer group backdrop-blur-sm hover:border-destructive/50"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <doc.icon className="w-10 h-10 text-destructive group-hover:text-destructive/90 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(220,38,38,0.8)]" />
                        <Badge className={`text-xs font-bold ${getClassificationColor(doc.classification)} shadow-lg`}>
                          {doc.classification}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-card-foreground group-hover:text-destructive transition-colors duration-300 font-bold">
                        {doc.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {doc.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground font-mono">Aktualisiert: {doc.lastUpdated}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive-foreground hover:bg-destructive font-bold transition-all duration-300 hover:shadow-lg"
                        >
                          ZUGRIFF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background military-grid">
      <div className="fixed top-4 right-4 z-50 bg-black/90 border border-primary/50 rounded-lg p-2 backdrop-blur-md">
        <div className="flex items-center gap-2 text-xs">
          <Lock className="w-3 h-3 text-green-400" />
          <span className="text-green-400 font-mono">AES-256 VERSCHLÜSSELT</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="fixed top-4 left-4 z-50 bg-black/90 border border-primary/50 rounded-lg p-2 backdrop-blur-md">
        <div className="flex items-center gap-2 text-xs">
          <Fingerprint className="w-3 h-3 text-primary animate-pulse" />
          <span className="text-primary font-mono">BIOMETRISCH VERIFIZIERT</span>
        </div>
      </div>

      <header className="border-b-2 border-primary/30 bg-card/70 backdrop-blur-md blood-glow">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center blood-glow animate-pulse">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground title-glow">FERNSPÄHER DIVISION</h1>
              <p className="text-lg text-primary font-semibold">GEHEIMES DOKUMENTENSYSTEM</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-red-400 font-mono">CLEARANCE LEVEL: COSMIC TOP SECRET</span>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-black/80 rounded-lg border-2 border-primary/40 backdrop-blur-md p-3">
            <div className="grid grid-cols-5 gap-2">
              <button
                onClick={() => setActiveSection("all")}
                className={`category-nav-btn group cursor-pointer transition-all duration-200 ${
                  activeSection === "all" ? "active" : ""
                }`}
              >
                <div className="flex items-center gap-1 p-2 rounded-md bg-gradient-to-r from-gray-800/80 to-gray-700/60 border border-gray-600/50 hover:border-primary/70 transition-all duration-200">
                  <FileText className="w-3 h-3 text-gray-300 group-hover:text-primary transition-colors duration-200" />
                  <div className="text-left">
                    <h3 className="font-bold text-gray-100 text-xs tracking-wide">ALLE</h3>
                    <p className="text-xs text-gray-400 font-mono">DOCS</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveSection("recon")}
                className={`category-nav-btn group cursor-pointer transition-all duration-200 ${
                  activeSection === "recon" ? "active" : ""
                }`}
              >
                <div className="flex items-center gap-1 p-2 rounded-md bg-gradient-to-r from-red-900/80 to-red-800/60 border border-red-600/50 hover:border-red-400 transition-all duration-200">
                  <Eye className="w-3 h-3 text-red-300 group-hover:text-red-100" />
                  <div className="text-left">
                    <h3 className="font-bold text-red-100 text-xs tracking-wide">AUFKL</h3>
                    <p className="text-xs text-red-300 font-mono">{reconDocuments.length}</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveSection("tactical")}
                className={`category-nav-btn group cursor-pointer transition-all duration-200 ${
                  activeSection === "tactical" ? "active" : ""
                }`}
              >
                <div className="flex items-center gap-1 p-2 rounded-md bg-gradient-to-r from-red-950/90 to-red-900/70 border border-red-700/60 hover:border-red-500 transition-all duration-200">
                  <Skull className="w-3 h-3 text-red-400 group-hover:text-red-200" />
                  <div className="text-left">
                    <h3 className="font-bold text-red-100 text-xs tracking-wide">TAKT</h3>
                    <p className="text-xs text-red-300 font-mono">{tacticalDocuments.length}</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveSection("general")}
                className={`category-nav-btn group cursor-pointer transition-all duration-200 ${
                  activeSection === "general" ? "active" : ""
                }`}
              >
                <div className="flex items-center gap-1 p-2 rounded-md bg-gradient-to-r from-gray-900/80 to-gray-800/60 border border-gray-600/50 hover:border-primary/70 transition-all duration-200">
                  <BookOpen className="w-3 h-3 text-gray-300 group-hover:text-primary transition-colors duration-200" />
                  <div className="text-left">
                    <h3 className="font-bold text-gray-100 text-xs tracking-wide">ALLG</h3>
                    <p className="text-xs text-gray-400 font-mono">{generalDocuments.length}</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveSection("disciplinary")}
                className={`category-nav-btn group cursor-pointer transition-all duration-200 ${
                  activeSection === "disciplinary" ? "active" : ""
                }`}
              >
                <div className="flex items-center gap-1 p-2 rounded-md bg-gradient-to-r from-orange-900/80 to-red-900/60 border border-orange-600/50 hover:border-red-400 transition-all duration-200">
                  <Gavel className="w-3 h-3 text-orange-300 group-hover:text-red-200" />
                  <div className="text-left">
                    <h3 className="font-bold text-orange-100 text-xs tracking-wide">STRAF</h3>
                    <p className="text-xs text-orange-300 font-mono">{disciplinaryDocuments.length}</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        <div className="mb-8 bg-black/90 border border-red-500/50 rounded-lg p-4 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-green-400 animate-pulse" />
                <span className="text-green-400 font-mono text-sm">SECURE LINK ESTABLISHED</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-mono text-sm">OPERATION: NIGHTFALL ACTIVE</span>
              </div>
            </div>
            <div className="text-xs text-gray-400 font-mono">
              SESSION ID: FSP-{Math.random().toString(36).substr(2, 8).toUpperCase()}
            </div>
          </div>
        </div>

        {renderDocuments()}

        <div className="mt-16 p-6 security-warning rounded-lg">
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-destructive animate-pulse" />
            <div>
              <h3 className="font-bold text-xl text-destructive title-glow">⚠️ HÖCHSTE SICHERHEITSSTUFE ⚠️</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-mono">
                ACHTUNG: Alle Dokumente unterliegen strengster militärischer Geheimhaltung. Unbefugte Weitergabe wird
                mit sofortiger Verhaftung und Kriegsgerichtsverfahren bestraft. Zugriff ausschließlich für autorisiertes
                Personal der Fernspäher Division mit entsprechender Sicherheitsfreigabe.
              </p>
              <p className="text-xs text-destructive mt-3 font-bold animate-pulse">
                🔴 LIVE ÜBERWACHUNG AKTIV - ALLE ZUGRIFFE WERDEN PROTOKOLLIERT 🔴
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <Lock className="w-3 h-3 text-red-400" />
                  <span className="text-red-400 font-mono">QUANTUM VERSCHLÜSSELUNG</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-3 h-3 text-red-400" />
                  <span className="text-red-400 font-mono">RETINA SCAN ERFORDERLICH</span>
                </div>
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-3 h-3 text-red-400" />
                  <span className="text-red-400 font-mono">DNA VERIFIKATION AKTIV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t-2 border-primary/30 bg-card/50 mt-20 blood-glow">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground font-mono">
            <p className="font-bold">© 2025 FERNSPÄHER DIVISION - BUNDESWEHR ROLEPLAY SERVER</p>
            <p className="text-primary font-bold">KLASSIFIZIERUNG: STRENG VERTRAULICH</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
