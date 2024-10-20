import NavBar from "./NavBar";
import SideBar from "./SideBar";
import PlayButton from "./PlayButton";
import Footer from "./Footer";
import SectionHead from "./SectionHead";
import Circle from "./CircleArtistCard";
import ArtistCard from "./ArtistCard";
import Links from "./Links";
import "./index.css";

export default function App() {
  const artistArray = [
    {
      src: "src/assets/Asake.jpeg",
      artistName: "Asake",
    },
    {
      src: "src/assets/Young Jonn.jpeg",
      artistName: "Young Jonn",
    },
    {
      src: "src/assets/Rema.jpeg",
      artistName: "Rema",
    },
    {
      src: "src/assets/Burna Boy.jpeg",
      artistName: "Burna Boy",
    },
    {
      src: "src/assets/Victony.jpeg",
      artistName: "Victony",
    },
  ];

  const albumArray = [
    {
      albumName: "Lungu Boy",
      artist: "Asake",
      src: "src/assets/Lungu Boy.jpeg",
    },
    {
      albumName: "Jiggy Forever",
      artist: "Asake",
      src: "src/assets/Jiggy Forever.jpeg",
    },
    {
      albumName: "HEIS",
      artist: "Asake",
      src: "src/assets/HEIS.jpeg",
    },
    {
      albumName: "adedamola",
      artist: "Asake",
      src: "src/assets/adedamola.jpeg",
    },
    {
      albumName: "MAFFIAN",
      artist: "Ayo Maff",
      src: "src/assets/MAFFIAN.jpeg",
    },
  ];

  const radioArray = [
    {
      artist: "With Burna Boy, Ruger, Victony and more",
      src: "src/assets/Omah Lay Radio.JPEG",
    },
    {
      artist: "With Burna Boy, Victony, Ruger and...",
      src: "src/assets/Burna Boy Radio.JPEG",
    },
    {
      artist: "With Shallipopi, Victony, Olamide and",
      src: "src/assets/Asake Radio.JPEG",
    },
    {
      artist: "With Shallipopi, ODUMODUBLVCK,...",
      src: "src/assets/Young Jonn Radio.JPEG",
    },
    {
      artist: "With Tml VIbez, Ayo Maff, Muyeez and...",
      src: "src/assets/Seyi Vibez Radio.JPEG",
    },
  ];

  const featuredArray = [
    {
      artist: "Your weekly update of the most played trac...",
      src: "src/assets/region_global_default.jpg",
    },
    {
      artist: "Your weekly update of the most played trac...",
      src: "src/assets/region_us_default.jpg",
    },
    {
      artist: "Your daily update of the most played trac...",
      src: "src/assets/region_global_default.jpg",
    },
    {
      artist: "Your daily update of the most played trac...",
      src: "src/assets/region_global_default.jpg",
    },
    {
      artist: "Your daily update of the most viral tracks...",
      src: "src/assets/region_global_default.jpg",
    },
  ];

  const sPlaylistArray = [
    {
      artist: "Gentle Indie songs for a relaxed dinner",
      src: "src/assets/Dinner & Chill.jpeg",
    },
    {
      artist: "The gentle sound of some of the greatest...",
      src: "src/assets/DInner Jazz.jpeg",
    },
    {
      artist: "Gettin' figgy with it, bana-na-na-nanana",
      src: "src/assets/Kitchen Swagger.jpeg",
    },
    {
      artist: "An uplifting yet tasteful playli...",
      src: "src/assets/Dinner with Friends.jpeg",
    },
    {
      artist: "You bring the ingredients, we brin...",
      src: "src/assets/Soul Cuisine.jpeg",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <NavBar />
        <div className="col-4">
          <SideBar />
        </div>
        <div className="col-8 bg-dark-grey rounded-3">
          <div className="d-flex album-container flex-column gap-5 p-2">
            <div>
              <SectionHead title="Popular artists" />
              <div className="d-flex gap-4">
                {artistArray.map((artist) => (
                  <Circle src={artist.src} artistName={artist.artistName} />
                ))}
              </div>
            </div>
            <div>
              <SectionHead title="Popular albums" />
              <div className="d-flex gap-4">
                {albumArray.map((album) => (
                  <ArtistCard
                    src={album.src}
                    albumName={album.albumName}
                    artist={album.artist}
                  />
                ))}
              </div>
            </div>
            <div>
              <SectionHead title="Popular radio" />
              <div className="d-flex gap-4">
                {radioArray.map((radio) => (
                  <ArtistCard src={radio.src} artist={radio.artist} />
                ))}
              </div>
            </div>
            <div>
              <SectionHead title="Featured Charts" />
              <div className="d-flex gap-4">
                {featuredArray.map((feature) => (
                  <ArtistCard src={feature.src} artist={feature.artist} />
                ))}
              </div>
            </div>
            <div>
              <SectionHead title="Spotify Playlists" />
              <div className="d-flex gap-4">
                {sPlaylistArray.map((playlist) => (
                  <ArtistCard src={playlist.src} artist={playlist.artist} />
                ))}
              </div>
            </div>
            <div>
              <Links />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 position-fixed mt-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}
