var wordsJSON = {
    "results": [
      {
        "word": "action replay",
        "id": "action_replay"
      },
      {
        "word": "aerial ping-pong",
        "id": "aerial_ping-pong"
      },
      {
        "word": "aerobics",
        "id": "aerobics"
      },
      {
        "word": "aerotowing",
        "id": "aerotowing"
      },
      {
        "word": "aertex",
        "id": "aertex"
      },
      {
        "word": "after-match function",
        "id": "after-match_function"
      },
      {
        "word": "aggregate",
        "id": "aggregate"
      },
      {
        "word": "air shot",
        "id": "air_shot"
      },
      {
        "word": "amateur",
        "id": "amateur"
      },
      {
        "word": "anabolic steroid",
        "id": "anabolic_steroid"
      },
      {
        "word": "appearance money",
        "id": "appearance_money"
      },
      {
        "word": "aquaplane",
        "id": "aquaplane"
      },
      {
        "word": "aquaplaning",
        "id": "aquaplaning"
      },
      {
        "word": "arm-wrestling",
        "id": "arm-wrestling"
      },
      {
        "word": "assistant referee",
        "id": "assistant_referee"
      },
      {
        "word": "astroturf",
        "id": "astroturf"
      },
      {
        "word": "athlete",
        "id": "athlete"
      },
      {
        "word": "attackman",
        "id": "attackman"
      },
      {
        "word": "audax",
        "id": "audax"
      },
      {
        "word": "ayurveda",
        "id": "ayurveda"
      },
      {
        "word": "backhand",
        "id": "backhand"
      },
      {
        "word": "backhander",
        "id": "backhander"
      },
      {
        "word": "backlift",
        "id": "backlift"
      },
      {
        "word": "backmarker",
        "id": "backmarker"
      },
      {
        "word": "backspin",
        "id": "backspin"
      },
      {
        "word": "badger baiting",
        "id": "badger_baiting"
      },
      {
        "word": "badminton",
        "id": "badminton"
      },
      {
        "word": "ballboy",
        "id": "ballboy"
      },
      {
        "word": "ballgirl",
        "id": "ballgirl"
      },
      {
        "word": "ballhawk",
        "id": "ballhawk"
      },
      {
        "word": "ball kid",
        "id": "ball_kid"
      },
      {
        "word": "banana kick",
        "id": "banana_kick"
      },
      {
        "word": "bandy",
        "id": "bandy"
      },
      {
        "word": "barfly jumping",
        "id": "barfly_jumping"
      },
      {
        "word": "barrel race",
        "id": "barrel_race"
      },
      {
        "word": "base jump",
        "id": "base_jump"
      },
      {
        "word": "bat",
        "id": "bat"
      },
      {
        "word": "battledore",
        "id": "battledore"
      },
      {
        "word": "beach volleyball",
        "id": "beach_volleyball"
      },
      {
        "word": "bench strength",
        "id": "bench_strength"
      },
      {
        "word": "benchwarmer",
        "id": "benchwarmer"
      },
      {
        "word": "biathlete",
        "id": "biathlete"
      },
      {
        "word": "biathlon",
        "id": "biathlon"
      },
      {
        "word": "big air",
        "id": "big_air"
      },
      {
        "word": "big league",
        "id": "big_league"
      },
      {
        "word": "blanket finish",
        "id": "blanket_finish"
      },
      {
        "word": "bleacherite",
        "id": "bleacherite"
      },
      {
        "word": "blocking",
        "id": "blocking"
      },
      {
        "word": "blue chipper",
        "id": "blue_chipper"
      },
      {
        "word": "bmx",
        "id": "bmx"
      }
    ],
    "metadata": {
      "sourceLanguage": "en",
      "limit": 50,
      "offset": 0,
      "provider": "Oxford University Press",
      "total": 681
    }
  }

var words = []

wordsJSON.results.forEach(function(word){
    words.push(word.word)
})

exports.words = words