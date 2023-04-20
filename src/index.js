import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import Clock from './Clock.js'
import Time from './Time.js'
// Tạo component App
function App() {
    return (
        <div className='app'>
            <Clock />
            <Time />
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

