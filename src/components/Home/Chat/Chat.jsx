// import React from 'react'
// import './Chat.scss'
// import CommentIcon from '@mui/icons-material/Comment';
// import { Button, Dropdown } from 'antd';

// const items = [
//   {
//     key: '1',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//         1st menu item
//       </a>
//     ),
//   },
//   {
//     key: '2',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//         2nd menu item
//       </a>
//     ),
//   },
//   {
//     key: '3',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//         3rd menu item
//       </a>
//     ),
//   },
// ];

// function Chat() {
//   return (
//     <div className='chat'>
//       <Dropdown
//         menu={{
//           items,
//         }}
//         placement="top"
//         arrow
//       >
//         <Button><CommentIcon/></Button>
//       </Dropdown>
//     </div>
//   )
// }

// export default Chat


import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';

const actions = [
  { icon: <QuestionAnswerIcon />, name: 'Запись в тех поддержку' },
  { icon: <FormatAlignLeftIcon />, name: 'Открытая линия' },
];

function Chat() {
  return (
    <div onMouseMove={()=> document.body.style.background = '#000'} className="chat" style={{background: '#2FB644'}}>
      <Box sx={{background: '#2FB644', position: 'fixed', right: 0, bottom: '1%', zIndex: '999999'}} >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon/>}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              sx={{background: '#2FB644', color: 'white'}}
              className='btn'
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}

export default Chat