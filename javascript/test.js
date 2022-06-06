// let testNumbers = [3, 1, 4];
// console.log(testNumbers);

let available = [
  {
    id: 1440,
    date: "2022-05-18",
    time: "2000-01-01T10:00:00.000-05:00",
    available: true
  },
  {
    id: 1440,
    date: "2022-05-18",
    time: "2000-01-01T10:30:00.000-05:00",
    available: true
  }
]

console.log(available.map(t=> t.time).map(time => time.replace("2000-01-01T", "").replace("12-31T", "").replace("1999-12-31T", "").replace(":00.000-05:00", "")))