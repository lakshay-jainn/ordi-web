//useState tracks things typed in the search bar 
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function SearchBar(){
    //setQuery is a function to update the query 
    const [query, setQuery] = useState(''); //starts with an empty string 
    const [suggestions, setSuggestions] = useState([]); 
    const [showSuggestion, setShowSuggestions] = useState(false); 
    const router = useRouter(); 

    const handleInputChange = (e) =>{
        const value = e.target.value; //gets whatever the user typed. e.target gets the input element and .value gets the use input. 
        setQuery(value); //makes react re-render the component with new value 

        if (value.trim()){
            //importing the searchIndex 
            import ('./data/searchIndex').then(({ searchIndex }) => {
                const filtered = searchIndex.filter( item => //creates a new array with only the items that match the search 
                    item.title.toLowerCase().includes(value.toLowerCase()) ||
                    item.keywords.toLowerCase().includes(value.toLowerCase()) || 
                    item.description.toLowerCase().includes(value.toLowerCase())
                ); 

                setShowSuggestions(filtered); //updates suggestions with filtered result 
                setShowSuggestions(true); //shows the suggestions dropdown
            }); 
        } else{
            setSuggestions([]); 
            setShowSuggestions(false); 
        }
    }; 

    const handleSelectSuggestion = (path) => {
        router.push(path); //navigates the user to the path
        setQuery('');  //clears the query 
        setShowSuggestions(false); //hides dropdown 
    }; 

    const handleSearch = (e) => { //function runs when user presses Enter 
        e.preventDefault(); //prevents default form submission 
        if (query.trim()){ //checks if there's something to search for 
            router.push(`/search?query=${encodeURIComponent(query)}`); //makes text URL safe 
            setShowSuggestions(false); 
        }
    }; 



    return (
        <div className="search-container" >

            <form onSubmit={handleSearch} className="search-bar">

                <input
                    type ="text"
                    value={query}
                    onChange={handleInputChange} //runs the function whenever user types something 
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} //when user loses focus, wait 200 milli seconds then hide suggestions. 
                    // the delays lets user to click on a suggestion. 
                    placeholder='Search'
                    className='search-input'
                />

                <button type='submit' className="search-button"> {/* triggers handleSearch upon submitting */}
                    Search
                </button>
            </form>

            {showSuggestion && suggestions.length>0 && ( //conditional rendering 

                <div className="suggestions-dropdown">
                    {suggestions.map((item, index) => ( //loops through each suggestion creates JSX for it. 

                        <div
                            key={index} //helps to track which items where changed  
                            className="suggestion-Item"
                            onClick={() => handleSelectSuggestion(item.path)}
                        >

                            <strong>{item.title}</strong>

                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}