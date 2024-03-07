import React, { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Welcome: FC = () => (
    <div className="App bg-[#1e1e1e] text-[#cccccc] min-h-screen w-full flex flex-col">
        <div className='whitespace-pre-wrap text-left font-mono ml-5 pt-5' style={{ whiteSpace: 'pre-wrap', textAlign: 'left', fontFamily: '"Courier New", Courier, monospace', marginLeft: '20px' }}>
            <TypeAnimation 
              sequence={[
                "> Hello, my name is Yatin Kukreja", 1000,
                "> Hi, I'm Yatin", 1000, 
                "> Hi, I'm Yatin\n> I'm a CS student at Purdue University", 2000,
                "> Hi, I'm Yatin\n> I'm a CS student at Purdue University\n> I enjoy solving puzzles and building cool products.", 1000, 
                "> Hi, I'm Yatin\n> I'm a CS student at Purdue University\n> I enjoy solving puzzles and building cool products. When I'm not coding I like to play chess, play poker, and swim.\n> ",
              ]}
              wrapper="span"
              speed={40}
              deletionSpeed={70}
            />
          </div>
    </div>
);

export default Welcome;