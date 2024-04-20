export const getParams = <T>() => {
  const searchParams = new URLSearchParams(window.location.hash.split('?')[1]);

  const params: Record<string, string> = {};

  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  return params as T;
};
