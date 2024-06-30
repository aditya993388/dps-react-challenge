import dpsLogo from './assets/DPS.svg';
import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';
import UserFilter from './hooks/UserFilter';



// https://dummyjson.com/users

function App() {
	const { users, filteredUsers } = UserFilter();
	return (
		<>
			<div>
				<a href="https://www.digitalproductschool.io/" target="_blank">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<div className="home-card">
				 <Header />
				 <UserList filteredUsers={filteredUsers} />
			</div>
		</>
	);
}

export default App;



