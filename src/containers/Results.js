import React, { Component } from 'react'
import { connect } from 'react-redux'
import WorldResults from './WorldResults'

class Results extends Component {
	//TOD add error handling for undefined
	render() {
		const { isFetching, results } = this.props
		return (
			<div className='Results'>
				{isFetching && <h2> Loading... </h2> }
				{!isFetching && results.length === 0 && <h2> No Results :( </h2> }
				{results && results.length > 0 && (
					<div>
						<WorldResults results = { this.props.results} />
					</div>
				)}
			</div>
		)
	}
}

//add propType restrictions and conditions

// no actions preformed in this class, 
// it only needs to register to state changes
/* State View

state = {
	params: {
		search: "some text",
		sort: POPULARITY,
		platform: CROSS_PLATFORM,
	},
	worldResults: {
		isFetching: boolean,
		results: [],
	}

}
*/
function mapStateToProps(state) {
	const { isFetching, results } = 
		state.worldResults || 
		{ 
			isFetching: true,
			results: []
		}
	return {
		isFetching, results
	}

}
const ResultsConnected = connect(mapStateToProps)(Results)

export default ResultsConnected