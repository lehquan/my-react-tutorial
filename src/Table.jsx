import React, {Component} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
	render() {
		
		// const {characterData} = this.props; // ES6
		const characterData = this.props.characterData;
		const removeCharacter = this.props.removeCharacter;
		
		return(
			<table>
				<TableHeader/>
				<TableBody characterData={characterData} removeCharacter={removeCharacter}/>
			</table>
		)
	}
	
}

export default Table;
