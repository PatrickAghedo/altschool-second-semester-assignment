export function getList() {
  return fetch(
    "https://randomapi.com/api/?key=8UYG-SQRF-BR4T-NPUY&ref=ubryz4ye&results=100&page=3&fmt=pretty&noinfo"
  ).then((data) => data.json());
}
