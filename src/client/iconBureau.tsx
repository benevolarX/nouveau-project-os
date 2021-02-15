import { h, render, Component } from 'preact';

const IconBureau = (props) => {
  const drag = e => e.dataTransfer.setData("text", e.target.id)
  return <img
    id={props.nom.replace(' ', '_')}
    className="logo-bureau"
    src={props.src}
    alt={`logo ${props.nom}`}
    title={props.nom}
    draggable={true}
    onDragStart={drag}
  />;
}

export default IconBureau
