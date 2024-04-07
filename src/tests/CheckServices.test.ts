import { describe, expect, test } from "@jest/globals";
import { ServiceFumetsu, ServiceNanaSubs } from "../services/index";

describe("Custom Services", () => {
  test("Fumetsu", async () => {
    expect(await ServiceFumetsu("BartenderKamiNoGlass", "1")).toStrictEqual({
      status: 200,
      episode_thumbnail: null,
      message: "Mission Accomplished!",
      episodes: [
        { player: "cda", url: "https://ebd.cda.pl/620x368/19633967ff" },
        {
          player: "mega",
          url: "https://mega.nz/embed/xfdCkBbK!dNEv00aEl6sCxBnMUs9cAGaGGeG4P9Bh5nKTKY6QhJQ",
        },
        {
          player: "gdrive",
          url: "https://drive.google.com/file/d/1gQZHgoD6m0mHxZ2FItRrKEfVI7Q9xbgp/preview",
        },
        {
          player: "mp4upload",
          url: "https://www.mp4upload.com/embed-1a6ht511uk79.html.html",
        },
      ],
      episode_next_url: 2,
    });
  });

  test("Nana Subs", async () => {
    expect(await ServiceNanaSubs("one-piece", "1081")).toStrictEqual({
      status: 200,
      episode_thumbnail:
        "https://nanasubs.com/images/episodes/one-piece-1081.webp",
      message: "Mission Accomplished!",
      episodes: [
        { player: "cda", url: "https://ebd.cda.pl/620x395/18338327c0" },
        {
          player: "gdrive",
          url: "https://drive.google.com/file/d/1zwbmG9_rOUVtwtHE-D5R-YqeSymu5UZo/preview",
        },
      ],
      episode_next_url: 1082,
    });
  });
});
