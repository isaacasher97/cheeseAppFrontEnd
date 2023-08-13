import { Form, Link, useLoaderData } from "react-router-dom"

function Index(props) {
  const cheeses = useLoaderData()

  return (
    <div className="indexContainer">
      <div className="createForm">
      <h2>Create a Cheese</h2>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="Cheese Name" />
        <input type="input" name="image" placeholder="Image URL" />
        <input type="input" name="countryOfOrigin" placeholder="Country Of Origin" />
        <input type="submit" value="Create Cheese" />
      </Form>
      </div>
      <h2>Current Cheese</h2>

     <div className="cheeseCard">

      {cheeses.map(cheese => (
        <div key={cheese._id} className="cheeseContatiner">
          <Link to={`/${cheese._id}`}>
            <h1>{cheese.name}</h1>
          </Link>
          <img src={cheese.image} alt={cheese.name} />
          <h3>{cheese.title}</h3>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Index