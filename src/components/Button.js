import React from 'react';
import './Button.css';

export default function Button({ children, isInput, onClick }) {

	function isEqualOperator(val) {
		return val === '=';
	}

	function isNum(val) {
		return !isNaN(val) || val === 'C' || val === '.';
	}

	return (
		<>
			{
				isInput ? (<div className='input'>{children}</div>)
					: (<div className={`button-wrapper button ${isEqualOperator(children) ? 'equal-btn' : null} ${isNum(children) ? null : 'operator'}`}
									onClick={() => onClick(children)}>{children}</div>)
			}
		</>
	);
}
