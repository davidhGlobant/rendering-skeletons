import React, { Component } from 'react';
import { connect } from 'react-redux'

import Item from '../Components/Item'
import { fetch } from '../API/photos-api'


class ListSkeleton extends Component {

   photos = () => {
       const photos = this.props.photos.map((photo) => {
            return (
                <div className="d-inline-block" style={{ width: '33%', padding: '5px' }}>
                    <Item photo={photo} />
                </div>
            )
       })

       return photos
   }

   
  componentDidMount() {
    this.props.fetch()    
  }

  render() {
      
      return (
      <div>
          <button type="button" onClick={() => this.props.fetch()} class="btn btn-success">Reload</button>
          <div className="d-flex flex-wrap">
            {this.photos()}
          </div>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
        dispatch({ type: 'CLEAR_PHOTOS' })
        fetch()
            .then((response) => {
                dispatch({ type: 'LOAD_PHOTOS', data: response.data })
            })
            .catch((error) => {
               console.log(error)
            })
    },

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListSkeleton)