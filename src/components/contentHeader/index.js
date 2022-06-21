import "./styles.css";
export const ContentHeader = () => {
  return (
    <div>
      <div className="div1">
        <div className="div-header">
          <img height="50px" src="netflix-logo-5.png" alt="logo" />
          <div className="button-and-lang">
            <div className="lang">Portugues</div>
            <button className="enter-button">Entrar</button>
          </div>
        </div>
        <div className="content">
          <div className="text">
            <h1 className="title">
              Filmes, séries e muito
              <br /> mais. Sem limites.
            </h1>
            <label className="label">
              Assista onde quiser. Cancele quando quiser.
            </label>
            <p className="p">
              Pronto para assistir? Informe seu email para criar ou reiniciar
              sua assinatura.
            </p>
          </div>

          <div className="input-and-button">
            <input placeholder="Email" />
            <button className="button-go">Vamos lá</button>
          </div>
        </div>
      </div>

      <div className="tv">
        <div className="tv-content">
          <h1 className="title2">Aproveite na TV.</h1>
          <label className="label">
            Assista em Smart TVs, PlayStation, Xbox,
            <br /> Chromecast, Apple TV, aparelhos de Blu-ray e<br /> outros
            dispositivos.
          </label>
        </div>
        <img
          width="500px"
          alt="tv"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        />
      </div>

      <div className="tv">
        <div>
          <img
            width="500px"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="eleven"
          />
          
        </div>
        <div>
          <div>
            <h1 className="title2">
              Baixe séries para
              <br /> assistir offline.
            </h1>
            <label className="label">
              Salve seus títulos favoritos e sempre tenha
              <br /> algo para assistir.
            </label>
          </div>
        </div>
      </div>

      <div className="tv">
        <div className="tv-content">
          <h1 className="title2">Assista quando quiser.</h1>
          <label className="label">
            Assista no celular, tablet, Smart TV ou
            <br /> notebook sem pagar a mais por isso.
          </label>
        </div>
        <img
          width="600px"
          alt="tv"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        />
      </div>
      <div className="kids">
        <div className="kids-content">
          <img
            width="530px"
            alt="kids"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png"
          />
          <div>
            <h1 className="title2">
              Crie perfis para
              <br /> crianças.
            </h1>
            <label className="label">
              Deixe as crianças se aventurarem com seus
              <br /> personagens favoritos em um espaço feito só
              <br /> para elas, sem pagar a mais por isso.
            </label>
          </div>
        </div>
      </div>
      <div className="questions">
        <div>
        <h1 className="title2">Perguntas frequentes</h1>
        <div>
            <div className="content-questions">O que é Netflix?<p className="plus">+</p></div>
            <div className="content-questions">Quanto custa a Netflix?<p className="plus">+</p></div>
            <div className="content-questions">Onde posso assistir?<p className="plus">+</p></div>
            <div className="content-questions">Como faço pra cancelar?<p className="plus">+</p></div>
            <div className="content-questions">O que eu posso assistir na Netlfix<p className="plus">+</p></div>
            <div className="content-questions">A Netflix é adequeada para crianças<p className="plus">+</p></div>
        </div>
        <div className="p-content">
        <p className="p">
          Pronto para assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </p>
        <div className="input-and-button">
          <input placeholder="Email" />
          <button className="button-go">Vamos lá</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};
