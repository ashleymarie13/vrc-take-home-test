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
		this.makeFetchCall = this.makeFetchCall.bind(this)
		this.onToolChange = this.onToolChange.bind(this)
	}

	makeFetchCall() {
		console.log("here", this.props.search, this.props.sort, this.props.platform)
		if (this.props.search && this.props.sort) {
			let params = {
				search: this.props.search,
				sort: this.props.sort,
				platform: this.props.platform
			}
			if(!this.props.platform) {
				params.platform = PLATFORM.CROSS_PLATFORM
			}
			this.props.dispatch(fetchWorlds(params))
		}
		return null
	}

	onToolChange(event) {
		const newPlatform = event.target.value
		if(!this.props.platform) { // if it is null
			this.props.dispatch(updatePlatform(newPlatform))
		} else if (this.props.platform == newPlatform) {
			// do nothing
		} else { // if they differ
			this.props.dispatch(updatePlatform(PLATFORM.CROSS_PLATFORM))
		}
	}

	render() {
		const { search, sort, platform, onClick, onBlur, onDropdownChange } = this.props
		
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-8">
						<input type="text" onBlur={onBlur}/>
					</div>
					<div className="col-4">
						<button
							onClick={this.makeFetchCall}>
							<span className="fa fa-search">search</span>
						</button>
					</div>
				</div>
				<div>
					<select onChange={onDropdownChange} defaultValue={SORT.POPULARITY}>
						<option value={SORT.POPULARITY}>{SORT.POPULARITY}</option>
						<option value={SORT.HEAT}>{SORT.HEAT}</option>
						<option value={SORT.FAVORITES}>{SORT.FAVORITES}</option>
						<option value={SORT.CREATED}>{SORT.CREATED}</option>
						<option value={SORT.UPDATED}>{SORT.UPDATED}</option>
					</select>
				</div>
				<div className="row">
					<h3> Tools </h3>
				    <input type="checkbox" 
					    onChange={this.onToolChange}
					    value={PLATFORM.PC}
					    defaultChecked/>
				    <label className="form-check-label">{PLATFORM.PC}</label>
				    <input type="checkbox" 
					    className="form-check-input"
					    onChange={this.onToolChange}
					    value={PLATFORM.QUEST}
					    defaultChecked/>
				    <label className="form-check-label">{PLATFORM.QUEST}</label>
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
		onBlur: event => dispatch(updateSearchText(event.target.value)),
		onDropdownChange: event => dispatch(updateTerm(event.target.value)),
		onToolChange: event => dispatch(updatePlatform(event.target.value)),
		dispatch
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search)

