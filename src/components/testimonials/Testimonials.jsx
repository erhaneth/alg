import "./testimonials.scss"; // Import your CSS stylesheet here
import React, { useState, useEffect } from "react";
import { Typography, Card, CardContent } from "@mui/material"; // Import Material-UI components

const testimonialsData = [
  {
    name: "John Doe",
    testimonial:
      "Eğer ki konunuzu net özetleyebiliyor iseniz, net şekilde ilk diyaloğunuzu gerçekleştirebilirsiniz. Size fabrikasyon mantığı ile bakmadıklarını söyleyebilirim. Avukat yada hukuk bürosu ararken ilk intiba benim için çok önemli.ayrıca arama sonrası sms ten puanlama ve sonrasında haritalar yoruma yönlendirilmesi fikri de müthiş. İyi çalışmalar. Başarılar.",
  },
  {
    name: "2",
    testimonial:
      "Aslen Antalyalıyım Diyarbakır bir metropolde çok yeniyim talihsiz bir durum dolayisiyla bir arkadaşım aracılığıyla danismak uzere aradim önce danisma ücretini yatirip sorunum ile ilgili sormayi teklif ettim Ali bey sağolsun sıkintımı dinledi ve ucrete talep etmeden cevap verdi nezaket yardimsever davranisindan dolayi bu yorumu yazmaktan zevk aldim dava surecimde kendileriyle irtibata gececegim,tesekkur ediyorum ",
  },
  {
    name: "3",
    testimonial:
      "Avukat Ali Bey son derece mülayim ve efendi bir insan. Bana çok güzel yardımcı oldu. Böyle güzel ve ornek insanlar umarım ülkemizde çoğalır. Kendisine gösterdiği saycı ve yardımdan dolayı sonsuz tesekkurlerimi bir borç bilirim. Başarılarının devamını diliyorum. Sonsuz saygı ve sevgilerimle.",
  },
  {
    name: "J",
    testimonial:
      "Ali Bey' i İstanbul'da çalıştığı dönemlerden bir miras işimiz dolayısıyla tanırım. Kendisi bu sorunumuzla alakalı olarak hemen çözüp üretip davamızı sonuçlandırdı. Aynı şekilde Diyarbakır'a yerleştiğini öğrenince tüm arkadaşlarıma, eş ve dosta kendisini rahatlıkla tavsiye ettim. Internet arama sonuçlarında buldum. Birazda çekinerek aradım. Ancak Çok hızlı ve net bir şekilde tüm sorularımın cevabını aldım. Çok teşekkür ederim. ",
  },
  {
    name: "Jooe",
    testimonial:
      "Internet arama sonuçlarında buldum. Birazda çekinerek aradım. Ancak Çok hızlı ve net bir şekilde tüm sorularımın cevabını aldım. Çok teşekkür ederim.",
  },
  {
    name: "Joe",
    testimonial:
      "İnşallah açtığımız davalarda hayırlı sonuçlar alırız kendilerini internet ortamında buldum avukatlara hiç güvenim kalmadığı bir noktada bana yardımcı oldular tekrar güvenimi sağladılar doğru dürüst çalışmalarının devamını temenni ederek hayırlı işler diliyorum",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % testimonialsData.length;
        console.log("New index:", newIndex); // Log the updated index
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials" id="testimonials">
      <Typography variant="h4" className="section-title">
        Testimonials
      </Typography>
      <div className="testimonial-carousel">
        {testimonialsData.map((testimonial, index) => (
          <Card
            key={index}
            className={`testimonial-card ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <CardContent>
              <Typography variant="body2" className="testimonial-text">
                {testimonial.testimonial}
              </Typography>
              <Typography variant="subtitle1" className="testimonial-author">
                - {testimonial.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
