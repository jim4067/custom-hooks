import React, { useState } from 'react';

const useCounter = () => {
	const [value, setValue] = useState(0);

	const increase = () => {
		setValue(value + 1);
	}
	const decrease = () => {
		setValue(value - 1);
	}
	const zero = () => {
		setValue(0);
	}
	return {
		value,
		increase,
		decrease,
		zero
	}
}

const useField = (type)  => {
	const [value , setValue] = useState('');

	const onChange = (event) => {
		setValue(event.target.value);
	}

	return{
		onChange,
		type,
		value
	}
}

const App = () => {
	const born = useField('date');
	const height = useField('number');
	const name = useField('text');

	return (
		<div>

			<form>
				name <input {...name} />
				<br />
				height <input {...height} />
				<br />
				born <input {...born} />
				<br />
			</form>

			<div> 
				{name.value} {height.value} {born.value}
			</div>

		</div>
	);
}
export default App;
