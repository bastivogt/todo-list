import React from 'react';
import './Todo.css';


class Todo extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            name: 'Seppel',
            entries: [
                {id: 1, title: 'Einkaufen'},
                {id: 2, title: 'Kacken'},
                {id: 3, title: 'Sonnen'}
            ]
        };

        this.changeName = this.changeName.bind(this);
        this.clickhandlerAddEntry = this.clickhandlerAddEntry.bind(this);
    }

    changeName() {
        this.setState({
            name: 'Sebastian'
        }); 
    }

    addEntry(title) {
        let e = this.state.entries;
        let id = 0;
        for(let entry of e) {
            if(id < entry.id) {
                id = entry.id;
            }
        }
        console.log(e);
        e.push({id: id + 1, title: title});
        console.log(e);
        /*for(let item of e) {
            console.log('id: ' + item.id + ' title: ' + item.title);
        }*/
        this.setState({
            entries: e
        });
    }

    clickhandlerAddEntry() {
        this.addEntry('huhuhu');
    }



    render() {
        for(let i of this.state.entries) {
            console.log(i.title);
        }
        return (
            <div className="Todo">
                <h1>Hallo {this.state.name}</h1>
                <ul>
                    {this.state.entries.map(function(entry) {
                        return (
                            <li key={entry.id}>{entry.title}</li>
                        );
                    })}
                </ul>
                <button onClick={this.clickhandlerAddEntry}>hinzufügen</button>
            </div>
        );
    }
}


export default Todo;