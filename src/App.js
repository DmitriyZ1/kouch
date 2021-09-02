import  "./app.scss";

function App() {
  return (
    <>
      <header>
        <div className="line">
          <div className="line_contain">
            <div className="line_left">
              <a href="" className="line_phone">
                <img src="./icons/whatsapp-logo.png" alt="whatsapp"/>
                <span>+7(963) <strong>632-35-23</strong></span>
              </a>
              <a href="" className="line_mail">
                <img src="./icons/mail.png" alt="mail"/>
                <span href=""><strong>atmosfera@mail.ru</strong></span>
              </a>
            </div>
            <div className="line_right">
              <a href=""><img src="./icons/telegram.png" alt="telegr"/></a>
              <a href=""><img src="./icons/instagram.png" alt="insta"/></a>
            </div>
          </div>
        </div>
        <div className="top">
          <div className="top_contain">
            <div className="top_left">
              <div className="label">
                <a href="">
                  <img src="./icons/ger.png" alt="lab" className="gerber" />
                  <img src="./icons/label.png" alt="lab" className="label_name"/>
                </a>
              </div>
            </div>
            <div className="top_right"></div>
          </div>
        </div>
      </header>
      <div className="intro">
        <div className="intro_contain">
          <div className="intro_pic_fon">
            <p>ПОМОГАЮ НАЙТИ СЕБЯ И СВОЕ ПРЕДНАЗНАЧЕНИЕ</p>
          </div>
        </div>
      </div>
      <div className="carts">
        <div className="carts_contain">
          <div className="cart_item">
            <p>
              <div className="pic"></div>
              <h3>Привет</h3>
              <span> элементы равномерно распределяются по линии. Первый flex-элемент помещается вровень с краем начальной линии, последний flex-элемент — вровень с краем конечной линии, а остальные flex-элементы на линии распределяются так, чтобы расстояние между любыми двумя соседними элементами было одинаковым. Если оставшееся свободное пространство отрицательно или в строке присутствует только один flex-элемент, это
              </span>     
            </p>
            <span className="link">Подробнее...</span>
          </div>
          <div className="cart_item">
            <p>
              <div className="pic"></div>
              <h3>Привет</h3>
              <span> элементы равномерно распределяются по линии. Первый flex-элемент помещается вровень с краем начальной линии, последний flex-элемент — вровень с краем конечной линии, а остальные flex-элементы на линии распределяются так, чтобы расстояние между любыми двумя соседними элементами было одинаковым. Если оставшееся свободное пространство отрицательно или в строке присутствует только один flex-элемент, это
              </span>     
            </p>
            <span className="link">Подробнее...</span>
          </div>
        </div>
      </div>

      <div className="person">
        <div className="person_contain">
          <div className="person_vizit">
            <div className="person_left">
              <img src="./icons/foto.png" alt="sd" className="foto" />
            </div>
            
            <div className="person_right">
              <h3>Обо мне</h3>
              <span> элементы равномерно распределяются по линии. Первый flex-элемент помещается вровень с краем начальной линии, последний flex-элемент — вровень с краем конечной линии, а остальные flex-элементы на линии распределяются так, чтобы расстояние между любыми двумя соседними элементами было одинаковым. Если оставшееся свободное пространство отрицательно или в строке присутствует только один flex-элемент, это
              </span>
              <div className="doc">
                <img src="./icons/doc.png" alt="2" />
                <img src="./icons/doc.png" alt="2" />
              </div>
            </div>
            
          </div>
        </div>
      </div>

      
    </>
  );
}

export default App;
