import { useEffect } from 'react'

const useKeydown = (cb: (e: KeyboardEvent) => void) => {
    useEffect(() => {
        document.addEventListener("keydown", cb);

        return () => {
            document.removeEventListener("keydown", cb);
        };
    }, [])
}

export default useKeydown