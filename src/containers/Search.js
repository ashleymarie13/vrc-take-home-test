import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	fetchWorlds,
	updateSearchText,
	updateTerm,
	updatePlatform
} from '../actions/actions'
import { PLATFORM, SORT } from '../constants'

class Search extends Component {
	constructor(props) {
		super(props)
	}

	canSearch(search, sort, platform) {
		this.dispatch(fetchWorlds({}))
		if (search && sort) {
			if(!platform) {
				platform = PLATFORM.CROSS_PLATFORM
			}
			console.log('Cannot search yet')
			return true
		}
		console.log('Cannot search yet')
		return false
	}

	render() {
		const { search, sort, platform, onClick, onBlur, onDropdownChange, dispatch } = this.props
		
		return (
			<div>
				<div>
					<input type="text" onBlur={onBlur}/>
					<span>
						<button
							onClick={dispatch(fetchWorlds({}))}
							<span className="fa fa-search"></span>
						</button>
					</span>
				</div>
				<div>
					<select onChange={onDropdownChange}>
						<option value={SORT.POPULARITY}>{SORT.POPULARITY}</option>
						<option value={SORT.HEAT}>{SORT.HEAT}</option>
						<option value={SORT.FAVORITES}>{SORT.FAVORITES}</option>
						<option value={SORT.CREATED}>{SORT.CREATED}</option>
						<option value={SORT.UPDATED}>{SORT.UPDATED}</option>
					</select>
				</div>
				<div>
					
				</div>
			</div>
		)
	}
}
// can add text check here serch term
function canSearch(params) {
	console.log(params)
		if (params.search && params.sort) {
			if(!params.platform) {
				params.platform = PLATFORM.CROSS_PLATFORM
			}
			return true
		}
		console.log('Cannot search yet', params, params.sort)
		return false
	}

const mapStateToProps = (state, ownProps) => {
	const { search, sort, platform } = state.params ||
	{
		search: '',
		sort: '',
		platform: ''
	}
	const { params2 } = ownProps
	return {
		search, sort, platform

	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: (event, others) => {
			console.log('click')
			dispatch(fetchWorlds(ownProps))
		},
		onBlur: event => dispatch(updateSearchText(event.target.value)),
		onDropdownChange: event => dispatch(updateTerm(event.target.value)),
		onToolChange: event => dispatch(updatePlatform(event.target.value)),
		dispatch: func => dispatch(func())



	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search)

