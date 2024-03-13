import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
// import CollectionPage from  "../collection/collection.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

// You receive match, location and history nested in Route object
// const ShopPage = ({ match }) => {
//     // console.log("Shop page render: ", match);
//     return (
//     <div className="shop-page">
//         <Route exact path={`${match.path}`} component={CollectionsOverview}/> 
//         {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> This doesn't work, so added this in App.js */} 
//     </div>
//     );
// };

// can do as above but now converting to class component
class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            // console.log(snapshot);
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            // console.log(collectionsMap);
            updateCollections(collectionsMap);
        });
    };

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview}/> 
                {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);