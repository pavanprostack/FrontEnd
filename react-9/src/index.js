
import reactDOM from 'react-dom'
import App from './app'

// reactDOM.render(1,2)                                //Element means Group of tags.

// reactDOM.render(What you want to write, where you want to write.)


reactDOM.render("goodMorning", document.getElementById('root'))     // String

reactDOM.render(<h1>goodMorning</h1>, document.getElementById('root'))   // Tag.

reactDOM.render(<div><h1>goodMorning</h1><h2>Hello, Buddy</h2></div>, document.getElementById('root'))  //Element.

reactDOM.render(<App /> , document.getElementById('root'))