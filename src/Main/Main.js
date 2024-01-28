import React from "react";
import "./Main.css";
import arthur from "../assets/playlist/arthur.png"
import gta from "../assets/playlist/gta.jpg"
import madmax from "../assets/playlist/madmax.jpg"
import callofduty from "../assets/playlist/callofduty.jpg"
import helo from "../assets/playlist/helo.jpg"
import mario from "../assets/playlist/mario.webp"
import thekingof from "../assets/playlist/thekingof.webp"
import forza from "../assets/playlist/forza.webp"
import zumbi from "../assets/playlist/zumbi.jpg"
import fifa from "../assets/playlist/fifa.jpg"
import resident from "../assets/playlist/resident.webp"
import kratos from "../assets/playlist/kratos.webp"
import roblox from "../assets/playlist/roblox.jpg"
import assassin from "../assets/playlist/assassin.jpg"
import chaves from "../assets/playlist/chaves.png"


const Main = () => {
  return (
    <div className="main-container">
      {/* INVERTER AS CLASSES */}

      {/* PLAYLIST */}
      <div className="playlist-container">
        <div id="result-playlists">
          <div className="playlist">
            {/* COLOCAR O BOM DIA | BOA TARDE | BOA NOITE */}
            <h1 id="greeting">Boa tarde!</h1>
            <h2 className="session">Navegar por todas as seções</h2>
          </div>

          {/* LIST ITEM 1 */}
          <div className="offer__scroll-container">
            <div className="offer__list">
              <section className="offer__list-item">
                {/* CARD 1 */}
                <a href="w" className="cards">
                  <div className="cards card1">
                    <img src={arthur} alt="" />
                    <span></span>
                  </div>
                </a>

                {/* CARD 2 */}
                <a href="w" className="cards">
                  <div className="cards card2">
                    <img src= {gta} alt="" />
                    <span></span>
                  </div>
                </a>

                {/* CARD 3 */}
                <a href="w" className="cards">
                  <div className="cards card3">
                    <img src= {madmax} alt="" />
                    <span></span>
                  </div>
                </a>

                {/* CARD 4 */}
                <a href="w" className="cards">
                  <div className="cards card4">
                    <img src= {callofduty} alt="" />
                    <span></span>
                  </div>
                </a>

                {/* CARD 5 */}
                <a href="w" className="cards">
                  <div className="cards card5">
                    <img src= {helo} alt="" />
                    <span></span>
                  </div>
                </a>

                {/* CARD 6 */}
                <a href="w" className="cards">
                  <div className="cards card6">
                    <img src= {mario} alt="" />
                    <span></span>
                  </div>
                </a>

                {/* CARD 7 */}
                <a href="w" className="cards">
                  <div className="cards card7">
                    <img src= {thekingof} alt="" />
                    <span></span>
                  </div>
                </a>

                {/* CARD 8 */}
                <a href="w" className="cards">
                  <div className="cards card8">
                    <img src= {forza} alt="" />
                    <span></span>
                  </div>
                </a>

                {/* CARD 9 */}
                <a href="w" className="cards">
                  <div className="cards card9">
                    <img src= {zumbi} alt="" />
                    <span></span>
                  </div>
                </a>

                {/* CARD 10 */}
                <a href="w" className="cards">
                  <div className="cards card10">
                    <img src= {fifa} alt="" />
                    <span></span>
                  </div>
                </a>

                {/* CARD 11 */}
                <a href="w" className="cards">
                  <div className="cards card11">
                    <img src= {resident} alt="" />
                    <span></span>
                  </div>
                </a>

                {/* CARD 12 */}
                <a href="w" className="cards">
                  <div className="cards card12">
                    <img src= {kratos} alt="" />
                    <span></span>
                  </div>
                </a>

                {/* CARD 13 */}
                <a href="w" className="cards">
                  <div className="cards card13">
                    <img src= {roblox} alt="" />
                    <span></span>
                  </div>
                </a>

                {/* CARD 14 */}
                <a href="w" className="cards">
                  <div className="cards card14">
                    <img src= {assassin} alt="" />
                    <span></span>
                  </div>
                </a>

                {/* CARD 15 */}
                <a href="w" className="cards">
                  <div className="cards card15">
                    <img src= {chaves} alt="" />
                    <span></span>
                  </div>
                </a>
              </section>
            </div>
          </div>
        </div>

        <div id="result-artist" className="hidden">
          <div className="grid-container">
            <div className="artist-card" id="">
              <div className="card-img">
                <img id="artist-img" className="artist-img" alt="" />
                <div className="play">
                  <span className="fa fa-solid fa-play"></span>
                </div>
              </div>
              <div className="card-text">
                <a title="Foo Fighters" className="vst" href="w"></a>
                <span className="artist-name" id="artist-name"></span>
                <span className="artist-categorie">Artista</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
