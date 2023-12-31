import React from 'react'

function sikSorulanSorular() {
  return (
    <div className='font-serif container mx-auto p-2'>
        <h1 className='text-5xl text-[#4D1354] font-bold mb-5'>Sık Sorulan Sorular</h1>
      <div className=' p-5 border-2 rounded-lg font-serif flex flex-col  shadow-xl hover:text-color1'>
        <h2 className='text-3xl text-[#4D1354] font-bold mb-3'>HissEmoji</h2>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>1. HissEmoji Nedir?</h3>
        <h4 className='text-xl text-black ml-5'>HissEmoji, duygularınızı ifade etmek için kullanabileceğiniz emoji kartlarına dayalı bir müzik öneri menüsüdür. Seçtiğiniz emoji kartına göre size özel çalma listesi oluşturarak duygusal bir müzik deneyimi sunar.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>2. HissEmoji Menüsü Nasıl Çalışır?</h3>
        <h4 className='text-xl text-black ml-5'>HissEmoji Menüsü'nde bulunan çeşitli duygu kartlarından birini seçin. Seçtiğiniz kart, o duyguya uygun şarkıları içeren özel bir çalma listesi oluşturacak ve size sunacak.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>3. Duygu Kartlarını Nasıl Kullanabilirim?</h3>
        <h4 className='text-xl text-black ml-5'>Anasayfamızdaki HissEmoji menüsüne tıkladıktan sonra, karşınıza çıkan duygu kartları arasından istediğinizi seçebilirsiniz. Her kart, farklı bir duyguyu temsil eder.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>4. Her Kartın Temsil Ettiği Duygu Nedir?</h3>
        <h4 className='text-xl text-black ml-5'>Her bir kart farklı bir duyguyu yansıtarak müzik önerisi yapar. Kartlar arasında Mutlu, Hüzünlü, Havalı, Komik ve Aşık gibi çeşitli duygular bulunur.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>5. Birden Fazla Kartı Seçebilir miyim?</h3>
        <h4 className='text-xl text-black ml-5'>Evet, isterseniz birden fazla duygu kartını seçebilir ve bu kartların birleşimine özel bir müzik listesi oluşturabilirsiniz.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>6. Beğendiğim Şarkıları Nasıl Kaydedebilirim?</h3>
        <h4 className='text-xl text-black ml-5'>Çalma listesinde beğendiğiniz şarkıları favorilere ekleyerek, daha sonra kolayca erişebilir ve tekrar dinleyebilirsiniz.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>7. HissEmoji Menüsünü Nasıl Paylaşabilirim?</h3>
        <h4 className='text-xl text-black ml-5'>Keşfettiğiniz müzikleri sosyal medyada paylaşmak için çalma listesinin altındaki paylaş ikonuna tıklayarak arkadaşlarınızla paylaşabilirsiniz.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>8. HissEmoji Menüsü Ücretsiz mi?</h3>
        <h4 className='text-xl text-black ml-5'>Evet, HissEmoji Menüsü tamamen ücretsizdir. Duygularınıza uygun şarkıları keşfetmek için özgürce kullanabilirsiniz.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>9. Menüde Yeni Duygu Kartları Ekleniyor mu?</h3>
        <h4 className='text-xl text-black ml-5'>Evet, HissEmoji Menüsü düzenli olarak güncellenir ve yeni duygu kartları eklenir. Böylece müzik keşiflerinizi sürekli olarak genişletebilirsiniz.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>10. Duygu Kartlarının Anlamları Nelerdir?</h3>
        <h4 className='text-xl text-black ml-5'>Her duygu kartının altında küçük bir açıklama bulunur. Kartları seçerken bu açıklamalardan faydalanabilir ve hissettiğiniz duyguyu daha iyi ifade edebilirsiniz.</h4>
      </div>
      <br></br>
      <div className='p-5 border-2 rounded-lg font-serif flex flex-col  shadow-xl hover:text-color1'>
        <h2 className='text-3xl text-[#4D1354] font-bold mb-3'>Beni Şaşırt</h2>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>1. Beni Şaşırt nedir ve nasıl çalışır?</h3>
        <h4 className='text-xl text-black ml-5'>Beni Şaşırt, duygu durumunuza uygun özel müzik çalma listeleri oluşturan bir özelliktir. Bu menüde duygu durumunuzu seçerek, yapay zeka tarafından önerilen müzikleri dinleyebilirsiniz.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>2. Duygu durumu nasıl seçerim?</h3>
        <h4 className='text-xl text-black ml-5'>Beni Şaşırt menüsüne girdikten sonra, karşınıza çıkacak duygu durumu listesinden o anki hissettiğiniz duyguyu seçebilirsiniz. Örneğin, mutlu, hüzünlü, enerjik gibi seçenekler bulunmaktadır.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>3. Yapay zeka duygu durumumu nasıl analiz ediyor?</h3>
        <h4 className='text-xl text-black ml-5'>Yapay zeka, kullanıcıların seçtiği duygu durumunu anlamak için metin tabanlı analizler kullanır. Kullanıcılar duygusal ifadelerini belirliyor ve yapay zeka bu ifadeleri analiz ederek uygun müzikleri önerir.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>4. Önerilen çalma listelerini nasıl dinleyebilirim?</h3>
        <h4 className='text-xl text-black ml-5'>Yapay zeka tarafından önerilen çalma listelerini gördükten sonra, ilginizi çeken bir çalma listesini seçebilir ve üzerine tıklayarak hemen dinlemeye başlayabilirsiniz. Ayrıca çalma listelerini kaydedebilir ve ilerleyen zamanlarda tekrar dinleyebilirsiniz.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>5. Duygu durumu seçiminde zorlanıyorsam ne yapmalıyım?</h3>
        <h4 className='text-xl text-black ml-5'>Eğer duygu durumunuzu belirlemekte zorlanıyorsanız, size uygun çalma listesi önerileri almak için genel bir ruh halinizi seçebilir veya karma bir çalma listesi isteyebilirsiniz.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>6. Beni Şaşırt menüsüyle ilgili başka bir sorum var, nereye başvurabilirim?</h3>
        <h4 className='text-xl text-black ml-5'>Herhangi bir sorunuz veya geri bildiriminiz için "İletişim" bölümünden bize ulaşabilirsiniz. Size en kısa sürede yardımcı olmaktan mutluluk duyarız.</h4>
      </div>
      <br></br>

      <div className=' p-5 border-2 rounded-lg font-serif flex flex-col  shadow-xl hover:text-color1'>
        <h2 className='text-3xl text-[#4D1354] font-bold mb-3'>Trendler</h2>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>1. Trendler Menüsü Nedir?</h3>
        <h4 className='text-xl text-black ml-5'>Trendler Menüsü, her ay hangi şarkıların hangi duygularla popüler hale geldiğini gösteren özel bir bölümdür. Müziğin güncel nabzını takip etmek için ideal bir kaynaktır.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>2. Trendler Nasıl Belirlenir?</h3>
        <h4 className='text-xl text-black ml-5'>Her ay, kullanıcıların favori şarkılarını ve duygusal tercihlerini analiz ederek, o dönemin trend şarkılarını belirleriz. Bu sayede müziğin en güncel ve popüler parçalarını keşfetme şansınız olur.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>3. Trendler Menüsü Nasıl Kullanılır?</h3>
        <h4 className='text-xl text-black ml-5'>Ana sayfadaki "Trendler" menüsüne tıklayarak, o ayın popüler şarkılarını ve bu şarkıları popüler yapan duyguları görebilirsiniz.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>4. Hangi Duygular Trend?</h3>
        <h4 className='text-xl text-black ml-5'>Her ayın trendleri arasında farklı duygusal temalar bulunabilir. Mutluluk, hüzün, enerji, romantizm gibi çeşitli duygular, o ayın popüler şarkılarını belirleyebilir.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>5. Trendler Menüsündeki Şarkıları Nasıl Dinleyebilirim?</h3>
        <h4 className='text-xl text-black ml-5'>Trendler Menüsü'nde bulunan şarkıları dinlemek için şarkının üzerine tıklayabilir veya çalma listesine ekleyerek daha sonra dinleyebilirsiniz.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>6. Kendi Trend Listemi Oluşturabilir miyim?</h3>
        <h4 className='text-xl text-black ml-5'>Evet, beğendiğiniz şarkıları favorilere ekleyerek kendi trend listelerinizi oluşturabilirsiniz.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>7. Trendler Menüsünü Paylaşabilir miyim?</h3>
        <h4 className='text-xl text-black ml-5'>Evet, beğendiğiniz trendleri sosyal medyada paylaşabilir ve arkadaşlarınızla bu ayın popüler müziklerini keşfetmelerini sağlayabilirsiniz.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>8. Trendler Menüsü Ücretsiz mi?</h3>
        <h4 className='text-xl text-black ml-5'>Evet, Trendler Menüsü tamamen ücretsizdir. Müziğin güncel trendlerini keşfetmek için ücretsiz olarak kullanabilirsiniz.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>9. Hangi Sıklıkla Güncellenir?</h3>
        <h4 className='text-xl text-black ml-5'>Trendler Menüsü her ay güncellenir, böylece her zaman müziğin en güncel ve popüler şarkılarına erişebilirsiniz.</h4>
        <h3 className='text-2xl text-[#4D1354] font-bold mt-2'>10. Trendlerle İlgili Daha Fazla Bilgi Alabilir miyim?</h3>
        <h4 className='text-xl text-black ml-5'>Evet, her trend şarkısı altında kısa bir açıklama ve kullanıcı yorumları bulunur. Bu bilgileri inceleyerek şarkılar hakkında daha fazla bilgi edinebilirsiniz.</h4>
    </div>
  </div>
  )
}

export default sikSorulanSorular
