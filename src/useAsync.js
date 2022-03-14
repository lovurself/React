import { useReducer, useEffect, useCallback } from 'react';

// useReducer의 장점 : 따로 파일로 빼내서 재사용이 가능
// 관리할 action 목록 : loading, success, error
function reducer(state, action) {
    switch(action.type) {
      case 'LOADING':
        return {
          loading: true,
          data: null,
          error: null,
        }
      case 'SUCCESS':
        return {
          loading: false,
          data: action.data,
          error: null,
        }
      case 'ERROR':
        return {
          loading: false,
          data: null,
          error: action.error,
        }
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

  function useAsync(callback, deps = []) {
      const [state, dispatch] = useReducer(reducer, {
          loading: false,
          data: null,
          error: null
      });

      const fetchData = useCallback(async () => {
        dispatch({ type: 'LOADING' });
        try {
            const data = await callback();
            dispatch({ type: 'SUCCESS', data });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
      }, [callback]);

      useEffect(() => {
          fetchData();
      }, deps);

      return [state, fetchData];
  }

  export default useAsync;