export const fetchMode = () =>
  fetch('https://demo1030918.mockable.io/').then(response => {
    if (response.ok) {
      return response.json();
    }
  });
