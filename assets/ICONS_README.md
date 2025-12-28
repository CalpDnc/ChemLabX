# ChemLabX Icons & Logos

Modern, gradient tabanlı SVG icon ve logo koleksiyonu.

## Logolar

### logo-academic.svg
Ana sayfa ve header için kullanılan tam logo. Flask içinde atom sembolü ve ChemLabX yazısı içerir.
- **Boyut:** 200x60px
- **Renkler:** Gradient (#667eea → #764ba2)
- **Kullanım:** Header, ana sayfa

### logo-minimal.svg
Favicon ve küçük alanlarda kullanılmak üzere tasarlanmış minimal logo.
- **Boyut:** 48x48px
- **Tasarım:** Gradient daire içinde flask sembolü
- **Kullanım:** Favicon, mobil

### logo-text.svg
Sadece metin tabanlı logo versiyonu.
- **Boyut:** 200x50px
- **Stil:** Gradient metin efekti
- **Kullanım:** Footer, sosyal medya

## İkonlar

### 🧪 experiment.svg
Erlenmeyer flask ile deney ikonı. Kabarcık efekti ve gradient sıvı içerir.
- **Renkler:** Mavi-mor gradient (#667eea → #764ba2)
- **Efektler:** Buhar, kabarcıklar

### 📊 periodic-table.svg
Modern periyodik cetvel grid ikonı. Renkli element kutuları ile.
- **Tasarım:** 3 farklı gradient (mavi, pembe, turkuaz)
- **Element sembolleri:** H, He, Li, Be

### 🧬 molecule.svg
Molekül yapısı ikonı. Bağlantılı atomlar ve element sembolleri.
- **Atomlar:** C, H, O, N
- **Stil:** 3D benzeri bağlantılar

### 📝 quiz.svg
Quiz ve test ikonı. Soru işaretleri ve onay işaretleri ile.
- **Tasarım:** Kağıt üzerinde sorular
- **Öğeler:** Yıldız badge, checkmark'lar

### 🎬 video.svg
Video ders anlatımları ikonı. Monitor ve play butonu.
- **Stil:** Modern ekran tasarımı
- **Öğeler:** Play butonu, sinyal dalgaları

### ⚛️ atom.svg
Atom yapısı ikonı. Merkezi çekirdek ve elektronlar.
- **Tasarım:** Orbital yollar ve elektronlar
- **Efektler:** Glow efekti

### 📚 book.svg
Eğitim içeriği ve ders kitabı ikonı.
- **Tasarım:** Açık kitap
- **Detaylar:** Sayfa çizgileri, formüller

## Renk Paleti

### Ana Gradient
```css
Birincil: #667eea → #764ba2 (Mavi-Mor)
İkincil: #f093fb → #f5576c (Pembe-Kırmızı)
Üçüncül: #4facfe → #00f2fe (Turkuaz-Cyan)
```

### Efektler
- **Glow:** Işıldama efekti için gaussian blur
- **Shadow:** Derinlik için drop shadow
- **Gradient:** Renk geçişleri için linear gradient

## Kullanım

### HTML
```html
<!-- Logo -->
<img src="./assets/logos/logo-academic.svg" alt="ChemLabX" height="40">

<!-- Icon -->
<img src="./assets/icons/experiment.svg" alt="" width="24" height="24">
```

### CSS ile renk değiştirme
```css
/* Beyaz yapmak için */
.icon {
  filter: brightness(0) invert(1);
}
```

## Tasarım Notları

- Tüm SVG'ler viewport tabanlı ve responsive
- Modern gradient'lar ve glow efektleri
- Eğitim platformuna uygun temiz ve profesyonel görünüm
- Accessibility için anlamlı alt text kullanımı önerilir
- Retina display uyumlu vektör grafik

## Lisans

Bu ikonlar ChemLabX projesi için özel olarak tasarlanmıştır.
Eğitim amaçlı kullanım için serbesttir.
