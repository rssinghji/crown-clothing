import { takeLatest, call, put, all } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

// All generator functions must have yield in them, they must yield something
export function* fetchCollectionsAsync() {
    yield console.log('Fired');

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        // const collectionsMap = convertCollectionsSnapshotToMap(snapshot); // Can write like this or use method below
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot); // This way its better and it'd manage if takes longer
        // and defers control

        // Use sagas version of dispatch which is put
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    };
};

// Create generator type functions what a saga expects
export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
};

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
};