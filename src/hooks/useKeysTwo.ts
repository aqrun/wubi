import { useMemo } from 'react';
import {
  PartBlock,
  PartItem,
} from '../types';

export const useKeysTwo = () => {

  const keysTwo: PartBlock[] = useMemo(() => {
    const h: PartBlock = {
      id: 21,
      name: 'h',
      cnName: '目',
      signId: '01',
      signColor: '',
      signBorder: true,
      blockColor: '',
      parts: [
        { id: '11', x: 0, y: 0, },
        { id: '03', x: 0, y: 0, },
        { id: '14', x: 0, y: 0, isSub: true, },
        { id: '15', x: 0, y: 0, isSub: true, },
        { id: '17', x: 0, y: 0, isSub: true, },
        { id: '16', x: 0, y: 0, },
        { id: '19', x: 0, y: 0, },
        { id: '26', x: 0, y: 0, },
      ],
    };

    const j: PartBlock = {
      id: 22,
      name: 'j',
      cnName: '日',
      signId: '01',
      signColor: '',
      signBorder: true,
      blockColor: '',
      parts: [
        { id: '03', x: 0, y: 0, isSub: true, },
        { id: '04', x: 0, y: 0, isSub: true, },
        { id: '02', x: 0, y: 0, },
        { id: '12', x: 0, y: 0, },
        { id: '18', x: 0, y: 0, },
        { id: '16', x: 0, y: 0, },
      ],
    };

    const k: PartBlock = {
      id: 23,
      name: 'k',
      cnName: '口',
      signId: '01',
      signColor: '',
      signBorder: true,
      blockColor: '',
      parts: [
        { id: '02', x: 0, y: 0, },
        { id: '03', x: 0, y: 0, },
      ],
    };

    const l: PartBlock = {
      id: 24,
      name: 'l',
      cnName: '田',
      signId: '01',
      signColor: '',
      blockColor: '',
      parts: [
        { id: '12', x: 0, y: 0, },
        { id: '11', x: 0, y: 0, },
        { id: '20', x: 0, y: 0, isSub: true, },
        { id: '18', x: 0, y: 0, },
        { id: '13', x: 0, y: 0, },
        { id: '14', x: 0, y: 0, isSub: true, },
        { id: '17', x: 0, y: 0, isSub: true, },
        { id: '15', x: 0, y: 0, isSub: true, },
        { id: '16', x: 0, y: 0, isSub: true, },
      ],
    };

    const m: PartBlock = {
      id: 25,
      name: 'm',
      cnName: '山',
      signId: '11',
      signColor: '',
      blockColor: '',
      parts: [
        { id: '12', x: 0, y: 0, },
        { id: '17', x: 0, y: 0, isSub: true, },
        { id: '14', x: 0, y: 0, },
        { id: '21', x: 0, y: 0, isSub: true, },
        { id: '15', x: 0, y: 0, isSub: true, },
        { id: '16', x: 0, y: 0, isSub: true, },
      ],
    };

    return [h, j, k, l, m];
  }, []);

  return [keysTwo];
};
