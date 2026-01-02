# ⚡ Quick Deployment Guide

## Krok 1: Vytvořte GitHub repositář

1. Jděte na https://github.com/new
2. Název repositáře: **IPW-2026** (nebo dle vlastního výběru)
3. **Public** nebo **Private** - dle potřeby
4. ❌ **NEVYTVÁŘEJTE** README, .gitignore ani licenci (už je máme)
5. Klikněte **Create repository**

## Krok 2: Push na GitHub

Zkopírujte a spusťte tyto příkazy v PowerShell (v adresáři projektu):

```powershell
# Přidáme všechny soubory
git add .

# Vytvoříme initial commit
git commit -m "Initial commit: IPW 2026 - Modern website with real projects and university logos"

# Přidáme remote (NAHRAĎTE [your-username] svým GitHub uživatelským jménem!)
git remote add origin https://github.com/[your-username]/IPW-2026.git

# Přejmenujeme branch na main
git branch -M main

# Push na GitHub
git push -u origin main
```

## Krok 3: Nastavte GitHub Pages

1. V repositáři na GitHubu jděte do **Settings** (nastavení)
2. V levé liště klikněte na **Pages**
3. Pod **Source** vyberte: **GitHub Actions**
4. Hotovo! ✅

## Krok 4: Nastavte BASE_PATH

⚠️ **DŮLEŽITÉ** - bez tohoto kroku web nebude správně fungovat!

1. V repositáři jděte do **Settings** → **Secrets and variables** → **Actions**
2. Klikněte **New repository secret**
3. **Name:** `BASE_PATH`
4. **Value:** `/IPW-2026` (pokud se váš repositář jmenuje jinak, použijte `/nazev-vaseho-repo`)
5. Klikněte **Add secret**

## Krok 5: Vyčkejte na deployment

1. Jděte na záložku **Actions** v repositáři
2. Uvidíte workflow "Deploy to GitHub Pages" - běží cca 2-3 minuty
3. Po dokončení (zelená fajfka ✓) je web dostupný na:

```
https://[your-username].github.io/IPW-2026/
```

---

## 🔄 Jak aktualizovat web v budoucnu

Po změnách v kódu stačí:

```powershell
# Zkontrolujte, co se změnilo
git status

# Přidejte změněné soubory
git add .

# Commitněte s popisem změn
git commit -m "Update: popis vašich změn"

# Push na GitHub (automaticky spustí nový build)
git push
```

Web se automaticky znovu sestaví a nasadí za ~2-3 minuty.

---

## ✅ Checklist

- [ ] Vytvořen GitHub repositář
- [ ] Provedeny git příkazy (add, commit, remote, push)
- [ ] V Settings → Pages nastaven Source na "GitHub Actions"
- [ ] V Settings → Secrets přidán `BASE_PATH` secret
- [ ] Workflow v Actions záložce dokončen úspěšně (zelená fajfka)
- [ ] Web otevřen na `https://[username].github.io/IPW-2026/`

---

## 🆘 Řešení problémů

### Web zobrazuje 404 na podstránkách
→ Zkontrolujte, že jste nastavili `BASE_PATH` secret správně

### Obrázky se nezobrazují
→ Hard refresh prohlížeče (Ctrl+Shift+R) nebo zkuste inkognito režim

### Workflow selhal (červené X)
→ Klikněte na workflow v Actions, podívejte se na error log
→ Nejčastější příčina: zapomenuté `BASE_PATH` nastavení

### Stará verze webu se pořád zobrazuje
→ Hard refresh (Ctrl+Shift+R)
→ Zkontrolujte, že workflow v Actions dokončil (zelená fajfka)

---

## 📝 Poznámky

- První deployment trvá ~3-5 minut
- Další deploymenty ~2-3 minuty
- Web je plně statický = super rychlý
- Automatický deployment při každém push na main
- Později lze přidat vlastní doménu v Settings → Pages

**Hotovo! 🎉**
