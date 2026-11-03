# Arıza Takip Uygulaması

## Proje Hakkında

Bu proje, Mobil Programlama dersi kapsamında React Native ve Expo Router kullanılarak geliştirilmiş bir mobil uygulamadır.

Uygulamanın amacı, teknik destek taleplerini listelemek, arıza durumlarını görüntülemek ve seçilen arızanın detaylarına ulaşabilmektir.

## Kullanılan Teknolojiler

- React Native
- Expo SDK 58
- Expo Router
- JavaScript (JSX)

## Uygulama Özellikleri

- Ana sayfadan Arıza Listesi ekranına geçiş
- En az 3 arıza kaydının listelenmesi
- TicketCard bileşeni ile arıza kartlarının oluşturulması
- Arıza ID'sine göre detay sayfasına geçiş
- Arıza başlığı, konum ve durum bilgilerinin görüntülenmesi
- StatusBadge bileşeni ile arıza durumlarının farklı renklerde gösterilmesi
  - Bekliyor: Turuncu
  - İşlemde: Mavi
  - Çözüldü: Yeşil
- Yeni Arıza ekranına geçiş
- Geri butonu ile önceki ekrana dönüş
- Geçersiz arıza ID'si için uyarı mesajı

## Kullanılan React Native Bileşenleri

- View
- Text
- Pressable
- FlatList
- TextInput
- StyleSheet

## Navigasyon

Uygulamada Expo Router kullanılmıştır.

- `/` : Ana Sayfa
- `/ariza` : Arıza Listesi
- `/ariza/[id]` : Arıza Detay Sayfası
- Yeni Arıza ekranı

Dinamik rota için `useLocalSearchParams` kullanılmıştır.

## Projenin Çalıştırılması

Öncelikle gerekli paketleri yükleyin:

```bash
npm install
```

Ardından uygulamayı başlatın:

```bash
npx expo start
```

Uygulama, Expo Go üzerinden QR kod okutularak çalıştırılabilir.

## Testler

Uygulama çalıştırıldıktan sonra aşağıdaki işlemler kontrol edilmelidir:

- Ana sayfadan arıza listesine geçiş
- Arıza kayıtlarının doğru görüntülenmesi
- 101 numaralı arızanın detaylarını açma
- Detay ekranından listeye geri dönme
- Geçersiz arıza ID'si için uyarı gösterilmesi
- Arıza durumlarına göre renklerin doğru gösterilmesi
- Yeni Arıza ekranının açılması

## Ekran Görüntüleri

Uygulama test edildikten sonra ekran görüntüleri bu bölüme eklenecektir.

## Yapay Zekâ Kullanımı

Bu projede yapay zekâdan React Native bileşenleri, Expo Router navigasyonu ve kodların düzenlenmesi konusunda destek alınmıştır. Ayrıca hata mesajlarının anlaşılması ve SDK sürüm uyumluluğu hakkında yardım alınmıştır.

## Geliştirme Önerisi

Gelecekte uygulamaya arıza kayıtlarını kalıcı olarak saklama ve arıza durumlarını güncelleme özellikleri eklenebilir.
