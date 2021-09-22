import { useMemo } from 'react';
import {
  PartBlock,
  PartItem,
} from '../types';

export const useKeysFive = () => {

  const keysFour: PartBlock[] = useMemo(() => {
    const n: PartBlock = {
      id: 51,
      name: 'n',
      cnName: '已',
      signId: '01',
      signColor: '',
      signBorder: true,
      blockColor: '',
      parts: [
        { id: '12', x: 0, y: 0, isSub: true, },
        { id: '03', x: 0, y: 0, isSub: true, },
        { id: '11', x: 0, y: 0, isSub: true, },
        { id: '15', x: 0, y: 0, },
        { id: '16', x: 0, y: 0, isSub: true, },
        { id: '18', x: 0, y: 0, isSub: true, },
	{ id: '17', x: 0, y: 0, },
	{ id: '19', x: 0, y: 0, },
	{ id: '20', x: 0, y: 0, isSub: true, },
	{ id: '21', x: 0, y: 0, isSub: true, },
	{ id: '22', x: 0, y: 0, },
      ],
    };

    const b: PartBlock = {
      id: 52,
      name: 'b',
      cnName: '子',
      signId: '01',
      signColor: '',
      signBorder: true,
      blockColor: '',
      parts: [
        { id: '11', x: 0, y: 0, isSub: true, },
        { id: '16', x: 0, y: 0, isSub: true, },
        { id: '12', x: 0, y: 0, },
        { id: '13', x: 0, y: 0, isSub: true, },
        { id: '22', x: 0, y: 0, isSub: true, },
        { id: '15', x: 0, y: 0, isSub: true, },
        { id: '21', x: 0, y: 0, isSub: true, },
	{ id: '17', x: 0, y: 0, },
	{ id: '27', x: 0, y: 0, },
	{ id: '18', x: 0, y: 0, },
      ],
    };

    const v: PartBlock = {
      id: 53,
      name: 'v',
      cnName: '女',
      signId: '01',
      signColor: '',
      signBorder: true,
      blockColor: '',
      parts: [
        { id: '11', x: 0, y: 0, },
        { id: '12', x: 0, y: 0, },
        { id: '14', x: 0, y: 0, },
        { id: '16', x: 0, y: 0, isSub: true, },
        { id: '15', x: 0, y: 0, isSub: true, },
      ],
    };

    const c: PartBlock = {
      id: 54,
      name: 'c',
      cnName: '54',
      blockColor: '',
      parts: [
        { id: '19', x: 0, y: 0, },
        { id: '13', x: 0, y: 0, },
        { id: '12', x: 0, y: 0, },
        { id: '11', x: 0, y: 0, isSub: true, },
        { id: '14', x: 0, y: 0, },
        { id: '20', x: 0, y: 0, },
      ],
    };

    const x: PartBlock = {
      id: 55,
      name: 'x',
      cnName: '幺',
      blockColor: '',
      parts: [
        { id: '11', x: 0, y: 0, isSub: true, },
        { id: '12', x: 0, y: 0, isSub: true, },
        { id: '15', x: 0, y: 0, },
        { id: '22', x: 0, y: 0, },
        { id: '14', x: 0, y: 0, },
        { id: '23', x: 0, y: 0, isSub: true, },
	{ id: '18', x: 0, y: 0, isSub: true, },
	{ id: '17', x: 0, y: 0, isSub: true, },
      ],
    };

      return [n, b, v, c, x];
  }, []);

  return [keysFive];
};
