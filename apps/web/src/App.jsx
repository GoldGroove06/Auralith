import { useState, useRef, useEffect } from 'react'
import Result from './components/ui/Result.jsx'
import Heading from "@radui/ui/Heading";
import Button from "@radui/ui/Button";
import Progress from "@radui/ui/Progress";
import { useSearchStore } from './components/utils/Search.js';
import Player from './components/ui/player.jsx';
import play from './components/utils/play.js';
import { usePlayStore } from './components/utils/play.js';
import Navbar from "./components/ui/Navbar.jsx"
import Queue from './components/ui/Queue.jsx';
import Dialog from "@radui/ui/Dialog";

function App() {
    const audioRef = useRef(null)
    const [playerTimer, setPlayerTimer] = useState(0)
    const [isQueueOpen, setIsQueueOpen] = useState(false)
    const currentTrackUrl = usePlayStore((state) => state.currentTrackUrl)

    useEffect(() => {
        if (currentTrackUrl) {
            audioRef.current.src = currentTrackUrl;
            audioRef.current.play();
        }
    }, [currentTrackUrl])

    const handleQueueOpen = () => {
        const isOpen = isQueueOpen
        setIsQueueOpen(!isOpen)
    }

    // const resultsFromStore = useSearchStore((state) => state.searchResults)
    const resultsFromStore = [
        {
            "id": "278552533",
            "title": "Private Landing (feat. Justin Bieber & Future)",
            "isrc": "USAT22301692",
            "duration": "PT3M58S",
            "explicit": false,
            "artist": {
                "id": "9279273",
                "name": "Don Toliver"
            },
            "album": {
                "id": "278552493",
                "title": "Love Sick",
                "releaseDate": "2023-02-24"
            },
            "artwork": {
                "id": "2xpmpI1s9DzeLCRve3WBTH",
                "url": "https://resources.tidal.com/images/320114d9/817f/4cbb/a74e/9f7deb67680b/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/320114d9/817f/4cbb/a74e/9f7deb67680b/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/320114d9/817f/4cbb/a74e/9f7deb67680b/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/320114d9/817f/4cbb/a74e/9f7deb67680b/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/320114d9/817f/4cbb/a74e/9f7deb67680b/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/320114d9/817f/4cbb/a74e/9f7deb67680b/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/320114d9/817f/4cbb/a74e/9f7deb67680b/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/320114d9/817f/4cbb/a74e/9f7deb67680b/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "278561734",
            "title": "Private Landing (feat. Justin Bieber & Future)",
            "isrc": "USAT22301679",
            "duration": "PT3M58S",
            "explicit": true,
            "artist": {
                "id": "9279273",
                "name": "Don Toliver"
            },
            "album": {
                "id": "278561725",
                "title": "Love Sick",
                "releaseDate": "2023-02-24"
            },
            "artwork": {
                "id": "2xpmpI1s9DzeLCRvij3qpJ",
                "url": "https://resources.tidal.com/images/a745d2cf/958f/4caf/b42c/d09ba140c8f5/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/a745d2cf/958f/4caf/b42c/d09ba140c8f5/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/a745d2cf/958f/4caf/b42c/d09ba140c8f5/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/a745d2cf/958f/4caf/b42c/d09ba140c8f5/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/a745d2cf/958f/4caf/b42c/d09ba140c8f5/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/a745d2cf/958f/4caf/b42c/d09ba140c8f5/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/a745d2cf/958f/4caf/b42c/d09ba140c8f5/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/a745d2cf/958f/4caf/b42c/d09ba140c8f5/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "279382097",
            "title": "Private Landing (feat. Justin Bieber & Future)",
            "isrc": "USAT22302029",
            "duration": "PT3M58S",
            "explicit": true,
            "artist": {
                "id": "9279273",
                "name": "Don Toliver"
            },
            "album": {
                "id": "279382074",
                "title": "Love Sick (Deluxe)",
                "releaseDate": "2023-02-24"
            },
            "artwork": {
                "id": "2xpmpI1s9DzeLDjEgKGVgC",
                "url": "https://resources.tidal.com/images/2198ad63/08b4/476f/90ce/9e438811ea22/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/2198ad63/08b4/476f/90ce/9e438811ea22/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/2198ad63/08b4/476f/90ce/9e438811ea22/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/2198ad63/08b4/476f/90ce/9e438811ea22/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/2198ad63/08b4/476f/90ce/9e438811ea22/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/2198ad63/08b4/476f/90ce/9e438811ea22/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/2198ad63/08b4/476f/90ce/9e438811ea22/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/2198ad63/08b4/476f/90ce/9e438811ea22/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "279546818",
            "title": "Private Landing (feat. Justin Bieber & Future)",
            "isrc": "USAT22302372",
            "duration": "PT3M58S",
            "explicit": false,
            "artist": {
                "id": "9279273",
                "name": "Don Toliver"
            },
            "album": {
                "id": "279546800",
                "title": "Love Sick (Deluxe)",
                "releaseDate": "2023-02-24"
            },
            "artwork": {
                "id": "2xpmpI1s9DzeLDjr5ymmXI",
                "url": "https://resources.tidal.com/images/acdfb905/474b/423e/b9c7/92a4b10de354/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/acdfb905/474b/423e/b9c7/92a4b10de354/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/acdfb905/474b/423e/b9c7/92a4b10de354/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/acdfb905/474b/423e/b9c7/92a4b10de354/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/acdfb905/474b/423e/b9c7/92a4b10de354/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/acdfb905/474b/423e/b9c7/92a4b10de354/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/acdfb905/474b/423e/b9c7/92a4b10de354/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/acdfb905/474b/423e/b9c7/92a4b10de354/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "282539806",
            "title": "Private Landing (Sped Up) [feat. Justin Bieber & Future]",
            "isrc": "USAT22302803",
            "duration": "PT3M38S",
            "explicit": true,
            "artist": {
                "id": "9279273",
                "name": "Don Toliver"
            },
            "album": {
                "id": "282539763",
                "title": "Private Landing",
                "releaseDate": "2023-03-24"
            },
            "artwork": {
                "id": "2xpmpI1s9DzeQOjshNZxLv",
                "url": "https://resources.tidal.com/images/94e24595/de66/4d8b/912d/dc09c31815dc/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/94e24595/de66/4d8b/912d/dc09c31815dc/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/94e24595/de66/4d8b/912d/dc09c31815dc/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/94e24595/de66/4d8b/912d/dc09c31815dc/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/94e24595/de66/4d8b/912d/dc09c31815dc/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/94e24595/de66/4d8b/912d/dc09c31815dc/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/94e24595/de66/4d8b/912d/dc09c31815dc/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/94e24595/de66/4d8b/912d/dc09c31815dc/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "285647077",
            "title": "Private Landing",
            "isrc": "QZP7F2313273",
            "duration": "PT3M59S",
            "explicit": false,
            "artist": {
                "id": "32487732",
                "name": "Spicy Beats"
            },
            "album": {
                "id": "285647076",
                "title": "Private Landing (Instrumental)",
                "releaseDate": "2023-04-05"
            },
            "artwork": {
                "id": "2xpmpI1s9DzeQSbyhoMjnK",
                "url": "https://resources.tidal.com/images/c38597fa/3986/47ba/b83c/4d22927e3963/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/c38597fa/3986/47ba/b83c/4d22927e3963/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/c38597fa/3986/47ba/b83c/4d22927e3963/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/c38597fa/3986/47ba/b83c/4d22927e3963/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/c38597fa/3986/47ba/b83c/4d22927e3963/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/c38597fa/3986/47ba/b83c/4d22927e3963/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/c38597fa/3986/47ba/b83c/4d22927e3963/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/c38597fa/3986/47ba/b83c/4d22927e3963/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "285912050",
            "title": "Private Landing",
            "isrc": "BXIV82361772",
            "duration": "PT2M45S",
            "explicit": false,
            "artist": {
                "id": "28335263",
                "name": "Type Beat Brasil"
            },
            "album": {
                "id": "285912048",
                "title": "Private Landing",
                "releaseDate": "2023-03-28"
            },
            "artwork": {
                "id": "2xpmpI1s9DzeQScuY9bEr2",
                "url": "https://resources.tidal.com/images/347da518/736a/4a58/ab65/39d6948f97a6/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/347da518/736a/4a58/ab65/39d6948f97a6/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/347da518/736a/4a58/ab65/39d6948f97a6/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/347da518/736a/4a58/ab65/39d6948f97a6/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/347da518/736a/4a58/ab65/39d6948f97a6/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/347da518/736a/4a58/ab65/39d6948f97a6/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/347da518/736a/4a58/ab65/39d6948f97a6/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/347da518/736a/4a58/ab65/39d6948f97a6/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "285972846",
            "title": "Private Landing (feat. Justin Bieber & Future)",
            "isrc": "USAT22301679",
            "duration": "PT3M58S",
            "explicit": true,
            "artist": {
                "id": "9279273",
                "name": "Don Toliver"
            },
            "album": {
                "id": "285972845",
                "title": "Private Landing - Rap Shit",
                "releaseDate": "2023-03-31"
            },
            "artwork": {
                "id": "2xpmpI1s9DzeQScv0HcuPd",
                "url": "https://resources.tidal.com/images/5f400706/bb2b/4ac7/9f48/80d4a484d984/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/5f400706/bb2b/4ac7/9f48/80d4a484d984/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/5f400706/bb2b/4ac7/9f48/80d4a484d984/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/5f400706/bb2b/4ac7/9f48/80d4a484d984/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/5f400706/bb2b/4ac7/9f48/80d4a484d984/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/5f400706/bb2b/4ac7/9f48/80d4a484d984/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/5f400706/bb2b/4ac7/9f48/80d4a484d984/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/5f400706/bb2b/4ac7/9f48/80d4a484d984/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "287608410",
            "title": "Private Landing (Originally Performed by Don Toliver, Justin Bieber & Future) [Karaoke Version]",
            "isrc": "AUXN22310519",
            "duration": "PT3M58S",
            "explicit": false,
            "artist": {
                "id": "15519135",
                "name": "Backing Business"
            },
            "album": {
                "id": "287608352",
                "title": "Pristine Karaoke, Vol. 98",
                "releaseDate": "2023-04-09"
            },
            "artwork": {
                "id": "2xpmpI1s9DzeQVBpS9bJiM",
                "url": "https://resources.tidal.com/images/9ae4eea5/d796/475e/b39b/548a11466e9a/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/9ae4eea5/d796/475e/b39b/548a11466e9a/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/9ae4eea5/d796/475e/b39b/548a11466e9a/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/9ae4eea5/d796/475e/b39b/548a11466e9a/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/9ae4eea5/d796/475e/b39b/548a11466e9a/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/9ae4eea5/d796/475e/b39b/548a11466e9a/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/9ae4eea5/d796/475e/b39b/548a11466e9a/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/9ae4eea5/d796/475e/b39b/548a11466e9a/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "288220521",
            "title": "Private Landing",
            "isrc": "DEZN82312561",
            "duration": "PT2M8S",
            "explicit": false,
            "artist": {
                "id": "38682630",
                "name": "Kyllian Dreher"
            },
            "album": {
                "id": "288220520",
                "title": "Private Landing",
                "releaseDate": "2023-04-12"
            },
            "artwork": {
                "id": "2xpmpI1s9DzeQWSVhG1PA8",
                "url": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "288220522",
            "title": "Private Landing",
            "isrc": "DEZN82312563",
            "duration": "PT1M48S",
            "explicit": false,
            "artist": {
                "id": "38682630",
                "name": "Kyllian Dreher"
            },
            "album": {
                "id": "288220520",
                "title": "Private Landing",
                "releaseDate": "2023-04-12"
            },
            "artwork": {
                "id": "2xpmpI1s9DzeQWSVhG1PA8",
                "url": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b5f5924c/2581/4b6b/8c2e/e6c6f1f6c638/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "324252107",
            "title": "Private Landing (lofi remix)",
            "isrc": "GX8LD2353825",
            "duration": "PT1M44S",
            "explicit": false,
            "artist": {
                "id": "36772830",
                "name": "The Remix Station"
            },
            "album": {
                "id": "324252105",
                "title": "Private Landing (lofi remix)",
                "releaseDate": "2023-03-31"
            },
            "artwork": {
                "id": "2xpmpI1s9DzztBRFjUuFc5",
                "url": "https://resources.tidal.com/images/cdbe9cf4/9888/4716/ba76/a1515528a95a/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/cdbe9cf4/9888/4716/ba76/a1515528a95a/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/cdbe9cf4/9888/4716/ba76/a1515528a95a/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/cdbe9cf4/9888/4716/ba76/a1515528a95a/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/cdbe9cf4/9888/4716/ba76/a1515528a95a/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/cdbe9cf4/9888/4716/ba76/a1515528a95a/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/cdbe9cf4/9888/4716/ba76/a1515528a95a/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/cdbe9cf4/9888/4716/ba76/a1515528a95a/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "326269699",
            "title": "Private Landing",
            "isrc": "UKXN22380099",
            "duration": "PT3M16S",
            "explicit": false,
            "artist": {
                "id": "20379626",
                "name": "Eddie Tilta"
            },
            "album": {
                "id": "326269624",
                "title": "My Best Vol.99",
                "releaseDate": "2023-11-06"
            },
            "artwork": {
                "id": "2xpmpI1s9DzztE16rOHyzc",
                "url": "https://resources.tidal.com/images/f8e08a65/e21b/45a9/aba0/cf753578802a/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/f8e08a65/e21b/45a9/aba0/cf753578802a/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/f8e08a65/e21b/45a9/aba0/cf753578802a/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/f8e08a65/e21b/45a9/aba0/cf753578802a/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/f8e08a65/e21b/45a9/aba0/cf753578802a/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/f8e08a65/e21b/45a9/aba0/cf753578802a/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/f8e08a65/e21b/45a9/aba0/cf753578802a/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/f8e08a65/e21b/45a9/aba0/cf753578802a/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "415070587",
            "title": "Private Landing",
            "isrc": "TCAJH2526008",
            "duration": "PT3M59S",
            "explicit": true,
            "artist": {
                "id": "46599070",
                "name": "buniisings11"
            },
            "album": {
                "id": "415070586",
                "title": "Private Landing",
                "releaseDate": "2024-10-21"
            },
            "artwork": {
                "id": "2xpmpI1s9E0LmYycMLFL1C",
                "url": "https://resources.tidal.com/images/afe32ec0/50cf/4a8c/9360/b3ece3eb8761/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/afe32ec0/50cf/4a8c/9360/b3ece3eb8761/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/afe32ec0/50cf/4a8c/9360/b3ece3eb8761/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/afe32ec0/50cf/4a8c/9360/b3ece3eb8761/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/afe32ec0/50cf/4a8c/9360/b3ece3eb8761/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/afe32ec0/50cf/4a8c/9360/b3ece3eb8761/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/afe32ec0/50cf/4a8c/9360/b3ece3eb8761/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/afe32ec0/50cf/4a8c/9360/b3ece3eb8761/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "432871118",
            "title": "private landing",
            "isrc": "QT4K32509893",
            "duration": "PT1M42S",
            "explicit": false,
            "artist": {
                "id": "56270003",
                "name": "Sour Hip Hop"
            },
            "album": {
                "id": "432871101",
                "title": "who you foolin'",
                "releaseDate": "2025-05-23"
            },
            "artwork": {
                "id": "2xpmpI1s9E0Lx9CNLg0Pw1",
                "url": "https://resources.tidal.com/images/9266fe70/780c/4453/970e/de4f9444f9e4/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/9266fe70/780c/4453/970e/de4f9444f9e4/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/9266fe70/780c/4453/970e/de4f9444f9e4/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/9266fe70/780c/4453/970e/de4f9444f9e4/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/9266fe70/780c/4453/970e/de4f9444f9e4/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/9266fe70/780c/4453/970e/de4f9444f9e4/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/9266fe70/780c/4453/970e/de4f9444f9e4/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/9266fe70/780c/4453/970e/de4f9444f9e4/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "453736420",
            "title": "Private Landing",
            "isrc": "USLD91781597",
            "duration": "PT2M27S",
            "explicit": true,
            "artist": {
                "id": "6940314",
                "name": "RAPPA"
            },
            "album": {
                "id": "453736419",
                "title": "Private Landing",
                "releaseDate": "2025-08-22"
            },
            "artwork": {
                "id": "2xpmpI1s9E0M7oX1uzS465",
                "url": "https://resources.tidal.com/images/80454e77/af5f/41c6/b327/04894ec0eab5/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/80454e77/af5f/41c6/b327/04894ec0eab5/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/80454e77/af5f/41c6/b327/04894ec0eab5/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/80454e77/af5f/41c6/b327/04894ec0eab5/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/80454e77/af5f/41c6/b327/04894ec0eab5/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/80454e77/af5f/41c6/b327/04894ec0eab5/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/80454e77/af5f/41c6/b327/04894ec0eab5/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/80454e77/af5f/41c6/b327/04894ec0eab5/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "456561673",
            "title": "PRIVATE LANDING",
            "isrc": "QZZ7L2584693",
            "duration": "PT1M29S",
            "explicit": false,
            "artist": {
                "id": "46896785",
                "name": "SASV5"
            },
            "album": {
                "id": "456561671",
                "title": "24 gigs",
                "releaseDate": "2025-08-26"
            },
            "artwork": {
                "id": "2xpmpI1s9E0M7sOC0FIPh3",
                "url": "https://resources.tidal.com/images/b4e5a407/d588/4c57/a918/1a2c7d63bcec/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/b4e5a407/d588/4c57/a918/1a2c7d63bcec/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b4e5a407/d588/4c57/a918/1a2c7d63bcec/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b4e5a407/d588/4c57/a918/1a2c7d63bcec/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b4e5a407/d588/4c57/a918/1a2c7d63bcec/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b4e5a407/d588/4c57/a918/1a2c7d63bcec/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b4e5a407/d588/4c57/a918/1a2c7d63bcec/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/b4e5a407/d588/4c57/a918/1a2c7d63bcec/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "457126726",
            "title": "Private Landing",
            "isrc": "TCAJZ2579749",
            "duration": "PT3M6S",
            "explicit": false,
            "artist": {
                "id": "21916082",
                "name": "AL COIN"
            },
            "album": {
                "id": "457126723",
                "title": "Al Coin",
                "releaseDate": "2025-08-29"
            },
            "artwork": {
                "id": "2xpmpI1s9E0M7ternSTtYZ",
                "url": "https://resources.tidal.com/images/cd8d5680/d242/40a0/8e8b/0ca69b77013d/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/cd8d5680/d242/40a0/8e8b/0ca69b77013d/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/cd8d5680/d242/40a0/8e8b/0ca69b77013d/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/cd8d5680/d242/40a0/8e8b/0ca69b77013d/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/cd8d5680/d242/40a0/8e8b/0ca69b77013d/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/cd8d5680/d242/40a0/8e8b/0ca69b77013d/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/cd8d5680/d242/40a0/8e8b/0ca69b77013d/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/cd8d5680/d242/40a0/8e8b/0ca69b77013d/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "478089985",
            "title": "Private Landing",
            "isrc": "CBF8B2556674",
            "duration": "PT3M6S",
            "explicit": true,
            "artist": {
                "id": "58000379",
                "name": "JohnnyRichh"
            },
            "album": {
                "id": "478089982",
                "title": "Private Landing",
                "releaseDate": "2025-12-01"
            },
            "artwork": {
                "id": "2xpmpI1s9E0MIYzX7cIvuE",
                "url": "https://resources.tidal.com/images/854b843e/ab1d/4370/96a8/668b33aded14/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/854b843e/ab1d/4370/96a8/668b33aded14/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/854b843e/ab1d/4370/96a8/668b33aded14/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/854b843e/ab1d/4370/96a8/668b33aded14/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/854b843e/ab1d/4370/96a8/668b33aded14/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/854b843e/ab1d/4370/96a8/668b33aded14/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/854b843e/ab1d/4370/96a8/668b33aded14/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/854b843e/ab1d/4370/96a8/668b33aded14/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        },
        {
            "id": "497321593",
            "title": "Private Landing",
            "isrc": "ESA122617721",
            "duration": "PT9M18S",
            "explicit": false,
            "artist": {
                "id": "19727000",
                "name": "BEW313 PRODUCTION"
            },
            "album": {
                "id": "497321578",
                "title": "Crazy For You",
                "releaseDate": "2026-01-18"
            },
            "artwork": {
                "id": "2xpmpI1s9E0MTBlZuu5dX6",
                "url": "https://resources.tidal.com/images/052a6e43/9d78/4774/80de/41b78bebe912/640x640.jpg",
                "files": [
                    {
                        "href": "https://resources.tidal.com/images/052a6e43/9d78/4774/80de/41b78bebe912/1280x1280.jpg",
                        "meta": {
                            "width": 1280,
                            "height": 1280
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/052a6e43/9d78/4774/80de/41b78bebe912/1080x1080.jpg",
                        "meta": {
                            "width": 1080,
                            "height": 1080
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/052a6e43/9d78/4774/80de/41b78bebe912/750x750.jpg",
                        "meta": {
                            "width": 750,
                            "height": 750
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/052a6e43/9d78/4774/80de/41b78bebe912/640x640.jpg",
                        "meta": {
                            "width": 640,
                            "height": 640
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/052a6e43/9d78/4774/80de/41b78bebe912/320x320.jpg",
                        "meta": {
                            "width": 320,
                            "height": 320
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/052a6e43/9d78/4774/80de/41b78bebe912/160x160.jpg",
                        "meta": {
                            "width": 160,
                            "height": 160
                        }
                    },
                    {
                        "href": "https://resources.tidal.com/images/052a6e43/9d78/4774/80de/41b78bebe912/80x80.jpg",
                        "meta": {
                            "width": 80,
                            "height": 80
                        }
                    }
                ]
            }
        }
    ]

    return (
        <div style={{ position: "relative" }} className="h-screen">
            <Navbar />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "80vh"}} className='relative'>
                {resultsFromStore.length > 0 && <Result results={resultsFromStore} />}
                {isQueueOpen &&
                <div className='absolute min-h-full min-w-full top-0'>
                    <Queue/>
                </div>
                }
                
            </div>
            <audio ref={audioRef} className='hidden'></audio>
            <Player audioRef={audioRef} handleQueueOpen={handleQueueOpen} />
            {/* <Dialog.Root open={isQueueOpen} onOpenChange={handleQueueOpen} onClickOutside={() => {}}>
                <Dialog.Trigger>
                    Open Dialog
                </Dialog.Trigger>
                 <Dialog.Portal> 
                    <Dialog.Overlay />
                    <Dialog.Content>
                        <Dialog.Title>
                            This message will self destruct in 10 seconds
                        </Dialog.Title>
                        <Dialog.Description>
                            Just kidding, it will not self destruct.
                        </Dialog.Description>
                        <Dialog.Close>
                            close
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root> */}

        </div>
    )
}

export default App
