export const FETCH_TESTS = "FETCH_TESTS"

const BASE_URL = 'http://localhost:8080/api/v1'
export const fetchTests = () => {
  const promise = fetch(`${BASE_URL}/tests`)
    .then(response => response.json())

  return {
    type: FETCH_TESTS,
    payload: promise
  }
}
