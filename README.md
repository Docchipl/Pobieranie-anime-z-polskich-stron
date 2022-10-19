# @docchi/scraping-anime-websites-poland

Siema, jeślisz szukasz gotowego kodu do pobierania linków do cda, mega, google drive, itd z Polskich stron to idealnie trafiłeś!

![Okładka](https://cdn.discordapp.com/attachments/721911008213598238/1019238100339269733/Docchi_1.png)

## Kontakt

- GitHub: [github.com/ankordii][github]
- Strona: [https://docchi.pl/][site]
- E-mail: pomoc@docchi.pl

## Instalacja

Javascript:
```bash
npm install @docchi/scraping-anime-websites-poland
```
Typescript:
```bash
npm install @docchi/scraping-anime-websites-poland@typescript
```

## Obsługiwane strony

<sub>Nie zapomnij dodać do *package.json*
```json
"type": "module"
```
</sub>

Obsługiwane strony:
- DocchiSubs - **docchi.pl**
- FrixySubs - **frixysubs.pl**
- MaouSubs - **maousubs.pythonanywhere.com**
- Okami-Subs - **okami-subs.pl**
- NanaSubs - **nanasubs.pl**
- Mioro-Subs - **miorosubs.7m.pl**
- DayidSub - **dayidsub.pl**
- Fumetsu - **fumetsu.pl**
- Wbijam - **wbijam.pl**
- Desu-Online - **desu-online.pl**
- CDA - **cda.pl**

Nowe 🚀
- KatherineMay - **kathsubs.blogspot.com**

Aktualizacja 🚀
- MaouSubs - **maousubs.pythonanywhere.com**


## Przykłady

Dokumentacja: [docs.seven7s.top](https://docs.seven7s.top/docchi/scraping)


FrixySubs: 

```js
import scopeAnime from "@docchi/scraping-anime-websites-poland";

console.log(await scopeAnime({
    anime: 'spy-x-family',
    episode: 1,
    website: 'frixysubs'
}))
```
<details>
  <summary>Więcej przykładów</summary>

  DocchiSubs: 

  ```js
  import scopeAnime from "@docchi/scraping-anime-websites-poland";

  console.log(await scopeAnime({
    anime: 'isekai-yakkyoku-49438',
    episode: 5,
    website: 'docchi'
  }))
  ```
  Wbijam: 

  *note: w anime trzeba podać subdomene*
  ```js
  import scopeAnime from "@docchi/scraping-anime-websites-poland";

  console.log(await scopeAnime({
    anime: "danmachi",
    episode: 'czwarta_seria-10',
    website: 'wbijam'
  }))
  ```
  Desu-Online: 

  ```js
  import scopeAnime from "@docchi/scraping-anime-websites-poland";

  console.log(await scopeAnime({
    anime: "isekai-meikyuu-de-harem-wo",
    episode: 1,
    website: 'desuonline'
  }))
  ```
  Okami-Subs: 

  ```js
  import scopeAnime from "@docchi/scraping-anime-websites-poland";

  console.log(await scopeAnime({
    anime: 'baraou-no-souretsu',
    episode: '2-1007c078-b20b-4c62-888a-e5b20a2e720b',
    website: 'okamisubs'
  }))
  ```
  Mioro-Subs: 

  ```js
  import scopeAnime from "@docchi/scraping-anime-websites-poland";

  console.log(await scopeAnime({
    anime: 'summertime-render-odcinek',
    episode: 12,
    website: 'miorosubs'
  }))
  ```
  MaouSubs: 

  ```js
  import scopeAnime from "@docchi/scraping-anime-websites-poland";

  console.log(await scopeAnime({
    anime: 'yofukashi-no-uta',
    episode: 4,
    website: 'maousubs'
  }))
  ```
  DayidSub: 

  ```js
  import scopeAnime from "@docchi/scraping-anime-websites-poland";

  console.log(await scopeAnime({
    anime: 'Tensei-Kenja-no-Isekai-Life',
    episode: '01',
    website: 'dayidsub'
  }))
  ```
  NanaSubs: 

  ```js
  import scopeAnime from "@docchi/scraping-anime-websites-poland";

  console.log(await scopeAnime({
    anime: 'engage-kiss',
    episode: 855,
    website: 'nanasubs'
  }))
  ```
  Fumetsu: 

  ```js
  import scopeAnime from "@docchi/scraping-anime-websites-poland";

  console.log(await scopeAnime({
    anime: 'TatenoYuushanoNariagari2-kiss',
    episode: 1,
    website: 'fumetsu'
  }))
  ```
  KatherineMay: 

  ```js
  import scopeAnime from "@docchi/scraping-anime-websites-poland";

  console.log(await scopeAnime({
    anime: "incomparable-demon-king",
    episode: 22,
    website: "kathsubs"
  }))
  ```
  CDA: 

  *note: W przypadku cda warto spojrzeć do dokumentacji [docs.seven7s.top](https://docs.seven7s.top/docchi/scraping/cda)*
  ```js
  import scopeAnime from "@docchi/scraping-anime-websites-poland";

  console.log(await scopeAnime({
    user: "docchi",
    folder: 37956235,
    type: "spaces",
    spaces: "3",
    episode: 1,
    website: "cda"
  }))
  ```
</details>

Wiadomość zwrotna
```json
{
    "status": 200,
    "message": "Success",
    "episode_url": [
      { 
          "player": "ok.ru", 
          "url": "https://ok.ru/videoembed/5381289871943" 
      },
      {
          "player": "Dailymotion",
          "url": "https://www.dailymotion.com/embed/video/k1Q8PBcBK1AbFdxRe2D"
      },
      {
          "player": "MEGA",
          "url": "https://mega.nz/embed/mEgRjRjY#L09jpTA2d-H9cYscGdY6bXa6oLONnzrhQ5WEe3YHAy8"
      },
      { 
          "player": "CDA", 
          "url": "https://ebd.cda.pl/620x395/105541522d" 
      }
    ],
    "episode_next_url": 2
}
```
# Kody zwrotne

- 500 - Coś poszło nie tak, prawdopodobnie pakiet nie był w stanie, znaleźć określonego elementu na stronie, z którego pobiera informacje.
- 200 - Wszystko przeszło bez żadnego problemu.
- 204 - Strona się załadowała, ale brakuje na niej odtwarzaczy (wbijam.pl).

# Wesprzyj
<b>IMPORTANT</b>: Help me beeing efficient, please! I am developing in my free time for no money. Contribute to the project by posting complete, structured and helpful issues which I can reproduce quickly without asking for missing information.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/docchi)

# Licencja
[MIT](https://github.com/docchipl/Pobieranie-anime-z-polskich-stron/blob/main/LICENSE)

[github]: https://github.com/ankordii
[site]: https://docchi.pl/