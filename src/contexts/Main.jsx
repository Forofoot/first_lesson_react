import React, { createContext } from "react";
const UserContext = createContext();

const UserProvider = (Child) => (props) => (
    <UserContext.Consumer>
      {(context) => <Child {...props} {...context} />}
      {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
    </UserContext.Consumer>
  );

export default UserProvider