/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAds = `subscription OnCreateAds {
  onCreateAds {
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
export const onUpdateAds = `subscription OnUpdateAds {
  onUpdateAds {
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
export const onDeleteAds = `subscription OnDeleteAds {
  onDeleteAds {
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
export const onCreateBalance = `subscription OnCreateBalance {
  onCreateBalance {
    username
    value
  }
}
`;
export const onUpdateBalance = `subscription OnUpdateBalance {
  onUpdateBalance {
    username
    value
  }
}
`;
export const onDeleteBalance = `subscription OnDeleteBalance {
  onDeleteBalance {
    username
    value
  }
}
`;
export const onCreateLuckyMoney = `subscription OnCreateLuckyMoney {
  onCreateLuckyMoney {
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
export const onUpdateLuckyMoney = `subscription OnUpdateLuckyMoney {
  onUpdateLuckyMoney {
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
export const onDeleteLuckyMoney = `subscription OnDeleteLuckyMoney {
  onDeleteLuckyMoney {
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
