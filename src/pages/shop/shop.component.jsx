import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from  "../collection/collection.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// You receive match, location and history nested in Route object
// const ShopPage = ({ match }) => {
//     // console.log("Shop page render: ", match);
//     return (
//     <div className="shop-page">
//         <Route exact path={`${match.path}`} component={CollectionsOverview}/> 
//         <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
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

        // All Firebase DBs are nested under the base url: https://firestore.googleapis.com/v1/
        // So our project path becomes: https://firestore.googleapis.com/v1/projects/crown-db-1c71a/databases/(default)/documents

        // Following is the fetch pattern
        // fetch('https://firestore.googleapis.com/v1/projects/crown-db-1c71a/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => console.log(collections));

        // Following is the promise pattern : live data only time when mounted
        collectionRef.get().then(snapshot => {
            // console.log(snapshot);
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            // console.log(collectionsMap);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });

        // Following is the observer pattern - live data every time form snapshot
        // collectionRef.onSnapshot(async snapshot => {
        //     // console.log(snapshot);
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     // console.log(collectionsMap);
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false});
        // });
    };

    // render() {
    //     const { match } = this.props;
    //     return (
    //         <div className="shop-page">
    //             <Route exact path={`${match.path}`} component={CollectionsOverview}/> 
    //             <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    //         </div>
    //     );
    // } // previous render()
    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}/> 
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);