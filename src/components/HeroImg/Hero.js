import React from 'react'
import "./styles.css"


const styles = {
    card: {
        background: "red",
        height: "60vh"
    }
}

const Hero = () => {
	return (
		<div className="Container">
			<div className="row">
				<div className='col-xs-12 col-sm-12 col-md-8 col-lg-8'>
					<div className="card" style={styles.card}>
						<div className="card-body d-flex flex-column justify-content-center align-items-center">
							<h5 className="card-title">Uniquely Crafted Web Experiences</h5>
							<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
							<p className="card-text">Meet Brandon Grayson</p>
							<a href="#" className="card-link">
								Card link
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
