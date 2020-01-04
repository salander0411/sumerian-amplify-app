/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAds = `mutation CreateAds(
  $input: CreateAdsInput!
  $condition: ModelAdsConditionInput
) {
  createAds(input: $input, condition: $condition) {
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
export const updateAds = `mutation UpdateAds(
  $input: UpdateAdsInput!
  $condition: ModelAdsConditionInput
) {
  updateAds(input: $input, condition: $condition) {
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
export const deleteAds = `mutation DeleteAds(
  $input: DeleteAdsInput!
  $condition: ModelAdsConditionInput
) {
  deleteAds(input: $input, condition: $condition) {
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
export const createBalance = `mutation CreateBalance(
  $input: CreateBalanceInput!
  $condition: ModelBalanceConditionInput
) {
  createBalance(input: $input, condition: $condition) {
    username
    value
  }
}
`;
export const updateBalance = `mutation UpdateBalance(
  $input: UpdateBalanceInput!
  $condition: ModelBalanceConditionInput
) {
  updateBalance(input: $input, condition: $condition) {
    username
    value
  }
}
`;
export const deleteBalance = `mutation DeleteBalance(
  $input: DeleteBalanceInput!
  $condition: ModelBalanceConditionInput
) {
  deleteBalance(input: $input, condition: $condition) {
    username
    value
  }
}
`;
export const createLuckyMoney = `mutation CreateLuckyMoney(
  $input: CreateLuckyMoneyInput!
  $condition: ModelLuckyMoneyConditionInput
) {
  createLuckyMoney(input: $input, condition: $condition) {
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
export const updateLuckyMoney = `mutation UpdateLuckyMoney(
  $input: UpdateLuckyMoneyInput!
  $condition: ModelLuckyMoneyConditionInput
) {
  updateLuckyMoney(input: $input, condition: $condition) {
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
export const deleteLuckyMoney = `mutation DeleteLuckyMoney(
  $input: DeleteLuckyMoneyInput!
  $condition: ModelLuckyMoneyConditionInput
) {
  deleteLuckyMoney(input: $input, condition: $condition) {
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
