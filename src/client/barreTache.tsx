import { h, render, Component } from 'preact';

export default class BarreTache extends Component {

  timer = null
  state = { apps: [], time: new Date() }

  constructor(props, ctx) {
    super(props, ctx)
    this.state.apps = [
      {
        enable: true,
        title: 'Terminal',
        src: './assets/imgs/logos/terminal.png',
        alt: 'logo terminal'
      },
      {
        enable: true,
        title: 'Notes',
        src: './assets/imgs/logos/notes.png',
        alt: 'logo bloc notes'
      },
      {
        enable: false,
        title: 'Gimp',
        src: './assets/imgs/logos/gimp.png',
        alt: 'logo gimp'
      },
      {
        enable: true,
        title: 'Internet',
        src: './assets/imgs/logos/firechrome.png',
        alt: 'logo firechrome'
      }
    ]
  }

  // Called whenever our component is created
  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({ ...this.state, time: new Date() });
    }, 1000);
  }

  // Called just before our component will be destroyed
  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render() {
    return <footer id="barre-tache" className="barre-windows-footer">
      <form className="barre-windows-form">
        <p>
          <img
            src="./assets/imgs/logos/winbuntu.png"
            alt="logo winbuntu"
            className="btn-barre-tache"
            title=" Démarer "
            onClick={this.toggleStartMenu}
          />
        </p>

        <div className="center div-chercher">
          <label htmlFor="label-chercher">
            <input
              type="text"
              className="input-chercher"
              id="chercher"
              name="chercher"
              placeholder=" Tapez ici pour effectuer une recherche "
            />
          </label>
        </div>

        <div className="grid-icon-barre-tache">
          {this.state.apps.map(app => {
            if (app.enable) {
              return <p className="btn-barre-tache">
                <img src={app.src} alt={app.alt} title={app.title} />
              </p>
            } else {
              return null
            }
          })}

          <p className="btn-barre-tache heure">
            {this.state.time.toLocaleTimeString()}
            <br />
            {this.state.time.toLocaleDateString()}
          </p>
        </div>

      </form>
    </footer>
  }

  toggleStartMenu(e) {
    e.preventDefault()
    const val = document.documentElement.style.getPropertyValue('--menu-start-position')
    const nv = (val !== '780px') ? '780px' : '0px'
    document.documentElement.style.setProperty('--menu-start-position', nv)
  }
}
