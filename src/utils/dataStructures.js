import { normalise } from "@/utils/helpers";

export default {
  leaderboard(leader) {
    return {
      name: leader.summonerName,
      tier: leader.rank,
      lp: leader.leaguePoints,
      played: leader.wins + leader.losses,
      wins: leader.wins,
      losses: leader.losses
    };
  },

  matches(match) {
    return {
      id: match.metadata.match_id,
      keys: match.metadata.participants,
      time: match.info.game_datetime,
      length: match.info.game_length,
      queue: match.info.queue_id,
      summoners: normalise(match.info.participants, "puuid", "summoners")
    };
  },

  summoners(summoner) {
    return {
      puuid: summoner.puuid,
      name: "",
      placement: summoner.placement,
      gold: summoner.gold_left,
      level: summoner.level,
      champions: normalise(summoner.units, "character_id", "champions"),
      traits: normalise(summoner.traits, "name", "traits"),
      companion: {
        id: summoner.companion.skin_ID,
        name: summoner.companion.species
      }
    };
  },

  champions(champion) {
    return {
      id: champion.character_id,
      items: champion.items,
      starred: champion.tier
    };
  },

  traits(trait) {
    return {
      id: trait.name,
      style: trait.style,
      count: trait.num_units
    };
  }
};
