import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [ { 
        "company" : "Logius",
        "name" : "Gül Işik",
        "url" : "https://www.logius.nl"
      } ],
  editors: [ 
      { 
        "company" : "Logius",
        "name" : "Gül Işik",
        "url" : "https://www.logius.nl"
      },
      { 
        "company" : "Logius",
        "name" : "Edwin Wisse",
        "url" : "https://www.logius.nl"
      }
    ],
  github: "https://github.com/Logius-standaarden/BOMOS-Beheermodel",
  nl_markdownCodeClass: "code",
  previousPublishDate: "2022-06-01",
  previousPublishVersion: "0.5",
  pubDomain: "bomos",
  publishDate: "2023-09-23",
  publishVersion: "1.0",
  shortName: "beheer",
  specStatus: "WV",
  specType: "HR"
});
