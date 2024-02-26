import './App.css';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import { Header } from './components';
import { SearchProvider } from './contexts';

function App() {
	return (
		<>
			<SearchProvider>
				<Routes>
					<Route path="/" element={<Header />}>
						<Route index element={<Pages.HomePage />} />
						<Route path="/search" element={<Pages.SearchPage />} />
						<Route path="/shows">
							<Route index element={<Pages.ShowsPage />} />
							<Route path=":id" element={<Pages.ShowPage />} />
						</Route>
						<Route path="*" element={<Pages.NotFoundPage />} />
					</Route>
				</Routes>
			</SearchProvider>
		</>
	);
}

export default App;
