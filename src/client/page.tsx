import { h, render, Component } from 'preact';
import Bureau from './bureau';
import BarreTache from './barreTache';

export default class Page extends Component {

  // timer = null
  state = { time: Date.now() };

  // Called whenever our component is created
  componentDidMount() {
    // update time every second
    /*
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);*/
  }

  // Called just before our component will be destroyed
  componentWillUnmount() {
    // stop when not renderable
    // clearInterval(this.timer);
  }

  render() {
    return <div class="page" id="page">
      <Bureau />
      <BarreTache />
      {this.addStartMenu()}
    </div>;
  }

  addStartMenu() {
    return <div className="menu-start">
      <div className="menu-start-icons">
        <p className="btn-barre-tache">
          <img src="./assets/imgs/logos/eteindre.png" alt="éteindre le pc" title="Arrêter" />
        </p>
      </div>
      <div className="menu-start-recent-apps">
        {this.addRecentApps()}
      </div>
    </div>
  }

  addRecentApps() {
    let applications = []
    for (let a = 0; a < 26; a++) {
      const lettre = <div>-- {String.fromCharCode(65 + a)} --</div>
      applications.push(lettre)
      const max = Math.max(0, Math.round(Math.random() * 5) - 1)
      for (let i = 0; i < max; i++) {
        const recentapp = <div className="recent-app">bla bla</div>
        applications.push(recentapp)
      }
    }
    return applications
  }

}