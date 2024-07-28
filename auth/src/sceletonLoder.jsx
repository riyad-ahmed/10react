import React from 'react'

function sceletonLoder(props) {
    return (
        <div>
          <h1>{props.title || <Skeleton />}</h1>
          {props.body || <Skeleton count={10} />}
        </div>
      );
}

export default sceletonLoder