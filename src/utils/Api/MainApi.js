const options = {
  baseUrl: "https://api.movies360.nomoredomainsicu.ru",
  headers: {
    "Content-type": "application/json",
  },
};

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("произошла ошибка");
  }
}

export const signup = (user) => {
  return fetch(`${options.baseUrl}/signup`, {
    method: "POST",
    headers: options.headers,
    body: JSON.stringify(user),
  }).then(handleResponse);
};

export const signin = (user) => {
  return fetch(`${options.baseUrl}/signin`, {
    method: "POST",
    headers: options.headers,
    body: JSON.stringify(user),
  }).then(handleResponse);
};

export const getProfile = () => {
  const token = localStorage.getItem("token");
  return fetch(`${options.baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};

export const updateProfile = (user) => {
  const token = localStorage.getItem("token");
  return fetch(`${options.baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  }).then(handleResponse);
};

export const saveMovies = (data) => {
  const token = localStorage.getItem("token");
  return fetch(`${options.baseUrl}/movies`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: `https://api.nomoreparties.co/${data.image.url}`,
      trailerLink: data.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    }),
  }).then(handleResponse);
};

export const getSaveMovies = () => {
  const token = localStorage.getItem("token");
  return fetch(`${options.baseUrl}/movies`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 401) {
        localStorage.removeItem("token");
        return [];
      } else {
        return handleResponse(response);
      }
    })
    .catch((error) => {
      console.error("getSaveMovies error", error);
    });
};

export const deleteSaveMovies = (id) => {
  const token = localStorage.getItem("token");
  return fetch(`${options.baseUrl}/movies/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};
