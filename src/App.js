import Btns from './Btns';
import Panels from './Panels';
import './scss/style.scss';
import { useRef } from 'react';

function App() {
	const panel = useRef(null);

	return (
		<main>
			<h1>TYPHOGRAPHY <strong>DESIGN</strong></h1>
			<Btns panel={panel} />
			<Panels ref={panel} />
		</main>
	);
}

export default App;