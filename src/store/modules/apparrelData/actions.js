import { REQUEST_API_DATA, RECEIVE_API_DATA, APPARREL_API_ERROR,
  HIT_WHISLIST, ADD_WHISLIST, REMOVE_WHISLIST, HIT_CART,
ADD_CART, REMOVE_CART, HIT_APPARREL_COUNT, ADD_APPARREL_COUNT, REMOVE_APPARREL_COUNT } from  '../types'

export const storeData = data =>
    ({
      type: RECEIVE_API_DATA,
      payload: data
    });

export const requestData = () =>
    ({
      type: REQUEST_API_DATA
    });

export const storeError = data =>
    ({
      type: APPARREL_API_ERROR,
      payload: data
    });

export const hitWhislist = data =>
    ({
      type: HIT_WHISLIST,
      payload: data
    });

export const addWhislist = data =>
    ({
      type: ADD_WHISLIST,
      payload: data
    });

export const removeWhislist = data =>
    ({
      type: REMOVE_WHISLIST,
      payload: data
    });


export const hitCartAddRemove = data =>
    ({
      type: HIT_CART,
      payload: data
    });

export const addCart = data =>
    ({
      type: ADD_CART,
      payload: data
    });

export const removeCart = data =>
    ({
      type: REMOVE_CART,
      payload: data
    });

export const hitAddRemoveApparelCount = data => 
    ({
      type: HIT_APPARREL_COUNT,
      payload: data
    })

export const addApparelCount = data =>
    ({
      type: ADD_APPARREL_COUNT,
      payload: data
    });

export const removeApparelCount = data =>
    ({
      type: REMOVE_APPARREL_COUNT,
      payload: data
    });
