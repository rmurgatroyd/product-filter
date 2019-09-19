import React from 'react';

const Title = props => {
  return(
    <div className="page-hero">
<h1 className="hero-title">{props.title}</h1>
<h2 className="hero-subtitle">{props.subtitle}</h2>
</div>
  )
}

export default Title
