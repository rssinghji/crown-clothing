import React from "react";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import { Route } from "react-router-dom";
import CollectionPageContainer from  "../collection/collection.container";
// import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

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
    // state = {
    //     loading: true
    // };
    // unsubscribeFromSnapshot = null; // All the async handling is moved to redux using redux-thunk

    componentDidMount() { // componentDidMount() fires on initial render call
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();

        // const {updateCollections} = this.props;
        // const collectionRef = firestore.collection('collections');

        // All Firebase DBs are nested under the base url: https://firestore.googleapis.com/v1/
        // So our project path becomes: https://firestore.googleapis.com/v1/projects/crown-db-1c71a/databases/(default)/documents

        // Following is the fetch pattern
        // fetch('https://firestore.googleapis.com/v1/projects/crown-db-1c71a/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => console.log(collections));

        // Following is the promise pattern : live data only time when mounted
        // collectionRef.get().then(snapshot => {
        //     // console.log(snapshot);
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     // console.log(collectionsMap);
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false});
        // }); // All the async handling is moved to redux using redux-thunk

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
        // const { loading } = this.state;
        return (
            <div className="shop-page">
                {/* <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}/> 
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} /> */}
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} /> 
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
// export default connect(null, mapDispatchToProps)(ShopPage);