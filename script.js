// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; // This is the <html> tag

    // Function to set theme
    const setTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        // Update button text
        themeToggle.textContent = theme === 'dark' ? '🔆' : '🌙';
    };

    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });

    // Copy Button Funktionalität - Ultra Modern Edition by Staiy
    const initializeCopyButtons = () => {
        // Alle pre-Code-Blöcke finden
        const codeBlocks = document.querySelectorAll('pre');
        
        codeBlocks.forEach((pre, index) => {
            // Prüfen, ob bereits ein Copy-Button existiert
            if (pre.querySelector('.copy-button')) {
                return;
            }

            // Wrapper für relative Positionierung
            pre.style.position = 'relative';
            
            // Copy-Button erstellen
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span class="copy-text">Kopieren</span>
            `;
            copyButton.setAttribute('data-tooltip', 'Code kopieren');
            
            // Copy-Funktionalität
            copyButton.addEventListener('click', async (e) => {
                e.preventDefault();
                
                const codeElement = pre.querySelector('code');
                const textToCopy = codeElement ? codeElement.textContent : pre.textContent;
                
                try {
                    await navigator.clipboard.writeText(textToCopy);
                    
                    // Erfolgs-Feedback
                    copyButton.innerHTML = `
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20,6 9,17 4,12"></polyline>
                        </svg>
                        <span class="copy-text">Kopiert!</span>
                    `;
                    copyButton.style.background = 'var(--success-bg)';
                    copyButton.style.color = 'var(--success-text)';
                    copyButton.style.borderColor = 'var(--success-border)';
                    
                    // Nach 2 Sekunden zurücksetzen
                    setTimeout(() => {
                        copyButton.innerHTML = `
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            <span class="copy-text">Kopieren</span>
                        `;
                        copyButton.style.background = '';
                        copyButton.style.color = '';
                        copyButton.style.borderColor = '';
                    }, 2000);
                    
                } catch (err) {
                    console.error('Fehler beim Kopieren:', err);
                    
                    // Fallback für ältere Browser
                    const textArea = document.createElement('textarea');
                    textArea.value = textToCopy;
                    textArea.style.position = 'fixed';
                    textArea.style.left = '-999999px';
                    textArea.style.top = '-999999px';
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    
                    try {
                        document.execCommand('copy');
                        copyButton.innerHTML = `
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20,6 9,17 4,12"></polyline>
                            </svg>
                            <span class="copy-text">Kopiert!</span>
                        `;
                    } catch (fallbackErr) {
                        copyButton.innerHTML = `
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <span class="copy-text">Fehler</span>
                        `;
                    }
                    
                    document.body.removeChild(textArea);
                    
                    setTimeout(() => {
                        copyButton.innerHTML = `
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            <span class="copy-text">Kopieren</span>
                        `;
                    }, 2000);
                }
            });
            
            // Button zum Code-Block hinzufügen
            pre.appendChild(copyButton);
        });
    };

    // Copy-Buttons initialisieren
    initializeCopyButtons();
    
    // Für dynamisch geladenen Content
    const observer = new MutationObserver(() => {
        initializeCopyButtons();
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Dropdown Navigation Functionality - EINFACHE VERSION von Staiy (endlich mal richtig!)
    const initializeDropdowns = () => {
        console.log('Dropdown-Initialisierung startet...');
        
        // Alle Dropdown-Items finden
        const dropdowns = document.querySelectorAll('.sidebar nav .dropdown');
        console.log(`Gefundene Dropdowns: ${dropdowns.length}`);
        
        dropdowns.forEach((dropdown, index) => {
            const toggleLink = dropdown.querySelector('.dropdown-toggle');
            
            if (!toggleLink) {
                console.warn(`Dropdown ${index} hat keinen Toggle-Link`);
                return;
            }

            // Event-Listener für Toggle
            toggleLink.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                console.log(`Dropdown ${index} wurde geklickt`);
                
                // Toggle das aktuelle Dropdown
                dropdown.classList.toggle('open');
                
                // Schließe andere Dropdowns auf derselben Ebene
                const parent = dropdown.parentElement;
                const siblings = parent.querySelectorAll('.dropdown');
                siblings.forEach(sibling => {
                    if (sibling !== dropdown) {
                        sibling.classList.remove('open');
                    }
                });
            });
        });

        // Schließe Dropdowns bei Außenklick
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('open');
                });
            }
        });

        // Escape-Taste zum Schließen
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('open');
                });
            }
        });
    };

    // Auto-open dropdown if it contains an active page
    const autoOpenActiveDropdowns = () => {
        console.log('Auto-öffne aktive Dropdowns...');
        
        const activeLinks = document.querySelectorAll('.sidebar nav a.active');
        
        activeLinks.forEach(activeLink => {
            console.log('Aktiver Link gefunden:', activeLink.textContent);
            
            // Gehe die DOM-Hierarchie nach oben und öffne alle übergeordneten Dropdowns
            let parent = activeLink.closest('.dropdown');
            while (parent) {
                console.log('Öffne übergeordnetes Dropdown');
                parent.classList.add('open');
                
                // Suche nach dem nächsten übergeordneten Dropdown
                parent = parent.parentElement.closest('.dropdown');
            }
        });
    };

    // Tab-Funktionalität für Konfigurationsbeispiele
    const initializeTabs = () => {
        // Suche nach Tab-Containern
        const tabContainers = document.querySelectorAll('.tab-container');
        
        tabContainers.forEach(container => {
            const tabButtons = container.querySelectorAll('.tab-button');
            const tabContents = container.querySelectorAll('.tab-content');
            
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const targetTab = button.getAttribute('onclick');
                    if (targetTab) {
                        // Extrahiere Tab-ID aus onclick-Attribut
                        const tabId = targetTab.match(/showTab\('([^']+)'\)/);
                        if (tabId && tabId[1]) {
                            showTab(tabId[1]);
                        }
                    }
                });
            });
        });
    };

    // Tab-Anzeige-Funktion (global für onclick-Aufrufe)
    window.showTab = (tabId) => {
        // Verstecke alle Tab-Inhalte
        const allTabContents = document.querySelectorAll('.tab-content');
        allTabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Entferne active-Klasse von allen Tab-Buttons
        const allTabButtons = document.querySelectorAll('.tab-button');
        allTabButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Zeige den gewählten Tab-Inhalt
        const targetContent = document.getElementById(tabId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
        
        // Markiere den entsprechenden Button als aktiv
        const targetButton = document.querySelector(`[onclick*="${tabId}"]`);
        if (targetButton) {
            targetButton.classList.add('active');
        }
    };

    // Initialisiere alle Funktionen
    console.log('Initialisiere Dropdowns...');
    initializeDropdowns();
    
    console.log('Auto-öffne aktive Dropdowns...');
    autoOpenActiveDropdowns();
    
    console.log('Initialisiere Tabs...');
    initializeTabs();
    
    console.log('Alle Initialisierungen abgeschlossen!');
});
