import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello world</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                fugiat, cupiditate iure est nulla quaerat nobis voluptatibus
                blanditiis reprehenderit, corporis suscipit unde minus
                laboriosam inventore sunt voluptate, dolor aliquam perspiciatis?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                fugiat, cupiditate iure est nulla quaerat nobis voluptatibus
                blanditiis reprehenderit, corporis suscipit unde minus
                laboriosam inventore sunt voluptate, dolor aliquam perspiciatis?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                fugiat, cupiditate iure est nulla quaerat nobis voluptatibus
                blanditiis reprehenderit, corporis suscipit unde minus
                laboriosam inventore sunt voluptate, dolor aliquam perspiciatis?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                fugiat, cupiditate iure est nulla quaerat nobis voluptatibus
                blanditiis reprehenderit, corporis suscipit unde minus
                laboriosam inventore sunt voluptate, dolor aliquam perspiciatis?
            </p>
        </React.Fragment>
    )
}
const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
