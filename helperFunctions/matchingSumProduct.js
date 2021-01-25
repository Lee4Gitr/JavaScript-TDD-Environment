var numList = [
  1384,
  1396,
  1072,
  1903,
  1387,
  1763,
  1600,
  1862,
  1992,
  1585,
  1909,
  1352,
  1288,
  1910,
  1070,
  1421,
  1802,
  1669,
  1059,
  1235,
  1854,
  1722,
  1275,
  198,
  1476,
  1588,
  1708,
  1217,
  1596,
  1355,
  1566,
  1973,
  1335,
  1480,
  1115,
  1272,
  1998,
  1821,
  2007,
  1721,
  1885,
  1420,
  1412,
  1487,
  1941,
  1835,
  1558,
  1061,
  1582,
  1940,
  1942,
  1210,
  1350,
  1175,
  1047,
  1456,
  1548,
  1110,
  1510,
  1995,
  1644,
  1968,
  1297,
  1198,
  1471,
  1360,
  1363,
  1528,
  1393,
  1365,
  1837,
  1886,
  2001,
  1161,
  1349,
  1787,
  988,
  1331,
  1960,
  1607,
  1324,
  97,
  1986,
  1955,
  1773,
  1443,
  1852,
  1368,
  1050,
  1378,
  1239,
  1750,
  1868,
  816,
  1965,
  1661,
  1728,
  1981,
  984,
  1037,
  1525,
  1789,
  1318,
  1952,
  1359,
  1358,
  1869,
  1641,
  1240,
  1542,
  1959,
  1022,
  1475,
  1733,
  1081,
  1889,
  1138,
  1757,
  1736,
  1723,
  1543,
  1820,
  1128,
  1039,
  1683,
  1477,
  1375,
  1499,
  676,
  1195,
  1250,
  220,
  1581,
  1328,
  1187,
  1485,
  1216,
  1769,
  1139,
  1064,
  1908,
  1516,
  1490,
  1419,
  1749,
  1347,
  1758,
  1024,
  1053,
  1842,
  1861,
  1403,
  1966,
  1546,
  1134,
  1593,
  1734,
  1916,
  1867,
  1101,
  1126,
  1301,
  1841,
  1515,
  1244,
  1401,
  1637,
  1054,
  1309,
  1933,
  1512,
  1263,
  1815,
  1634,
  1823,
  1295,
  1583,
  1104,
  1765,
  1850,
  1311,
  1692,
  1905,
  1149,
  1780,
  1330,
  1666,
  996,
  1913,
  1140,
  1089,
  1484,
  1356,
  1296,
  1323,
  1160,
  1881,
  1123,
  1166,
  1929
]

let matchSumProduct = (matchingSum = 2020, list = numList) => {
  let sortedList = list.sort((a, b) => a - b);

  let left = 0;
  let right = sortedList.length - 1;
  let sumCandidate = sortedList[left] + sortedList[right]
  while (sumCandidate !== matchingSum) {
    if (sumCandidate < matchingSum) {
      left++;
      sumCandidate = sortedList[left] + sortedList[right]
    }
    if (sumCandidate > matchingSum) {
      right--;
      sumCandidate = sortedList[left] + sortedList[right]
    }
  }
  if (left > right) {
    return -1;
  }
  return sortedList[left] * sortedList[right];
}

let matchSumThreeNumberProduct = (matchingSum = 2020, list = numList) => {
  let sortedList = list.sort((a, b) => a - b);

  let candidateSumTriplets = [];
  for (let i = 0; i < sortedList.length - 2; i++) {
    let left = i + 1
    let right = sortedList.length - 1;

    while (left < right) {
      let candidateSum = sortedList[i] + sortedList[left] + sortedList[right]
      if (candidateSum === matchingSum) {
        candidateSumTriplets.push([sortedList[i], sortedList[left], sortedList[right]])
        left++;
        right--;
      }
      else if (candidateSum < matchingSum) {
        left++;
      }
      else if (candidateSum > matchingSum) {
        right--;
      }
    }
  }
  return candidateSumTriplets.map(triplets => triplets[0] * triplets[1] * triplets[2]);
}

console.log(matchSumThreeNumberProduct())