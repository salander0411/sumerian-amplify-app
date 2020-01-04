/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAds = `query GetAds($id: ID!) {
  getAds(id: $id) {
    id
    name
    luckyMoneys {
      items {
        owner
        value
        bonus
        scannedByOwner
        sharedByOwnder
        sharedTimes
      }
      nextToken
    }
  }
}
`;
export const listAdss = `query ListAdss($filter: ModelAdsFilterInput, $limit: Int, $nextToken: String) {
  listAdss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      luckyMoneys {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getBalance = `query GetBalance($value: Float!) {
  getBalance(value: $value) {
    username
    value
  }
}
`;
export const listBalances = `query ListBalances(
  $value: Float
  $filter: ModelBalanceFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listBalances(
    value: $value
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      username
      value
    }
    nextToken
  }
}
`;
export const getLuckyMoney = `query GetLuckyMoney($id: ID!) {
  getLuckyMoney(id: $id) {
    owner
    ads {
      id
      name
      luckyMoneys {
        nextToken
      }
    }
    value
    bonus
    scannedByOwner
    sharedByOwnder
    sharedTimes
    sharedDetails {
      username
      value
    }
  }
}
`;
export const listLuckyMoneys = `query ListLuckyMoneys(
  $filter: ModelLuckyMoneyFilterInput
  $limit: Int
  $nextToken: String
) {
  listLuckyMoneys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      owner
      ads {
        id
        name
      }
      value
      bonus
      scannedByOwner
      sharedByOwnder
      sharedTimes
      sharedDetails {
        username
        value
      }
    }
    nextToken
  }
}
`;
