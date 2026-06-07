import { usePlayStore } from "../utils/play"
import Tabs from "@radui/ui/Tabs";

function Queue() {
    const currentTrackData = usePlayStore((state) => state.currentTrackData)
    // const queue = usePlayStore((state) => state.queue)
    const queue = {
        "USAT22301679": {
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
        "USAT22302029": {
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
        }
    }
    console.log(currentTrackData)
    return (
        <div className="flex flex-row align-center items-center bg-gray-200 min-w-full min-h-full">
            <div className="flex flex-1 align-center items-center">
                <img
                    src={"https://resources.tidal.com/images/a745d2cf/958f/4caf/b42c/d09ba140c8f5/640x640.jpg"}
                    alt={currentTrackData?.album?.title}
                    width={400}
                />
            </div>
            <div className="flex flex-1 flex-col min-h-full">
                <Tabs.Root>
                    <Tabs.List>
                        <Tabs.Trigger value="queue">Queue </Tabs.Trigger>
                        <Tabs.Trigger value="lyrics">Lyrics </Tabs.Trigger>
                    </Tabs.List>
                    <div className="h-full">
                        <Tabs.Content value="queue">
                            {Object.keys(queue).length != 0 && (Object.entries(queue).map(([key, value]) => {
                                return (
                                    <div className=" flex flex-row gap-2" key={key}>
                                        <img src={value.artwork.url} alt={value.title} width={60} />
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-lg"> {value.title}</span>
                                            <span className="text-lg text-gray-950">{value.artist.name}</span>
                                        </div>
                                        <div className="flex items-center  align-center text-md">
                                            {value.duration}
                                        </div>
                                    </div>)
                            })
                            )
                            }
                        </Tabs.Content>
                        <Tabs.Content value="lyrics">
                            Lyrics
                        </Tabs.Content>
                    </div>

                </Tabs.Root>



            </div>
        </div>
    )
}

export default Queue