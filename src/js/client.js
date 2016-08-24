/*
  Daniel Orozco 13312
  UVG
  Sistemas y Tecnologias Web
  2016
*/

import '../sass/styles.scss';
import expect from "expect";
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux"

// Reducer func
const semaforo = (state = 0, action) => {
	if(action.type === 'CHANGE_COLOR') {
		switch (state) {
			case 0:
				return 2;
			case 1:
				return 0;
			case 2:
				return 1;
			default:
				return state;
		}
	}
	else{
		return state;
	}
}

const Semaforo = ({state}) => (
	<div>
		<div class="traffic-light">						
			<div class={(state === 0 ? "red light": "red light off")}></div>
			<div class={(state === 1 ? "yellow light": "yellow light off")}></div>
			<div class={(state === 2 ? "green light": "green light off")}></div>
		</div>
		<button 
			class="dispatcher"
			onClick={ 
						() => store.dispatch
							  (
								{ type:'CHANGE_COLOR'}
							  )
					}
		>Change</button>
	</div>
);

const store = createStore(semaforo);

// Render
const render = () => {
	ReactDOM.render(
		<Semaforo state={ store.getState() }/>,
		document.getElementById("root")
	);
}
store.subscribe(render);
render();