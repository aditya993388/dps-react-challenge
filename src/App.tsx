import dpsLogo from './assets/DPS.svg';
import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';


// https://dummyjson.com/users

function App() {
	return (
		<>
			<div>
				<a href="https://www.digitalproductschool.io/" target="_blank">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<div className="home-card">
				 <Header />
				 <UserList />
			</div>
		</>
	);
}

export default App;



