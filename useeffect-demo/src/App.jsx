import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'

import Counter from './Counter'
import UserProfile from './UserProfile'
import WindowSize from './WindowSize'
import ThemeToggle from './ThemeToggle'
import PostList from './PostList'

import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import About from './pages/About'
import NotFound from './pages/NotFound'
import PostDetail from './pages/PostDetail'

import Settings from './Settings'
import Modal from './Modal'
import ContactForm from './ContactForm'

import Card from './components/Card'
import Button from './components/Button'
import { Button, Input, Card, Modal, Avatar } from './components/shared'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:postId" element={<PostDetail />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <section id="center">
        <div className="hero">
          <img src={heroImg} width="170" height="179" alt="" />
          <img src={reactLogo} alt="React logo" />
          <img src={viteLogo} alt="Vite logo" />
        </div>

        <h1>Get started</h1>

        <button onClick={() => setCount(c => c + 1)}>
          Count is {count}
        </button>
      </section>

      <h2>useEffect Exercises</h2>

      <Counter />
      <UserProfile userId={1} />
      <WindowSize />
      <ThemeToggle />

      <h2>Custom Hooks</h2>

      <Settings />
      <Modal />
      <ContactForm />

      <h2>Styling Demo</h2>

      <Card title="Hello Card">
      </Card>

      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      
      <Card title="Component Library">
                <Avatar src="https://i.pravatar.cc/100" size={50} />

                <Input label="Name" placeholder="Enter name" />

                <Button variant="primary">Click me</Button>
            </Card>


      <h2>Data Fetching</h2>

      <PostList />
    </>
  )
}

export default App