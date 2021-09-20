import { useMemo } from 'react';
import {
  PartBlock,
  PartItem,
} from '../types';
import { useKeysOne } from './useKeysOne';
import { useKeysTwo } from './useKeysTwo';

export const useKeysData = () => {
  const [one] = useKeysOne();
  const [two] = useKeysTwo();

  const allKeys: PartBlock[] = useMemo(() => {
    return [
      ...one,
      ...two,
    ];
  }, [one]);

  return [allKeys];
};
