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
    register: {},
    aboutUs: {},
  },
};

export function getPageContent(page) {
  return siteContent.page[page];
}
