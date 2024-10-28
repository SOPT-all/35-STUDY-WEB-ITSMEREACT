function Chicken(){
  return(
    <img src="https://i.namu.wiki/i/ZWr9b65HbWohRIN49P6rFQHkJ-Tw3zKjQryaGEPacYJZWXnbBO_-SLirTd3r9ni52DvGrEvQcpDzMuETP9bVFHrGxVHen1PyW-LYfMKtqkHnIYCDrJLdM5ZrORiV6Sks_Z3y6-hGnmPWIzmdGKpJzg.webp"
    alt="chicken"/>
  );
}

export default function Hungry(){
  return(
    <section>
    <h1>황올 최고</h1>
    <Chicken />
    <Chicken />
    <Chicken />

    </section>
  );
}

/*
import React, { Component } from 'react';

class Chicken extends Component {
  render() {
    return (
      <img
        src="https://i.namu.wiki/i/ZWr9b65HbWohRIN49P6rFQHkJ-Tw3zKjQryaGEPacYJZWXnbBO_-SLirTd3r9ni52DvGrEvQcpDzMuETP9bVFHrGxVHen1PyW-LYfMKtqkHnIYCDrJLdM5ZrORiV6Sks_Z3y6-hGnmPWIzmdGKpJzg.webp"
        alt="chicken"
      />
    );
  }
}

export default Chicken;
*/