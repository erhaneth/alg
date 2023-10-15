import "./about.scss";
import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function About() {
  return (
    <Paper className="about">
      <div className="left-section">
        {/* Add your rounded image component here */}
        <img src="/assets/about.png" alt="About Us" className="rounded-img" />
      </div>
      <div className="right-section">
        <Typography variant="h4">
          Hukuki Danışmanlık ve Hizmetlerimiz
        </Typography>
        <Typography>
          ALG Hukuk Ve Danışmanlık Ofisi olarak, hukuki ihtiyaçlarınıza çözüm
          sunuyoruz. Diyarbakır'ın Yenişehir ilçesinde faaliyet gösteren
          ofisimiz, uzman kadrosu ve müvekkillerine sunduğu kapsamlı hizmetler
          ile öne çıkıyor.
        </Typography>
        <Typography>
          Hukuki alanlarda uzmanlaşmış ekibimiz, müvekkillerimize pazarlama, iş
          stratejileri ve hukuki çözümler konusunda destek verirken, yerel ve
          uluslararası düzeyde faaliyet gösteren müvekkillerimize rehberlik
          ediyor.
        </Typography>
        <Typography variant="h6">Bizimle çalışmanın avantajları:</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Alanında uzman avukat" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Pozitif müşteri deneyimi" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Rekabetçi hukuki çözümler" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Güvenilirlik ve şeffaflık" />
          </ListItem>
        </List>
        <Typography>
          ALG Hukuk Ve Danışmanlık Ofisi olarak, müvekkillerimize güçlü iş
          ilişkileri kurma ve hukuki ihtiyaçlarını en iyi şekilde karşılama
          taahhüdünde bulunuyoruz. Sizinle çalışmayı dört gözle bekliyoruz.
        </Typography>
      </div>
    </Paper>
  );
}
