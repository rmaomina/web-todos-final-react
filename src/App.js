
import React, { Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useFetch from './util/useFetch'
import './App.css'

const Header = React.lazy(() => import('./components/Header'))
const Todos = React.lazy(() => import('./components/Todos'))
const Loading = React.lazy(() => import('./components/Loading'))
const Modal = React.lazy(() => import('./components/Modal'))

function App() {
	const [todos, isPending, error] = useFetch('http://localhost:3001/todos/')
  const [isModalShow, setIsModalShow] = useState(false);

  const handleClickModal = () => {
    setIsModalShow(true)
  }

  const closeModal = () => {
    setIsModalShow(false)
  }

	return (
		<BrowserRouter>
    { error && <div>{ error }</div>}
			<Suspense fallback={<Loading />}>
				<div className="App">
					<Header handleClickModal={handleClickModal}/>
					<main>
						<Todos todos={todos} isPending={isPending} />
					</main>
					<div className="shapes" aria-hidden="true">
						<div className="circle1"></div>
						<div className="circle2"></div>
						<div className="rectangle1"></div>
						<div className="rectangle2"></div>
						<div className="triangle1"></div>
						<div className="triangle2"></div>
					</div>
					{isModalShow && <Modal closeModal={closeModal}/>}
				</div>
			</Suspense>
		</BrowserRouter>
	)
}

export default App
