import {useRouter} from 'next/router'

const PortfolioDetails = () => {
    const {query: {id}} = useRouter()
    // console.log(router)
    console.log(id)
  return (
    <div>
        <h1>Portfolio Details</h1>
    </div>
  )
}

export default PortfolioDetails