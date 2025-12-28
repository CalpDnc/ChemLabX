/*
  ChemLabX - JSON Element Verisi Doğrulayıcı
  DOSYA: scripts/validate-elements-json.js

  AMAÇ:
  - data/elements.json dosyasını okur ve doğrular
  - 118 element var mı kontrol eder
  - Atom numarası ve sembol benzersizliğini kontrol eder
  - Zorunlu alanların dolu olduğunu kontrol eder 

  KULLANIM:
  - node scripts/validate-elements-json.js
*/

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ELEMENTS_JSON = path.join(ROOT, 'data', 'elements.json');

function main() {
  // JSON dosyasını oku
  let data;
  try {
    const content = fs.readFileSync(ELEMENTS_JSON, 'utf8');
    data = JSON.parse(content);
  } catch (e) {
    console.error('❌ JSON dosyası okunamadı veya parse edilemedi:', e.message);
    process.exit(2);
  }

  const elements = data.elements || [];
  
  const issues = {
    count: elements.length,
    missingAtomicNumbers: [],
    duplicateAtomicNumbers: [],
    duplicateSymbols: [],
    missingFields: [],
    invalidMass: []
  };

  // Zorunlu alanlar
  const required = ['atomicNumber', 'symbol', 'name', 'category', 'atomicMass', 'electronConfig', 'period', 'state', 'description'];

  // Atom numarası 1-118 kontrolü
  const atomicSet = new Set();
  const symbolMap = new Map();

  for (const el of elements) {
    const n = el.atomicNumber;

    // Atom numarası benzersizlik
    if (atomicSet.has(n)) {
      issues.duplicateAtomicNumbers.push(n);
    }
    atomicSet.add(n);

    // Sembol benzersizlik
    const sym = (el.symbol || '').toUpperCase();
    if (sym) {
      if (symbolMap.has(sym)) {
        issues.duplicateSymbols.push({ symbol: el.symbol, a: symbolMap.get(sym), b: n });
      } else {
        symbolMap.set(sym, n);
      }
    }

    // Zorunlu alan kontrolü
    for (const field of required) {
      if (!(field in el) || el[field] === null || String(el[field]).trim() === '') {
        issues.missingFields.push({ atomicNumber: n, field });
      }
    }

    // Atom kütlesi format kontrolü
    const mass = String(el.atomicMass || '');
    if (mass && !/^\d+(\.\d+)?$/.test(mass)) {
      issues.invalidMass.push({ atomicNumber: n, value: mass });
    }
  }

  // Eksik atom numaraları
  for (let n = 1; n <= 118; n++) {
    if (!atomicSet.has(n)) {
      issues.missingAtomicNumbers.push(n);
    }
  }

  // Rapor
  const summary = {
    toplam: issues.count,
    eksikAtomNumarasi: issues.missingAtomicNumbers.length,
    tekrarliAtomNumarasi: issues.duplicateAtomicNumbers.length,
    tekrarliSembol: issues.duplicateSymbols.length,
    eksikAlan: issues.missingFields.length,
    gecersizKutle: issues.invalidMass.length
  };

  console.log('\n📊 ChemLabX elements.json Doğrulama Raporu\n');
  console.log(`✓ Toplam element sayısı: ${issues.count}`);
  
  if (issues.count === 118 && 
      issues.missingAtomicNumbers.length === 0 &&
      issues.duplicateAtomicNumbers.length === 0 &&
      issues.duplicateSymbols.length === 0 &&
      issues.missingFields.length === 0 &&
      issues.invalidMass.length === 0) {
    console.log('\n✅ TÜM KONTROLLER BAŞARILI! 118 element eksiksiz ve doğru.\n');
    process.exit(0);
  }

  console.log('\n⚠️  Sorunlar tespit edildi:\n');
  
  if (issues.count !== 118) {
    console.log(`❌ Beklenen 118, bulunan ${issues.count}`);
  }
  
  if (issues.missingAtomicNumbers.length > 0) {
    console.log(`❌ Eksik atom numaraları (${issues.missingAtomicNumbers.length}):`);
    console.log('   ', issues.missingAtomicNumbers.join(', '));
  }
  
  if (issues.duplicateAtomicNumbers.length > 0) {
    console.log(`❌ Tekrarlanan atom numaraları: ${issues.duplicateAtomicNumbers.join(', ')}`);
  }
  
  if (issues.duplicateSymbols.length > 0) {
    console.log(`❌ Tekrarlanan semboller (${issues.duplicateSymbols.length}):`);
    issues.duplicateSymbols.forEach(d => {
      console.log(`   ${d.symbol}: #${d.a} ve #${d.b}`);
    });
  }
  
  if (issues.missingFields.length > 0) {
    console.log(`❌ Eksik alanlar (${issues.missingFields.length}):`);
    const byElement = {};
    issues.missingFields.forEach(m => {
      if (!byElement[m.atomicNumber]) byElement[m.atomicNumber] = [];
      byElement[m.atomicNumber].push(m.field);
    });
    Object.keys(byElement).slice(0, 10).forEach(n => {
      console.log(`   Element #${n}: ${byElement[n].join(', ')}`);
    });
    if (Object.keys(byElement).length > 10) {
      console.log(`   ... ve ${Object.keys(byElement).length - 10} element daha`);
    }
  }
  
  if (issues.invalidMass.length > 0) {
    console.log(`❌ Geçersiz atom kütlesi formatı (${issues.invalidMass.length}):`);
    issues.invalidMass.slice(0, 5).forEach(m => {
      console.log(`   Element #${m.atomicNumber}: "${m.value}"`);
    });
  }

  console.log('');
  process.exit(1);
}

main();
