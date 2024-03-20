import './App.css';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';

// import redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

// import selectors
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

// import pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import ContactPage from './pages/contact/contact.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';


class App extends React.Component { 
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // const { setCurrentUser, collectionsArray } = this.props; // Used to insert collection data in firebase through code
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            });
        });
      }
      setCurrentUser(userAuth);
      // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />  {/*exact without = means true i.e. exact <=> exact={true}*/}
          <Route path='/shop' component={ShopPage} />  
          <Route exact path='/contact' component={ContactPage} /> 
          <Route exact path='/checkout' component={CheckoutPage} /> 
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUpPage />)} />  
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
