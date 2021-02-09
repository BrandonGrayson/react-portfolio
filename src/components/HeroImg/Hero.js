import React from 'react';
import './styles.css';

const styles = {
	card: {
		background: 'red',
		height: '60vh'
	}
};

const Hero = () => {
	return (
		<div className="Container">
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<div className="" style={styles.card}>
						{/* <div className="card-body d-flex flex-column justify-content-center align-items-center">
							<h5 className="card-title">Uniquely Crafted Web Experiences</h5>
							<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
							<p className="card-text">Meet Brandon Grayson</p>
						</div> */}

						<div className="" style={{ 'maxWidth': '540px', 'maxHeight': '300px' }}>
							<div className="row g-0">
								<div className="col-md-4 d-flex align-items-center justify-content-center">
									<img
										className="card-img-top rounded-circle"
										src="./img/Brandon_cropped.jpg"
										alt="..."
										style={{ 'maxWidth': '150px'}}
									/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title text-center">Brandon Grayson - Developer</h5>
										<hr />
										<p>
											Thank You for visiting my Prolife. Tech is my passion, the possibilities
											seem as limitless as the world around me. In my free time you can find me
											exploring new projects and ideas. With the events of 2020, going into 2021
											My goal is to find ways to use tech to bring people closer together.
										</p>
										<a href="https://www.linkedin.com/feed/">Linked in</a>
										<a href="https://github.com/BrandonGrayson">Github</a>
									</div>
								</div>
							</div>
						</div>



					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
