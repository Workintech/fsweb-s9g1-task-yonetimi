# Görev takip uygulaması

Bugün, bir görev takip sayfası üzerinde çalışacağız.
Görev takip sistemleri, bir proje içerisinde yapılması gerekenleri küçük görevlere bölmek, bu görevleri yapması gereken insanlara atamak ve görevlerin tamamlanması gereken son tarihleri belirleyerek her şeyin zamanında tamamlanmasını sağlamak için kullanılan uygulamalardır.

### Bu projede tamamlanması gereken 3 ana görev var:

- Projede `TaskForm` bileşeni olarak yer alan formu react-hook-form kütüphanesi ile yeniden oluşturmak
- `Tamamlandı` butonuna basıldığında bir görevin status değerini güncellemek
- Yeni görev eklendiğinde ya da görev tamamlandığında react-toastify kütüphanesi ile kullanıcıyı bilgilendirmek

## Pratik yapılacak yetenekler

- React kütüphanelerini tanıma, nasıl kullanılacağını öğrenme ve var olan koda adapte etmek
- Parent componentlarda bulunan state değerini child componentlara fonksiyon ileterek değiştirmek

## Giriş

Projede, `Yapılacaklar` listesine yeni görev eklenmesini sağlayan ve görevleri yapması beklenen insan grubuna yeni üyeler eklemekte kullanılan 2 adet form bulunuyor. Yeni görev ekleme formunda (TaskForm), önceki projelerde görmüş olduğumuz gibi form değerleri state içerisinde tutuluyor ve Yup ile validation yapılıyor. Amacımız bu formu react-hook-form ile yeniden yapmak.
 
- `App.js` içerisinde comment içerisine alınmış olan `TaskForm` componentını aktif hale getirin ve nasıl çalıştığını inceleyin.
- react-hook-form kütüphanesinin dokümantasyon sayfasını ve özellikle [form alanı oluşturma aracını](https://react-hook-form.com/form-builder/) inceleyin ve o aracı kullanarak `TaskForm` componentını yeniden oluştururken kullanabileceğiniz kodlar üretmeye çalışın.
- [react-hook-form](https://www.npmjs.com/package/react-hook-form) kütüphanesini projeye ekleyin.
- Yeni görev ekleme formunu `TaskHookForm` dosyası içerisinde react-hook-form kütüphanesini kullanarak oluşturun.
- `TaskForm` componentı içerisinde yer alan Yup şemasına bakarak, tüm form validation kriterlerini ve hata mesajlarını `TaskHookForm` içerisinde kullanın.
- `Yapılacak görevler` listesinde yer alan bir görevin `status` değerini, "tamamlandı" butonuna basıldığında "yapıldı" olarak değiştirin.

- [react-toastify](https://www.npmjs.com/package/react-toastify) kütüphanesinin dokümantasyon sayfasını inceleyin ve projenize nasıl ekleyebileceğinizi bulun.
- react-toastify kütüphanesinin dokümantasyonunda yer alan örnek kullanımları inceleyin.
- react-toastify kütüphanesini projeye ekleyin ve kullanacağınız yerlerde gerekli eklemeleri ve düzenlemeleri yapın.

## Talimatlar

### Görev 1: Proje Kurulumu

- Forklayın, klonlayın, ve `npm install` komutunu çalıştırın.
- Projeyi çalıştırmak için `npm start` komutunu kullanın.
- `http://localhost:3000` adresinden uygulamana ulaşabilirsin.

### Görev 2: Proje Gereksinimleri

- Yeni görev ekleme formu, react-hook-form hookları kullanılarak yazılmalı, ekstra state kullanılmamalı.
- Kullanılan kişi listesi ve görevlere ait tüm veriler `<App />` içerisinden kullanılmalı.
- `<App />` state verilerini değiştirecek olan görevi tamamlama fonksiyonu `App.js` içinde oluşturulmalı ve `Task` componentına gönderilmeli.
- Görev tamamlama ve yeni görev ekleme sonrasında birbirlerinden farklı ve bilgilendirici mesajlar gösterilmeli.

### İnceleyin

- Proje layout ve css tanımlamalarına bakarak şimdiye kadar gördüklerinizden farklı olan özellik ve değerleri bulmaya çalışın.
- Görev ekleme formunun başlangıç aşamasında checkboxlar için diğer form alanlarından farklı bir fonksiyon var. Onu inceleyin ve daha önceki projelerinizde olası kullanım alanları bulmaya çalışın.
