import './index.css'

import Image from 'react-bootstrap/Image';

function FluidExample() {
  return <div className='d-flex flex-row'>
  <Image src="https://i.postimg.cc/hjHML55Y/black-smartphone.png/100px250" fluid />
  <p className='mt-auto mb-auto mr-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br />  
  Quis exercitationem accusantium ullam commodi, ipsum molestiae culpa, <br /> 
  Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> 
  Quis exercitationem accusantium ullam commodi, ipsum molestiae culpa.</p></div>
}

export default FluidExample;