import Footer from '../footer/page'
import Travel from '../travel/page'
import TravelSection from '../travel_section/page'
import TravelPage from '../travelpage/page'

const Stays: React.FC = () => {
	return (
		<div>
			<TravelPage />
			<Travel />
			<TravelSection />
            <Footer/>
		</div>
	)
}

export default Stays
