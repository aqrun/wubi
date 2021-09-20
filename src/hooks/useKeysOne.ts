import { useMemo } from 'react';
import {
  PartBlock,
  PartItem,
} from '../types';

export const useKeysOne = () => {

  const keysOne: PartBlock[] = useMemo(() => {
    const g: PartBlock = {
      id: 11,
      name: 'g',
      cnName: '王',
      signId: '01',
      signColor: '',
      signBorder: true,
      blockColor: '',
      parts: [
        { id: '11', x: 0, y: 0, },
        { id: '02', x: 0, y: 0, },
        { id: '12', x: 0, y: 0, },
        { id: '14', x: 0, y: 0, },
        { id: '13', x: 0, y: 0, },
      ],
    };

    const f: PartBlock = {
      id: 12,
      name: 'f',
      cnName: '土',
      signId: '01',
      signColor: '',
      signBorder: true,
      blockColor: '',
      parts: [
        { id: '11', x: 0, y: 0, },
        { id: '12', x: 0, y: 0, },
        { id: '17', x: 0, y: 0, },
        { id: '13', x: 0, y: 0, },
        { id: '26', x: 0, y: 0, isSub: true, },
        { id: '15', x: 0, y: 0, },
      ],
    };

    const d: PartBlock = {
      id: 13,
      name: 'd',
      cnName: '大',
      signId: '01',
      signColor: '',
      signBorder: true,
      blockColor: '',
      parts: [
        { id: '11', x: 0, y: 0, },
        { id: '12', x: 0, y: 0, },
        { id: '14', x: 0, y: 0, },
        { id: '16', x: 0, y: 0, isSub: true, },
        { id: '17', x: 0, y: 0, isSub: true, },
        { id: '15', x: 0, y: 0, },
      ],
    };

    const s: PartBlock = {
      id: 14,
      name: 's',
      cnName: '木',
      signId: '11',
      signColor: '',
      blockColor: '',
      parts: [
        { id: '12', x: 0, y: 0, },
        { id: '13', x: 0, y: 0, isSub: true, },
      ],
    };

    const a: PartBlock = {
      id: 15,
      name: 'a',
      cnName: '工',
      signId: '17',
      signColor: '',
      blockColor: '',
      parts: [
        { id: '23', x: 0, y: 0, },
        { id: '11', x: 0, y: 0, },
        { id: '19', x: 0, y: 0, isSub: true, },
        { id: '21', x: 0, y: 0, isSub: true, },
        { id: '20', x: 0, y: 0, isSub: true, },
        { id: '18', x: 0, y: 0, },
        { id: '12', x: 0, y: 0, },
        { id: '13', x: 0, y: 0, isSub: true, },
        { id: '15', x: 0, y: 0, isSub: true, },
        { id: '14', x: 0, y: 0, isSub: true, },
        { id: '16', x: 0, y: 0, isSub: true, },
      ],
    };

    return [g, f, d, s, a];
  }, []);

  return [keysOne];
};
