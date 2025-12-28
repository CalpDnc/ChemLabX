# ChemLabX

**ChemLabX**, Türkiye Maarif Modeli esas alınarak geliştirilmiş,  
**9–12. sınıf lise öğrencilerine yönelik**, **ticari olmayan** etkileşimli bir kimya öğrenme platformudur.

Proje; kimya derslerini daha anlaşılır, güvenli ve erişilebilir hâle getirmeyi amaçlayan
**statik web tabanlı** bir eğitim uygulamasıdır.

🔗 **Canlı site (GitHub Pages):**  
https://calpdnc.github.io/ChemLabX/

---

## 🎯 Amaç

- Kimya konularını görsel ve etkileşimli şekilde sunmak  
- Öğrencilerin deney, element ve bileşik kavramlarını güvenli ortamda öğrenmesini sağlamak  
- Ders tekrarı ve pekiştirme için dijital bir yardımcı kaynak oluşturmak  

---

## ✨ Özellikler

- **Periyodik Cetvel**  
  118 element, standart düzen, detaylı element bilgileri

- **Bileşik Oluşturucu**  
  Temel atom, molekül ve bağ (kovalent / iyonik) kavramları

- **Sanal Deneyler**  
  Gerçek laboratuvarda riskli olabilecek deneylerin güvenli simülasyonları

- **Quizler**  
  Çoktan seçmeli sorular ile öğrenilen bilgilerin pekiştirilmesi

- **Video Çözümler**  
  Sınıf seviyesine göre düzenlenmiş konu anlatımları

- **PWA Desteği**  
  Mobil cihazlara “Ana Ekrana Ekle” ile kurulabilir

---

## 📁 Proje Yapısı (Özet)



ChemLabX/
│
├─ index.html # Ana sayfa
├─ elements.html # Periyodik cetvel
├─ compounds.html # Bileşik oluşturucu
├─ experiments.html # Sanal deneyler
├─ quizzes.html # Quizler
├─ videos.html # Video çözümler
├─ 404.html # Hata sayfası
│
├─ css/
│ ├─ design-system.css # Renkler, fontlar, değişkenler
│ └─ main.css # Genel stiller
│
├─ data/
│ ├─ elements.json # 118 element verisi
│ ├─ experiments.json # Deney verileri
│ └─ quizzes.json # Quiz soruları
│
├─ assets/
│ ├─ logos/ # Logo varyasyonları
│ └─ icons/ # İkonlar
│
├─ scripts/
│ └─ validate-elements-json.js # Veri doğrulama betiği
│
├─ package.json
├─ manifest.json # PWA ayarları
├─ robots.txt
└─ README.md


---

## ▶️ Kullanım

Bu proje **GitHub Pages** üzerinden yayınlanmaktadır.  
Yerel sunucu kullanımı zorunlu değildir.

Gerekirse yerel çalıştırma için:
bash
python -m http.server 8000


Veri dosyalarını kontrol etmek için:

npm run validate

👥 Geliştirme Süreci

VS Code + Git + GitHub kullanılarak geliştirilmiştir

Takım çalışmasına uygun modüler dosya yapısı vardır

GitHub Pages ile yayınlanmaktadır

📜 Lisans

Bu proje yalnızca eğitim amaçlıdır.
Ticari kullanım kesinlikle yasaktır.

ChemLabX’in temel amacı, Türkiye’deki lise öğrencilerinin kimya öğrenme sürecini desteklemek ve geliştirmektir.


---

### İstersen bir sonraki adımda:
- 🔹 README’yi **daha “akademik”** yapabiliriz  
- 🔹 “Bu projeyi neden yaptık?” bölümü ekleyebiliriz  
- 🔹 Hocaya teslim için **proje tanıtım metni** çıkarabiliriz  

Hangisini istiyorsun?

- 🔹 “Bu projeyi neden yaptık?” bölümü ekleyebiliriz  bölümünü ekle ama tek bir kod parçası olarak at bu çok parça parça olmuş

Tamam 👍
Aşağıda tek parça, kopyala-yapıştır hazır, içinde “Bu projeyi neden yaptık?” bölümü eklenmiş hâli var.
Başka parça yok, bölünmüş değil.

# ChemLabX

