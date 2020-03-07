import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import CollecitonsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container.jsx'
import {fetchCollectionsStart} from '../../redux/shop/shop.actions'


const ShopPage = ({match, fetchCollectionsStart}) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollecitonsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    )
} 

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
export default connect(null, mapDispatchToProps)(ShopPage);