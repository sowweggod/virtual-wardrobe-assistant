import Header from "./components/Header";
import Footer from "./components/Footer"
import './App.css';
import Search from "./components/Search";
import {List} from "./components/List";

function App() {
    return (
        <>
            <Header />
            <Search/>
            <List/>
            <Footer />
        </>
    );
}

export default App;