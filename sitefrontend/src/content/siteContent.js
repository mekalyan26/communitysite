const siteContent = {
  page: {
    events: {
      eventList: [
        {
          title: "2023 Events - October",
          image: "images/dp-2023-1.jpg",
        }
      ],
    },
    gallery: {
      imageList: [
        "images/dp2010-1.png",
        "images/saraswatipuja2018.jpg",
        "images/durgapuja2018.jpg",
        "images/durgapuja2017.jpg",
        "images/picnic2017.jpg",
        "images/gardenparty2017.jpg",
        "images/durgapuja2016.jpg",
        "images/durgapuja2015.jpg",
        "images/durgapuja2014.jpg",
        "images/picnic2022.jpg",
        "images/picnic2015.jpg",
        "images/function.jpg",
        "images/kolorob-1.png",
        "images/function-2.png",
        "images/dp2022-1.png"
      ]
    },
    register: {},
    aboutUs: {},
  },
};

export function getPageContent(page) {
  return siteContent.page[page];
}
