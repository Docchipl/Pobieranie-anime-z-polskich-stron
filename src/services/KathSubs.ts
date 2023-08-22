import axios, { AxiosResponse } from "axios";
import { JSDOM, VirtualConsole } from "jsdom";
import CompilePlayerData from "../utils/CompileEpisodeData";

//Return Interfaces
interface IPlayer {
  player: string;
  url: string;
}

const virtualConsole = new VirtualConsole();
virtualConsole.on("error", () => {
  // No-op to skip console errors.
});

export default async function ServiceKathSubs(
  anime: string,
  episode: string | number
): Promise<{
  status: number;
  message: string;
  episode_thumbnail?: string | null;
  episodes?: IPlayer[];
  episode_next_url?: string | number;
}> {
  try {
    const response: AxiosResponse<string> = await axios.get(
      `https://kathsubs.blogspot.com/p/${anime}.html`,
      {
        headers: {
          Referer: `https://kathsubs.blogspot.com/p/${anime}.html`,
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );

    const dom = new JSDOM(response.data, { virtualConsole });
    const items = dom.window.document.querySelectorAll(
      ".post-body.entry-content span"
    );
    let episodes_cleaning: IPlayer[] = [];

    if (!items) {
      return {
        status: 500,
        message: "Something went wrong!",
      };
    }

    await Promise.all(
      Array.from(items).map(function (x) {
        if (!x || !x.textContent) return;

        const link = x.querySelector("a");
        const text = x.textContent;
        const episodeNumber = text.match(/(\d+)/);

        if (!link || !episodeNumber) return;

        const data = CompilePlayerData(link.href);

        if (!data.hosting || !data.player_embed) return;

        if (Number(episodeNumber[0]) === Number(episode)) {
          episodes_cleaning.push({
            player: data.hosting,
            url: data.player_embed,
          });
        }
      })
    );

    if (episodes_cleaning.length === 0) {
      return {
        status: 500,
        message: "Something went wrong!",
      };
    }

    return {
      status: 200,
      message: "Mission Accomplished!",
      episode_thumbnail: null,
      episodes: episodes_cleaning,
      episode_next_url: Number(episode) + 1,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong!",
    };
  }
}
