import React from 'react';

var MainLayout = React.createClass({
  render: function() {
    return(
<div>
    <div className="containers">
        <h1> Header </h1>
        {this.props.children}
        <h4> Footer </h4>
    </div>
</div>
    );
  }
});

export default MainLayout;

