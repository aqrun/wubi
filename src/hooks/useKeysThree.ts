import { useMemo } from 'react';
import {
  PartBlock,
  PartItem,
} from '../types';
import {
  SIGN_COLOR_THREE,
  BLOCK_COLOR_THREE,
} from '../constants';

export const useKeysThree = () => {

  const keysThree: PartBlock[] = useMemo(() => {
    const t: PartBlock = {
      id: 31,
      name: 't',
      cnName: '禾',
      signId: '01',
      signColor: SIGN_COLOR_THREE,
      signBorder: true,
      blockColor: BLOCK_COLOR_THREE,
      parts: [
        { id: '13', x: 0, y: 0, },
        { id: '12', x: 0, y: 0, },
        { id: '16', x: 0, y: 0, },
        { id: '15', x: 0, y: 0, isSub: true, },
        { id: '18', x: 0, y: 0, isSub: true, },
        { id: '14', x: 0, y: 0, },
      ],
    };

    const r: PartBlock = {
      id: 32,
      name: 'r',
      cnName: '白',
      signId: '01',
      signColor: SIGN_COLOR_THREE,
      signBorder: true,
      blockColor: BLOCK_COLOR_THREE,
      parts: [
        { id: '02', x: 0, y: 0, },
        { id: '14', x: 0, y: 0, },
        { id: '17', x: 0, y: 0, isSub: true, },
        { id: '26', x: 0, y: 0, },
        { id: '85', x: 0, y: 0, },
        { id: '13', x: 0, y: 0, isSub: true, },
        { id: '12', x: 0, y: 0, isSub: true, },
        { id: '11', x: 0, y: 0, },
      ],
    };

    const e: PartBlock = {
      id: 33,
      name: 'e',
      cnName: '月',
      signId: '01',
      signColor: SIGN_COLOR_THREE,
      signBorder: true,
      blockColor: BLOCK_COLOR_THREE,
      parts: [
        { id: '11', x: 0, y: 0, isSub: true, },
        { id: '12', x: 0, y: 0, isSub: true, },
        { id: '26', x: 0, y: 0, isSub: true, },
        { id: '02', x: 0, y: 0, },
        { id: '17', x: 0, y: 0, },
        { id: '15', x: 0, y: 0, },
        { id: '16', x: 0, y: 0, },
        { id: '18', x: 0, y: 0, },
        { id: '19', x: 0, y: 0, isSub: true, },
        { id: '20', x: 0, y: 0, isSub: true, },
        { id: '31', x: 0, y: 0, isSub: true, },
        { id: '30', x: 0, y: 0, },
      ],
    };

    const w: PartBlock = {
      id: 34,
      name: 'w',
      cnName: '人',
      blockColor: BLOCK_COLOR_THREE,
      parts: [
        { id: '13', x: 0, y: 0, },
        { id: '16', x: 0, y: 0, },
        { id: '17', x: 0, y: 0, isSub: true, },
        { id: '14', x: 0, y: 0, },
        { id: '11', x: 0, y: 0, },
        { id: '15', x: 0, y: 0, },
      ],
    };

    const q: PartBlock = {
      id: 35,
      name: 'q',
      cnName: '金',
      blockColor: BLOCK_COLOR_THREE,
      parts: [
        { id: '11', x: 0, y: 0, isSub: true, },
        { id: '13', x: 0, y: 0, isSub: true, },
        { id: '14', x: 0, y: 0, },
        { id: '18', x: 0, y: 0, },
        { id: '22', x: 0, y: 0, isSub: true, },
        { id: '17', x: 0, y: 0, isSub: true, },
        { id: '28', x: 0, y: 0, isSub: true, },
        { id: '16', x: 0, y: 0, isSub: true, },
        { id: '43', x: 0, y: 0, },
        { id: '19', x: 0, y: 0, },
        { id: '20', x: 0, y: 0, isSub: true, },
        { id: '30', x: 0, y: 0, },
      ],
    };

    return [t, r, e, w, q];
  }, []);

  return [keysThree];
};
