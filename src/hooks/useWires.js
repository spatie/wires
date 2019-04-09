import { useContext } from 'react';
import WiresContext from '../contexts/WiresContext';

export default function useWires() {
    return useContext(WiresContext);
}
