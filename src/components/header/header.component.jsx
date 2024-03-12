import React from "react";
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden  } from "../../redux/cart/cart.selectors";
import { selectCurrentUser  } from "../../redux/user/user.selectors";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";
// import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from "./header.styles";

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
            {
                currentUser ? 
                (<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>) :
                // (<OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>) :
                (<OptionLink to="/signin">SIGN IN</OptionLink>)
            } 
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
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