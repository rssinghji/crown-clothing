import React from "react";
import './header.styles.scss';
import  { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden  } from "../../redux/cart/cart.selectors";
import { selectCurrentUser  } from "../../redux/user/user.selectors";

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser ? 
                (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>) :
                (<Link className="option" to="/signin">SIGNIN</Link>)
            } 
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// });  // way of selecting without structured selector

// Replaced with selectors
// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser,
//     hidden: state.cart.hidden
// });

// Above can also be written as:
// const mapStateToProps = ({user: {currentUser}, cart: { hidden } }) => ({
//     currentUser,
//     hidden
// });


export default connect(mapStateToProps)(Header);