import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProducts = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {
  
    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false);

    console.log(initialValues?.count)

    const increaseBy = ( value: number ) => {

        const minValue = Math.min(initialValues?.maxCount || counter + value, counter + value);
      
        const newValue = Math.max( minValue, 0 )
        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    useEffect(() => {
        if( !isMounted.current ) return;
        setCounter( value );
    }, [ value ])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {
        counter,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset
    }
}
