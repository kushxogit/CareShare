type APIResponse<T> = {
    data: T;
    error: {
        message: string;
    };
  };