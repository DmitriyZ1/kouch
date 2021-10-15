import  "./app.scss";


import label from "./icons/label.png";
import gerber from "./icons/ger.png";
import wLogo from "./icons/whatsapp-logo.png";
import mLogo from "./icons/mail.png";
import tLogo from "./icons/telegram.png";
import iLogo from "./icons/instagram.png";
import cartFon from "./icons/1.png";
import docPic from "./icons/doc.png";
import fotoPic from "./icons/foto.png";


function App() {
  return (
    <>
      <header>
        <div className="line">
          <div className="line_contain container">
            <div className="line_left">
              <a href="/" className="line_phone">
                <img src={wLogo} alt="whatsapp"/>
                <span>+7(963) <strong>632-35-23</strong></span>
              </a>
              <a href="/" className="line_mail">
                <img src={mLogo} alt="mail"/>
                <span href=""><strong>atmocfera@mail.ru</strong></span>
              </a>
            </div>
            <div className="line_right">
              <a href="/"><img src={tLogo} alt="telegr"/></a>
              <a href="/"><img src={iLogo} alt="insta"/></a>
            </div>
          </div>
        </div>
        <div className="top">
          <div className="top_contain container">
            <div className="top_left">
              <div className="label">
                <a href="/">
                  <img src={gerber} alt="lab" className="gerber" />
                  <img src={label} alt="lab" className="label_name"/>
                </a>
              </div>
            </div>
            <div className="top_right"></div>
          </div>
        </div>
      </header>
      <div className="intro">
        <div className="intro_contain container">
          <div className="intro_pic_fon">
            <p>ПОМОГАЮ НАЙТИ СЕБЯ И СВОЕ ПРЕДНАЗНАЧЕНИЕ</p>
          </div>
        </div>
      </div>
      
      <div className="carts">
        <div className="carts_contain container">
          
          <div className="cart_item">
            <h3>Привет</h3>
            <p>
              <img src={cartFon} alt="" className="pic"/>
              <span> элементы равномерно распределяются по линии. Первый flex-элемент помещается вровень с краем начальной линии, последний flex-элемент — вровень с краем конечной линии, а остальные flex-элементы на линии распределяются так, чтобы расстояние между любыми двумя соседними элементами было одинаковым. Если оставшееся свободное пространство отрицательно или в строке присутствует только один flex-элемент, это
              </span>     
            </p>
            <span className="link">Подробнее...</span>
          </div>

          <div className="cart_item">
            <h3>Привет</h3>
            <p>
              <img src={cartFon} alt="" className="pic"/>
              <span> элементы равномерно распределяются по линии. Первый flex-элемент помещается вровень с краем начальной линии, последний flex-элемент — вровень с краем конечной линии, а остальные flex-элементы на линии распределяются так, чтобы расстояние между любыми двумя соседними элементами было одинаковым. Если оставшееся свободное пространство отрицательно или в строке присутствует только один flex-элемент, это
              </span>     
            </p>
            <span className="link">Подробнее...</span>
          </div>

          <div className="cart_item">
            <h3>Привет</h3>
            <p>
              <img src={cartFon} alt="" className="pic"/>
              <span> элементы равномерно распределяются по линии. Первый flex-элемент помещается вровень с краем начальной линии, последний flex-элемент — вровень с краем конечной линии, а остальные flex-элементы на линии распределяются так, чтобы расстояние между любыми двумя соседними элементами было одинаковым. Если оставшееся свободное пространство отрицательно или в строке присутствует только один flex-элемент, это
              </span>     
            </p>
            <span className="link">Подробнее...</span>
          </div>
          
         
        </div>
      </div>

      <div className="person">
        <div className="person_contain container">
          <div className="person_vizit">
            <div className="person_left">
              <img src={fotoPic} alt="sd" className="foto" />
            </div>
            
            <div className="person_right">
              <h3>Обо мне</h3>
              <span> элементы равномерно распределяются по линии. Первый flex-элемент помещается вровень с краем начальной линии, последний flex-элемент — вровень с краем конечной линии, а остальные flex-элементы на линии распределяются так, чтобы расстояние между любыми двумя соседними элементами было одинаковым. Если оставшееся свободное пространство отрицательно или в строке присутствует только один flex-элемент, это
              </span>
              <div className="doc">
                <img src={docPic} alt="2" />
                <img src={docPic} alt="2" />
              </div>
            </div>
            
          </div>
        </div>
      </div>

      
    </>
  );
}

export default App;