**ChemLabX**, Türkiye Maarif Modeli esas alınarak geliştirilmiş,  
**9–12. sınıf lise öğrencilerine yönelik**, **ticari olmayan** etkileşimli bir kimya öğrenme platformudur.

Proje; kimya derslerini daha anlaşılır, güvenli ve erişilebilir hâle getirmeyi amaçlayan
**statik web tabanlı** bir eğitim uygulamasıdır.

🔗 **Canlı site (GitHub Pages):**  
https://calpdnc.github.io/ChemLabX/

---

## ❓ Bu projeyi neden yaptık?

Kimya derslerinde soyut kavramların, deneylerin ve mikroskobik yapıların
öğrenciler tarafından anlaşılması çoğu zaman zor olmaktadır.
Gerçek laboratuvar ortamları ise her okulda yeterli donanıma sahip olmayabilir
ve bazı deneyler güvenlik riski taşıyabilir.

ChemLabX;  
- öğrencilerin **deney yapma ve keşfetme isteğini** güvenli bir dijital ortamda desteklemek,  
- kimya konularını **ezberden uzak**, görsel ve etkileşimli biçimde sunmak,  
- ders içi ve ders dışı öğrenmeyi destekleyen **yardımcı bir eğitim platformu** oluşturmak  
amacıyla geliştirilmiştir.

Proje, ticari bir hedef taşımamakta; tamamen **eğitim odaklı**, erişilebilir ve
sürdürülebilir bir dijital öğrenme aracı olmayı hedeflemektedir.

---

## 🎯 Amaç

- Kimya konularını görsel ve etkileşimli şekilde sunmak  
- Öğrencilerin element, bileşik ve deney kavramlarını daha iyi kavramasını sağlamak  
- Ders tekrarı ve pekiştirme için dijital bir yardımcı kaynak oluşturmak  

---

## ✨ Özellikler

- **Periyodik Cetvel**  
  118 element, standart düzen ve detaylı element bilgileri

- **Bileşik Oluşturucu**  
  Temel atom, molekül ve bağ (kovalent / iyonik) kavramları

- **Sanal Deneyler**  
  Gerçek laboratuvarda riskli olabilecek deneylerin güvenli simülasyonları

- **Quizler**  
  Çoktan seçmeli sorular ile öğrenilen bilgilerin pekiştirilmesi

- **Video Çözümler**  
  Sınıf seviyesine göre düzenlenmiş konu anlatımları

- **PWA Desteği**  
  Mobil cihazlara “Ana Ekrana Ekle” ile kurulabilir

---

## 📁 Proje Yapısı (Özet)



ChemLabX/
│
├─ index.html # Ana sayfa
├─ elements.html # Periyodik cetvel
├─ compounds.html # Bileşik oluşturucu
├─ experiments.html # Sanal deneyler
├─ quizzes.html # Quizler
├─ videos.html # Video çözümler
├─ 404.html # Hata sayfası
│
├─ css/
│ ├─ design-system.css # Renkler, fontlar, değişkenler
│ └─ main.css # Genel stiller
│
├─ data/
│ ├─ elements.json # 118 element verisi
│ ├─ experiments.json # Deney verileri
│ └─ quizzes.json # Quiz soruları
│
├─ assets/
│ ├─ logos/ # Logo varyasyonları
│ └─ icons/ # İkonlar
│
├─ scripts/
│ └─ validate-elements-json.js # Veri doğrulama betiği
│
├─ package.json
├─ manifest.json # PWA ayarları
├─ robots.txt
└─ README.md


---

## ▶️ Kullanım

Bu proje **GitHub Pages** üzerinden yayınlanmaktadır.  
Yerel sunucu kullanımı zorunlu değildir.

Gerekirse yerel çalıştırma için:
bash
python -m http.server 8000


Veri dosyalarını kontrol etmek için:
npm run validate

👥 Geliştirme Süreci

VS Code + Git + GitHub kullanılarak geliştirilmiştir

Takım çalışmasına uygun modüler dosya yapısı vardır

GitHub Pages üzerinden yayınlanmaktadır

📜 Lisans

Bu proje yalnızca eğitim amaçlıdır.
Ticari kullanım kesinlikle yasaktır.

ChemLabX’in temel amacı, Türkiye’deki lise öğrencilerinin kimya öğrenme sürecini desteklemek ve geliştirmektir.
