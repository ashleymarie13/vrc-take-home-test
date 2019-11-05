import React, { Component } from 'react'
import { connect } from 'react-redux'
import Results from './Results'
import Search from './Search'

class AdvancedSearchApp extends Component {
	render() {
		return (
			<div>
				<Search />
				<Results />
			</div>
		)
	}
}
export default AdvancedSearchApp