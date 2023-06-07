import React from 'react';

import Meeting from './meeting';

let payload={
  meetingNumber:87148740240,
  role:0,
  sdkKey:'78Kxp_gxTtiXExoyevr-yg',
  sdkSecret:'xQdmqxgn09Hzo3ASpckCay7w9zuydrBQz547',
  passWord:'Ky5Fuv',
  userName:'Testing',
  userEmail:'',
  leaveUrl:'https://learnzy.onrender.com'
}

export default function Zoom() {
  return (
    <div>
    <Meeting payload={payload}/>
    </div>
  )
}

