import { h, render, Component } from 'preact';
import IconBureau from './iconBureau';

export default class Bureau extends Component {

  state = {
    grille: []
  };

  constructor(props, ctx) {
    super(props, ctx)
    let icons = [
      { src: "./assets/imgs/logos/poubelle_verte.png", nom: "poubelle verte" },
      { src: "./assets/imgs/logos/poubelle_jaune.png", nom: "poubelle jaune" },
      { src: "./assets/imgs/logos/poubelle_bleu.png", nom: "poubelle bleu" }
    ]
    let grille = []
    for (let i = 0; i < 19; i++) {
      for (let j = 0; j < 10; j++) {
        const index = j * 19 + i
        let icon = (index < icons.length) ? (<IconBureau src={icons[index].src} nom={icons[index].nom} />) : null
        grille.push(<div className="emplacement-bureau" onDragLeave={this.allowLeave} onDrop={this.drop} onDragOver={this.allowDrop}>
          {icon}
        </div>)
      }
    }
    this.state.grille = grille
  }

  // Called whenever our component is created
  componentDidMount() {
    // update time every second
  }

  // Called just before our component will be destroyed
  componentWillUnmount() {
    // stop when not renderable
  }

  render() {
    return <div className="bureau" id="bureau">
      {this.state.grille}
    </div>;
  }

  allowDrop(e) {
    e.preventDefault();
    e.target.classList.add('can-drop');
    if (e.target.classList.contains('emplacement-bureau')) {
      e.target.classList.add('can-drop');
    } else {
      e.target.classList.add('cant-drop');
    }
  }

  allowLeave(e) {
    e.preventDefault();
    e.target.classList.remove('can-drop');
    e.target.classList.remove('cant-drop');
  }

  drag(e) {
    e.dataTransfer.setData("text", e.target.id)
  }

  drop(e) {
    e.preventDefault();
    e.target.classList.remove('can-drop');
    e.target.classList.remove('cant-drop');
    if (e.target.classList.contains('emplacement-bureau')) {
      const data = e.dataTransfer.getData("text");
      e.target.appendChild(document.getElementById(data));
    }
  }
}
