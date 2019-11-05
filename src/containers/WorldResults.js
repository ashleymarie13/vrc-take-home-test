import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class WorldResults extends Component {
	render() {
		return(
			<div>
				{this.props.results.map((result, i) =>(
					<div key={i} className="world-info">
						<img className="world-icon"
							src="https://pbs.twimg.com/media/Dw--gpgX0AEwoQi.jpg"
							alt="World image thumbnail" 
							width="350" height="200"/>
						<h2>{result.name}</h2>
						<p>{result.tags}</p>
						{result.thumbnailImageUrl}
					</div>
					))
				}
			</div>
		)
	}
}

