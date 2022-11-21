var express = require("express");

/* GET home page. */
const anaSayfa = function (req, res, next) {
  res.render("anasayfa", {
    baslik: "Anasayfa",
    sayfaBaslik: {
      siteAd: "MekanBul",
      slogan: "Etrafında Hangi Mekanlar Var, Keşif Başlasın!",
    },
    mekanlar: [
      {
        ad: "Starbucks",
        puan: 4,
        adres: "Centrum Garden AVM",
        imkanlar: ["Etiopya Kahveesi", "Cookie", "Frambuazlı Pasta"],
        mesafe: "10km",
      },
      {
        ad: "Gloria Jeans",
        puan: 3,
        adres: "Sdü Doğu Kampüsü",
        imkanlar: ["Shawo", "Santos", "Guetamala"],
        mesafe: "5km",
      },
       
    ],
  });
};

const mekanBilgisi = function (req, res, next) {
  res.render("mekanbilgisi", {
    baslik: "Mekan Bilgisi",
    mekanBaslik: "Starbucks",
    mekanDetay: {
      ad: "Starbucks",
      puan: "4,5",
      adres: "IyasPark AVM",
      saatler: [
        {
          gunler: "Pazartesi-Cuma",
          acilis: "11:00",
          kapanis: "21:30",
          kapali: false,
        },
        {
          gunler: "Cumartesi-Pazar",
          acilis: "09:00",
          kapanis: "23:00",
          kapali: false,
        },
      ],
      imkanlar: ["Dünya Kahveleri", "Kekler", "Pastalar"],
      koordinatlar: {
        enlem: 37.78,
        boylam: 30.56,
      },
      yorumlar: [
        {
          yorumYapan: "Ali Tomak",
          yorumMetni: "Brezilya kahvesini çok tavsiye etmiyorum.",
          tarih: "03 Kasım 2022",
          puan: "4",
        },
      ],
    },
  });
};

const yorumEkle = function (req, res, next) {
  res.render("yorumekle", { title: "Yorum Ekle" });
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
};