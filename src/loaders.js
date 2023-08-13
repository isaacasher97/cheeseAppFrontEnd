import {baseUrl} from './base_url';

export const cheesesLoader = async () => {
    // make a call to backend index route
    const response = await fetch(`${baseUrl}/cheese`)
    // convert the response in a js object
    const cheeses = await response.json()
    // return the people
    return cheeses
}

export const cheeseLoader = async ({params}) => {
    // get the id param from the params object
    const id = params.id
    // make a call to backend show route
    const response = await fetch(`${baseUrl}/cheese/${id}`)
    // convert the response into a js object
    const cheese = await response.json()
    // return the person
    return cheese
}