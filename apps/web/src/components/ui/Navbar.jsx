import Heading from "@radui/ui/Heading";
import search from "../utils/search.js";
import { useState } from "react";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('')
   const onSubmit = async (e) => {
        e.preventDefault()
        const searchResults = await search(searchQuery)
        console.log(searchResults)
    }
    return (
        <nav>
            <Heading as='h1'>Auralith</Heading>
            <form onSubmit={onSubmit}>
             <input type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="...search"/>
            </form>
        </nav>
    )
}

export default Navbar