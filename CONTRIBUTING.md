# 🤝 Beitragen zu Germando Docs

Vielen Dank für dein Interesse an Germando! Wir freuen uns über jeden Beitrag zur deutschen Pelican-Dokumentation.

## 🚀 Schnellstart

1. **Repository forken**
2. **Branch erstellen** (`git checkout -b feature/deine-feature`)
3. **Änderungen machen**
4. **Committen** (`git commit -m 'Add amazing feature'`)
5. **Push** (`git push origin feature/deine-feature`)
6. **Pull Request erstellen**

## 📋 Beitragsmöglichkeiten

### 🌍 Übersetzungen verbessern
- Deutsche Begriffe verfeinern
- Konsistenz in der Terminologie sicherstellen
- Neue Inhalte übersetzen

### 📖 Dokumentation erweitern
- Neue Guides schreiben
- Bestehende Anleitungen verbessern
- Screenshots und Beispiele hinzufügen

### 🐛 Bugs melden
- Rechtschreibfehler
- Broken Links
- Layout-Probleme
- Unklare Anweisungen

### 💡 Features vorschlagen
- Neue Sektionen
- Bessere Navigation
- Zusätzliche Tools

## 📝 Style Guide

### Sprache
- **Sprache:** Deutsch (formell aber freundlich)
- **Du/Sie:** Verwende "du" für eine persönlichere Ansprache
- **Fachbegriffe:** Deutsche Übersetzung bevorzugt, englische Begriffe in Klammern wenn nötig

### HTML
```html
<!-- Semantische Tags verwenden -->
<section class="section">
    <h2>Überschrift</h2>
    <p>Beschreibung...</p>
</section>

<!-- Konsistente Navigation -->
<li><a href="seite.html">Deutsche Seitentitel</a></li>
```

### CSS
```css
/* Kommentare auf Deutsch */
/* Navigation-Styles für bessere UX */
.nav-item {
    /* CSS-Variablen verwenden */
    color: var(--text-color);
    transition: all var(--transition-normal);
}
```

### Struktur
```
dokumentation/
├── index.html          # Startseite
├── getting_started.html # Erste Schritte
├── guides/             # Spezifische Anleitungen
│   ├── docker.html
│   └── ssl.html
└── assets/             # Bilder, Icons
    ├── screenshots/
    └── diagrams/
```

## 🔧 Entwicklung

### Lokale Entwicklung
```bash
# Repository klonen
git clone https://github.com/[username]/germando-docs.git
cd germando-docs

# Lokalen Server starten
python -m http.server 8000
# oder
npx serve .

# Browser öffnen
open http://localhost:8000
```

### Navigation aktualisieren
```bash
# Alle HTML-Dateien auf einmal aktualisieren
node update_navigation.js
```

### Tests
- [ ] Alle Links funktionieren
- [ ] Responsive Design auf Mobile
- [ ] Dark/Light Theme wechselt korrekt
- [ ] Dropdown-Navigation funktioniert
- [ ] CSS/JS-Fehler in Browser-Konsole prüfen

## 📐 Content-Richtlinien

### Neue Seiten erstellen
1. **HTML-Template kopieren** (z.B. von `getting_started.html`)
2. **Titel und Meta-Tags anpassen**
3. **Navigation aktualisieren**
4. **Inhalte strukturiert hinzufügen**
5. **Links und Navigation testen**

### Screenshots
- **Format:** PNG oder WebP
- **Auflösung:** Mindestens 1920x1080 für Desktop
- **Sprache:** Deutsche UI bevorzugt
- **Dateiname:** `screenshot-seitename-beschreibung.png`

### Code-Beispiele
```bash
# Immer mit Kommentaren versehen
sudo apt update                    # Paketliste aktualisieren
sudo apt install docker.io        # Docker installieren
```

## 🎯 Prioritäten

### Hoch
- Vollständige deutsche Übersetzung
- Broken Links reparieren
- Mobile Responsiveness
- Accessibility verbessern

### Mittel
- Mehr Screenshots hinzufügen
- Video-Tutorials einbetten
- Performance optimieren
- SEO verbessern

### Niedrig
- Erweiterte Features
- Animationen
- Zusätzliche Themes

## 📋 Checkliste für Pull Requests

- [ ] Alle Änderungen getestet
- [ ] Navigation funktioniert
- [ ] Deutsche Rechtschreibung geprüft
- [ ] Links sind korrekt
- [ ] Mobile Ansicht getestet
- [ ] Browser-Kompatibilität geprüft
- [ ] Commit-Messages sind aussagekräftig

## 🚫 Was nicht erwünscht ist

- Automatische Übersetzungen ohne Überprüfung
- Broken Links
- Inkonsistente Terminologie
- Unlesbarer Code ohne Kommentare
- Copyright-geschützte Inhalte

## 💬 Community

### Discord
Tritt dem Pelican Discord bei für:
- Fragen zur Entwicklung
- Community-Diskussionen
- Live-Support

### GitHub Issues
Verwende Issues für:
- Bug Reports
- Feature Requests
- Inhaltliche Diskussionen

## 🏆 Anerkennung

Alle Contributors werden in der README.md erwähnt! 🎉

### Types von Contributions
- 📖 **Dokumentation** - Schreiben und Verbessern von Inhalten
- 🌍 **Übersetzung** - Deutsche Übersetzungen
- 🐛 **Bug Fixes** - Fehler beheben
- 💡 **Features** - Neue Funktionen hinzufügen
- 🎨 **Design** - UI/UX Verbesserungen
- 📝 **Review** - Code und Content Review

## 📞 Kontakt

Bei Fragen erreiche uns über:
- **GitHub Issues** - Für öffentliche Diskussionen
- **GitHub Discussions** - Für allgemeine Fragen
- **Pelican Discord** - Für Live-Chat

---

**Vielen Dank für deinen Beitrag zu Germando! 🦅🇩🇪** 