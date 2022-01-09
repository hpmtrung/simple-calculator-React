import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';
import * as math from 'mathjs';

const OPERATOR_ARR = ['+', '-', '*', '/', '.'];

export default function App() {
	const [inputStr, setInputStr] = useState('');

	function inputOperator(val) {
		if (inputStr === '') return;
		// if val is an operator and the last input is the same, then do nothing
		if (
			OPERATOR_ARR.includes(val) &&
			OPERATOR_ARR.includes(inputStr[inputStr.length - 1])
		)
			return;
		setInputStr(inputStr + val);
	}

	function inputNum(val) {
		setInputStr(inputStr + val);
	}

	function evaluate() {
		if (inputStr === '') return;
		if (OPERATOR_ARR.includes(inputStr[inputStr.length - 1])) return;
		setInputStr(math.evaluate(inputStr));
	}

	return (
		<div className='App'>
			<h1>Simple Calculator</h1>
			<div className='calc-wrapper'>
				<Button isInput>{inputStr}</Button>
				<div className='row'>
					<Button onClick={inputNum}>7</Button>
					<Button onClick={inputNum}>8</Button>
					<Button onClick={inputNum}>9</Button>
					<Button onClick={inputOperator}>/</Button>
				</div>
				<div className='row'>
					<Button onClick={inputNum}>4</Button>
					<Button onClick={inputNum}>5</Button>
					<Button onClick={inputNum}>6</Button>
					<Button onClick={inputOperator}>*</Button>
				</div>
				<div className='row'>
					<Button onClick={inputNum}>1</Button>
					<Button onClick={inputNum}>2</Button>
					<Button onClick={inputNum}>3</Button>
					<Button onClick={inputOperator}>-</Button>
				</div>
				<div className='row'>
					<Button onClick={inputOperator}>.</Button>
					<Button onClick={inputNum}>0</Button>
					<Button onClick={() => setInputStr('')}>C</Button>
					<Button onClick={inputOperator}>+</Button>
				</div>
				<div className='row'>
					<Button onClick={evaluate}>=</Button>
				</div>
			</div>
		</div>
	);
}
