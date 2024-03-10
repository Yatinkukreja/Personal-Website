import React, { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Welcome: FC = () => (
    <div className="App bg-[#1e1e1e] text-[#cccccc] w-full flex flex-col overflow-auto">
        <div className='whitespace-pre-wrap text-left font-mono ml-5 pt-5' style={{ whiteSpace: 'pre-wrap', textAlign: 'left', fontFamily: '"Courier New", Courier, monospace', marginLeft: '20px' }}>
            <TypeAnimation 
              sequence={[
                "> Hello, my name is Yatin Kukreja", 1000,
                "> Hi, I'm Yatin\n> ", 1000, 
                "> Hi, I'm Yatin\n> I'm a CS student at Purdue University\n> ", 2000,
                "> Hi, I'm Yatin\n> I'm a CS student at Purdue University\n> I enjoy solving puzzles and building cool products.", 1000, 
                "> Hi, I'm Yatin\n> I'm a CS student at Purdue University\n> I enjoy solving puzzles and building cool products. When I'm not coding I like to play chess, listen to music, and swim.\n> ",
                1000, "> Hi, I'm Yatin\n> I'm a CS student at Purdue University\n> I enjoy solving puzzles and building cool products. When I'm not coding I like to play chess, listen to music, and swim.\n> I also love to connect with and learn from people! Feel free to reach out, I'm always happy to have a chat or make new friends!\n> "
              ]}
              wrapper="span"
              speed={40}
              deletionSpeed={70}
            />
          </div>
    </div>
);

export default Welcome;