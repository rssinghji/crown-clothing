import React from "react";
import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";

const CollectionPreview = ({title, items}) => {
    const redirectPath = "/shop/"+title.toLowerCase()
    return (
        <div className="collection-preview">
            <Link className="title" to={redirectPath} >{title.toUpperCase()}</Link>
            <div  className="preview">
                { items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
};

export default CollectionPreview;