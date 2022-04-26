import React from 'react';

function HamburgerIcon() {
  function FunctionToggle(x) {
    x.classList.toggle('change');
  }
  return (
    <div>
      <div class="container-ham" onclick="FunctionToggle(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
  );
}

export default HamburgerIcon;
