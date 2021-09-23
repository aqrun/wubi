import { useMemo } from 'react';
import {
  PartBlock,
  PartItem,
} from '../types';
import {
    SIGN_COLOR_FOUR,
    BLOCK_COLOR_FOUR,
} from '../constants';

export const useKeysThree = () => {

  const keysFour: PartBlock[] = useMemo(() => {
    const y: PartBlock = {
      id: 41,
      name: 'y',
      cnName: '言',
      signId: '01',
      signColor: SIGN_COLOR_FOUR,
      signBorder: true,
      blockColor: BLOCK_COLOR_FOUR,
      parts: [
        { id: '11', x: 0, y: 0, isSub: true, },
        { id: '03', x: 0, y: 0, isSub: true, },
        { id: '15', x: 0, y: 0, },
        { id: '13', x: 0, y: 0, },
        { id: '16', x: 0, y: 0, },
        { id: '17', x: 0, y: 0, },
      ],
    };

    const u: PartBlock = {
      id: 42,
      name: 'u',
      cnName: '立',
      signId: '01',
      signColor: SIGN_COLOR_FOUR,
      signBorder: true,
      blockColor: BLOCK_COLOR_FOUR,
      parts: [
        { id: '02', x: 0, y: 0, isSub: true, },
        { id: '12', x: 0, y: 0, },
        { id: '03', x: 0, y: 0, isSub: true, },
        { id: '14', x: 0, y: 0, },
	// 少一个 反两点没有
        { id: '20', x: 0, y: 0, },
        { id: '13', x: 0, y: 0, },
        { id: '18', x: 0, y: 0, },
      ],
    };

    const i: PartBlock = {
      id: 43,
      name: 'i',
      cnName: '水',
      signId: '01',
      signColor: SIGN_COLOR_FOUR,
      signBorder: true,
      blockColor: BLOCK_COLOR_FOUR,
      parts: [
        { id: '25', x: 0, y: 0, },
        { id: '11', x: 0, y: 0, isSub: true, },
        { id: '22', x: 0, y: 0, isSub: true, },
        { id: '12', x: 0, y: 0, isSub: true, },
        { id: '16', x: 0, y: 0, isSub: true, },
        { id: '14', x: 0, y: 0, isSub: true, },
        { id: '17', x: 0, y: 0, },
        { id: '02', x: 0, y: 0, isSub: true, },
        { id: '18', x: 0, y: 0, isSub: true, },
        { id: '23', x: 0, y: 0, isSub: true, },
      ],
    };

    const o: PartBlock = {
      id: 44,
      name: 'o',
      cnName: '火',
      signId: '01',
      signColor: SIGN_COLOR_FOUR,
      blockColor: BLOCK_COLOR_FOUR,
      parts: [
        { id: '12', x: 0, y: 0, },
        { id: '11', x: 0, y: 0, isSub: true, },
        // 这少一个
        { id: '17', x: 0, y: 0, isSub: true, },
        { id: '16', x: 0, y: 0, },
        { id: '15', x: 0, y: 0, isSub: true, },
        { id: '14', x: 0, y: 0, },
      ],
    };

    const p: PartBlock = {
      id: 45,
      name: 'p',
      cnName: '之',
      blockColor: BLOCK_COLOR_FOUR,
      parts: [
        { id: '13', x: 0, y: 0, },
        { id: '11', x: 0, y: 0, },
        { id: '14', x: 0, y: 0, },
        { id: '12', x: 0, y: 0, },
        { id: '16', x: 0, y: 0, },
        { id: '15', x: 0, y: 0, },
      ],
    };

    return [y, u, i, o, p];
  }, []);

  return [keysFour];
};
