import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
// import CollectionPage from  "../collection/collection.component";

// You receive match, location and history nested in Route object
const ShopPage = ({ match }) => {
    // console.log("Shop page render: ", match);
    return (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/> 
        {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> This doesn't work, so added this in App.js */} 
    </div>
    );
};

export default ShopPage;