import { useLoaderData, Form } from "react-router-dom"

function Show(props) {
    const cheese = useLoaderData()
  
    return (
      <div className="cheese">

      <div className="cheeseCardShow">
        <div className="cardContainer">  
        <h1>{cheese.name}</h1>
        <h2>Originally From: {cheese.countryOfOrigin}</h2>
        <img src={cheese.image} alt={cheese.name} />
        </div>
        </div>
      <div className="updateForm">
        <h2>Update {cheese.name}</h2>
      <Form action={`/update/${cheese._id}`} method="post">
        <input type="input" name="name" placeholder="Cheese Name" />
        <input type="input" name="image" placeholder="Image URL" />
        <input type="input" name="countryOfOrigin" placeholder="Country Of origin" />
        <input type="submit" value={`update ${cheese.name}`} />
      </Form>
      </div>
      <Form action={`/delete/${cheese._id}`} method="post">
      <input className="deleteButton" type="submit" value={`delete ${cheese.name}`} />
      </Form>
      </div>
    )
  }
  
  export default Show
