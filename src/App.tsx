import dpsLogo from './assets/DPS.svg';
import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';
import UserFilter from './hooks/UserFilter';
import Filters from './components/Filters';



// https://dummyjson.com/users

function App() {
	const { users, filteredUsers, nameFilter, setNameFilter, cityFilter, setCityFilter, highlightOldest, setHighlightOldest, cities } = UserFilter();
	return (
		<>
			<div>
				<a href="https://www.digitalproductschool.io/" target="_blank">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<div className="home-card">
				 <Header />
				 <Filters
				 nameFilter={nameFilter}
				 cityFilter={cityFilter}
				 highlightOldest={highlightOldest}
				 setNameFilter={setNameFilter}
				 setCityFilter={setCityFilter}
				 setHighlightOldest={setHighlightOldest}
				 cities={cities}
			   />
				 <UserList filteredUsers={filteredUsers} />
			</div>
		</>
	);
}

export default App;



