// https://www.codewars.com/kata/two-to-one/train/javascript

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}
