# ChemLabX

Maarif modeline uygun, lise ogrencileri (9-12. sinif) icin **ticari olmayan** kimya egitim platformu.

## Ozellikler

- **Periyodik Cetvel** - 118 element, ptable.com referansli standart duzen
- **Bilesik Olusturucu** - Temel molekul/bag kavramlari
- **Sanal Deneyler** - Minimal, guvenli simulasyonlar
- **Quizler** - Ders pekistirme amacli
- **Video Cozumler** - Sinif seviyesine gore

## Dosya Yapisi

ChemLabX/
- index.html (Ana sayfa)
- elements.html (Periyodik cetvel)
- compounds.html (Bilesik olusturucu)
- experiments.html (Sanal deneyler)
- quizzes.html (Quiz sayfasi)
- videos.html (Video cozumler)
- css/design-system.css (Degiskenler)
- css/main.css (Bilesen stilleri)
- data/elements.json (118 element verisi)
- data/quizzes.json (Quiz sorulari)
- scripts/validate-elements-json.js (Dogrulayici)

## Kullanim

python -m http.server 8000
node scripts/validate-elements-json.js

## Lisans

Yalnizca egitim amacli kullanim. Ticari kullanim yasaktir. 
