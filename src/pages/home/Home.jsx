import CurrentLoans from '../../components/currentLoans/CurrentLoans'
import FundStatistics from '../../components/fundStatistics/FundStatistics'

import './home.css'

export default function Home() {
  return (
    <div className='home'>
        <div className='homeWidgets'>
        <FundStatistics />
        <CurrentLoans />
        </div>
    </div>
  )
}
