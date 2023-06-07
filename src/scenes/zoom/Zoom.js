import React from 'react';

import Meeting from './meeting';

let payload={
  meetingNumber:,
  role:0,
  sdkKey:'',
  sdkSecret:'',
  passWord:'',
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

