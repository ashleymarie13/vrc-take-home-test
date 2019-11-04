import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class WorldResults extends Component {
	render() {
		return(
			<div>
				{this.props.results.map((result, i) =>(
					<div key={i} className="world-info">
						<img className="world-icon"
							src="{result.thumbnailImageUrl}"
							alt="World image thumbnail" />
						<h2>{result.name}</h2>
						<p>{result.tags}</p>
					</div>
					))
				
				}
			</div>)
	}
}

