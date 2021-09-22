import { useMemo } from 'react';
import {
  PartBlock,
  PartItem,
} from '../types';
import { useKeysOne } from './useKeysOne';
import { useKeysTwo } from './useKeysTwo';
import { useKeysThree } from './useKeysThree';
import { useKeysFour } from './useKeysFour';
import { useKeysFive } from './useKeysFive';

export const useKeysData = () => {
  const [one] = useKeysOne();
  const [two] = useKeysTwo();
  const [three] = useKeysThree();
  const [four] = useKeysFour();
  const [five] = useKeysFive();

  const allKeys: PartBlock[] = useMemo(() => {
    return [
      ...one,
      ...two,
      ...three,
      ...four,
      ...five
    ];
  }, [one]);

  return [allKeys];
};
