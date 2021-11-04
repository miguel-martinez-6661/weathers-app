import { useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState();
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function request<T>(query: Function, params: Object): Promise<T> {
    setIsLoading(true);
    try {
      const results = await query(params);
      setData(results?.data || []);
      setIsLoading(false);

      return results;
    } catch (error) {
      setErrors(error);
      setIsLoading(false);
    }
    return null;
  }

  return {
    request,
    isLoading,
    data,
    errors,
  };
};

export default useFetch;
