import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
// import CollectionPage from  "../collection/collection.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

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
    // constructor() {
    //     super();
    //     this.state = {
    //         loading: true
    //     }
    // }; // Use constructor or following
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            // console.log(snapshot);
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            // console.log(collectionsMap);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });
    };

    // render() {
    //     const { match } = this.props;
    //     return (
    //         <div className="shop-page">
    //             <Route exact path={`${match.path}`} component={CollectionsOverview}/> 
    //             {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
    //         </div>
    //     );
    // } // revious render()
    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}/> 
                {/* <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} /> */}
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);