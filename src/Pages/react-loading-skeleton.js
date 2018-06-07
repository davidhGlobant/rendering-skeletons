
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import ListSkeleton from '../Containers/skeleton'



class LoadingSkeletonComponent extends Component {
  render() {
    return (
      <div>

        <ListSkeleton/>
        <Link to="/">Back... </Link>
      </div>
    );
  }
}


export default LoadingSkeletonComponent