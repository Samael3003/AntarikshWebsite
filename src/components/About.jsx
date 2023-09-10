import React from 'react';
import Img1 from '../images/1.jpg';
import Img2 from '../images/2.jpg';
import Img3 from '../images/3.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>Social Media Links :</SectionTitle>
			</div>

			<img
				src={Img1}
				alt="Arfan"
				className="w-240 rounded-lg object-cover"
				style={{ width: '240px' }}
			/>
			<img
				src={Img2}
				alt="Arfan"
				className="w-240 rounded-lg object-cover"
				style={{ width: '240px' }}
			/>
			<img
				src={Img3}
				alt="Arfan"
				className="w-240 rounded-lg object-cover"
				style={{ width: '240px' }}
			/>
		</div>
	);
}

export default About;
