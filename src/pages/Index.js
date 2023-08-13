import { Link, useLoaderData } from "react-router-dom"

function Index(props) {
  const cheeses = useLoaderData()

  return cheeses.map(cheese => (
    <div key={cheese._id} className="person">
      <Link to={`/${cheese._id}`}>
        <h1>{cheese.name}</h1>
      </Link>
      <img src={cheese.image} alt={cheese.name} />
      <h3>{cheese.countryOfOrigin}</h3>
    </div>
  ))
}

export default Index
