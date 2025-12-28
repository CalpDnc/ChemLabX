# ChemLabX

Maarif modeline uygun, lise öğrencileri (9-12. sınıf) için **ticari olmayan** kimya eğitim platformu.

## Özellikler

- **Periyodik Cetvel** - 118 element, ptable.com referanslı standart düzen
- **Bilesik Olusturucu** - Temel molekül/bağ kavramları
- **Sanal Deneyler** - Minimal, güvenli simülasyonlar
- **Quizler** - Ders pekiştirme amaçlı
- **Video Cozumler** - Sınıf seviyesine göre

## Dosya Yapısı

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

## Kullanım

python -m http.server 8000
node scripts/validate-elements-json.js

## Lisans

Yalnizca eğitim amacli kullanım. Ticari kullanım yasaktır. 
