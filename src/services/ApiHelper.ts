const postRequest = async <T,>(endpoint: string, data: T) => {
  const response = await fetch(endpoint, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();

  if (!response.ok) {
    return json;
  }

  return json;
};

const getRequest = async (endpoint: string) => {
  const response = await fetch(endpoint, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();

  if (!response.ok) {
    return json;
  }

  return json;
};

const deleteRequest = async (endpoint: string) => {
  const response = await fetch(endpoint, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();

  if (!response.ok) {
    return json;
  }

  return json;
};

export { getRequest, postRequest, deleteRequest };
