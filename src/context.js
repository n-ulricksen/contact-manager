import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

// reducer is the only way to update app-level state from outside context.js
// we call the reducer in other files using {value.dispatch()}
const reducer = (state, action) => {
  switch (action.type) {
    // contact id to be deleted will be passed in as payload
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        // update contact - find by id
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    // dispatch is a function contained in state that takes in an action,
    // calls setState() using the new state returned from reducer
    dispatch: action => this.setState(state => reducer(state, action))
  };

  // fill state with sample data from placeholder api
  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    this.setState({
      contacts: res.data
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
