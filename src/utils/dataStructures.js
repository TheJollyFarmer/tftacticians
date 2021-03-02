import { normalise } from "@/utils/helpers";
import dataStructures from "@/utils/dataStructures";

export default {
  matches(match) {
    return {
      id: match.metadata.match_id,
      keys: match.metadata.participants,
      gameTime: match.info.game_datetime,
      gameLength: match.info.game_length,
      queue: match.info.queue_id,
      summoners: normalise(match.info.participants, "puuid", "summoners")
    };
  },

  summoners(summoner) {
    return {
      puuid: summoner.puuid,
      placement: summoner.placement,
      gold: summoner.gold_left,
      level: summoner.level,
      champions: normalise(summoner.units, "character_id", "champions"),
      traits: normalise(summoner.traits, "name", "traits")
    };
  },

  champions(champion) {
    return {
      id: champion.character_id,
      items: champion.items,
      tier: champion.tier
    };
  },

  traits(trait) {
    return {
      id: trait.name,
      style: trait.style,
      count: trait.count
    };
  }
};
