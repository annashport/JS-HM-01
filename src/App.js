import logo from "./logo.svg";
import "./App.css";

const BoxItem = ({ children }) => (
  <>
    <div class="box-item">
      <div class="img-cat">
        <img class="ph-cat" src="cat.jpg" alt="cat" />{" "}
      </div>
      <div class="text-in-box">
        <h3>Lorem ipsum dolor sit, amet.</h3>
        {children}
      </div>
      <div class="button">
        <button>Go</button>
      </div>
    </div>
  </>
);

const Li = ({ children }) => (
  <>
    <li>
      <a class="menu__item" href="#">
        {children}
      </a>
    </li>
  </>
);

const App = () => (
  <>
    <header>
      <img class="logo" src="logo.png" alt="logo" />
      <nav class="main-nav hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul class="menu__box">
          <Li>Головна</Li>
          <Li>Проекти</Li>
          <Li>Команда</Li>
          <Li>Блог</Li>
          <Li>Контакти</Li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quod
          ipsa reprehenderit nam aliquid. Nam dolor cupiditate veritatis eaque
          aut. Porro quia vel sint ex tempore. Voluptates labore provident
          numquam.
        </p>
        <h1>our work</h1>
        <div class="container-item">
          <BoxItem>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo at, est deserunt iste fugit accusamus voluptatum
              voluptates magni, delectus voluptatibus molestiae fugiat, ducimus
              nulla cumque tempora dolore qui nemo numquam.
            </span>
          </BoxItem>
          <BoxItem>
            <span>Lorem ipsum dolor sit amet consectetur</span>
          </BoxItem>
          <BoxItem>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo at, est deserunt iste fugit accusamus voluptatum
              voluptates magni,
            </span>
          </BoxItem>
          <BoxItem>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo at, est deserunt iste fugit accusamus voluptatum
              voluptates magni, delectus voluptatibus molestiae fugiat, ducimus
            </span>
          </BoxItem>
          <BoxItem>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo at
            </span>
          </BoxItem>
          <BoxItem>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo at, est deserunt iste fugit accusamus voluptatum
              voluptates magni, delectus voluptatibus molestiae fugiat, ducimus
              nulla cumque tempora dolore qui nemo numquam.
            </span>
          </BoxItem>
        </div>
      </section>
      <aside>
        <p>Aside 1</p>
      </aside>
      <aside>
        <p>Aside 2</p>
      </aside>
    </main>
    <footer>
      <p>Footer</p>
    </footer>
  </>
);

export default App;
