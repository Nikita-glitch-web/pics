import searchImages from "./api";
import SearchBar from "./components/SearchBar";

function App() {
    const handleSubmit = (term) => {
        searchImages(term);
        console.log(term)
    }
    return (
      <div>
        <SearchBar onSubmit={handleSubmit}/>
      </div>
    ); 
};

export default App;