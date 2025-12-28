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
- compounds.html (Bileşik oluşturucu)
- experiments.html (Sanal deneyler)
- quizzes.html (Quiz sayfası)
- videos.html (Video çözümler)
- css/design-system.css (Değişkenler)
- css/main.css (Bileşen stilleri)
- data/elements.json (118 element verisi)
- data/quizzes.json (Quiz soruları)
- scripts/validate-elements-json.js (Doğrulayıcı)

## Kullanım

python -m http.server 8000
node scripts/validate-elements-json.js

## Lisans

Yalnızca eğitim amaclı kullanım. Ticari kullanım yasaktır.
