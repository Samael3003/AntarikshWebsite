import React from 'react';
import services from '../data/services';
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';

function Services() {
	return (
		<div className="py-12">
			<SectionTitle>Objective of the CLUB</SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{services.map(service => (
					<ServiceItem
						key={service.title}
						title={service.title}
						icon={service.icon}
						description={service.description}
					/>
				))}
			</div>
			<div className="text-center mt-5">
        			<a
          			href="https://antariksh-gallery.vercel.app/"
          			className="bg-indigo-600 text-white py-6 px-8 rounded-md hover:bg-indigo-700 text-sm"
      			        target="_blank"
          			rel="noreferrer"
        			>
          				VIEW MORE ...
        			</a>
      			</div>
		</div>
	);
}

export default Services;
