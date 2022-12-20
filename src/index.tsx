import React from 'react'
import ReactDOM from 'react-dom/client'

const title = React.createElement('h1', null, 'Hello React')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{title}</React.StrictMode>)
