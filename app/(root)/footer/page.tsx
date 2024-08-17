import Link from 'next/link'
import BtnFooter from './btn_footer/page'
import SectionFooter from './section_footer/page'

function Footer() {
	return (
		<div className='relative h-max'>
			<BtnFooter />
			<SectionFooter />
		</div>
	)
}
export default Footer
