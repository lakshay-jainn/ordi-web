'use client'
//useState tracks things typed in the search bar 
import { useState } from 'react'
import { useRouter } from 'next/navigation'

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

                setSuggestions(filtered); //updates suggestions with filtered result 
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
        <div className="relative w-full max-w-2xl mx-auto" >

            <form onSubmit={handleSearch} 
            className="flex gap-2 bgx-black/30 backdrop-blur-lg border border-white/20 rounded-lg p-2">

                <input
                    type ="text"
                    value={query}
                    onChange={handleInputChange} //runs the function whenever user types something 
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} //when user loses focus, wait 200 milli seconds then hide suggestions. 
                    // the delays lets user to click on a suggestion. 
                    placeholder='Search'
                    className='flex-1 px-4 py-2 bg-transparent text-white placeholder-white/50 focus:outline-none'
                />

                <button type='submit' 
                className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white font-medium transition-all"> {/* triggers handleSearch upon submitting */}
                    Search
                </button>
            </form>

            {showSuggestion && suggestions.length>0 && ( //conditional rendering 

                <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-lg border border-white/20 rounded-lg overflow-hidden max-h-96 overflow-y-auto z-50 shadow-2xl">
                    {suggestions.map((item, index) => ( //loops through each suggestion creates JSX for it. 

                        <div
                            key={index} //helps to track which items where changed  
                            className="p-4 cursor-pointer border-b border-white/10 last:border-b-0 hover:bg-white/10 transition-colors"
                            onClick={() => handleSelectSuggestion(item.path)}
                        >
                            <strong className='text-white text-lg block mb-1'>{item.title}</strong>

                            <p className='text-white/70 text-sm'>{item.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}