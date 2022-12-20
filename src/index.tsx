import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
    return (
        <div>
            <h1>Hello React</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                aut incidunt ipsam eveniet rerum. Earum reiciendis aliquid
                dolorum accusamus porro, illum quaerat reprehenderit rerum
                asperiores. Quos distinctio tempora laudantium dolore?
            </p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
